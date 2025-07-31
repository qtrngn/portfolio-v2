import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Carousel } from './Carousel';

export default function ProjectDetail({ project }) {

  const images = Array.isArray(project.image)
    ? project.image
    : project.image
    ? [project.image]
    : [];

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <header>
        <h2 className="text-2xl font-extrabold leading-snug text-gray-700 uppercase">{project.title}</h2>
        <p className="text-sm text-gray-500">{project.type}</p>
      </header>

      {/* IMAGES */}
      <Carousel images={images} altPrefix={project.title} />
      
      { /* DESCRIPTION */}
      <p>{project.description}</p>

        {/* FEATURES */}
      {project.features && (
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Features</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            {project.features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>
        </div>
      )}

      {/* TECH */}
      {project.technologies && (
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Technologies</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 rounded-full text-sm text-black border-2 border-black"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* LINKS */}
      <div className="flex gap-4 mt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
            aria-label="View source on GitHub"
          >
            <FaGithub className="text-black text-[18px]" />
          </a>
        )}
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
            aria-label="View live demo"
          >
            <FaExternalLinkAlt className="text-black text-[18px]" />
          </a>
        )}
      </div>
    </div>
);
}
