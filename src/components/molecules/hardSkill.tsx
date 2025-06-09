import React from 'react';
import SkillCard from './SkillCard';

import skillsIcons from '../../data/skillsIcons';


const HardSkills = () => {
  return (
    <section className="flex flex-wrap justify-center gap-6">
        <SkillCard icon={skillsIcons.html} title="HTML" description="Structurer les pages web" />     
        <SkillCard icon={skillsIcons.css} title="CSS" description="Styliser et animer les éléments" />
        <SkillCard icon={skillsIcons.js} title="JavaScript" description="Créer des interactions dynamiques" /> 
        <SkillCard icon={skillsIcons.typescript} title="TypeScript" description="Surcouche de JavaScript avec typage statique" />
        <SkillCard icon={skillsIcons.react} title="React" description="Bibliothèque JS pour créer des interfaces interactives" />
    </section>
  );
};

export default HardSkills;
