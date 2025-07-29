import { useState } from "react";

import CTA from "../components/CTA";
import projects from "../data/projectData";
import { projectDetails } from "../data/projectDetails";
import { Modal } from "../components/Modal";
import ProjectDetail from "../components/ProjectDetails";



const ProjectSection = () => {
  const featuredProjects = projects.filter(p => p.featured);
   const [selectedId, setSelectedId] = useState(null);
   const [modalOpen, setModalOpen] = useState(false);
   const activeProject = projectDetails.find((d) => d.id === selectedId);
 
   const handleClick = (id) => {
     setSelectedId(id);
     setModalOpen(true);
   };

 
  return (
   
   <>
   <section id="project" className="w-full bg-white px-6 pb-15">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-2">
        {/* section title */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#c0392b]" />
          <span className="text-sm sm:text-base font-semibold tracking-wider text-gray-700 uppercase">
            Projects
          </span>
        </div>
        <div className="flex justify-between items-start max-w-[1200px] mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug text-gray-700">
            <span>MY NEWEST</span> 
            <br/>
            <span>PROJECTS</span>
          </h2>
          <p className="hidden md:block max-w-[350px] text-sm text-gray-500 mt-1">
           "From clueless to code: How I learned to build things that work"
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
      {featuredProjects.map((proj) => (
            <div
              key={proj.id}
              className="flex flex-col cursor-pointer"
              onClick={() => handleClick(proj.id)}
            >
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
        <div className="flex justify-center mt-4 col-span-full ">
          <CTA to="/projects">View all projects</CTA>
        </div>
        {/* border section
        <div className="border-t border-gray-200 col-span-full" /> */}
      </div>
    </section>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      {activeProject && <ProjectDetail project={activeProject} />}
    </Modal>
    </>
  );
};
export default ProjectSection;


