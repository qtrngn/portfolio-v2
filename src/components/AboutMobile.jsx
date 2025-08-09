import Profile from "../assets/images/profile.webp";
import CTA from "../components/CTA";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function AboutMobile() {
  return (
    <section className="block md:hidden px-4 py-20 text-center">
      {/* Profile photo */}
      <img
        src={Profile}
        alt="Profile"
        className="mx-auto w-48 h-auto mb-3 rounded-[30px]"
      />
      {/* Contact icons */}
      <div className="flex justify-center gap-3 mb-6">
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
      {/* Title */}
      <h2 className="text-4xl font-extrabold leading-tight mb-6">
        <span className="text-gray-700">METADATA OF ME</span>
      </h2>

      {/* Paragraphs */}
      <p className="text-gray-700 leading-relaxed mb-4 text-sm">
        My career began outside of tech. Following graduation from a hospitality
        program, I spent several years in that field, developing strong
        interpersonal skills, maintaining composure in high-pressure situations,
        and becoming comfortable with rapid adaptation.
      </p>
      <p className="text-gray-700 leading-relaxed text-sm">
        Following careful consideration, I returned to school for web
        development. I’ve expanded my skill set across both front-end and
        back-end areas, and I’m excited by the progress I’m making and the
        direction of my career.
      </p>

      {/* CTA */}
      <div className="mt-8">
        <CTA to="/contact">Contact Me</CTA>
      </div>
    </section>
  );
}
