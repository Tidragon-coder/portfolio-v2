import TimelineItem from '../molecules/timelineItem';
import SectionTitle from '../atoms/SectionTitle';

const ExperienceSection = () => (
  <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionTitle title="Parcours" />

      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <h3 className="text-sm uppercase tracking-widest text-white/60 mb-8">Expérience</h3>
          <ol className="relative border-l-2 border-secondary/50 ml-2 space-y-10">
            <TimelineItem
              current
              title="Développeur Full-Stack · Alternance"
              organization="Yuccan"
              date="Septembre 2025 - Aujourd'hui"
              description="Développement sur une plateforme SaaS de parrainage et de recommandation client, son application mobile et ses outils internes."
              missions={[
                "Prise en charge des tickets de bout en bout (fonctionnalités, correctifs, améliorations) : cadrage en COPIL, développement, tests, revue de code et livraison",
                "Développement back-end en Python / Django et d’endpoints API pour l’application mobile Yuccan",
                "Développement front-end en Svelte sur l’outil interne Yuccan Statistique",
                "Seul développeur sur l’application de Fromagers de France, client historique de Yuccan",
              ]}
            />

            <TimelineItem
              title="Stage Développement Full-Stack"
              organization="Fresh.win"
              date="Avril - Juin 2025"
              missions={[
                "Développement front-end de l’application mobile en React Native / TypeScript, avec des composants réutilisables (atomic design)",
                "Fonctionnalités dynamiques : lootbox, notation, daily claim, suivi des paris (en cours, gagné, perdu)",
                "Participation à la conception des API REST (Node.js / Express) et aux choix d’architecture",
                "Une branche par feature, documentation, sprints sous Trello",
              ]}
            />

            <TimelineItem
              title="Stage Développement Back-end"
              organization="Elesia"
              date="Avril - Juin 2024"
              missions={[
                "Développement d’une API REST de paiement en Java / Spring Boot : endpoint de transactions, DTOs, mapping entités, services et contrôleurs",
                "Connexion à MySQL, création des tables et gestion des erreurs de connexion",
              ]}
            />
          </ol>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm uppercase tracking-widest text-white/60 mb-8">Formation</h3>
          <ol className="relative border-l-2 border-secondary/50 ml-2 space-y-10">
            <TimelineItem
              current
              title="MBA Développeur Full Stack · Alternance"
              organization="MyDigital School Paris"
              date="2026 - 2028"
            />

            <TimelineItem
              title="Bachelor Développement Web"
              organization="MyDigital School Paris"
              date="2023 - 2026"
            />

            <TimelineItem
              title="Bac STI2D, option SIN"
              organization="Lycée de la Mare Carrée"
              date="2021 - 2023"
            />
          </ol>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
