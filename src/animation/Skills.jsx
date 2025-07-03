import Marquee from "react-fast-marquee";


const Skills = () => {
  return (
    
    <div className="max-w-[1200px] mx-auto flex flex-col gap-2 py-2">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-2">
        {/* section title */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-600" />
          <span className="text-l font-semibold tracking-wider text-gray-700 ">
            skills
          </span>
        </div>
      <Marquee pauseOnHover={true} speed={50} gradient={true}>
        {[
          "HTML",
          "CSS",
          "Javascript",
          "React",
          "React Native",
          "Tailwind",
          "Git",
          "Firebase",
          "Adobe",
          "Figma",
          "HTML",
          "CSS",
          "Javascript",
          "React",
          "React Native",
          "Tailwind",
          "Git",
          "Firebase",
          "Adobe",
          "Figma",
        ].map((skill, idx) => (
          <div key={idx} className="mx-6 text-sm font-semibold text-[#c0392b]">
            {skill}
          </div>
        ))}
        
      </Marquee>
      </div>
    </div>
  );
};

export default Skills;
