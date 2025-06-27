import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import CTA from './CTA';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="max-w-[1200px] mx-auto bg-white px-6 py-4 flex justify-between">
        <div className="flex-1">
          <Link to="/">
            <img src={Logo} alt="logo" className="h-10 w-auto" />
          </Link>
        </div>

        <div className="flex-1 flex justify-center items-center gap-8 text-sm font-medium text-gray-600 mt-[2px]">
          <Link
            to="about"
            offset={-80}
            duration={500}
            className="cursor-pointer"
          >
            ABOUT
          </Link>
          <Link
            to="projects"
            offset={-80}
            duration={500}
            className="cursor-pointer"
          >
            PROJECTS
          </Link>
          <Link
            to="contact"
            offset={-80}
            duration={500}
            className="cursor-pointer"
          >
            CONTACT
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
            <CTA to="/contact">Let's Chat</CTA>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
