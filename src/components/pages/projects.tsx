import React from 'react';

import Header from '../organisms/header';
import Footer from '../organisms/footer';

import ProjectCard from '../molecules/ProjectCard';

import logoADFU from '../../assets/logo/ADFU.png';
import logoAida from "../../assets/logo/Aida.png";
import logoElesia from "../../assets/logo/elesia.png";


const Projects = () => {
  return (
    <div className="font-fira">
      <Header />
<section className="min-h-screen text-white px-6 py-20 mt-20">
  <h1 className="text-4xl font-bold text-center mb-12">Mes Projets</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-screen-xl mx-auto">
        <ProjectCard
          title="AHFU"
          description="Asso. humanitaire des frères unis fait partie d’un projet lancé par l’école dans lequel on devait accompagner une asso. humanitaire dans le digital"
          imageSrc={logoADFU}
          link="/projet_adfu"
        />
        <ProjectCard
          title="Mimuss"
          description="Ce projet fait comme projet de partiel en 2024 consiste à sensibiliser et accompagner les jeunes dans la lutte contre le cyberharcèlement."
          imageSrc={logoAida}
          link="/projet_mimuss"
        />
        <ProjectCard
          title="Elesia"
          description="Durant un stage de 2mois chez Elesia, j’ai eu l’occasion de travailler sur la gestion des endpoints API de paiement (Avec MVC)."
          imageSrc={logoElesia}
          link="/projet_elesia"
        />
                <ProjectCard
          title="AHFU"
          description="Asso. humanitaire des frères unis fait partie d’un projet lancé par l’école dans lequel on devait accompagner une asso. humanitaire dans le digital"
          imageSrc={logoADFU}
          link="/projet_adfu"
        />
        <ProjectCard
          title="Mimuss"
          description="Ce projet fait comme projet de partiel en 2024 consiste à sensibiliser et accompagner les jeunes dans la lutte contre le cyberharcèlement."
          imageSrc={logoAida}
          link="/projet_mimuss"
        />
        <ProjectCard
          title="Elesia"
          description="Durant un stage de 2mois chez Elesia, j’ai eu l’occasion de travailler sur la gestion des endpoints API de paiement (Avec MVC)."
          imageSrc={logoElesia}
          link="/projet_elesia"
        />
      </div>
    </section>
        <Footer />
    </div>
  );
};

export default Projects;