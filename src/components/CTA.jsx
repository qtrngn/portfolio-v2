// src/components/CTAButton.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { LuArrowUpRight } from 'react-icons/lu';


export default function CTAButton({ to = '', children, className = '', ...props }) {
  const isFileLink = /\.(pdf|docx?|xlsx?)$/i.test(to);
  const isExternal = /^https?:\/\//.test(to);
  
  const baseClasses =
    'inline-flex w-fit h-fit items-center gap-2 bg-black text-white rounded-full px-3 py-2 shadow hover:scale-105 transition-transform uppercase ' +
    className;

  if (isExternal || isFileLink) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        {...props}
      >
        <span className="text-xs sm:text-sm md:text-base font-medium">
          {children}
        </span>
        <span className="w-7 h-6 sm:w-8 sm:h-6 md:w-9 md:h-7 bg-[#c0392b] rounded-full flex items-center justify-center">
          <LuArrowUpRight size={20} />
        </span>
      </a>
    );
  }

  return (
    <Link to={to} className={baseClasses} {...props}>
      <span className="text-xs sm:text-sm md:text-base font-medium">
        {children}
      </span>
      <span className="w-7 h-6 sm:w-8 sm:h-6 md:w-9 md:h-7 bg-[#c0392b] rounded-full flex items-center justify-center">
        <LuArrowUpRight size={20} />
      </span>
    </Link>
  );
}
