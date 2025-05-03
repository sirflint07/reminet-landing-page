"use client"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { stories } from "@/data/db";

const SuccessStories = () => {

  // React Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-16 w-[90vw] md:w-full">
      <div className="container lg:w-[88vw] mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8">
          Our Webinar Success Stories
        </h2>

        {/* Carousel */}
        <Slider {...settings}>
          {stories.map((story, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-6">{story.quote}</p>
                    <div className="flex gap-1 md:gap-4 items-center justify-between">
                        
                        <h3 className="md:text-xl font-semibold text-gray-800 md:-mb-4 text-sm">
                        {story.name}
                        </h3>
                        <div className="lg:w-10 lg:h-10 w-8 h-8 rounded-full border-4 border-gray-700 relative overflow-clip md:-mb-2 max-md:-mt-2">
                            <Image src={story.image} 
                            alt="Profile Image" 
                            className="object-cover"
                            fill
                            />
                        </div> 
                    </div>
                <p className="text-gray-500 text-sm">{story.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SuccessStories;