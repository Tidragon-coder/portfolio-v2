import logoMIMUSS from "../assets/logo/logomimusmini.png";
import logoElesia from "../assets/logo/elesia.png";
import logoAida from "../assets/logo/Aida.png";
import logometeo from "../assets/logo/Meteo.png";
import logoTheo from "../assets/logo/logo_second.png";

import ImgMeteo from "../assets/img/img_meteo.jpg";
import ImgMimuss from "../assets/img/img_mimuss.png";
import ImgElesia from "../assets/img/img_elesia.png";
import ImfPortfolio from "../assets/img/img_portfolio.webp";
import ImgYuccan from "../assets/img/img_yuccan.webp";

import elesiaDoc from "../assets/pdf/RDS_Elesia.pdf";
import FreshDoc from "../assets/pdf/RDS_Fresh.win.pdf";

import logoFreshwin from "../assets/logo/FreshWin.webp";
import logoYuccan from "../assets/logo/yuccan.png";
import logoLLM from "../assets/logo/llm.webp";
import logoCebmed from "../assets/logo/CEBMED.png";

export type Project = {
  id: number;
  slug: string;
  title: string;
  logo: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  doc: string;
  expected: string[];
  // Statut affiché sur la fiche (ex : "En cours")
  status?: string;
  // Anciens projets d'école, affichés à part sur la page projets
  archived?: boolean;
};

