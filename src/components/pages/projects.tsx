import React from 'react';

import Header from '../organisms/header';
import Footer from '../organisms/footer';

import ProjectCard from '../molecules/ProjectCard';
import logoADFU from '../../assets/logo/ADFU.png';

const Projects = () => {
  return (
    <div className="font-fira">
      <Header />
    <section className="min-h-screen text-white px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Mes Projets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                <ProjectCard
          title="AHFU"
          description="Asso. humanitaire des frères unis fait partie d’un projet lancé par l’école dans lequel on devait accompagner une asso. humanitaire dans le digital"
          imageSrc={logoADFU}
          link="/projet_adfu"
        />
      </div>
    </section>
        <Footer />
    </div>
  );
};

export default Projects;