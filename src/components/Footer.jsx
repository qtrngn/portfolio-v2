import { Link } from "react-router-dom";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="hidden sm:block bg-white w-full px-6 pt-10 pb-10">
      {/* Top Section */}
      <div className="w-full flex justify-center">
        <div className="max-w-[1200px] w-full grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm text-gray-700 justify-items-center sm:justify-items-center">
          {/* Main Page */}
          <div className="space-y-2">
            <h4 className="text-black font-semibold mb-1">MAIN PAGE</h4>
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <br />
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <br />
            <Link to="/projects" className="hover:underline">
              Project
            </Link>
            <br />
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center space-y-2">
            <h4 className="text-black font-semibold mb-1">CONTACT</h4>
            <div className="flex items-center justify-center gap-3 pt-2">
              <a
                href="mailto:nquynh1110@gmail.com"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
              >
                <MdEmail className="text-black text-[18px]" />
              </a>

              <a
                href="https://www.linkedin.com/in/truc-quynh-nguyen-642a2633a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
              >
                <FaLinkedinIn className="text-black text-[16px]" />
              </a>

              <a
                href="https://github.com/qtrngn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
              >
                <FaGithub className="text-black text-[16px]" />
              </a>
            </div>
          </div>

          {/* Back to top */}
          <div className="flex flex-col justify-center items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-10 h-10 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              ↑
            </button>
            <p className="mt-2 text-xs">BACK TO TOP</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-6" />

      {/* Bottom Row */}
      <div className="w-full flex justify-center">
        <div className="max-w-[1200px] w-full flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-2">
          <p>TRUC QUYNH NGUYEN</p>
          <p>© 2025 QUYNH. ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
