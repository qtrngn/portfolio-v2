import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const cursorY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const enterHover = () => setIsHovered(true);
    const leaveHover = () => setIsHovered(false);

    window.addEventListener("mousemove", move);
    document.querySelectorAll(".hover-target").forEach((el) => {
      el.addEventListener("mouseenter", enterHover);
      el.addEventListener("mouseleave", leaveHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll(".hover-target").forEach((el) => {
        el.removeEventListener("mouseenter", enterHover);
        el.removeEventListener("mouseleave", leaveHover);
      });
    };
  }, );

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
    >
      <div
        className={`w-6 h-6 rounded-full transition-all duration-200 ease-out ${
          isHovered ? "scale-100 bg-black" : "scale-100 bg-[#c0392b]"
        }`}
      />
    </motion.div>
  );
};

export default CustomCursor;
