import React from "react";
import Hero from "../sections/Hero";
import AboutSection from "../sections/AboutSection";
import ProjectSection from "../sections/ProjectsSection";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectSection />

      <div className="hidden md:block">
        <section id="closing" className="w-full bg-white px-6 pb-15">
          {/* heading */}
          <div className=" max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-wide leading-tight text-gray-700 uppercase text-center sm:text-left">
              Let’s turn this into a conversation!
            </h2>
            {/* CTA button */}

            <CTA to="/contact">Contact Me</CTA>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
