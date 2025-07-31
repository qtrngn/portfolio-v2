import Profile from "../assets/images/profile.webp";
import ValuesSection from "../sections/ValuesSection";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="relative max-w-[1200px] mx-auto ">
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
        <h2 className="text-3xl md:text-6xl lg:text-8xl font-extrabold leading-tight w-full pt-10 pl-3">
          <span className="text-white">META</span>DATA
          <span className="block pl-63">OF ME</span>
        </h2>
      </div>
      {/* Sub text */}
      <div className="text-2xl font-bold mt-10 uppercase">
        <h3>My Values</h3>
      </div>
      <ValuesSection />
      <div className="max-w-[1200px] mx-auto flex justify-center ">
        <CTA to="/contact">Contact Me</CTA>
        </div>
    </section>
  );
};

export default About;
