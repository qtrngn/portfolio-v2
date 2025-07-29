import React, { useState } from 'react';

export function Carousel({ images, altPrefix = 'Slide' }) {
  const [current, setCurrent] = useState(0);
  if (!images || images.length === 0) return null;

  const prev = () => setCurrent(c => (c > 0 ? c - 1 : c));
  const next = () => setCurrent(c => (c < images.length - 1 ? c + 1 : c));

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${altPrefix} ${idx + 1}`}
            className="w-full flex-shrink-0 object-cover h-48 sm:h-64 md:h-80 rounded-lg"
          />
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/80 hover:bg-white rounded-full p-2 disabled:opacity-50 text-[#c0392b]"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            onClick={next}
            disabled={current === images.length - 1}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/80 hover:bg-white rounded-full p-2 disabled:opacity-50 text-[#c0392b]"
            aria-label="Next slide"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}