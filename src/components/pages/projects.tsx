import React from 'react';

import Header from '../organisms/header';
import Footer from '../organisms/footer';

import ProjectCard from '../molecules/ProjectCard';

import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <div >
      <Header />
      <section className="min-h-screen text-white px-6 py-20 mt-20">
        <h1 className="text-4xl font-bold text-center mb-12">Mes Projets</h1>
        <div className="flex flex-wrap justify-center gap-10 max-w-screen-xl mx-auto justify-items-center">
          {projects.map((project) => (
            <ProjectCard
              slug={project.slug}
              title={project.title}
              description={project.shortDescription}
              imageSrc={project.logo}
              link={project.slug}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;