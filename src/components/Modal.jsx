import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const cx = (...classes) => classes.filter(Boolean).join(" ");

export function Modal({
  isOpen,
  onClose,
  children,
  ariaLabel,
  closeOnEsc = true,
  showCloseButton = true,
  backdropClassName,
  panelClassName,
  closeButtonClassName,
}) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    wrapperRef.current?.focus();
    return () => { document.body.style.overflow = prev || ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !closeOnEsc) return;
    const onKey = (e) => { if (e.key === "Escape") onClose?.(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeOnEsc, onClose]);

  if (!isOpen) return null;


  const backdropBase =
    "fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm";
  const panelBase =
    "relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl " +
    "supports-[backdrop-filter]:bg-white/80 " +
    "backdrop-blur-2xl backdrop-saturate-150 ring-1 ring-black/5 shadow-2xl";
  const closeBtnBase =
    "absolute top-3 right-3 z-50 grid place-items-center h-10 w-10 rounded-full " +
    "text-gray-700 bg-black/5 hover:bg-black/10 hover:text-[#c0392b]";

  return createPortal(
    <div
      ref={wrapperRef}
      className={cx(backdropBase, backdropClassName)}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      tabIndex={-1}
      onClick={onClose}
    >
      <div className={cx(panelBase, panelClassName)} onClick={(e) => e.stopPropagation()}>
        <div className="pointer-events-none absolute inset-0 rounded-3xl">
          <div className="absolute -inset-[1px] rounded-3xl opacity-30 blur-[1px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(0,0,0,.08),transparent_30%,rgba(0,0,0,.08))]" />
        </div>

        <div
          className="relative overflow-y-auto flex-1 pt-6 pb-6 px-6 scrollbar-none -ms-overflow-style:none [&::-webkit-scrollbar]:hidden"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {children}
        </div>

        {showCloseButton && (
          <button onClick={onClose} aria-label="Close" className={cx(closeBtnBase, closeButtonClassName)}>
            ✕
          </button>
        )}
      </div>
    </div>,
    document.body
  );
}
