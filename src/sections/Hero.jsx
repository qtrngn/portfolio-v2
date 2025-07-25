import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import CTA from "../components/CTA";
import HeroLottie from "../components/HeroLottie";
import MobileLottie from "../components/MobileLottie";

const Hero = () => {
  return (
    <section className="w-full py-15 flex items-center justify-center px-6 bg-white relative overflow-hidden pt-20">
      <div className="max-w-[1200px] w-full flex flex-col md:flex-row items-center justify-center md:justify-between min-h-[60vh] md:min-h-0 z-10">
            <MobileLottie />
        {/* Left side content */}
        <div className="flex flex-col gap-6 max-w-xl pt-0 md:pt-10 text-center md:text-left items-center md:items-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight uppercase text-black">
            HI! I'M QUYNH
            <br />
            I TURN CAFFEINE
            <br />
            INTO CODE ☕️
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-sm">
            "Web Developer Crafting Interfaces and Catching Bugs Before Users
            Do"
          </p>
          <CTA to="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            My Resume
          </CTA>

          {/* contact icons */}
          <div className="flex gap-3 mt-1 ml-1">
            <a
              href="mailto:nquynh1110@gmail.com"
              className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
            >
              <MdEmail className="text-black text-[18px]" />
            </a>

            <a
              href="https://www.linkedin.com/in/truc-quynh-nguyen-642a2633a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
            >
              <FaLinkedinIn className="text-black text-[16px]" />
            </a>
            <a
              href="https://github.com/qtrngn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
            >
              <FaGithub className="text-black text-[18px]" />
            </a>
          </div>

          {/* small title */}
          <div className="flex justify-between items-start mt-6 text-[11px] sm:text-xs text-gray-500 w-full max-w-2xl">
            <span className="whitespace-nowrap">WEB DEVELOPER</span>

            <span className="text-center w-[50%] leading-snug">
              OPEN TO FULL-TIME, PART-TIME, AND FREELANCER OPPORTUNITIES
            </span>

            <span className="whitespace-nowrap text-right">Vancouver, BC</span>
          </div>
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
