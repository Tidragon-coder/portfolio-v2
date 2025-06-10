import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import ProjectCardPage from "../molecules/projectCardPage";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="text-white p-4">Projet introuvable.</div>;
  }

  return (
    <div className="p-6">
      <ProjectCardPage project={project} />
    </div>
  );
};

export default ProjectPage;
