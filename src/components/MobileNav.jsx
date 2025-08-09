import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUserAlt,
  FaFolderOpen,
  FaEnvelope,
  FaPlus,
  FaTimes,
} from "react-icons/fa";

const navItems = [
  {
    href: "/",
    icon: <FaHome className="text-black text-[16px] " />,
    label: "Home",
  },
  {
    href: "/about",
    icon: <FaUserAlt className="text-black text-[16px]" />,
    label: "About",
  },
  {
    href: "/projects",
    icon: <FaFolderOpen className="text-black text-[16px]" />,
    label: "Projects",
  },
  {
    href: "/contact",
    icon: <FaEnvelope className="text-black text-[16px]" />,
    label: "Contact",
  },
];

const MobileFabNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[999] block md:hidden">
      <AnimatePresence>
        {open && (
          <motion.div
            key="nav-items"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { ease: "easeOut", duration: 0.4 },
            }}
            exit={{
              opacity: 0,
              y: 20,
              transition: { ease: "easeIn", duration: 0.3 },
            }}
            className="flex flex-col items-end gap-3 mb-4"
          >
            {navItems.map(({ href, icon, label }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={href}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#c0392b] transition"
                >
                  {icon}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105  transition"
        aria-label="Toggle Navigation"
      >
        {open ? (
          <FaTimes className="text-[18px]" />
        ) : (
          <FaPlus className="text-[18px]" />
        )}
      </button>
    </div>
  );
};

export default MobileFabNav;
