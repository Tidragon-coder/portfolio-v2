import logoMIMUSS from "../assets/logo/logomimusmini.png";
import logoElesia from "../assets/logo/elesia.png";
import logoAida from "../assets/logo/Aida.png";

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
      "Ce projet fait comme projet de partiel en 2024 consiste à sensibiliser et accompagner les jeunes dans la lutte contre le cyberharcèlement.",
    longDescription:
      "Projet réalisé dans le cadre d’un partiel de 2024 visant à créer une application de sensibilisation contre le cyberharcèlement. Le projet devait inclure des fonctionnalités pédagogiques, une interface intuitive et respecter des contraintes de design imposées.",
    image: logoMIMUSS,
    technologies: ["React", "Tailwind", "Node.js"],
    github: "https://github.com/tonrepo",
    demo: "https://mimuss.app",
    doc : "",
    expected: [
      "Créer une plateforme responsive et accessible",
      "Sensibiliser les jeunes aux dangers du cyberharcèlement",
      "Mettre en place un système de témoignages ou quizz",
      "Respecter une charte graphique imposée",
      "Livrer un MVP en 2 semaines avec documentation"
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
      "Stage de 2 mois en 2024 dans l’entreprise Elesia où j’ai principalement travaillé sur des API de paiement. J’ai utilisé une architecture MVC, mis en place des tests, et collaboré avec une équipe pour améliorer les fonctionnalités de la plateforme.",
    image: logoElesia,
    technologies: ["PHP", "Laravel", "MySQL", "MVC"],
    github: "",
    demo: "",
    doc : "",
    expected: [
      "Comprendre et utiliser une architecture MVC",
      "Améliorer des endpoints API",
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
      "Application d’aide à domicile pour personnes âgées réalisée en binôme dans le cadre d’un projet d’école.",
    longDescription:
      "AIDA est une application visant à mettre en relation des aidants et des personnes âgées. Le projet a été conçu pour améliorer l’autonomie et la sécurité des personnes âgées tout en facilitant la gestion pour les aidants.",
    image: logoAida,
    technologies: ["React Native", "TypeScript", "Firebase"],
    github: "https://github.com/tonrepo/aida",
    demo: "https://aida.app",
    doc : "",
    expected: [
      "Concevoir une interface mobile accessible",
      "Mettre en place une base de données temps réel",
      "Assurer la sécurité et la confidentialité des utilisateurs",
      "Créer un MVP en 3 semaines avec tests utilisateurs"
    ]
  },
    {
    id: 4,
    slug: "projet-aida",
    title: "number4",
    logo: logoAida,
    shortDescription:
      "Application d’aide à domicile pour personnes âgées réalisée en binôme dans le cadre d’un projet d’école.",
    longDescription:
      "AIDA est une application visant à mettre en relation des aidants et des personnes âgées. Le projet a été conçu pour améliorer l’autonomie et la sécurité des personnes âgées tout en facilitant la gestion pour les aidants.",
    image: logoAida,
    technologies: ["React Native", "TypeScript", "Firebase"],
    github: "https://github.com/tonrepo/aida",
    demo: "https://aida.app",
    doc : "",
    expected: [
      "Concevoir une interface mobile accessible",
      "Mettre en place une base de données temps réel",
      "Assurer la sécurité et la confidentialité des utilisateurs",
      "Créer un MVP en 3 semaines avec tests utilisateurs"
    ]
  },
];
