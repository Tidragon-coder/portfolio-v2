import React from "react";
import useScrollAppear from "../../hooks/useScrollAppear";
import ProjectCard from "../molecules/ProjectCard";
import { projects } from "../../data/projects";

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
            key={project.id}
            title={project.title}
            description={project.shortDescription}
            imageSrc={project.image}
            link={`/${project.slug}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projets;
