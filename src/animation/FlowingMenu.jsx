import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

// Component: renders a vertical list of items that slide in a quote on hover
function FlowingMenu({ items = [] }) {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0 divide-y divide-gray-200">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
}

// Each MenuItem shows its `text`, and slides in its `quote` from the closest edge
function MenuItem({ text, quote }) {
  const itemRef = useRef(null);
  const quoteRef = useRef(null);
  const animationDefaults = { duration: 0.6, ease: 'expo' };

  useLayoutEffect(() => {
    if (quoteRef.current) {
      gsap.set(quoteRef.current, { y: '100%' });
    }
      }, []);
  // Determine whether the mouse entered/exited from top or bottom
  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topDist < bottomDist ? 'top' : 'bottom';
  };

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !quoteRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - left, ev.clientY - top, width, height);

    gsap.timeline({ defaults: animationDefaults })
      .set(quoteRef.current, { y: edge === 'top' ? '-100%' : '100%' })
      .to(quoteRef.current, { y: '0%' });
  };

  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !quoteRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - left, ev.clientY - top, width, height);

    gsap.timeline({ defaults: animationDefaults })
      .to(quoteRef.current, { y: edge === 'top' ? '-100%' : '100%' });
  };

  return (
    <div ref={itemRef} className="flex-1 relative overflow-hidden">
      <a
        className="w-full h-full flex cursor-pointer uppercase font-semibold text-black mt-5 "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
      <div
        ref={quoteRef}
        className="absolute inset-0 flex p-4 bg-black pointer-events-none bottom-[1px]"
      >
        <p className="text-white text-center">{quote}</p>
      </div>
    </div>
  );
}

export default FlowingMenu;