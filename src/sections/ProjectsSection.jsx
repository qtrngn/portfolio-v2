import CTA from "../components/CTA";
import projects from "../data/projectData";


const ProjectSection = () => {
  return (
    <section id="project" className="w-full bg-white px-6 pb-15">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-2">
        {/* section title */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-600" />
          <span className="text-l font-semibold tracking-wider text-gray-700 uppercase">
            Projects
          </span>
        </div>
        <div className="flex justify-between items-start max-w-[1200px] mb-8">
          <h2 className="text-3xl font-extrabold leading-snug text-gray-700">
            MY NEWEST <br /> PROJECTS
          </h2>
          <p className="max-w-[350px] text-s text-gray-500 mt-1">
            A showcase of how I went from knowing nothing about code to creating
            projects that work.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
        {projects.map((proj, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="overflow-hidden rounded-lg group relative">
              <img
                src={proj.image}
                alt={proj.title}
                className="object-cover w-full h-[360px]"
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
        {/* border section */}
        <div className="border-t border-gray-200 col-span-full" />
      </div>
    </section>
  );
};
export default ProjectSection;
