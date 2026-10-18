import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAppear from '../../hooks/useScrollAppear';
import skillsIcons from '../../data/skillsIcons';
import { Project } from '../../data/projects';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const cardRef = useScrollAppear();
  // Seules les technos qui ont une icône sont affichées sur la carte
  const techIcons = project.technologies
    .filter((tech) => skillsIcons[tech.toLowerCase()])
    .slice(0, 5);

  return (
    <div ref={cardRef} className="appear h-full">
      <Link
        to={`/projets/${project.slug}`}
        className="group flex flex-col h-full rounded-2xl border border-white/10 bg-surface/80 backdrop-blur p-6 transition duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-[0_10px_40px_-10px_rgba(58,109,140,0.6)]"
      >
        <div className="flex items-center justify-center h-40 rounded-xl bg-white/5 mb-5">
          {project.logo ? (
            <img
              src={project.logo}
              alt={`Logo ${project.title}`}
              className="max-h-28 max-w-[70%] object-contain"
            />
          ) : (
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-highlight bg-clip-text text-transparent">
              &lt;{project.title}/&gt;
            </span>
          )}
        </div>

        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          {project.status && (
            <span className="shrink-0 rounded-full border border-secondary/60 px-2.5 py-0.5 text-xs text-highlight">
              {project.status.split(' · ')[0]}
            </span>
          )}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-white/70">{project.shortDescription}</p>

        <div className="mt-auto pt-6 flex items-center justify-between">
          <div className="flex gap-2">
            {techIcons.map((tech) => (
              <span
                key={tech}
                title={tech}
                className="w-6 h-6"
                dangerouslySetInnerHTML={{
                  __html: skillsIcons[tech.toLowerCase()].replace('<svg', '<svg width="24" height="24"'),
                }}
              />
            ))}
          </div>
          <span className="text-sm text-highlight transition-transform duration-300 group-hover:translate-x-1">
            Voir plus →
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
