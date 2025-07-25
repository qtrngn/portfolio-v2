import { useState } from "react";
import projects from "../data/projectData";

const Projects = () => {
  const [selected, setSelected] = useState(projects[0].id);
  return (
    <>
      <section className="w-full px-6 py-40 bg-white ">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10">
          <h2 className="text-3xl font-extrabold leading-snug text-gray-700">
            PROJECTS
          </h2>

          {/* Left project list */}
          <ul className="w-full md:w-1/3 space-y-4">
            {projects.map((proj) => (
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
                      : "border-gray-400 group-hover:border-black"
                  }`}
                ></span>
                <span>
                  <span
                    className={`font-semibold transition-colors duration-200 ${
                      selected === proj.id
                        ? "text-black"
                        : "text-gray-900 group-hover:text-black"
                    }`}
                  >
                    {proj.client}
                  </span>{" "}
                  <span
                    className={`text-sm font-normal transition-colors duration-200 ${
                      selected === proj.id
                        ? "text-black"
                        : "text-gray-500 group-hover:text-black"
                    }`}
                  >
                    / {proj.title}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          {/* Right project grid */}
          <div className="w-full md:w-2/3 grid grid-cols-1 gap-10 cursor-pointer">
            {projects
              .filter((proj) => proj.id === selected)
              .map((proj) => (
                <div key={proj.id} className="flex flex-col">
                  <div className="overflow-hidden rounded-lg group relative">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="object-cover w-full h-[200px] sm:h-[280px] md:h-[360px]"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/80 transition duration-300 pointer-events-none"></div>
                  </div>
                  <h3 className="text-base font-semibold mt-4 tracking-tight text-gray-700">
                    {proj.title}
                  </h3>
                  <div className="text-xs text-gray-500 mt-1 flex flex-wrap gap-1">
                    <span>{proj.year}</span>
                    <span className="text-gray-300 mx-1">|</span>
                    {proj.tags.map((tag, i) => (
                      <span key={i}>
                        {tag}
                        {i < proj.tags.length - 1 && (
                          <span className="text-gray-400 mx-1">|</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
