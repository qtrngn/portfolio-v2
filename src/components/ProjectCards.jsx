export default function ProjectCards({ projects, onSelect }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} onClick={() => onSelect?.(p)} />
      ))}
    </div>
  );
}

export function ProjectCard({ project, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-left bg-gray-900 text-white rounded-2xl p-6 flex flex-col gap-3 hover:shadow-2xl transition-shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
      aria-label={`Open ${project.title} details`}
    >
      <h3 className="text-xl font-bold">{project.title}</h3>

      <div className="text-xs text-gray-300">{project.type}</div>

      {project.description && (
        <p className="text-gray-200 text-sm line-clamp-3">{project.description}</p>
      )}

      {Array.isArray(project.tags) && project.tags.length > 0 && (
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
      )}
    </button>
  );
}
