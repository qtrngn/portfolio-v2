import { FaLinkedinIn, FaGithub} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


import CTA from "../components/CTA";

const Hero = () => {
  return (
    <section className="w-full py-15 flex items-center justify-center px-6 bg-white relative overflow-hidden pt-24 ">
      <div className="max-w-[1200px] w-full flex flex-col md:flex-row items-center justify-between z-10">
        {/* Left side content */}
        <div className="flex flex-col gap-6 max-w-xl pt-10">
          <h1 className="text-5xl font-extrabold leading-tight uppercase text-black">
            HI! I'M QUYNH
            <br />
            I TURN CAFFEINE
            <br />
            INTO CODE ☕️
          </h1>
          <p className="text-gray-600 max-w-sm">
            "Web Developer Crafting Interfaces and Catching Bugs Before Users
            Do"
          </p>
          <CTA to="/contact">My Resume</CTA>

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
          <div className="flex gap-9 mt-6 text-xs text-gray-500">
            <span className="mr-6">WEB DEVELOPER</span>
            <span className="flex-1 min-w-0">
              OPEN TO FULL-TIME, PART-TIME, AND FREELANCER OPPORTUNITIES
            </span>
            <span className="flex">Vancouver, BC</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