export const projects: Project[] = [
  {
    id: 7,
    slug: "yuccan",
    title: "Yuccan",
    logo: logoYuccan,
    shortDescription:
      "En alternance chez Yuccan depuis septembre 2025, je prends en charge les tickets de bout en bout sur le SaaS, l'application mobile et les outils internes.",
    longDescription:
      "Développeur full-stack en alternance chez Yuccan, plateforme SaaS de parrainage et de recommandation client. Je prends en charge les tickets de bout en bout (fonctionnalités, correctifs, améliorations) : cadrage en COPIL, développement, tests, revue de code et livraison. Je développe le back-end en Python / Django ainsi que des endpoints API pour l'application mobile Yuccan, et le front-end en Svelte sur l'outil interne Yuccan Statistique. Je suis également le seul développeur sur l'application de Fromagers de France, client historique de Yuccan.",
    image: ImgYuccan,
    technologies: ["python", "django", "svelte", "js", "html", "gitlab"],
    github: "",
    demo: "",
    doc: "",
    status: "Alternance · Sept. 2025 – aujourd'hui",
    expected: [
      "Prendre en charge les tickets de bout en bout, du COPIL à la livraison",
      "Développer le back-end et des endpoints API en Python / Django",
      "Développer le front-end de l'outil interne Yuccan Statistique en Svelte",
      "Assurer seul le développement de l'application de Fromagers de France",
      "Tester et faire relire son code avant chaque livraison",
    ],
  },
  {
    id: 8,
    slug: "spotistats",
    title: "Spotistats",
    logo: "",
    shortDescription:
      "Application de statistiques d'écoute Spotify, construite à partir de l'API Spotify et de l'historique d'écoute complet.",
    longDescription:
      "Spotistats est un projet personnel qui génère des statistiques d'écoute Spotify à partir de l'API Spotify et de l'historique d'écoute complet. Le front-end est réalisé en React avec Vite, et le back-end en Node.js / TypeScript avec Express, Prisma et PostgreSQL, le tout conteneurisé avec Docker.",
    image: "",
    technologies: ["react", "typescript", "nodejs", "express", "prisma", "postgresql", "docker"],
    github: "https://github.com/Tidragon-coder/spotistats",
    demo: "",
    doc: "",
    expected: [
      "Exploiter l'API Spotify et l'historique d'écoute complet",
      "Concevoir une API en Node.js / Express avec Prisma et PostgreSQL",
      "Conteneuriser l'application avec Docker",
    ],
  },
  {
    id: 4,
    slug: "Freshwin",
    title: "Fresh.win",
    logo: logoFreshwin,
    shortDescription:
      "Durant mon stage (avril – juin 2025), j'ai participé au développement d'une application mobile de paris sportifs en React Native.",
    longDescription:
      "Pendant mon stage chez Fresh.win (avril – juin 2025), j'ai participé au développement front-end de l'application mobile de paris sportifs en React Native / TypeScript, avec des composants réutilisables (atomic design). J'ai intégré des fonctionnalités dynamiques comme la lootbox, la notation, le daily claim et le suivi des paris (en cours, gagné, perdu). J'ai également participé à la conception des API REST en Node.js / Express et aux choix d'architecture. Le travail s'organisait en sprints sous Trello, avec une branche par feature et de la documentation.",
    image: logoFreshwin,
    technologies: ["react", "typescript", "tailwind", "nodejs", "express"],
    github: "",
    demo: "",
    doc: FreshDoc,
    expected: [
      "Développer des composants réutilisables en atomic design",
      "Intégrer des fonctionnalités dynamiques (lootbox, notation, daily claim, suivi des paris)",
      "Participer à la conception des API REST et aux choix d'architecture",
      "Travailler en sprints avec une branche par feature et de la documentation",
    ],
  },
  {
    id: 9,
    slug: "llm-local",
    title: "LLM local",
    logo: logoLLM,
    shortDescription:
      "Un LLM open source auto-hébergé, alimenté par mon propre contexte, puis déployé sur un VPS.",
    longDescription:
      "Projet personnel autour de l'intelligence artificielle : je fais tourner un LLM open source en local, alimenté par mon propre contexte, avec pour objectif de le déployer sur un VPS.",
    image: "",
    technologies: ["LLM open source", "VPS"],
    github: "",
    demo: "",
    doc: "",
    status: "En cours",
    expected: [
      "Auto-héberger un LLM open source",
      "L'alimenter avec mon propre contexte",
      "Le déployer sur un VPS",
    ],
  },
  {
    id: 10,
    slug: "cebmed",
    title: "CEBMED",
    logo: logoCebmed,
    shortDescription:
      "Application mobile de gestion des médicaments pour les patients, réalisée en projet d'école et en cours de refonte.",
    longDescription:
      "CEBMED est une application mobile de gestion des médicaments pour les patients, réalisée en Flutter et Node.js dans le cadre d'un projet d'école. Une refonte complète est en cours, avec une nouvelle charte graphique et un code repensé.",
    image: "",
    technologies: ["flutter", "nodejs"],
    github: "",
    demo: "",
    doc: "",
    status: "Terminé · refonte en cours",
    expected: [
      "Permettre aux patients de gérer leurs médicaments",
      "Développer une application mobile en Flutter avec un back-end Node.js",
      "Refondre entièrement l'application (nouvelle charte, code repensé)",
    ],
  },
  {
    id: 2,
    slug: "projet-elesia",
    title: "Elesia",
    logo: logoElesia,
    shortDescription:
      "Durant mon stage chez Elesia (avril – juin 2024), j'ai développé une API REST de paiement en Java / Spring Boot.",
    longDescription:
      "Pendant mon stage chez Elesia (avril – juin 2024), j'ai développé une API REST de paiement en Java / Spring Boot : endpoint de transactions, DTOs, mapping entre entités, services et contrôleurs. J'ai connecté l'application à MySQL, créé les tables et géré les erreurs de connexion. Ce stage m'a aussi appris à collaborer avec une équipe, avec Git et GitHub, et à travailler avec d'autres métiers du web (marketing, design...).",
    image: ImgElesia,
    technologies: ["java", "Spring Boot", "mysql", "postman", "intellij", "git"],
    github: "",
    demo: "https://www.elenox.net/",
    doc: elesiaDoc,
    expected: [
      "Comprendre et utiliser une architecture MVC",
      "Développer une API REST de paiement",
      "Créer et gérer les tables avec SQL",
      "Collaborer avec une équipe technique",
      "Documenter les endpoints créés",
    ],
  },
  {
    id: 1,
    slug: "projet-mimuss",
    title: "Mimuss",
    logo: logoMIMUSS,
    shortDescription:
      "Ce projet de partiel réalisé en 2024 consiste à sensibiliser et accompagner les jeunes dans la lutte contre le cyberharcèlement grâce à un site web.",
    longDescription:
      "Projet réalisé dans le cadre d'un partiel de 2024 visant à créer une application de sensibilisation contre le cyberharcèlement. Le projet devait inclure des fonctionnalités pédagogiques, une interface intuitive et respecter des contraintes de design imposées. Ce site devait permettre à tous les acteurs du cyberharcèlement de trouver des ressources utiles (liens vers des ressources de soutien, numéros d'écoute...) pour lutter contre ce fléau.",
    image: ImgMimuss,
    technologies: ["react", "css", "js", "html"],
    github: "",
    demo: "",
    doc: "",
    archived: true,
    expected: [
      "Créer une plateforme responsive et accessible",
      "Mettre en place un système de témoignages ou de quiz",
      "Respecter une charte graphique imposée",
      "Livrer un MVP en 2 semaines avec documentation",
      "Travailler en équipe avec des rôles définis",
      "Inclure une bande dessinée au site web",
    ],
  },
  {
    id: 3,
    slug: "projet-aida",
    title: "AIDA",
    logo: logoAida,
    shortDescription:
      "Pour un projet d'école, j'ai créé un site web pour une cliente du monde de la musique qui avait besoin de visibilité en ligne.",
    longDescription:
      "AIDA est un projet réalisé dans le cadre d'un partiel de 2024, visant à créer un site web pour une cliente du monde de la musique. Le site devait refléter les valeurs de la cliente, être facile à maintenir et respecter une deadline très courte. J'ai travaillé en étroite collaboration avec la cliente pour m'assurer que le site répondait à ses besoins et attentes, qui étaient principalement d'avoir une visibilité maximale en ligne via un site de type portfolio.",
    image: "",
    technologies: ["wp", "html", "css", "js"],
    github: "",
    demo: "",
    doc: "",
    archived: true,
    expected: [
      "Être en relation constante avec la cliente",
      "Créer un site facile à maintenir pour la cliente",
      "Représenter au maximum les valeurs de la cliente",
      "Respecter une deadline très courte",
    ],
  },
  {
    id: 5,
    slug: "meteo",
    title: "Application météo",
    logo: logometeo,
    shortDescription:
      "Application météo créée en autodidacte, qui fournit des prévisions et des alertes sur les conditions météorologiques.",
    longDescription:
      "L'application météo est un projet que j'ai développé seul en utilisant React Native afin d'approfondir mes compétences en développement mobile. Grâce à l'intégration d'une API dédiée, cette application offre aux utilisateurs des prévisions météorologiques précises sur une période de sept jours. Ce projet m'a permis de me familiariser davantage avec les requêtes API, la gestion des états dans une application mobile, ainsi que l'optimisation des interfaces utilisateur pour une expérience fluide et intuitive. J'ai également utilisé Git pour le versionnage du code, ce qui a facilité le suivi des modifications.",
    image: ImgMeteo,
    technologies: ["react", "js", "typescript", "git", "github"],
    github: "https://github.com/Tidragon-coder/app_meteo",
    demo: "",
    doc: "",
    archived: true,
    expected: [
      "Concevoir une interface mobile accessible",
      "Utiliser une API pour les données météorologiques",
      "Coder de façon atomique",
      "Récupérer les données du téléphone (langue, localisation...)",
    ],
  },
  {
    id: 6,
    slug: "portfolio",
    title: "Mon Portfolio",
    logo: logoTheo,
    shortDescription:
      "Mon portfolio personnel présentant mes projets et compétences, réalisé avec des technologies modernes.",
    longDescription:
      "Mon portfolio est un projet que j'ai développé pour mettre en avant mes compétences en développement web et mes réalisations. J'ai utilisé React pour créer une interface utilisateur dynamique et attrayante, tout en intégrant des animations. Ce projet m'a permis de me familiariser avec les meilleures pratiques en matière de développement front-end, ainsi que d'expérimenter avec des bibliothèques et des outils modernes en utilisant la structure du code atomique.",
    image: ImfPortfolio,
    technologies: ["react", "typescript", "tailwind", "git", "github"],
    github: "https://github.com/Tidragon-coder/portfolio-v2",
    demo: "",
    doc: "",
    archived: true,
    expected: [
      "Présenter mes projets, compétences et expériences",
      "Concevoir une interface responsive et animée",
      "Coder de façon atomique (atoms, molecules, organisms)",
      "Typer l'application avec TypeScript",
    ],
  },
];

export default Project;
