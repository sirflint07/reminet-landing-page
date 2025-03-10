import React from 'react';
import Image from 'next/image'; // If you're using Next.js. Otherwise, replace with <img>.

const HeroSection = () => {

  const images = [
    {src: '/img/person1.jpg', size: 200, z: 1, alt: 'image-1', id: 1},
    {src: '/img/person2.jpg', size: 680, z: 2, alt: 'image-2', id: 2},
    {src: '/img/person3.jpg', size: 970, z: 3, alt: 'image-3', id: 3},
  ]
  return (
    <section className="w-[90vw] mx-auto px-4 py-12 md:py-16 flex flex-col-reverse md:flex-row items-center gap-10 md:mb-10">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-4">
        <span className="text-sm text-purple-600 uppercase tracking-widest font-semibold">
          — About Us
        </span>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-800">
          Discover, Learn and Grow with Our Coding Bootcamp & Workshops
        </h1>
        <p className="text-gray-600 md:text-lg">
          Whether you{`'`}re a seasoned professional or just starting out, we have a program that will help you grow your coding skills and reach your goals. Our bootcamps and workshops are designed to help you learn the latest technologies and stay ahead in your career.
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition">
          Register Now
        </button>
      </div>

      {/* Small Devices (Image Collage) */}
      <div className='md:hidden flex flex-col justify-center items-center gap-4'>
        {images.map((image, i) => (
          <div
            key={i}
            className={`w-80 h-80 rounded-full border-2 border-accent overflow-hidden relative shadow-md`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout='fill'
              objectFit='cover'
             
            />
          </div>
        ))}
      </div>
    {/* Medium Devices Upward */}
      {/* Right Content (Image Collage) */}
      <div className="md:w-1/2 flex flex-row justify-center md:justify-end md:relative h-80 w-full max-md:hidden md:visible">
        {/* Container to position circles */}
        <div className="relative w-[88%] h-[40vh]">
          {/* Circle 1 */}
          <div className="block md:absolute z-10 w-24 h-24 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent shadow-lg -top-4 md:-top-12 -left-20">
            <Image
              src="/img/person1.jpg"
              alt="Person 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Circle 2 (center) */}
          <div className="block md:absolute z-20 w-28 h-28 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-8 border-[#f6f5f9] top-16 left-16 md:top-20 md:left-20">
            <Image
              src="/img/person2.jpg"
              alt="Person 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Circle 3 */}
          <div className="block md:absolute z-30 w-20 h-20 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-accent shadow-lg bottom-0 right-0 md:right-0 md:-bottom-20 lg:right-48 lg:-bottom-10">
            <Image
              src="/img/person3.jpg"
              alt="Person 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
