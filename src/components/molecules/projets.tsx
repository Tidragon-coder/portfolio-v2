import React from "react";
import ProjectCard from "../molecules/ProjectCard";

import logoADFU from "../../assets/logo/ADFU.png";
import logoAida from "../../assets/logo/Aida.png";
import logoMimus from "../../assets/logo/logomimusmini.png"; 
import logoElesia from "../../assets/logo/elesia.png";

const Projets = () => {
    return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-bold text-[#F0FBF7] text-center mb-10">
        &lt;Projets/&gt;
      </h2>

      <div className="flex flex-wrap justify-center gap-20">
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

);};

export default Projets;