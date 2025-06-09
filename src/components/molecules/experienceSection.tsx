import TimelineItem from '../molecules/timelineItem';

const ExperienceSection = () => (
  <section className="text-offwhite font-sans my-12 px-4">
    <h2 className="text-4xl text-center mb-10">&lt;Mon expérience/&gt;</h2>

    <div className="relative max-w-xl mx-auto pl-8 border-l-4 border-secondary space-y-6">

      <TimelineItem
        title="Stage Développeur full-stack - fresh.win"
        date="Avril 2025 - Juin 2025"
        missions={[
            "Projet 1",
            "Projet 2",
        ]}
      />
      
      <TimelineItem
        title="My Digital School Paris"  
        date="2023-2026"
        description='Bachelor Développement Web'
      />

      <TimelineItem
        title="Création de Site WEB - Autodidacte"
        date="2020 - Aujourd’hui"
        description="Passionné par le développement web, je conçois et développe des sites en front-end avec HTML, CSS et JavaScript. Cet apprentissage autonome m’a permis d’acquérir de solides compétences en intégration web, design d’interface et optimisation des performances."
      />

      <TimelineItem
        title="CDD employé polyvalent"
        date="Octobre - Décembre 2024"
        description="Depuis début octobre, je travaille en contrat étudiant à 'Party’Jump' dans un trampoline park, dans lequel je fais de l’encaissement, de la surveillance et de l’événementiel."
      />

      <TimelineItem
        title="Stage Développement Back - Elenox"
        date="Avril - Juin 2024"
        missions={[
          "Développement d’une API de paiement",
          "Création d’un endpoint POST /paiement/{id}/cb pour gérer les transactions.",
          "Implémentation des DTOs et mapping entre entités, services et contrôleurs.",
          "Connexion à une base de données MySQL",
          "Configuration de spring.datasource.url et gestion des erreurs de connexion.",
          "Création et gestion des tables avec SQL.",
          "Mise en place d’un service de paiement",
          "Développement de PaiementService pour récupérer et traiter les paiements.",
          "Utilisation de @PathVariable pour extraire les paramètres d’URL."
        ]}
      />

      <TimelineItem
        title="Lycée de la Mare Carré"
        date='2021 - 2023'
        description="Baccalauréat STI2D option S.I.N (Systèmes d'Information Numérique)"
      />
    </div>
  </section>
);

export default ExperienceSection;
