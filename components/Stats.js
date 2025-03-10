"use client"

import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

function Stats() {
    const stats = [
        {title: 'Courses', count: 10},
        {title: 'Years Experience', count: '5+'},
        {title: 'Reviews', count: 50},
        {title: 'Podcasts', count: 20},
    ]
    const statRef = useRef()

    //animate the opacity of the stats section as the page loads
    useEffect(() => {
      gsap.fromTo(statRef.current, 
        {opacity: 0}, 
        {opacity: 1, duration: 2})
    }, [])

  return (
    <section ref={statRef} className='lg:w-[95vw] mb-20'>
      <div className='w-fit md:w-[80vw] lg:w-[90%] md:flex justify-between mx-auto items-center border-primary border border-r-0 border-l-0 border-opacity-60 max-md:border-b-primary'>
        {stats.map((stat, i) => (
            <div className='sm:w-[60vw] border-primary border border-opacity-15 border-r-primary h-full py-4 max-md:px-20 md:px-9 lg:py-8 lg:px-20 border-t-0  border-b-0 flex flex-col justify-end' key={i}>
              <h2 className='bg-gradient-to-l from-purple-950 to-gray-950 text-transparent bg-clip-text'><p className='max-md:text-7xl md:text-4xl lg:text-8xl font-bold antialiased max-md:text-center'>{stat.count}</p></h2>
              <p className='text-gray-500 text-sm tracking-normal md:tracking-widest max-md:text-center'>{stat.title}</p>
            </div>
        ))}
      </div>
      <br />
    </section>
  )
}

export default Stats;