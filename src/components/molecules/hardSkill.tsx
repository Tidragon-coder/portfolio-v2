import React from 'react';
import SkillCard from './SkillCard';

import skillsIcons from '../../data/skillsIcons';


const HardSkills = () => {
  return (
<div className='px-[200px]'>
  <h2 className="text-3xl font-bold text-center mb-8 mt-[50px]">{'<Hard Skills/>'}</h2>
  <section className="mb-12">
      <h3 className="text-2xl font-bold text-center mb-8">Dévéloppement</h3>
      <div className="flex flex-wrap justify-center gap-6">
        <SkillCard icon={skillsIcons.html} title="HTML" description="Structurer les pages web" />     
        <SkillCard icon={skillsIcons.css} title="CSS" description="Styliser et animer les éléments" />
        <SkillCard icon={skillsIcons.js} title="JavaScript" description="Créer des interactions dynamiques" /> 
        <SkillCard icon={skillsIcons.typescript} title="TypeScript" description="Surcouche de JavaScript avec typage statique" />
        <SkillCard icon={skillsIcons.react} title="React" description="Bibliothèque JS pour créer des interfaces interactives" />
      </div>
  </section>
  <section className="mb-12">
      <h3 className="text-2xl font-bold text-center mb-8">Back-end & base de données</h3>
      <div className="flex flex-wrap justify-center gap-6">
        <SkillCard icon={skillsIcons.java} title="Java" description="Programmation orientée objet" />
        <SkillCard icon={skillsIcons.php} title="PHP" description="Développement back-end" /> 
        <SkillCard icon={skillsIcons.laravel} title="Laravel" description="Framework PHP moderne pour créer des applications web robustes" />
        <SkillCard icon={skillsIcons.mysql} title="SQL/MySQL" description="Gestion de bases de données" /> 
      </div>
  </section>

  <section className="mb-12">
      <h3 className="text-2xl font-bold text-center mb-8">Outils, Workflow & CMS</h3>
      <div className="flex flex-wrap justify-center gap-6">
        <SkillCard icon={skillsIcons.github} title="GitHub" description="Versioning et collaboration distant" />     
        <SkillCard icon={skillsIcons.git} title="Git" description="Versioning et collaboration" />
        <SkillCard icon={skillsIcons.postman} title="Postman" description="Test des API" /> 
        <SkillCard icon={skillsIcons.vscode} title="VS Code" description="Environnements de développement" />
        <SkillCard icon={skillsIcons.intellij} title="IntelliJ" description="Environnements de développement" />
        <SkillCard icon={skillsIcons.wamp} title="WAMP" description="Serveur local pour PHP & MySQL" />     
        <SkillCard icon={skillsIcons.figma} title="Figma" description="Conception et prototypage UI/UX" />
        <SkillCard icon={skillsIcons.wp} title="WordPress" description="CMS et développement de sites Web" /> 
      </div>
  </section>
</div>
  );
};

export default HardSkills;
