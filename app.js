/**
 * Soumailou Soumana — Ingénieur Génie Logiciel
 * Scripts d'interactions, validation de formulaire et visualiseur de document
 */

'use strict';

// Configuration du service d'envoi EmailJS
(function () {
  if (typeof emailjs !== 'undefined') {
    emailjs.init('uTxm0uxKMlDSPKk3j');
  }
})();

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollReveal();
  initProjectFilter();
  initContactForm();
  initCopyEmail();
  initMobileMenu();
  initActiveNavLinks();
  initCvModal();
});

// Notifications toast
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = (type === 'success' ? '✓ ' : '✕ ') + message;
  toast.className = 'toast ' + type;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 5000);
}

// Barre de navigation
function initNav() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// Menu mobile
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

  // Fermeture au clic extérieur
  document.addEventListener('click', (e) => {
    if (!mob.contains(e.target) && !ham.contains(e.target) && mob.classList.contains('open')) {
      toggleMenu(false);
    }
  });

  // Fermeture avec la touche Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mob.classList.contains('open')) {
      toggleMenu(false);
      ham.focus();
    }
  });
}

// Détection de la section active dans le menu
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

// Révélation progressive des blocs au scroll
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

/* --- Filtre des réalisations --- */
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

// Formulaire de contact (validation stricte et envoi EmailJS)
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('from_name');
  const emailInput = document.getElementById('from_email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const btn = document.getElementById('submitBtn');

  const fields = [nameInput, emailInput, subjectInput, messageInput].filter(Boolean);

  // Effacement dynamique de l'état d'erreur dès la saisie
  fields.forEach(field => {
    field.addEventListener('input', () => {
      field.classList.remove('input-error');
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Filtre anti-spam honeypot
    const gotcha = document.getElementById('_gotcha');
    if (gotcha && gotcha.value.trim() !== '') {
      showToast('Message transmis ✓', 'success');
      form.reset();
      return;
    }

    // Validation des données saisies
    const errors = [];
    fields.forEach(f => f.classList.remove('input-error'));

    const nameVal = nameInput ? nameInput.value.trim() : '';
    const emailVal = emailInput ? emailInput.value.trim() : '';
    const subjVal = subjectInput ? subjectInput.value.trim() : '';
    const msgVal = messageInput ? messageInput.value.trim() : '';

    if (!nameVal || nameVal.length < 2) {
      errors.push({ field: nameInput, message: 'Veuillez renseigner votre nom complet ou organisation.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailVal) {
      errors.push({ field: emailInput, message: 'Veuillez renseigner votre adresse email.' });
    } else if (!emailRegex.test(emailVal)) {
      errors.push({ field: emailInput, message: 'Veuillez saisir une adresse email valide (ex: contact@domaine.com).' });
    }

    if (!subjVal || subjVal.length < 3) {
      errors.push({ field: subjectInput, message: "Veuillez préciser l'objet de votre prise de contact." });
    }

    if (!msgVal) {
      errors.push({ field: messageInput, message: 'Veuillez rédiger votre message.' });
    } else if (msgVal.length < 10) {
      errors.push({ field: messageInput, message: 'Votre message est trop court (10 caractères minimum).' });
    }

    // Blocage si erreurs détectées
    if (errors.length > 0) {
      errors.forEach(err => {
        if (err.field) err.field.classList.add('input-error');
      });
      if (errors[0].field) {
        errors[0].field.focus();
      }
      showToast(errors[0].message, 'error');
      return;
    }

    // Traitement de l'envoi
    btn.textContent = 'Envoi en cours...';
    btn.disabled = true;

    const templateParams = {
      from_name:  nameVal,
      from_email: emailVal,
      subject:    subjVal,
      message:    msgVal,
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
      showToast("Service automatisé indisponible. Redirection vers votre messagerie...", 'error');
      
      const subject = encodeURIComponent(`[Contact Portfolio] ${templateParams.subject || 'Prise de contact'}`);
      const body = encodeURIComponent(
        `Bonjour Soumailou,\n\n${templateParams.message}\n\n---\nExpéditeur : ${templateParams.from_name}\nEmail : ${templateParams.from_email}`
      );
      const mailtoUrl = `mailto:soumailou.kailou@gmail.com?subject=${subject}&body=${body}`;
      
      setTimeout(() => {
        window.location.href = mailtoUrl;
        btn.textContent = 'Ouvrir messagerie ✉️';
        btn.disabled = false;
      }, 1000);
    }
  });
}

// Copie rapide de l'adresse email
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

/* --- Défilement fluide pour ancres --- */
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

// Visualiseur de CV intégré à la page
function initCvModal() {
  const modal = document.getElementById('cvModal');
  const iframe = document.getElementById('cvModalIframe');
  const closeBtn = document.getElementById('closeCvModal');
  if (!modal) return;

  function openCvModal() {
    if (iframe && (!iframe.src || iframe.src === window.location.href || iframe.src.endsWith('index.html'))) {
      const dataSrc = iframe.getAttribute('data-src');
      if (dataSrc) iframe.src = dataSrc;
    }
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    setTimeout(() => {
      document.body.style.overflow = 'hidden';
    }, 10);
    if (closeBtn) closeBtn.focus();
  }

  function closeCvModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Intercept all triggers (Navbar, Mobile Menu, Hero, Contact CTA, Contact Socials)
  document.querySelectorAll('[data-cv-modal="true"], .open-cv-modal').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openCvModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeCvModal);
  }

  // Close when clicking the backdrop outside the container
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeCvModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeCvModal();
    }
  });
}

