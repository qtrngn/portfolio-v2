import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import CTA from './CTA';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full bg-white z-50 px-6'>
      <div className='max-w-[1200px] mx-auto py-4 flex items-center justify-between'>
        {/* Logo */}
        <NavLink to='/' className='flex-none'>
          <img src={Logo} alt='logo' className='h-10 md:h-15 w-auto block' />
        </NavLink>

        {/* Desktop Links */}
        <div className='hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-medium text-gray-600 mt-[2px]'>
          {['about', 'projects', 'contact'].map((section) => (
            <NavLink
              key={section}
              to={section}
              className={({ isActive }) =>
                'cursor-pointer px-3 py-1 rounded-full transition-colors ' +
                (isActive ? 'bg-black text-white' : 'hover:bg-black hover:text-white')
              }
            >
              {section.toUpperCase()}
            </NavLink>
          ))}
        </div>

        {/* CTA Button */}
        <div className='hidden md:flex flex-none justify-end'>
          <CTA to='/contact'>Let&apos;s Chat</CTA>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav />
    </nav>
  );
};

export default Navbar;
