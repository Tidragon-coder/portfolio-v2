import React, { useState } from "react";

import { Project } from "../../data/projects"; 
import skillsIcons from "../../data/skillsIcons";

import { Link } from "react-router-dom";

import Header from "../organisms/header";
import Footer from "../organisms/footer";

type Props = {
  project: Project;
};

export const ProjectCardPage = ({ project }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDocLoading, setIsDocLoading] = useState(true);
  const [docError, setDocError] = useState(false);
  
  return (
  <div>
    <Header />
      <section className=" text-[#F0FBF7] p-8 md:p-12 max-w-5xl mx-auto mt-36 rounded-2xl shadow-2xl">
      <h2 className="text-4xl font-bold text-center mb-10">&lt;{project.title}/&gt;</h2>

      <div className="flex flex-col items-center mb-8">
        <img
          src={project.logo}
          alt={`Logo du projet ${project.title}`}
          className="w-40 mb-4"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-10 bg-[#3A6D8C] rounded-xl p-6 mb-10">
        <img
          src={project.image}
          alt={`Image du projet ${project.title}`}
          className="rounded-xl w-full md:w-1/2"
        />
        <div className="flex flex-col justify-between w-full md:w-1/2">
          <div>
            <p className="text-left text-sm md:text-base">
              {isExpanded 
                ? project.longDescription
                : `${project.longDescription.slice(0, Math.floor(project.longDescription.length * 0.6))}...`
              }
            </p>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-[#0D0A4B] border-2 border-[#3A6D8C] text-white px-4 py-2 mt-4 rounded-lg font-bold hover:bg-[#1b1869] transition w-fit"
            >
              {isExpanded ? "Voir moins" : "Voir plus"}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="p-6 rounded-lg shadow-md md:w-1/2">
          <h3 className="text-xl font-bold uppercase mb-3">Attendus du projet</h3>
          <p className="text-[#3A6D8C] mb-4">
            Le projet {project.title} devait répondre à plusieurs exigences :
          </p>
          <ul className="space-y-2">
            {project.expected.map((item, i) => (
              <li
                key={i}
                className="relative pl-6 text-[#4f7c77] before:content-['✔'] before:absolute before:left-0 before:text-[#F0FBF7] before:text-xl"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

          <div className="p-6 md:w-1/2">
          <h3 className="text-xl font-bold uppercase mb-4">Technologies utilisées :</h3>
          <div className="flex flex-wrap gap-4 items-center">
            {project.technologies.map((tech) => {
              const svgIcon = skillsIcons[tech.toLowerCase()];
              return svgIcon ? (
                <div
                  key={tech}
                  dangerouslySetInnerHTML={{ 
                    __html: svgIcon.replace('<svg', '<svg width="60" height="60"')
                  }}
                  title={tech}
                  className="transition-transform hover:scale-110 "
                />
              ) : null;
            })}
          </div>
        </div>
      </div>

      <div className="mt-10">
        {project.doc && (
          <div className="mb-8">
            <h3 className="text-xl font-bold uppercase mb-4">Documentation</h3>
            <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg border border-[#3A6D8C] max-h-[80vh] relative">
              {isDocLoading && !docError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
                  <div className="w-12 h-12 mb-4 border-4 border-[#3A6D8C] border-t-transparent rounded-full animate-spin"></div>
                  <div className="text-[#3A6D8C] font-medium">Chargement du document...</div>
                </div>
              )}
              {docError ? (
                <div className="flex flex-col items-center justify-center h-[80vh] bg-gray-100">
                  <div className="text-[#3A6D8C] font-medium mb-2">Impossible de charger le document</div>
                  <button 
                    onClick={() => { setDocError(false); setIsDocLoading(true); }}
                    className="bg-[#3A6D8C] text-white px-4 py-2 rounded-lg hover:bg-[#2d5d70] transition"
                  >
                    Réessayer
                  </button>
                </div>
              ) : (
                <iframe 
                  src={project.doc}
                  title={`Documentation du projet ${project.title}`}
                  className="w-full h-[80vh] border-0"
                  loading="lazy"
                  allowFullScreen
                  onLoad={() => setIsDocLoading(false)}
                  onError={() => { setDocError(true); setIsDocLoading(false); }}
                />
              )}
            </div>
          </div>
        )}

        <div className="text-center">
          <Link
            to="/projet_elesia"
            className="inline-block bg-[#3A6D8C] text-white px-6 py-3 rounded-xl hover:bg-[#2d5d70] transition"
          >
            Projet suivant
          </Link>
        </div>
      </div>
      </section>
    <Footer />
  </div>
  );
};

export default ProjectCardPage;
