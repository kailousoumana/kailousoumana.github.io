# Portfolio — Soumana Kailou Soumailou

Portfolio professionnel d'**Ingénieur Logiciel & DevOps** (Backend, Fintech & Solutions IA), déployé sur [kailousoumana.github.io](https://kailousoumana.github.io/).

## Stack technique

- **Framework** : [Astro](https://astro.build/) (rendu 100 % statique, zéro bundle JavaScript superflu)
- **Styles** : [Tailwind CSS v4](https://tailwindcss.com/) avec thème clair / sombre natif
- **SEO & Métadonnées** : Sitemap automatique (`@astrojs/sitemap`), balisage structuré Schema.org (`JSON-LD`) et OpenGraph
- **CI/CD** : Déploiement continu sur GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

## Structure du projet

```text
├── public/                 # Fichiers statiques (CV PDF, portrait, favicon, robots.txt)
├── src/
│   ├── components/         # Composants UI modulaires (Hero, Projects, Experience, Skills, etc.)
│   ├── data/
│   │   └── site.ts         # Source unique de données (profil, projets, expériences, compétences)
│   ├── layouts/
│   │   └── Base.astro      # Layout principal, métadonnées SEO et gestion du thème
│   ├── pages/
│   │   └── index.astro     # Page d'accueil
│   └── styles/
│       └── global.css      # Thème, variables CSS et classes utilitaires
└── astro.config.mjs        # Configuration Astro & Vite
```

## Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Générer le build de production dans dist/
npm run build
```
