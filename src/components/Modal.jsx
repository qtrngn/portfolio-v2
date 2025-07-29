
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export function Modal({ isOpen, onClose, children }) {

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      role="dialog"
      aria-modal="true"
      onClick={onClose}          
    >
      <div
        className="relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()} 
      >
   
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="text-xl hover:text-[#c0392b] transition-colors"
          >
            ✕
          </button>
        </div>

   
        <div
          className="
            overflow-y-auto flex-1 pt-6 pb-6 px-6
            /* hide scrollbar */
            scrollbar-none
            -ms-overflow-style: none
            [&::-webkit-scrollbar]:hidden
            scroll-smooth
          "
          onWheel={e => e.stopPropagation()}
          onTouchMove={e => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}


