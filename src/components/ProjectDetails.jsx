import { useState, useCallback, useRef, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Modal } from "../components/Modal";

export default function ProjectDetails({ project }) {
  if (!project) return null;

  return (
    <div className="space-y-8">
      {/* Header */}
      <header>
        <h2 className="text-2xl font-extrabold leading-snug text-gray-800">
          {project.title}
        </h2>
        <p className="text-sm text-gray-500">{project.type}</p>
      </header>

      {/* Description */}
      {project.description && (
        <p className="text-gray-700">{project.description}</p>
      )}

      {/* Problem / Goal */}
      {project.problemStatement && (
        <Section title="Goal">
          <p className="text-gray-700">{project.problemStatement}</p>
        </Section>
      )}

      {/* Development Process */}
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

      {/* Screenshots */}
      {Array.isArray(project.screenshots) && project.screenshots.length > 0 && (
        <ScreenshotsCarousel
          screenshots={project.screenshots}
          title={project.title}
        />
      )}

      {/* Features */}
      {Array.isArray(project.features) && project.features.length > 0 && (
        <Section title="Features">
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {project.features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>
        </Section>
      )}

      {/* Technologies */}
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

      {/* Outcome / Results */}
      {project.outcome && (
        <Section title="Outcome / Results">
          <p className="text-gray-700">{project.outcome}</p>
        </Section>
      )}

      {/* Future Improvements */}
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

      {/* Links */}
      <div className="flex gap-4">
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

/* ---------- helpers ---------- */

function Section({ title, children }) {
  return (
    <section>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <div className="mt-2">{children}</div>
    </section>
  );
}

/* ---------- screenshots carousel + lightbox ---------- */

function ScreenshotsCarousel({ screenshots, title }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = useCallback((i) => {
    setIndex(i);
    setLightboxOpen(true);
  }, []);

  return (
    <section>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Images</h3>

      {/* horizontal scroll with snap */}
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
              className="group relative flex-none w-[320px] sm:w-[380px] md:w-[440px] aspect-[16/9] rounded-xl overflow-hidden snap-start bg-gray-100"
              aria-label={`Open screenshot ${i + 1}`}
            >
              <img
                src={shot.src}
                alt={shot.caption || `${title} screenshot ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 md:group-hover:scale-105"
                loading="lazy"
              />
              {shot.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs sm:text-sm p-2">
                  {shot.caption}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={screenshots}
          index={index}
          onClose={() => setLightboxOpen(false)}
          setIndex={setIndex}
          title={title}
        />
      )}
    </section>
  );
}

function Lightbox({ images, index, setIndex, onClose, title }) {
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

  // Arrow key navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, onClose]);

  // Touch swipe
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    deltaX.current = e.touches[0].clientX - startX.current;
  };
  const onTouchEnd = () => {
    const threshold = 50;
    if (deltaX.current > threshold) prev();
    if (deltaX.current < -threshold) next();
    startX.current = 0;
    deltaX.current = 0;
  };

  return (
    <Modal
      isOpen
      onClose={onClose}
      closeOnEsc
      ariaLabel={`${title} screenshots`}
      backdropClassName="bg-black/90 backdrop-blur-sm"
      panelClassName="relative bg-transparent w-full h-full max-w-none max-h-none flex flex-col"
      closeButtonClassName="text-white bg-white/10 hover:bg-white/20"
      showCloseButton
    >
      {/* Top bar — extra right padding so it never sits under the floating X */}
      <div className="flex items-center justify-between p-3 pr-16 sm:pr-20 text-white">
        <span className="text-sm truncate pr-3">{title}</span>
        <div className="flex items-center gap-3">
          <span className="text-xs opacity-70">
            {index + 1}/{images.length}
          </span>
        </div>
      </div>

      {/* Image area */}
      <div
        className="relative flex-1 flex items-center justify-center select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <button
          onClick={prev}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
          aria-label="Previous screenshot"
        >
          ‹
        </button>

        <img
          src={images[index]?.src}
          alt={images[index]?.caption || `${title} screenshot ${index + 1}`}
          className="max-h-[80vh] max-w-[92vw] object-contain"
        />

        <button
          onClick={next}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
          aria-label="Next screenshot"
        >
          ›
        </button>
      </div>

      {/* Caption */}
      {images[index]?.caption && (
        <div className="px-4 pb-5 text-center text-white/90 text-sm">
          {images[index].caption}
        </div>
      )}
    </Modal>
  );
}
