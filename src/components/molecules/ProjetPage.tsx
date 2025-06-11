import { useParams } from "react-router-dom";
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
        <div className="text-white text-4xl p-40 mb-12 ">Projet introuvable...</div>
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
