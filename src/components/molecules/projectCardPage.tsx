import React, { useState } from "react";

import  { Project }   from "../../data/projects";
import skillsIcons from "../../data/skillsIcons";

import { Link } from "react-router-dom";

import Header from "../organisms/header";
import Footer from "../organisms/footer";
import { buttonClasses } from "../atoms/Button";

type Props = {
  project: Project;
};

// Noms affichés pour les clés techniques utilisées dans les données
const techLabels: Record<string, string> = {
  js: "JavaScript",
  typescript: "TypeScript",
  react: "React",
  html: "HTML",
  css: "CSS",
  scss: "SCSS",
  wp: "WordPress",
  nodejs: "Node.js",
  express: "Express",
  postgresql: "PostgreSQL",
  prisma: "Prisma",
  docker: "Docker",
  python: "Python",
  django: "Django",
  svelte: "Svelte",
  gitlab: "GitLab",
  github: "GitHub",
  git: "Git",
  java: "Java",
  mysql: "MySQL",
  postman: "Postman",
  intellij: "IntelliJ",
  flutter: "Flutter",
  tailwind: "Tailwind",
};

const cardClasses = "rounded-2xl border border-white/10 bg-surface/80 backdrop-blur p-8";

export const ProjectCardPage = ({ project }: Props) => {
  const [isDocLoading, setIsDocLoading] = useState(true);
  // N'affiche l'image que si elle apporte quelque chose de plus que le logo
  const hasPreview = project.image && project.image !== project.logo;

  return (
    <div>
      <Header />
      <section className="text-[#F0FBF7] px-6 pt-36 pb-20">
        <div className="max-w-5xl mx-auto space-y-8">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-highlight transition-colors">
            &larr; Retour aux projets
          </Link>

          {/* En-tête du projet */}
          <div className={`${cardClasses} flex flex-col md:flex-row items-center gap-8`}>
            <div className="flex items-center justify-center w-36 h-36 shrink-0 rounded-2xl bg-white/5">
              {project.logo ? (
                <img
                  src={project.logo}
                  alt={`Logo du projet ${project.title}`}
                  className="max-w-[75%] max-h-[75%] object-contain"
                />
              ) : (
                <span className="text-4xl font-bold text-highlight">{project.title.charAt(0)}</span>
              )}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold">
                <span className="text-secondary">&lt;</span>{project.title}<span className="text-secondary">/&gt;</span>
              </h1>
              {project.status && (
                <span className="inline-block mt-3 rounded-full border border-secondary/60 bg-secondary/10 px-3 py-1 text-sm text-highlight">
                  {project.status}
                </span>
              )}
              <p className="mt-4 text-white/70">{project.shortDescription}</p>
              {(project.github || project.demo) && (
                <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={buttonClasses("primary", "sm")}>
                      Voir le code sur GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className={buttonClasses("outline", "sm")}>
                      Voir le site
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className={cardClasses}>
            <h2 className="text-sm uppercase tracking-widest text-highlight mb-4">Le projet</h2>
            <p className="leading-relaxed text-white/80">{project.longDescription}</p>
          </div>

          {hasPreview && (
            <img
              src={project.image}
              alt={`Aperçu du projet ${project.title}`}
              className="block mx-auto max-w-full max-h-[600px] w-auto rounded-2xl border border-white/10 shadow-2xl"
            />
          )}

          <div className="grid md:grid-cols-2 gap-8">
            <div className={cardClasses}>
              <h2 className="text-sm uppercase tracking-widest text-highlight mb-5">Objectifs & missions</h2>
              <ul className="space-y-3">
                {project.expected.map((item, i) => (
                  <li
                    key={i}
                    className="relative pl-7 leading-relaxed text-white/80 before:content-['✓'] before:absolute before:left-0 before:text-highlight before:font-bold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={cardClasses}>
              <h2 className="text-sm uppercase tracking-widest text-highlight mb-5">Technologies</h2>
              <ul className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => {
                  const svgIcon = skillsIcons[tech.toLowerCase()];
                  return (
                    <li key={tech} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                      {svgIcon && (
                        <span
                          className="w-6 h-6"
                          dangerouslySetInnerHTML={{ __html: svgIcon.replace('<svg', '<svg width="24" height="24"') }}
                        />
                      )}
                      <span className="text-sm">{techLabels[tech.toLowerCase()] ?? tech}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {project.doc && (
            <div className={cardClasses}>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                <h2 className="text-sm uppercase tracking-widest text-highlight">Documentation</h2>
                <a href={project.doc} target="_blank" rel="noopener noreferrer" className={buttonClasses("outline", "xs")}>
                  Ouvrir le PDF
                </a>
              </div>
              <div className="w-full bg-white rounded-xl overflow-hidden relative">
                {isDocLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
                    <div className="w-12 h-12 mb-4 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
                    <div className="text-secondary font-medium">Chargement du document...</div>
                  </div>
                )}
                <iframe
                  src={project.doc}
                  title={`Documentation du projet ${project.title}`}
                  className="w-full h-[75vh] border-0"
                  loading="lazy"
                  allowFullScreen
                  onLoad={() => setIsDocLoading(false)}
                />
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectCardPage;
