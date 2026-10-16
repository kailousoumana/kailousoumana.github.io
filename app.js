/* ═══════════════════════════════════════════════════════
   SOUMAILOU SOUMANA — app.js
   Animations, interactions, EmailJS contact
   ═══════════════════════════════════════════════════════ */

'use strict';

/* ══ EMAILJS INIT ══ */
(function () {
  if (typeof emailjs !== 'undefined') {
    emailjs.init('uTxm0uxKMlDSPKk3j');
  }
})();

/* ══ DOM READY ══ */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollReveal();
  initCounters();
  initSkillBars();
  initTypewriter();
  initProjectFilter();
  initContactForm();
  initCopyEmail();
  initMobileMenu();
  initActiveNavLinks();
  initParticles();
});

/* ══ TOAST ══ */
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = (type === 'success' ? '✓ ' : '✕ ') + message;
  toast.className = 'toast ' + type;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 5000);
}

/* ══ NAVIGATION ══ */
function initNav() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ══ MOBILE MENU ══ */
function initMobileMenu() {
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobileMenu');
  if (!ham || !mob) return;

  function toggleMenu(open) {
    const isOpen = open !== undefined ? open : !mob.classList.contains('open');
    ham.classList.toggle('open', isOpen);
    mob.classList.toggle('open', isOpen);
    ham.setAttribute('aria-expanded', isOpen.toString());
    mob.setAttribute('aria-hidden', (!isOpen).toString());
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  ham.addEventListener('click', () => toggleMenu());

  document.querySelectorAll('.mob-link, .mob-cta').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!mob.contains(e.target) && !ham.contains(e.target) && mob.classList.contains('open')) {
      toggleMenu(false);
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mob.classList.contains('open')) {
      toggleMenu(false);
      ham.focus();
    }
  });
}

/* ══ ACTIVE NAV LINKS ══ */
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-80px 0px -80px 0px' });

  sections.forEach(section => observer.observe(section));
}

/* ══ SCROLL REVEAL ══ */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ══ ANIMATED COUNTERS ══ */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.floor(eased * target);
    el.textContent = current + suffix;

    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target + suffix;
  }

  requestAnimationFrame(update);
}

/* ══ SKILL BARS ══ */
function initSkillBars() {
  const bars = document.querySelectorAll('.bar-fill[data-w]');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        setTimeout(() => {
          bar.style.transform = `scaleX(${bar.dataset.w})`;
        }, 100);
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
}

/* ══ TYPEWRITER EFFECT ══ */
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const phrases = [
    'Ingénieur Génie Logiciel',
    'Développement d’Applications & APIs',
    'Ingénieur DevOps & CI/CD',
    'Intégration d’Intelligence Artificielle',
    'Architectures Microservices & Cloud'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
      el.textContent = currentPhrase.substring(0, charIndex);
    } else {
      charIndex++;
      el.textContent = currentPhrase.substring(0, charIndex);
    }

    let delay = isDeleting ? 45 : 85;

    if (!isDeleting && charIndex === currentPhrase.length) {
      delay = 2300;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 350;
    }

    setTimeout(type, delay);
  }

  type();
}

/* ══ PROJECT FILTER ══ */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card[data-category]');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        const category = card.dataset.category;
        const show = filter === 'all' || category.includes(filter);

        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

        if (show) {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ══ CONTACT FORM (EmailJS) ══ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Honeypot check for bots
    const gotcha = document.getElementById('_gotcha');
    if (gotcha && gotcha.value) {
      showToast('Message transmis ✓', 'success');
      form.reset();
      return;
    }

    const btn = document.getElementById('submitBtn');
    btn.textContent = 'Envoi en cours...';
    btn.disabled = true;

    const templateParams = {
      from_name:  document.getElementById('from_name').value,
      from_email: document.getElementById('from_email').value,
      subject:    document.getElementById('subject').value,
      message:    document.getElementById('message').value,
    };

    try {
      if (typeof emailjs === 'undefined') throw new Error('EmailJS not loaded');
      await emailjs.send('portfolio_contact', 'template_1safuvi', templateParams);

      showToast('Message envoyé ! Je vous réponds sous 24h.', 'success');
      btn.textContent = 'Message envoyé ✓';
      btn.style.background = 'linear-gradient(135deg, #10b981, #34d399)';
      form.reset();

      setTimeout(() => {
        btn.textContent = 'Transmettre le message →';
        btn.style.background = '';
        btn.disabled = false;
      }, 4000);

    } catch (error) {
      console.error('EmailJS error:', error);
      showToast("Erreur d'envoi. Contactez-moi par email directement.", 'error');
      btn.textContent = 'Réessayer →';
      btn.disabled = false;
    }
  });
}

/* ══ COPY EMAIL HELPER ══ */
function initCopyEmail() {
  const copyBtn = document.getElementById('copyEmailBtn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    const email = 'soumailou.kailou@gmail.com';
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const temp = document.createElement('textarea');
        temp.value = email;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
      }
      showToast('Adresse email copiée dans le presse-papier !', 'success');
      copyBtn.textContent = 'Copié ✓';
      setTimeout(() => {
        copyBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Copier';
      }, 3000);
    } catch (err) {
      showToast('Impossible de copier automatiquement.', 'error');
    }
  });
}

/* ══ SUBTLE PARTICLE BACKGROUND ══ */
function initParticles() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  // Respect users who prefer reduced motion
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animId;
  let isRunning = true;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.5;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.life = 0;
      this.maxLife = Math.random() * 300 + 150;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.life++;
      if (this.life > this.maxLife) this.reset();
    }
    draw() {
      const alpha = Math.sin((this.life / this.maxLife) * Math.PI) * this.opacity;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99, 102, 241, ${alpha})`;
      ctx.fill();
    }
  }

  function init() {
    resize();
    particles = Array.from({ length: 45 }, () => new Particle());
  }

  function animate() {
    if (!isRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    animId = requestAnimationFrame(animate);
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isRunning = false;
      cancelAnimationFrame(animId);
    } else {
      isRunning = true;
      animate();
    }
  });

  const resizeObserver = new ResizeObserver(() => { resize(); });
  resizeObserver.observe(canvas);

  init();
  animate();
}

/* ══ SMOOTH SCROLL FOR ANCHOR LINKS ══ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
