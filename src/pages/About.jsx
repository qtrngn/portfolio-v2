import Profile from "../assets/images/profile.webp";
import ValuesSection from "../sections/ValuesSection";
import CTA from "../components/CTA";
import SEO from "../components/SEO";
import AboutMobile from "../components/AboutMobile";


const About = () => {
  return (
    <>
    <SEO
        title="About Me | Truc Quynh Nguyen"
        description="My journey and values as a front‑end developer."
        canonical="https://trucquynhng.com/about"
      />
    <AboutMobile/>
    <section className="relative max-w-[1200px] mx-auto hidden md:block">
      {/* Profile photo */}
      <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden ">
        <img
          src={Profile}
          alt="Profile photo"
          className="w-[380px] h-auto pt-25"
        />
      </div>
      {/* Text content */}
      <div className="relative z-10 pt-30 pl-30">
        {/* Paragraph section */}
        <div className=" mt-8 w-1/2 ml-100">
          <p className="text-gray-700 leading-relaxed">
            My career began outside of tech. Following graduation from a
            hospitality program, I spent several years in that field, developing
            strong interpersonal skills, maintaining composure in high-pressure
            situations, and becoming comfortable with rapid adaptation.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Following careful consideration, I returned to school for web
            development. I’ve expanded my skill set across both front-end and
            back-end areas, and I’m excited by the progress I’m making and the
            direction of my career.
          </p>
        </div>
        {/* Header section */}
        <h2 className=" md:text-6xl lg:text-8xl font-extrabold leading-tight w-full pt-15 pl-1">
          <span className="text-white">META</span>DATA
          <span className="block pl-63 text-black">OF ME</span>
        </h2>
      </div>
     
        
    </section>

    </>
    
  );
};

export default About;
