// src/components/ProjectSection.jsx
import { useState, useRef } from "react";
import CTA from "../components/CTA";
import projects from "../data/projectData";
import { projectDetails } from "../data/projectDetails";
import { Modal } from "../components/Modal";
import ProjectDetail from "../components/ProjectDetails";

export default function ProjectSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const [selectedId, setSelectedId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const activeProject = projectDetails.find((d) => d.id === selectedId);

  const handleClick = (id) => {
    setSelectedId(id);
    setModalOpen(true);
  };

  const containerRef = useRef(null);

  return (
    <>
      <section id="project" className="w-full bg-white px-6 pb-15">
        {/* Section Header */}
        <div className="max-w-[1200px] mx-auto flex flex-col gap-2 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#c0392b]" />
            <span className="text-sm sm:text-base font-semibold tracking-wider text-gray-700 uppercase">
              Projects
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-700">
            MY NEWEST
            <br />
            PROJECTS
          </h2>
          <p className="hidden md:block max-w-[350px] text-sm text-gray-500">
            “From clueless to code: How I learned to build things that work”
          </p>
        </div>

        {/* Scroll container */}
        <div
          ref={containerRef}
          className="max-w-[1200px] mx-auto overflow-x-auto overflow-y-hidden hide-scrollbar scroll-smooth"
          style={{ overscrollBehavior: "contain" }}
          onWheel={(e) => {
            e.preventDefault();
            e.stopPropagation();

            containerRef.current.scrollBy({
              left: e.deltaY * 1.2,
              behavior: "smooth",
            });
          }}
        >
          <div className="flex gap-8 py-4">
            {featuredProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => handleClick(proj.id)}
                className="flex-none w-full sm:w-1/2 lg:w-1/3"
              >
                <div className="cursor-pointer bg-black text-white rounded-2xl p-6 flex flex-col hover:shadow-2xl transition-shadow h-full">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4">{proj.title}</h3>

                  {/* Image */}
                  <div className="bg-white rounded-lg overflow-hidden mb-4 flex-shrink-0">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-[200px] sm:h-[280px] md:h-[360px] object-cover"
                    />
                  </div>

                  {/* Tags */}
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
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-[1200px] mx-auto mt-8 flex justify-center">
          <CTA to="/projects">View all projects</CTA>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {activeProject && <ProjectDetail project={activeProject} />}
      </Modal>
    </>
  );
}
