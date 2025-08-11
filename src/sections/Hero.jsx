import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import CTA from "../components/CTA";
import HeroLottie from "../components/HeroLottie";
import MobileLottie from "../components/MobileLottie";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const openResume = (e) => {
    e.preventDefault();
    window.open("/Resume.pdf", "_blank", "noopener,noreferrer");
  };
  return (
    <section className="w-full md:h-screen flex items-center justify-center px-6 bg-white relative overflow-hidden pt-20">
      <div className="max-w-[1200px] w-full flex flex-col md:flex-row items-center justify-center md:justify-between min-h-[60vh] md:min-h-0 z-10">
        <MobileLottie />

        {/* Left side content */}
        <div className="flex flex-col gap-6 max-w-xl pt-0 md:pt-10 text-center md:text-left items-center md:items-start">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight uppercase"
          >
            <Typewriter
              words={["HI! I'M QUYNH, I TURNED CAFFEINE INTO CODE ☕️"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              delaySpeed={1000}
            />
          </motion.h1>

          {/* subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.6 }}
            className="text-sm sm:text-base text-gray-600 max-w-sm"
          >
            “Web Developer Crafting Interfaces…”
          </motion.p>

          {/* CTA */}
          <CTA
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={openResume}
          >
            My Resume
          </CTA>

          {/* contact icons */}
          <div className="flex gap-3 mt-1 ml-1">
            <motion.a
              href="mailto:nquynh1110@gmail.com"
              className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
              whileHover={{ scale: 1.2 }}
            >
              <MdEmail className="text-black text-[18px]" />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/truc-quynh-nguyen-642a2633a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedinIn className="text-black text-[16px]" />
            </motion.a>

            <motion.a
              href="https://github.com/qtrngn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub className="text-black text-[18px]" />
            </motion.a>
          </div>

          {/* small title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.6 }}
            className="flex justify-between items-start mt-6 text-[11px] sm:text-xs text-gray-500 w-full max-w-2xl"
          >
            <span className="whitespace-nowrap">WEB DEVELOPER</span>
            <span className="text-center w-[50%] leading-snug">
              OPEN TO FULL-TIME, PART-TIME, AND FREELANCER OPPORTUNITIES
            </span>
            <span className="whitespace-nowrap text-right">Vancouver, BC</span>
          </motion.div>
        </div>

        {/* Right side animation */}
        <div className="hidden md:block">
          <HeroLottie />
        </div>
      </div>
    </section>
  );
};

export default Hero;
