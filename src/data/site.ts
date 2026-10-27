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
  linkedin: 'https://www.linkedin.com/in/soumana-soumailou-b73343438/',
  github: 'https://github.com/kailousoumana',
  cv: '/CV_SOUMAILOU_SOUMANA.pdf',
  cvDownloadName: 'CV_Soumana_Kailou_Soumailou.pdf',
  description:
    "Ingénieur logiciel à Niamey : API et microservices (Spring Boot, NestJS, FastAPI), Angular, CI/CD GitLab, sécurité (OAuth2, JWT) et IA appliquée au KYC. Projets et CV.",
  ogImage: '/og.png',
};

export const nav = [
  { href: '#projets', label: 'Projets' },
  { href: '#experience', label: 'Expérience' },
  { href: '#competences', label: 'Compétences' },
  { href: '#formation', label: 'Formation' },
  { href: '#contact', label: 'Contact' },
];

export const heroIntro =
  "Ingénieur en génie logiciel (<strong>Master, Bac+5</strong>), j'ai plus de deux ans d'expérience dans le développement d'applications pour la fintech, les télécoms et les systèmes métiers. Je conçois et déploie des architectures backend (<strong>Spring Boot, NestJS, FastAPI, Symfony</strong>) et des interfaces web (<strong>Angular</strong>), avec des pipelines <strong>GitLab CI/CD</strong> et la conteneurisation <strong>Docker</strong> (<strong>Kubernetes</strong> en environnements local et de test). J'intègre des briques d'IA (OCR, reconnaissance faciale, détection de vivacité) dans une plateforme de paiement en production.";

// Les chiffres de production d'abord ; le prototype est clairement identifié comme tel.
export const heroMetrics = [
  { value: '+200 000', label: 'Recharges traitées (SmartPay NE)' },
  { value: '6 plateformes', label: 'En production chez Dev4Smart' },
  { value: '13 microservices', label: 'Prototype hors production' },
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
  links?: { href: string; label: string }[];
};

export const projects: Project[] = [
  {
    category: 'Mobile Money & Microservices',
    status: '2026 · Prototype, hors production',
    statusTone: 'warn',
    title: 'Prototype de plateforme de monnaie électronique et de services financiers digitaux',
    context: 'Prototype proposé par Dev4Smart à un opérateur de télécommunications',
    role: 'Ingénieur Backend & DevOps',
    description:
      'Prototype de plateforme de mobile money et de services financiers digitaux organisée en 13 microservices.',
    bullets: [
      'Cœur financier en <strong>Spring Boot (Java)</strong> avec grand livre en partie double, orchestration en <strong>NestJS</strong> et inférence IA pour la vérification d\'identité en <strong>FastAPI</strong>.',
      'Événements distribués avec <strong>Kafka</strong> (patron Outbox), migrations <strong>Flyway</strong>, authentification <strong>Keycloak</strong> (OpenID Connect, JWT RS256) et gestion des secrets avec <strong>HashiCorp Vault</strong>.',
      'Pipeline <strong>GitLab CI/CD</strong> en six étapes (contrôles DevSecOps <strong>Gitleaks</strong> et <strong>Kubeconform</strong>), images Docker immuables et manifestes <strong>Kubernetes (Kustomize, NetworkPolicies)</strong>.',
    ],
    stats: [
      { value: '13', label: 'Microservices' },
      { value: '6 étapes', label: 'Pipeline CI/CD' },
    ],
    tech: ['Spring Boot (Java)', 'NestJS', 'FastAPI', 'Apache Kafka', 'PostgreSQL', 'Flyway', 'Keycloak', 'HashiCorp Vault', 'Kubernetes (Kustomize)', 'GitLab CI/CD', 'Docker'],
  },
  {
    category: 'Fintech & Biométrie KYC',
    status: 'Depuis janv. 2025 · En production',
    statusTone: 'ok',
    title: 'SmartPay NE',
    context: 'Dev4Smart',
    role: 'Ingénieur Full-Stack & DevOps',
    description:
      "Plateforme de paiement électronique et de vérification d'identité (KYC) pour le Niger et l'UEMOA : recharge, cash-in et cash-out, encaissement, cagnotte, e-commerce et restauration.",
    bullets: [
      'Développement du backend (<strong>NestJS, Spring Boot</strong>) et intégration des passerelles Mobile Money (Airtel, Moov, Zamani, Nita, Amana) et cartes bancaires.',
      'Portail web et console d\'administration en <strong>Angular</strong> (tableaux de bord analytiques, supervision KYC / IA, contrôle d\'accès RBAC).',
      'Module KYC conçu en tenant compte des exigences de la BCEAO : OCR (<strong>PaddleOCR, Tesseract, AWS Textract</strong>), comparaison faciale (<strong>InsightFace</strong>) et détection de vivacité.',
      'Déploiements par releases atomiques avec <strong>PM2</strong> et <strong>Nginx</strong>, avec retour arrière automatique.',
    ],
    stats: [
      { value: '+200 000', label: 'Recharges traitées' },
      { value: '+100M FCFA', label: 'Volume transité' },
    ],
    tech: ['NestJS', 'Spring Boot', 'Angular', 'FastAPI', 'PostgreSQL', 'MySQL', 'Redis', 'GitLab CI/CD', 'Docker', 'PM2', 'Nginx'],
    links: [{ href: 'https://smartpay.ne', label: 'smartpay.ne' }],
  },
  {
    category: 'Secteur pastoral & Agritech · Web & Mobile',
    status: '2025 – 2026 · En production',
    statusTone: 'ok',
    title: 'Plateformes numériques pour le secteur pastoral (Proxilait & Dairy EduTech)',
    context: 'Dev4Smart · Financement ENABEL (projet Reel Mahita)',
    role: 'Ingénieur Services Digitaux, Backend & Déploiement',
    description:
      'Conception, développement et mise en production des deux plateformes web et mobile réalisées pour les lauréates du hackathon pastoral 2024 : Proxilait (entreprise Amansi) et Dairy EduTech.',
    bullets: [
      '<strong>Proxilait (entreprise Amansi)</strong> : digitalisation de la chaîne de valeur laitière, de la collecte à la distribution. Backend (monolithe <strong>NestJS / MySQL</strong> et microservices <strong>Spring Boot / PostgreSQL</strong>) et portail web d\'administration en <strong>Angular</strong>.',
      '<strong>Dairy EduTech</strong> : plateforme de formation en ligne pour la filière laitière (cours interactifs, quiz, suivi des apprenants, certification). Backend et API REST en <strong>NestJS</strong> et <strong>MySQL</strong>.',
      'Mise en production sous <strong>Linux</strong> et <strong>Docker</strong>, formation et accompagnement technique des bénéficiaires.',
    ],
    stats: [
      { value: '2 plateformes', label: 'Proxilait & Dairy EduTech' },
      { value: 'ENABEL', label: 'Projet Reel Mahita' },
    ],
    tech: ['NestJS', 'Spring Boot', 'Angular', 'PostgreSQL', 'MySQL', 'API REST', 'Docker', 'Linux'],
    links: [
      { href: 'https://www.amansi.app', label: 'amansi.app' },
      { href: 'https://www.dairyedutech.com', label: 'dairyedutech.com' },
    ],
  },
];

