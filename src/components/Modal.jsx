import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal({
  isOpen,
  onClose,
  children,
  backdropClassName = "bg-black/70",
  panelClassName = "relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col",
  closeOnEsc = true,
  ariaLabel,
  showCloseButton = true,
  closeButtonClassName = "text-gray-700 bg-black/5 hover:bg-black/10 hover:text-[#c0392b]",
}) {
  const wrapperRef = useRef(null);

  // Body scroll lock + initial focus
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    wrapperRef.current?.focus();
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [isOpen]);

  // Escape to close
  useEffect(() => {
    if (!isOpen || !closeOnEsc) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeOnEsc, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={wrapperRef}
      className={`fixed inset-0 z-[100] flex items-center justify-center ${backdropClassName}`}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      tabIndex={-1}
      onClick={onClose}
    >
      <div
        className={panelClassName}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Content scroll area */}
        <div
          className="overflow-y-auto flex-1 pt-6 pb-6 px-6 scrollbar-none -ms-overflow-style:none [&::-webkit-scrollbar]:hidden"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {children}
        </div>

        {/* Floating Close button (fixed size, reserves space easily) */}
        {showCloseButton && (
          <button
            onClick={onClose}
            aria-label="Close"
            className={`absolute top-3 right-3 z-50 grid place-items-center h-10 w-10 rounded-full ${closeButtonClassName}`}
          >
            ✕
          </button>
        )}
      </div>
    </div>,
    document.body
  );
}
