import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {

  const icons = [
    { icon: <BsInstagram size={30} color='#111827' />, link: "https://www.instagram.com/" },
    { icon: <BsTwitterX size={30} color='#111827' />, link: "https://twitter.com/" },
    { icon: <FaFacebook size={30} color='#111827' />, link: "https://www.facebook.com/" },
    { icon: <FaPinterest size={30}  color='#111827' />, link: "https://www.pinterest.com/" },
    { icon: <FaYoutube size={30} color='#111827' />, link: "https://www.youtube.com/" },
  ];
  return (
    <footer className='bg-gray-900 p-5 text-white '>
      <div className='flex flex-col lg:w-[90vw] md:w-[82vw] mx-auto'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center mt-4'>
          <Image src='/img/logo.png' alt='' width={40} height={40} />
          <div className='mt-4 md:mt-0'>
            <ul className='flex flex-col md:flex-row md:gap-8 gap-4'>
              <li className='lg:text-lg md:text-base text-sm text-slate-100 font-medium hover:opacity-75'>Home</li>
              <li className='lg:text-lg md:text-base text-sm text-slate-100 font-medium hover:opacity-75'>About</li>
              <li className='lg:text-lg md:text-base text-sm text-slate-100 font-medium hover:opacity-75'>Pricing</li>
              <li className='lg:text-lg md:text-base text-sm text-slate-100 font-medium hover:opacity-75'>Contact</li>
              <li className='lg:text-lg md:text-base text-sm text-slate-100 font-medium hover:opacity-75'>Blogs</li>
            </ul>
          </div>
        </div>
        <div className='w-full border opacity-25 border-b-gray-400 h-[1px] my-12 '></div>
        <div>
          <div className='flex-col md:flex-row flex md:justify-between md:items-center items-center'>
              <p>&copy; <span className='font-light md:text-lg text-sm'>2023</span> <span className='font-light md:text-lg text-sm'>All rights reserved. <span className='font-semibold md:text-lg text-sm'>REMINET</span></span></p>
            <div className='flex gap-4 md:mt-0 mt-5'>
              {icons.map((icon, i) => (
                <Link key={i} href={icon.link} className='w-7 h-7 p-1 md:w-10 md:h-10 md:p-2 bg-white rounded-full flex items-center justify-center'>
                  {icon.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;