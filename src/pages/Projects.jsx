import { useState }            from "react";
import projects                from "../data/projectData";
import { projectDetails }      from "../data/projectDetails";
import ProjectDetail           from "../components/ProjectDetails";
import { Modal }               from "../components/Modal";

const Projects = () => {
   const featuredProjects = projects.filter((p) => p.featured);
  const [selected, setSelected]   = useState(projects[0].id);
  const [modalOpen, setModalOpen] = useState(false);
  const activeDetail = projectDetails.find((d) => d.id === selected);

  return (
    <>
      <section className="w-full px-6 py-20 md:py-40 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10">
          {/* Title */}
          <h2 className="text-3xl font-extrabold leading-snug text-gray-700 ">
            PROJECTS
          </h2>

          {/* Left project list */}
          <ul className="w-full md:w-1/3 space-y-4">
            {featuredProjects.map((proj) => (
              <li
                key={proj.id}
                onClick={() => setSelected(proj.id)}
                className={`flex items-start gap-2 cursor-pointer transition-colors duration-200 ${
                  selected === proj.id
                    ? "font-bold text-black"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                <span
                  className={`mt-1 inline-block w-4 h-4 rounded-full border-2 transition-colors duration-200 ${
                    selected === proj.id
                      ? "bg-black border-black"
                      : "border-gray-400 hover:border-black"
                  }`}
                />
                <span>
                  <span
                    className={`font-semibold transition-colors duration-200 ${
                      selected === proj.id
                        ? "text-black"
                        : "text-gray-900 hover:text-black"
                    }`}
                  >
                    {proj.client}
                  </span>{" "}
                  <span
                    className={`text-sm font-normal transition-colors duration-200 ${
                      selected === proj.id
                        ? "text-black"
                        : "text-gray-500 hover:text-black"
                    }`}
                  >
                    / {proj.title}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          {/* Right project card */}
          <div className="w-full md:w-1/3">
            {projects
              .filter((proj) => proj.id === selected)
              .map((proj) => (
                <div
                  key={proj.id}
                  className="cursor-pointer bg-black text-white rounded-2xl p-6 flex flex-col hover:shadow-2xl transition-shadow h-full"
                  onClick={() => setModalOpen(true)}
                >
                  {/* 1) Title */}
                  <h3 className="text-xl font-bold mb-4">{proj.title}</h3>

                  {/* 2) White Image Frame */}
                  <div className="relative bg-white rounded-lg overflow-hidden mb-4 flex-shrink-0">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-[200px] sm:h-[280px] md:h-[360px] object-cover"
                    />
                    <div className="absolute inset-0 group-hover:bg-black/50 transition duration-300 pointer-events-none" />
                  </div>

                  {/* 3) Tags */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {proj.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-white text-xs px-3 py-1 rounded-full border border-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {activeDetail && <ProjectDetail project={activeDetail} />}
      </Modal>
    </>
  );
};

export default Projects;
