import { FaLinkedinIn } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";

import CTA from "../components/CTA";
import Orb from "../animation/Orb";
import InfiniteScroll from "../animation/infinitiveScroll";

// import images
import Image1 from "../assets/images/img1.png";
import Image2 from "../assets/images/img2.png";
import Image3 from "../assets/images/img3.png";
import Image4 from "../assets/images/img4.png";

const Hero = () => {
  // photos
  const items = [
    { content: <img src={Image2} alt="photo" className="w-45 opacity-80 rounded-lg" /> },
    { content: <img src={Image3} alt="photo" className="w-45 opacity-80 rounded-lg" /> },
    { content: <img src={Image4} alt="photo" className="w-45 opacity-80 rounded-lg" /> },
    { content: <img src={Image1} alt="photo" className="w-45 opacity-80 rounded-lg" /> },
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] w-full flex flex-col md:flex-row items-center justify-between z-10">
        {/* Left side content */}
        <div className="flex flex-col gap-6 max-w-xl">
          <h1 className="text-5xl font-extrabold leading-tight uppercase text-black">
            HI! I'M QUYNH
            <br />
            I TURN CAFFEINE
            <br />
            INTO CODE ☕️
          </h1>
          <p className="text-gray-600 max-w-sm">
            "Web Developer Crafting Seamless Interfaces and Catching Bugs Before
            Users Do"
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
              href="tel:+17786361098"
              className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
            >
              <MdPhone className="text-black text-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/truc-quynh-nguyen-642a2633a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
            >
              <FaLinkedinIn className="text-black text-[16px]" />
            </a>
          </div>

          {/* small title */}
          <div className="flex gap-6 mt-6 text-xs text-gray-500">
            <span className="mr-6">WEB DEVELOPER</span>
            <span className="flex-1 min-w-0">
              OPEN TO FULL-TIME, PART-TIME, AND FREELANCER OPPORTUNITIES
            </span>
            <span className="ml-6">Vancouver, BC</span>
          </div>
        </div>

        {/* Orb */}
        <div className="w-full md:w-[80%] h-[500px] relative flex items-center justify-center">
          {/* background infinitive scroll images (under the orb) */}
          <div
            className="absolute w-[60%] h-[60%] z-0 overflow-hidden rounded-full"
          >
            <InfiniteScroll
              items={items}
              isTilted={false}
              tiltDirection="left"
              autoplay={true}
              autoplaySpeed={0.1}
              autoplayDirection="down"
              pauseOnHover={true}
              itemMinHeight={160} // Match image height
              negativeMargin="0" // Remove negative margins
              width="100%" // Full width
            />
          </div>
          <div className="relative z-10 w-full h-full">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
