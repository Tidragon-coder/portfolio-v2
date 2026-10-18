import React from 'react';
import SkillCard from './SkillCard';
import SectionTitle from '../atoms/SectionTitle';
import useScrollAppear from '../../hooks/useScrollAppear';

import skillsIcons from '../../data/skillsIcons';

type Skill = { icon: string; title: string; description: string };

const categories: { title: string; skills: Skill[] }[] = [
  {
    title: 'Back-end',
    skills: [
      { icon: skillsIcons.python, title: 'Python', description: 'Langage polyvalent pour le développement back-end, l’automatisation et le traitement de données' },
      { icon: skillsIcons.django, title: 'Django', description: 'Framework Python pour créer des applications web robustes et évolutives' },
      { icon: skillsIcons.nodejs, title: 'Node.js', description: 'Environnement JavaScript côté serveur' },
      { icon: skillsIcons.express, title: 'Express', description: 'Framework Node.js pour créer des API REST' },
      { icon: skillsIcons.php, title: 'PHP', description: 'Développement back-end' },
      { icon: skillsIcons.laravel, title: 'Laravel', description: 'Framework PHP moderne pour créer des applications web robustes' },
    ],
  },
  {
    title: 'Front-end',
    skills: [
      { icon: skillsIcons.typescript, title: 'TypeScript', description: 'Surcouche de JavaScript avec typage statique' },
      { icon: skillsIcons.js, title: 'JavaScript', description: 'Créer des interactions dynamiques' },
      { icon: skillsIcons.react, title: 'React', description: 'Bibliothèque JS pour créer des interfaces interactives' },
      { icon: skillsIcons.react, title: 'React Native', description: 'Créer des applications mobiles iOS et Android avec React' },
      { icon: skillsIcons.svelte, title: 'Svelte', description: 'Framework JS pour créer des interfaces dynamiques' },
      { icon: skillsIcons.html, title: 'HTML', description: 'Structurer les pages web' },
      { icon: skillsIcons.scss, title: 'CSS / SCSS', description: 'Styliser et animer les éléments' },
    ],
  },
  {
    title: 'Bases de données',
    skills: [
      { icon: skillsIcons.postgresql, title: 'PostgreSQL', description: 'Base de données relationnelle avancée' },
      { icon: skillsIcons.mysql, title: 'SQL / MySQL', description: 'Gestion de bases de données' },
      { icon: skillsIcons.prisma, title: 'Prisma', description: 'ORM TypeScript pour Node.js' },
    ],
  },
  {
    title: 'Outils',
    skills: [
      { icon: skillsIcons.git, title: 'Git', description: 'Versioning et collaboration' },
      { icon: skillsIcons.github, title: 'GitHub', description: 'Versioning et collaboration à distance' },
      { icon: skillsIcons.gitlab, title: 'GitLab', description: 'Gestion des tickets et revue de code' },
      { icon: skillsIcons.docker, title: 'Docker', description: 'Conteneurisation des applications' },
      { icon: skillsIcons.postman, title: 'Postman', description: 'Test des API' },
      { icon: skillsIcons.figma, title: 'Figma', description: 'Conception et prototypage UI/UX' },
      { icon: skillsIcons.wp, title: 'WordPress', description: 'CMS et développement de sites Web' },
    ],
  },
];

const HardSkills = () => {
  const sectionRef = useScrollAppear();

  return (
    <section ref={sectionRef} className="py-20 px-6 appear">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Compétences" />
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div key={category.title} className="rounded-2xl border border-white/10 bg-surface/80 backdrop-blur p-6">
              <h3 className="text-sm uppercase tracking-widest text-highlight mb-5">{category.title}</h3>
              <ul className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.title} {...skill} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardSkills;
