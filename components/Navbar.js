import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div className='shadow-sm py-6'>
      <nav className='flex justify-between container mx-auto items-center'>
      <div className='flex justify-between w-5/12 items-center'>
        <div><Image src='/img/logo.png' alt='logo' width={40} height={40}/></div>
        <div>
          <ul className='flex justify-between space-x-6 text-xl font-medium '>
            <li className='hover:text-primary cursor-pointer'>Home</li>
            <li className='hover:text-primary cursor-pointer'>Services</li>
            <li className='hover:text-primary cursor-pointer'>Projects</li>
            <li className='hover:text-primary cursor-pointer'>Blog</li>
            <li className='hover:text-primary cursor-pointer'>About</li>
          </ul>
        </div>
      </div>
      <div className='space-x-4'>
        <button className='bg-primary py-4 px-6 text-secondary rounded-md font-medium'>Register Now</button>
        <button className='py-4 px-6 text-primary rounded-md border border-primary font-medium'>Contact Us</button>
      </div>
    </nav>
    </div>
    
  )
}

export default Navbar