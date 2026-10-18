import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../molecules/ProjectCard";
import { projects } from "../../data/projects";

import { buttonClasses } from "../atoms/Button";
import SectionTitle from "../atoms/SectionTitle";

const Projets = () => {
  // IDs des projets à afficher
  const selectedProjectIds = [7, 8, 4];

  // filtre les projets correspondants
  const selectedProjects = projects.filter((project) =>
    selectedProjectIds.includes(project.id)
  );

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Projets" subtitle="Une sélection de mes projets récents, en entreprise et en personnel." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/projects" className={buttonClasses("outline")}>
            Voir tous mes projets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projets;
