// Toutes les données du portfolio sont ici : modifiez ce fichier, pas les composants.

export const site = {
  url: 'https://kailousoumana.github.io/',
  name: 'Soumana Kailou Soumailou',
  initials: 'SK',
  role: 'Ingénieur Logiciel & DevOps',
  tagline: 'Ingénieur Logiciel & DevOps — Backend, Fintech & Solutions IA',
  location: 'Niamey, Niger',
  employer: 'Dev4Smart',
  email: 'soumailou.kailou@gmail.com',
  phone: '+227 89 27 07 83',
  phoneHref: 'tel:+22789270783',
  whatsapp: 'https://wa.me/22789270783',
  linkedin: 'https://www.linkedin.com/in/soumana-kailou-soumailou/',
  github: 'https://github.com/kailousoumana',
  cv: '/CV_SOUMAILOU_SOUMANA.pdf',
  cvDownloadName: 'CV_Soumana_Kailou_Soumailou.pdf',
  description:
    "Ingénieur en génie logiciel à Niamey : backend (Spring Boot, NestJS, FastAPI), API, CI/CD GitLab, Kubernetes, Flutter et intégration d'IA. Projets, expérience et CV.",
  ogImage: '/profil.png',
};

export const nav = [
  { href: '#projets', label: 'Projets' },
  { href: '#experience', label: 'Expérience' },
  { href: '#competences', label: 'Compétences' },
  { href: '#formation', label: 'Formation' },
  { href: '#contact', label: 'Contact' },
];

export const heroIntro =
  "Ingénieur en génie logiciel (<strong>Master, Bac+5</strong>), j'ai plus de deux ans d'expérience dans le développement d'applications pour la fintech et les télécoms. Je conçois et déploie des architectures backend (<strong>Spring Boot, NestJS, FastAPI</strong>), des applications web et mobiles (<strong>Angular 18, Flutter</strong>), des pipelines <strong>GitLab CI/CD &amp; Kubernetes</strong> ainsi que des briques d'IA (OCR, reconnaissance faciale) en production.";

export const heroMetrics = [
  { value: '13 microservices', label: 'Architecture Mobile Money' },
  { value: '+200 000', label: 'Recharges sur SmartPay NE' },
  { value: '7 plateformes', label: 'Déployées en production' },
];

export type Project = {
  category: string;
  status: string;
  statusTone: 'ok' | 'warn';
  title: string;
  context: string;
  role: string;
  description: string;
  bullets?: string[];
  stats: { value: string; label: string }[];
  tech: string[];
  link?: { href: string; label: string };
};

