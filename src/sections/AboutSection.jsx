import Skills from "../animation/Skills";
import CTA from "../components/CTA";

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-white px-6 pb-15">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-2">
        {/* section title */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#c0392b]" />
          <span className="text-sm sm:text-base font-semibold tracking-wider text-gray-700 uppercase">
            about
          </span>
        </div>

        {/* Heading content */}
        <div className="pl-0 md:pl-40">
          <p className="text-sm sm:text-base tracking-wide leading-relaxed">
            <span className="block font-bold text-black">
              "HI, I'M A WEB DEVELOPER WHO RECENTLY GRADUATED FROM BCIT, WHERE I
              DISCOVERED MY PASSION FOR CODING.
            </span>
            <span className="text-gray-500 font-medium block">
              SINCE THEN, I'VE BEEN DEVELOPING MY SKILLS AND EXPLORING NEW
              TECHNOLOGIES. THIS IS JUST THE BEGINNING OF MY JOURNEY, I'M
              EXCITED TO SEE WHERE IT TAKES ME."
            </span>
          </p>
        </div>
        {/* button */}
        <div className="mt-6 pl-0 flex justify-center md:pl-40 md:justify-start">
          <CTA to="/about">More about me</CTA>
        </div>
        {/* skills section */}
        <div className="hidden md:block">
        <Skills />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;