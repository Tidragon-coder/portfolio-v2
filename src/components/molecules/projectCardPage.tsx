import { Project } from "../../data/projects"; // si tu as exporté le type
import { Link } from "react-router-dom";

import Header from "../organisms/header";
import Footer from "../organisms/footer";

type Props = {
  project: Project;
};

export const ProjectCardPage = ({ project }: Props) => {
    
  return (
    <div>
    <Header />
    <section className="flex flex-col md:flex-row bg-[#0D0A4B] text-white rounded-2xl shadow-xl p-6 mb-8 mt-20">
      <div className="md:w-1/3">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl w-full"
        />
      </div>
      <div className="md:w-2/3 mt-4 md:mt-0 md:ml-6">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="mt-2">{project.longDescription}</p>

        <h4 className="mt-4 font-semibold">Attendus :</h4>
        <ul className="list-disc ml-6 text-sm">
          {project.expected.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>

        <h4 className="mt-4 font-semibold">Technologies :</h4>
        <div className="flex gap-3 mt-2 flex-wrap">
          {project.technologies.map((tech) => (
            <img
              key={tech}
              src={`/icons/${tech}.svg`}
              alt={tech}
              className="h-6"
              title={tech.toUpperCase()}
            />
          ))}
        </div>

        <Link
          to={project.slug}
          className="inline-block mt-4 px-4 py-2 bg-[#4F7C77] text-white rounded-xl hover:bg-opacity-80 transition"
        >
          Voir plus
        </Link>
      </div>
    </section>
    <Footer />
    </div>
  );
};

export default ProjectCardPage;
