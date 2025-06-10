import React from 'react';

import Header from '../organisms/header';
import Footer from '../organisms/footer';

import ProjectCard from '../molecules/ProjectCard';

import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <div className="font-fira">
      <Header />
      <section className="min-h-screen text-white px-6 py-20 mt-20">
        <h1 className="text-4xl font-bold text-center mb-12">Mes Projets</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-screen-xl mx-auto">
          {projects.map((project) => (
            <ProjectCard
              title={project.title}
              description={project.shortDescription}
              imageSrc={project.image}
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