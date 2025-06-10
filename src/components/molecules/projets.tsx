import React from "react";
import useScrollAppear from "../../hooks/useScrollAppear";
import ProjectCard from "../molecules/ProjectCard";
import { projects } from "../../data/projects";

import Button from "../atoms/Button";

const Projets = () => {
  const sectionRef = useScrollAppear();

  // IDs des projets à afficher
  const selectedProjectIds = [1, 3, 2];

  // filtre les projets correspondants
  const selectedProjects = projects.filter((project) =>
    selectedProjectIds.includes(project.id)
  );

  return (
    <section ref={sectionRef} className="py-10 px-4 appear">
      <h2 className="text-3xl font-bold text-[#F0FBF7] text-center mb-10">
        &lt;Projets/&gt;
      </h2>

      <div className="flex flex-wrap justify-center gap-20">
        {selectedProjects.map((project) => (
          <ProjectCard
            slug={project.slug}
            title={project.title}
            description={project.shortDescription}
            imageSrc={project.logo}
            link={`/${project.slug}`}
          />
        ))}
      </div>
      <Button size="xs" className="mt-10 mx-auto block" onClick={() => window.location.href = "/projects"}>
        Voir tous mes projets
      </Button>
    </section>
  );
};

export default Projets;
