import { useState, useCallback, useRef, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Modal } from "../components/Modal";

export default function ProjectDetails({ project }) {
  if (!project) return null;

  return (
    <div className="space-y-8">
      {/*  header  */}
      <div className="sticky top-0 z-20 -mx-6 -mt-6 px-6 pt-6 pb-3 bg-transparent">
        <div className="w-full md:w-1/2 rounded-3xl bg-white/70 supports-[backdrop-filter]:bg-white/45 backdrop-blur-md backdrop-saturate-125 border border-black/5 shadow-[0_14px_48px_-16px_rgba(0,0,0,0.24)]">
          <div className="p-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight text-gray-900">
              {project.title}
            </h2>
            {project.type && (
              <p className="mt-1 text-sm text-gray-600">{project.type}</p>
            )}

            {/* Links header */}
            <div className="mt-3 flex items-center gap-2">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 grid place-items-center rounded-full bg-black/5 hover:bg-black/10 transition"
                  aria-label="Live demo"
                  title="Live demo"
                >
                  <FaExternalLinkAlt className="text-black text-[18px]" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 grid place-items-center rounded-full bg-black/5 hover:bg-black/10 transition"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <FaGithub className="text-black text-[18px]" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Body sections  */}
      {project.description && (
        <p className="text-gray-700">{project.description}</p>
      )}

      {project.problemStatement && (
        <Section title="Goal">
          <p className="text-gray-700">{project.problemStatement}</p>
        </Section>
      )}

      {Array.isArray(project.developmentProcess) &&
        project.developmentProcess.length > 0 && (
          <Section title="Development Process">
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {project.developmentProcess.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </Section>
        )}

      {Array.isArray(project.features) && project.features.length > 0 && (
        <Section title="Features">
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {project.features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>
        </Section>
      )}

      {Array.isArray(project.technologies) &&
        project.technologies.length > 0 && (
          <Section title="Technologies">
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
          </Section>
        )}

      {project.outcome && (
        <Section title="Outcome / Results">
          <p className="text-gray-700">{project.outcome}</p>
        </Section>
      )}

      {Array.isArray(project.futureImprovements) &&
        project.futureImprovements.length > 0 && (
          <Section title="Future Improvements">
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {project.futureImprovements.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </Section>
        )}

      {/*  Screenshots */}
      {Array.isArray(project.screenshots) && project.screenshots.length > 0 && (
        <ScreenshotsBlock
          screenshots={project.screenshots}
          title={project.title}
        />
      )}
    </div>
  );
}

/*  helpers  */

function Section({ title, children }) {
  return (
    <section>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <div className="mt-2">{children}</div>
    </section>
  );
}

/*  screenshots block  */

function ScreenshotsBlock({ screenshots, title }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = useCallback((i) => {
    setIndex(i);
    setLightboxOpen(true);
  }, []);

  return (
    <section>
      {/* screenshot container */}
      <div
        className="
          rounded-3xl
          bg-neutral-900/70 supports-[backdrop-filter]:bg-neutral-900/45
          backdrop-blur-xl backdrop-saturate-150
          shadow-[0_20px_70px_-20px_rgba(0,0,0,0.6)]
          relative text-white
        "
      >
      
        <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_1px_rgba(255,255,255,0.06)]" />
        <div className="p-5">
          {/* Horizontal scroll */}
          <div className="relative">
            <div
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2"
              role="list"
              aria-label={`${title} screenshots`}
            >
              {screenshots.map((shot, i) => (
                <button
                  key={i}
                  onClick={() => openAt(i)}
                  aria-label={`Open screenshot ${i + 1}`}
                >
                  <img
                    src={shot.src}
                    alt={shot.caption || `${title} screenshot ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 md:group-hover:scale-105"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={screenshots}
          index={index}
          onClose={() => setLightboxOpen(false)}
          setIndex={setIndex}
        />
      )}
    </section>
  );
}

function Lightbox({ images, index, setIndex, onClose }) {
  const startX = useRef(0);
  const deltaX = useRef(0);

  const clampIndex = useCallback(
    (i) => Math.max(0, Math.min(i, images.length - 1)),
    [images.length]
  );
  const prev = useCallback(
    () => setIndex((i) => clampIndex(i - 1)),
    [setIndex, clampIndex]
  );
  const next = useCallback(
    () => setIndex((i) => clampIndex(i + 1)),
    [setIndex, clampIndex]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, onClose]);

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    deltaX.current = e.touches[0].clientX - startX.current;
  };
  const onTouchEnd = () => {
    const t = 50;
    if (deltaX.current > t) prev();
    if (deltaX.current < -t) next();
    startX.current = 0;
    deltaX.current = 0;
  };

  const name =
    images[index]?.name || images[index]?.caption || `Screenshot ${index + 1}`;

  return (
    <Modal
      isOpen
      onClose={onClose}
      closeOnEsc
      ariaLabel={name}
      /* backdrop */
      backdropClassName="bg-black/60 backdrop-blur-sm"
      closeButtonClassName="text-white/90 bg-white/10 hover:bg-white/20"
      showCloseButton
    >
      {/* header */}
      <div className="sticky top-0 z-10 px-5 pt-5 pb-3">
        <div
          className="
          rounded-2xl bg-white/10 supports-[backdrop-filter]:bg-black/12
          backdrop-blur-lg shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]
        "
        >
          <div className="px-4 py-3 relative">
            
            <div className="flex items-end justify-between gap-4">
              <div className="min-w-0 text-2xl sm:text-3xl font-semibold leading-tight truncate text-black">
                {name}
              </div>
              <div className="shrink-0 text-sm opacity-80 text-black">
                {index + 1}/{images.length}
              </div>
            </div>
          </div>
        </div>
      </div>
{/* Image area */}
      <div
        className="relative flex-1 flex items-center justify-center select-none px-5 py-6"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <button
          onClick={prev}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full bg-black/10 hover:bg-white/20 text-white"
          aria-label="Previous screenshot"
        >
          ‹
        </button>

        <div
          className="
          rounded-2xl
          bg-white/10 supports-[backdrop-filter]:bg-white/10
          backdrop-blur-lg
          shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]
          p-3 relative
        "
        >
          <div className="pointer-events-none absolute left-3 right-3 top-3 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          <img
            src={images[index]?.src}
            alt={name}
            className="max-h-[70vh] max-w-[90vw] object-contain"
          />
          <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-10 bg-gradient-to-t from-black/20 to-transparent rounded-b-2xl" />
        </div>

        <button
          onClick={next}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full bg-black/10 hover:bg-white/20 text-white"
          aria-label="Next screenshot"
        >
          ›
        </button>
      </div>
    </Modal>
  );
}