export type OtherProject = {
  domain: string;
  title: string;
  role: string;
  description: string;
  tech: string[];
  links: { href: string; label: string }[];
};

export const otherProjects: OtherProject[] = [
  {
    domain: 'Enseignement supérieur',
    title: 'CVthèque — Université Abdou Moumouni',
    role: 'Développeur Full-Stack Symfony',
    description:
      "Plateforme de valorisation et de visibilité des enseignants-chercheurs de l'Université Abdou Moumouni de Niamey : publications, projets et parcours académiques.",
    tech: ['Symfony', 'Twig'],
    links: [{ href: 'https://www.cvtheque.uam.edu.ne', label: 'cvtheque.uam.edu.ne' }],
  },
  {
    domain: 'Publication scientifique',
    title: 'Presses Universitaires — Université Abdou Moumouni',
    role: 'Développeur Full-Stack Symfony',
    description:
      "Système de publication scientifique numérique de l'Université Abdou Moumouni : soumission des travaux, révision par les pairs, workflow éditorial et archivage.",
    tech: ['Symfony', 'Twig', 'Symfony Workflow'],
    links: [{ href: 'https://www.presses.uam.edu.ne', label: 'presses.uam.edu.ne' }],
  },
  {
    domain: 'Institution financière',
    title: 'SAHFI SA — Société Sahélienne de Financement',
    role: 'Développeur Full-Stack Symfony',
    description: 'Portail institutionnel moderne avec espace client sécurisé et optimisation du référencement naturel (SEO).',
    tech: ['Symfony', 'Twig', 'SEO'],
    links: [{ href: 'https://www.sahfi.net', label: 'sahfi.net' }],
  },
];

export const experience = [
  {
    period: '08/2024 – Présent',
    company: 'Dev4Smart',
    place: 'Niamey, Niger',
    title: 'Ingénieur développeur des solutions web et mobiles',
    badge: { label: 'Poste actuel', tone: 'ok' },
    bullets: [
      "Conception et développement de services backend sécurisés et d'API REST (Spring Boot, NestJS, FastAPI, Symfony) pour des plateformes de paiement, de monnaie électronique et des systèmes métiers ; architecture microservices, API Gateway et événements Kafka (patron Outbox).",
      "Développement d'interfaces web en Angular et Twig (portails, consoles d'administration) ; accompagnement des équipes frontend, bonnes pratiques et revues de code.",
      'Mise en place de pipelines GitLab CI/CD, conteneurisation Docker et déploiement Kubernetes (Kustomize) pour les environnements local et de test.',
      "Intégration de services d'IA pour la vérification d'identité : OCR, reconnaissance faciale et détection de vivacité.",
      "Intégration d'API Mobile Money et de passerelles de paiement ; maintenance et exploitation des services en production.",
    ],
  },
  {
    period: '12/2023 – 05/2024',
    company: 'Zamani Telecom',
    place: 'Niamey, Niger',
    title: 'Stagiaire ingénieur Services à Valeur Ajoutée (VAS)',
    badge: { label: 'Opérateur télécom', tone: 'brand' },
    bullets: [
      'Supervision des services à valeur ajoutée en production et analyse des flux transactionnels.',
      "Suivi des plateformes, diagnostic et résolution d'incidents en lien avec les équipes réseau.",
      "Développement d'une plateforme de suivi des transactions Zamani Cash (mobile money).",
    ],
  },
  {
    period: '09/2021 – 11/2021',
    company: 'CERMES-NIGER',
    place: 'Niamey, Niger',
    title: 'Stagiaire développeur Web',
    badge: { label: 'Centre de recherche', tone: 'neutral' },
    bullets: [
      "Développement d'une application d'e-learning sur Moodle.",
      'Support aux utilisateurs et maintenance corrective.',
      "Gestion des accès et administration des contenus.",
    ],
  },
];

