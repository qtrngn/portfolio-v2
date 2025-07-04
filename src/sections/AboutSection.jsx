import React from "react";
import Skills from "../animation/Skills";
import CTA from "../components/CTA";


const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-white px-6 pb-15">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-2">
        {/* section title */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-600" />
          <span className="text-l font-semibold tracking-wider text-gray-700 ">
            about
          </span>
        </div>

        {/* Heading content */}
        <p className="text-sm leading-relaxed">
          <span className="font-bold text-black">
            
            "HI, I'M A WEB DEVELOPER WHO RECENTLY GRADUATED FROM BCIT,
            WHERE I DISCOVERED MY PASSION FOR CODING.
          </span>{" "}
          <span className="text-gray-500 font-medium">
            SINCE THEN, I'VE BEEN DEVELOPING MY SKILLS AND EXPLORING NEW
            TECHNOLOGIES. THIS IS JUST THE BEGINNING OF MY JOURNEY, I'M EXCITED
            TO SEE WHERE IT TAKES ME."
          </span>
        </p>
       
      <Skills />
      <div className="flex justify-center">
      <CTA to="/about">More about me</CTA>
      </div>
      </div>
     
    </section>
  );
};

export default AboutSection;
