import React from 'react';

import Header from '../organisms/header';
import Footer from '../organisms/footer';
import usePageTitle from '../../hooks/usePageTitle';

import ProjectCard from '../molecules/ProjectCard';
import SectionTitle from '../atoms/SectionTitle';

import { projects } from '../../data/projects';

const Projects = () => {
  usePageTitle('Projets');
  const currentProjects = projects.filter((project) => !project.archived);
  const archivedProjects = projects.filter((project) => project.archived);

  return (
    <div >
      <Header />
      <section className="min-h-screen text-white px-6 pt-36 pb-20">
        <div className="max-w-6xl mx-auto">
          <SectionTitle as="h1" title="Mes Projets" subtitle="Projets en entreprise, projets personnels et projets d'école." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-24">
            <SectionTitle title="Anciens projets" subtitle="Mes premiers projets, réalisés pendant le Bachelor ou en autodidacte." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {archivedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