// Niveau = contexte d'usage réel, pas un auto-classement :
//  prod   : utilisé sur une plateforme en production (SmartPay NE, plateformes ENABEL, sites institutionnels)
//  proto  : utilisé sur le prototype Mobile Money ou en labo (local / test)
//  notion : connaissances en cours d'acquisition, sans mise en production
export type Level = 'prod' | 'proto' | 'notion';

export const levelLegend: { level: Level; label: string }[] = [
  { level: 'prod', label: 'En production' },
  { level: 'proto', label: 'Prototype / labo' },
  { level: 'notion', label: 'Notions' },
];

export const skills = [
  { icon: 'code', title: 'Backend & API', items: [['Spring Boot (Java)', 'prod'], ['NestJS (TypeScript)', 'prod'], ['FastAPI (Python)', 'prod'], ['Symfony / Twig (PHP)', 'prod'], ['API REST', 'prod']] },
  { icon: 'monitor', title: 'Frontend & Web', items: [['Angular', 'prod'], ['TypeScript', 'prod'], ['RxJS', 'prod'], ['HTML5 / CSS3 / SCSS', 'prod'], ['Bootstrap', 'prod']] },
  { icon: 'database', title: 'Données & Messagerie', items: [['PostgreSQL', 'prod'], ['MySQL', 'prod'], ['Redis', 'prod'], ['TypeORM', 'prod'], ['Apache Kafka', 'proto'], ['Flyway', 'proto']] },
  { icon: 'server', title: 'DevOps & Exploitation', items: [['Docker', 'prod'], ['GitLab CI/CD', 'prod'], ['Linux', 'prod'], ['Nginx', 'prod'], ['PM2', 'prod'], ['Git', 'prod'], ['Kubernetes (Kustomize)', 'proto'], ['Gitleaks / Kubeconform', 'proto']] },
  { icon: 'shield', title: 'Sécurité & Identité', items: [['JWT (RS256)', 'prod'], ['OAuth2 / OpenID Connect', 'prod'], ['RBAC & AES-256', 'prod'], ['Keycloak', 'proto'], ['HashiCorp Vault', 'proto']] },
  { icon: 'scan', title: 'IA : OCR & Biométrie', items: [['PaddleOCR', 'prod'], ['InsightFace (ONNX)', 'prod'], ['Tesseract', 'prod'], ['AWS Textract', 'prod'], ['Silent-Face-Anti-Spoofing', 'prod']] },
  { icon: 'check', title: 'Qualité & méthodes', items: [['Tests (JUnit / Mockito, Jest)', 'prod'], ['Revues de code', 'prod'], ['Documentation OpenAPI', 'prod'], ['SOLID & architecture hexagonale', 'prod'], ['Agile / Scrum', 'prod']] },
] as { icon: string; title: string; items: [string, Level][] }[];

export const notions: string[] = ['Oracle Database & PL/SQL', 'GitHub Actions', 'Jenkins', 'RAG, Assistants conversationnels & IA générative'];

export const degrees = [
  {
    badge: '2021 – 2023 · Bac+5',
    title: 'Master en génie logiciel',
    text: 'ESCEP-Niger — École Supérieure des Communications Électroniques et de la Poste (ex-EST), Niamey',
  },
  {
    badge: '2018 – 2021 · Bac+3',
    title: 'Licence 3 en génie logiciel',
    text: "École Supérieure des Télécommunications (EST, aujourd'hui ESCEP-Niger), Niamey",
  },
];

export const languages = [
  {badge: 'Usage courant & professionnel', title: 'Français', text: 'Excellent niveau : lu, écrit et parlé.',},
  { badge: 'Usage technique', title: 'Anglais', text: 'Bon niveau : lu, écrit et parlé.',},
  { badge: 'Langue locale', title: 'Zarma', text: 'Excellent niveau à l\'oral et en lecture, bon niveau à l\'écrit',},
  { badge: 'Langue locale', title: 'Haoussa', text: 'Bon niveau : lu, écrit et parlé.',},
];
