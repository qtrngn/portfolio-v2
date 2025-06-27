import { Link } from "react-router-dom";
import { LuArrowUpRight } from 'react-icons/lu'

const CTAButton = ({ to = "", children }) => {
    return (
      <Link
        to={to}
        className="inline-flex items-center gap-2 bg-black text-white rounded-full px-3 py-2 shadow hover:scale-105 transition-transform"
      >
        <span className="text-sm font-medium">{children}</span>
        <span className="w-10 h-7 bg-[#c0392b] rounded-full flex items-center justify-center">
        <LuArrowUpRight size={20}/>
        </span>
      </Link>
    );
  };
  
export default CTAButton;