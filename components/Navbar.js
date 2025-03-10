"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { FaMicroblog } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#', icon: <FaHome size={24}/> },
    { name: 'Services', href: '#', icon: <MdMiscellaneousServices size={24}/> },
    { name: 'Projects', href: '#', icon: <GrProjects size={24}/> },
    { name: 'Blog', href: '#', icon: <FaMicroblog size={24}/> },
    { name: 'About', href: '#', icon: <GrContactInfo size={24}/> },
  ];

  return (
    <div className='shadow-sm py-6 max-md:w-[90vw] mx-auto'>
      <nav className='flex justify-between container mx-auto items-center md:w-[92%] lg:[98%]'>
        {/* Logo */}
        <div className='flex items-center'>
          <Image src='/img/logo.png' alt='logo' width={40} height={40} />
        </div>

        {/* Desktop Nav Links */}
        <div className='hidden md:flex justify-between w-5/12 items-center'>
          <ul className='flex justify-between space-x-6 text-xl font-medium'>
            {navLinks.map((link) => (
              <li key={link.name} className='hover:text-primary cursor-pointer md:text-sm lg:text-xl'>
                {link.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className='hidden md:flex space-x-4'>
          <button className='bg-primary md:py-2 md:px-4 lg:py-4 lg:px-6 text-secondary rounded-md font-medium'>
            Register Now
          </button>
          <button className='md:py-2 md:px-4 lg:py-4 lg:px-6 text-primary rounded-md border border-primary font-medium'>
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className='md:hidden p-2 focus:outline-none'
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <IoCloseSharp size={30}/>
          ) : (
            <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
            )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='md:hidden mt-4'
          >
            <ul className='flex flex-col space-y-4 text-xl font-medium'>
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className='hover:text-primary cursor-pointer border-b border-gray-200 pb-2 flex gap-5 items-center'
                >
                  <div>{link.icon}</div>
                  <p className='text-gray-600'>{link.name}</p>
                </li>
              ))}
            </ul>
            <div className='mt-14 space-y-6'>
              <button className='w-full bg-primary py-4 px-6 text-secondary rounded-md font-medium'>
                Register Now
              </button>
              <button className='w-full py-4 px-6 text-primary rounded-md border border-primary font-medium'>
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;