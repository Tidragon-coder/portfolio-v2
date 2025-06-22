import logoMIMUSS from "../assets/logo/logomimusmini.png";
import logoElesia from "../assets/logo/elesia.png";
import logoAida from "../assets/logo/Aida.png";
import logometeo from "../assets/logo/Meteo.png";

import ImgMeteo from "../assets/img/img_meteo.jpg";
import ImgMimuss from "../assets/img/img_mimuss.png";
import ImgElesia from "../assets/img/img_elesia.png";

import elesiaDoc from "../assets/pdf/RDS_Elesia.pdf";
import FreshDoc from "../assets/pdf/RDS_Fresh.win.pdf";

import logoFreshwin from "../assets/logo/FreshWin.png";

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
};

export const projects = [
  {
    id: 1,
    slug: "projet-mimuss",
    title: "Mimuss",
    logo: logoMIMUSS,
    shortDescription:
      "Ce projet de partiel en fait en 2024 consiste à sensibiliser et accompagner les jeunes dans la lutte contre le cyberharcèlement via le biais d'un site web.",
    longDescription:
      "Projet réalisé dans le cadre d’un partiel de 2024 visant à créer une application de sensibilisation contre le cyberharcèlement. Le projet devait inclure des fonctionnalités pédagogiques, une interface intuitive et respecter des contraintes de design imposées, ce site devait permettre à tous les acteurs du cyberharcèlement de trouver des ressources utiles (comme des liens vers des ressources de soutien, des numéro d'écoute,...) pour lutter contre ce fléau.",
    image: ImgMimuss,
    technologies: ["react", "css", "js", "html"],
    github: "https://github.com/tonrepo",
    demo: "",
    doc: "",
    expected: [
      "Créer une plateforme responsive et accessible",
      "Mettre en place un système de témoignages ou quizz",
      "Respecter une charte graphique imposée",
      "Livrer un MVP en 2 semaines avec documentation",
      "Travailler en équipe avec des rôles définis",
      "Inclure une Bande Dessinée au site web", 
    ]
  },
  {
    id: 2,
    slug: "projet-elesia",
    title: "Elesia",
    logo: logoElesia,
    shortDescription:
      "Durant un stage de 2 mois chez Elesia, j’ai eu l’occasion de travailler sur la gestion des endpoints API de paiement (Avec MVC).",
    longDescription:
      "Ce projet m'a offert une excellente opportunité de découvrir et d'expérimenter le travail en groupe dans le domaine du développement web. J'ai appris à collaborer efficacement avec une équipe, notamment en utilisant des outils essentiels comme Git et GitHub pour la gestion du code source. Puis, en dehors du code, j'ai pu travailler avec différents acteurs du web, comme des personnes dans le marketing, designer,...",
    image: ImgElesia,
    technologies: ["java", "postman", "html", "css", "js", "intellij", "mysql", "git"],
    github: "",
    demo: "https://www.elenox.net/",
    doc: elesiaDoc,
    expected: [
      "Comprendre et utiliser une architecture MVC",
      "Améliorer des endpoints API",
      "Création et gestion des tables avec SQL",
      "Collaborer avec une équipe technique",
      "Documenter les endpoints créés"
    ]
  },
  {
    id: 3,
    slug: "projet-aida",
    title: "AIDA",
    logo: logoAida,
    shortDescription:
      "Pour un projets d'école, j’ai eu l’occasion de créer un site web pour une cliente du monde de la musique qui avait besoin d'une visibilitée en ligne.",
    longDescription:
      "AIDA est un projet réalisé dans le cadre d'un partiel de 2024, visant à créer un site web pour une cliente du monde de la musique. Le site devait refléter les valeurs de la cliente, être facile à maintenir et respecter une deadline très courte. J'ai travaillé en étroite collaboration avec la cliente pour m'assurer que le site répondait à ses besoins et attentes qui etaient principalement d'avoir une visibilité maxiamale en ligne via un site web type portfolio.",
    image: "",
    technologies: ["wp", "html", "css", "js"],
    github: "https://github.com/tonrepo/aida",
    demo: "",
    doc: "",
    expected: [
      "Etre en relation constante avec la cliente",
      "Créer un site facile de maintenance pour la cliente",
      "Representer aux maximun les valeurs de la cliente",
      "Respecter une deadline très courte",
    ]
  },
  {
    id: 4,
    slug: "Freshwin",
    title: "Fresh.win",
    logo: logoFreshwin,
    shortDescription:
      "Durant un stage de 2 mois, j’ai eu l’occasion de participer à la création d’une application mobile de paris sportifs.",
    longDescription:
      "",
    image: logoFreshwin,
    technologies: ["react", "tailwind", "typescript"],
    github: "",
    demo: "",
    doc: FreshDoc,
    expected: [
      "Concevoir une interface mobile accessible",
      "Mettre en place une base de données temps réel",
      "Assurer la sécurité et la confidentialité des utilisateurs",
      "Créer un MVP en 3 semaines avec tests utilisateurs"
    ]
  },
  {
    id: 5,
    slug: "meteo",
    title: "Application météo",
    logo: logometeo,
    shortDescription:
      "Application météo qui fournit des prévisions et des alertes sur les conditions météorologiques.",
    longDescription:
      "L'application météo est un projet que j'ai développé seul en utilisant React Native afin d'approfondir mes compétences en développement mobile. Grâce à l'intégration d'une API dédiée, cette application offre aux utilisateurs des prévisions météorologiques précises sur une période de sept jours. Ce projet m'a permis de me familiariser davantage avec les requêtes API, la gestion des états dans une application mobile, ainsi que l'optimisation des interfaces utilisateur pour une expérience fluide et intuitive. J'ai également utilisé Git pour le versionnage du code, ce qui a facilité le suivi des modifications.",
    image: ImgMeteo,
    technologies: ["react", "js", "typescript"],
    github: "https://github.com/Tidragon-coder/app_meteo",
    demo: "",
    doc: "",
    expected: [
      "Concevoir une interface mobile accessible",
      "Utilisation d'une API pour les données météorologiques",
      "Coder de façon Atomic",
      "Récuperation des données du téléphone (Langue, localisation,...)",
    ]
  },
];
