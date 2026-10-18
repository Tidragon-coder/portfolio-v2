import { Link, useParams } from "react-router-dom";
import { buttonClasses } from "../atoms/Button";
import { projects } from "../../data/projects";
import ProjectCardPage from "../molecules/projectCardPage";

import Header from "../organisms/header";
import Footer from "../organisms/footer";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div>
      <Header />
        <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-6 pt-32 text-center">
          <p className="text-3xl md:text-4xl font-bold">Projet introuvable...</p>
          <Link to="/projects" className={buttonClasses("outline")}>
            &larr; Retour aux projets
          </Link>
        </div>
      <Footer />
      </div>

  )}

  return (
    <div >
      <ProjectCardPage project={project} />
    </div>
  );
};

export default ProjectPage;