export const projects: Project[] = [
  {
    category: 'Mobile Money & Microservices',
    status: '2026 – En cours',
    statusTone: 'warn',
    title: 'Protype de plateforme de monnaie électronique et de services financiers digitaux',
    context: 'Opérateur de télécommunications (nom non divulgué pour raison de confidentialité)',
    role: 'Ingénieur Backend & DevOps',
    description:
      'Plateforme de mobile money et de services financiers digitaux organisée en 13 microservices.',
    bullets: [
      'Cœur financier en <strong>Spring Boot (Java 21)</strong>, orchestration en <strong>NestJS</strong> et inférence IA pour la vérification d\'identité en <strong>FastAPI</strong>.',
      'Événements distribués avec <strong>Kafka</strong> (patron Outbox), authentification <strong>Keycloak</strong> (OpenID Connect, JWT) et gestion des secrets avec <strong>HashiCorp Vault</strong>.',
      'Pipeline <strong>GitLab CI/CD</strong> en six étapes produisant des images Docker immuables et manifestes <strong>Kubernetes (Kustomize)</strong> pour les environnements local et de test.',
    ],
    stats: [
      { value: '13', label: 'Microservices' },
      { value: '6 étapes', label: 'Pipeline CI/CD' },
    ],
    tech: ['Spring Boot (Java 21)', 'NestJS', 'FastAPI', 'Apache Kafka', 'PostgreSQL', 'Keycloak', 'HashiCorp Vault', 'Kubernetes (Kustomize)', 'GitLab CI/CD', 'Docker'],
  },
  {
    category: 'Fintech & Biométrie KYC',
    status: 'Depuis janv. 2025 · En production',
    statusTone: 'ok',
    title: 'SmartPay NE',
    context: 'Dev4Smart',
    role: 'Ingénieur Full-Stack, Mobile & DevOps',
    description:
      "Plateforme de paiement électronique et de vérification d'identité (KYC) pour le Niger et l'UEMOA : recharge, cash-in et cash-out, encaissement, cagnotte, e-commerce et restauration.",
    bullets: [
      'Développement du backend (<strong>NestJS, Spring Boot</strong>) et intégration des passerelles Mobile Money et cartes bancaires.',
      'Portail web, console d\'administration en <strong>Angular 18</strong> et application mobile en <strong>Flutter</strong>.',
      'Module KYC conçu en tenant compte des exigences de la BCEAO : OCR (<strong>PaddleOCR, Tesseract, AWS Textract</strong>), comparaison faciale (<strong>InsightFace</strong>) et détection de vivacité.',
      'Déploiements par releases atomiques avec <strong>PM2</strong> et <strong>Nginx</strong>, avec retour arrière automatique.',
    ],
    stats: [
      { value: '+200 000', label: 'Recharges traitées' },
      { value: '+100M FCFA', label: 'Volume transité' },
    ],
    tech: ['NestJS', 'Spring Boot', 'Angular 18', 'Flutter', 'FastAPI', 'PostgreSQL', 'Redis', 'GitLab CI/CD', 'Docker', 'PM2', 'Nginx'],
    link: { href: 'https://smartpay.ne', label: 'smartpay.ne' },
  },
  {
    category: 'Secteur pastoral · Web & Mobile',
    status: '2025 – 2026',
    statusTone: 'ok',
    title: 'Plateformes numériques pour le secteur pastoral',
    context: 'ENABEL (projet Reel Mahita)',
    role: 'Ingénieur Services Digitaux & Déploiement Technique',
    description:
      'Deux plateformes web et mobile réalisées pour les lauréats du hackathon pastoral 2024 : développement des API sécurisées, mise en production sous Linux et Docker, formation et accompagnement des bénéficiaires.',
    stats: [
      { value: '2 plateformes', label: 'Web & Mobile' },
      { value: 'ENABEL', label: 'Projet Reel Mahita' },
    ],
    tech: ['API REST', 'Docker', 'Linux'],
  },
];

export type OtherProject = {
  domain: string;
  title: string;
  description: string;
  tech: string[];
  links: { href: string; label: string }[];
};

export const otherProjects: OtherProject[] = [
  {
    domain: 'Filière laitière',
    title: 'Proxilait (plateforme Amansi)',
    description:
      'Digitalisation de la chaîne de valeur laitière au Niger, de la collecte à la distribution : suivi, traçabilité et gestion des acteurs.',
    tech: ['Spring Boot', 'NestJS'],
    links: [{ href: 'https://www.amansi.app', label: 'amansi.app' }],
  },
  {
    domain: 'E-learning',
    title: 'Dairy EduTech',
    description:
      "Plateforme de formation en ligne pour l'élevage et la filière laitière : cours, quiz, suivi des apprenants et certification.",
    tech: ['NestJS'],
    links: [{ href: 'https://www.dairyedutech.com', label: 'dairyedutech.com' }],
  },
  {
    domain: 'Enseignement supérieur',
    title: 'CVthèque & Presses — Université Abdou Moumouni',
    description:
      'Valorisation des enseignants-chercheurs (publications, projets, parcours) et publication scientifique numérique (soumission, révision par les pairs, archivage).',
    tech: ['Symfony', 'Twig'],
    links: [
      { href: 'https://www.cvtheque.uam.edu.ne', label: 'cvtheque.uam.edu.ne' },
      { href: 'https://www.presses.uam.edu.ne', label: 'presses.uam.edu.ne' },
    ],
  },
  {
    domain: 'Institution financière',
    title: 'SAHFI SA — Société Sahélienne de Financement',
    description: 'Portail institutionnel avec espace client sécurisé et optimisation du référencement naturel.',
    tech: ['Symfony', 'Twig'],
    links: [{ href: 'https://www.sahfi.net', label: 'sahfi.net' }],
  },
];

