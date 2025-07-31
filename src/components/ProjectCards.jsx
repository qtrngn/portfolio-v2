export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-gray-900 text-white rounded-2xl p-6 flex flex-col hover:shadow-2xl transition-shadow"
    >
      {/* 1) TITLE */}
      <h3 className="text-xl font-bold mb-4">
        {project.title}
      </h3>

      {/* 2) IMAGE FRAME */}
      <div className="bg-white rounded-lg overflow-hidden mb-4 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain object-center"
        />
      </div>

      {/* 3) TAGS */}
      <div className="mt-auto flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}