export const experience = [
  {
    period: '08/2024 – Présent',
    company: 'Dev4Smart',
    place: 'Niamey, Niger',
    title: 'Ingénieur développeur de solutions web et mobiles',
    badge: { label: 'Poste actuel', tone: 'ok' },
    bullets: [
      "Développement de services backend et d'API REST (Spring Boot, NestJS, FastAPI) pour des plateformes de paiement et de monnaie électronique.",
      "Développement d'interfaces web en Angular 18 (portail et console d'administration) et d'applications mobiles en Flutter.",
      'Mise en place de pipelines GitLab CI/CD, conteneurisation Docker et déploiement Kubernetes (Kustomize).',
      "Intégration de services d'IA pour la vérification d'identité : OCR, reconnaissance faciale et détection de vivacité.",
      "Intégration d'API Mobile Money et de passerelles de paiement ; maintenance et exploitation des services en production.",
    ],
  },
  {
    period: '12/2023 – 05/2024',
    company: 'Zamani Telecom',
    place: 'Niamey, Niger',
    title: 'Ingénieur Services à Valeur Ajoutée (VAS)',
    badge: { label: 'Opérateur télécom', tone: 'brand' },
    bullets: [
      'Supervision des services à valeur ajoutée en production et analyse des flux transactionnels.',
      "Suivi des plateformes, diagnostic et résolution d'incidents en lien avec les équipes réseau.",
    ],
  },
  {
    period: '09/2021 – 11/2021',
    company: 'CERMES-NIGER',
    place: 'Niamey, Niger',
    title: 'Développeur Web',
    badge: { label: 'Centre de recherche', tone: 'neutral' },
    bullets: [
      "Déploiement et administration d'une plateforme web sous Linux.",
      'Support aux utilisateurs et maintenance corrective.',
    ],
  },
];

export const skills = [
  { icon: 'code', title: 'Backend & API', items: [['Spring Boot (Java 17/21)', 1], ['NestJS (TypeScript)', 1], ['FastAPI (Python)', 1], ['Symfony / Twig (PHP)', 0], ['API REST', 0]] },
  { icon: 'phone', title: 'Frontend & Mobile', items: [['Angular 18', 1], ['Flutter (Mobile)', 1], ['TypeScript', 0], ['HTML5 / CSS3', 0]] },
  { icon: 'database', title: 'Données & Messagerie', items: [['PostgreSQL', 1], ['Apache Kafka', 1], ['Redis', 0], ['MySQL', 0]] },
  { icon: 'server', title: 'DevOps & Exploitation', items: [['Docker', 1], ['Kubernetes (Kustomize)', 1], ['GitLab CI/CD', 1], ['Linux', 0], ['Nginx', 0], ['PM2', 0], ['Git', 0]] },
  { icon: 'shield', title: 'Sécurité & Identité', items: [['Keycloak', 1], ['OAuth2', 0], ['OpenID Connect', 0], ['JWT', 0], ['HashiCorp Vault', 0]] },
  { icon: 'scan', title: 'IA : OCR & Biométrie', items: [['PaddleOCR', 1], ['InsightFace (ONNX)', 1], ['Tesseract', 0], ['AWS Textract', 0], ['Silent-Face-Anti-Spoofing', 0]] },
] as { icon: string; title: string; items: [string, 0 | 1][] }[];

export const extraSkills = ['Oracle Database & PL/SQL', 'GitHub Actions', 'Jenkins', 'RAG & IA générative'];

export const degrees = [
  {
    badge: '2021 – 2023 · Bac+5',
    title: 'Master en génie logiciel',
    text: 'ESCEP-Niger — École Supérieure des Communications Électroniques et de la Poste (ex-EST), Niamey',
  },
  {
    badge: '2018 – 2021 · Bac+3',
    title: 'Licence professionnelle en génie logiciel',
    text: "Mention Télécommunications et Informatique · École Supérieure des Télécommunications (EST, aujourd'hui ESCEP-Niger), Niamey",
  },
];

export const languages = [
  { badge: 'Usage courant & professionnel', title: 'Français', text: 'Excellent niveau : lu, écrit et parlé.' },
  { badge: 'Usage technique', title: 'Anglais', text: "Très bon à l'écrit et en lecture de documentation technique, bon à l'oral." },
];
