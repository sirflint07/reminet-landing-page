"use client"

import Image from "next/image";
import {motion} from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export default function Home () {

    const heroImageRef = useRef()

    useEffect(() => {
        gsap.fromTo(heroImageRef.current, 
            {y: -80, opacity: 0}, 
            {y: 0, opacity: 1, duration: 0.4, ease: 'easeInOut', startAt: {y: -50, opacity: 0}})
    }, [])
    return (
        <motion.section
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, transition: { duration: 1, ease: 'easeInOut' } }}
        className="w-[96vw] lg:w-[90vw] lg:container py-24 gap-12 lg:gap-0 flex lg:flex-row justify-between mx-auto items-center z-20 max-lg:flex-col relative">
        <motion.div 
        className="bg-primary blur-lg w-24 h-24 rounded-full z-0 opacity-40 absolute top-0 right-0"
        animate={{ 
        x:["0%", "100%", "0%"],
        y: ["0%", "100%", "0%"], 
        rotate: 360, transition: { duration: 20, repeat: Infinity, ease: 'linear' } }}
        ></motion.div>
        <motion.div 
        className="bg-primary blur-lg w-72 h-72 rounded-full z-0 opacity-15 absolute shadow-md shadow-opacity-50 top-0 left-0"
        animate={{ 
        x:["0%", "100%", "0%"],
        y: ["0%", "100%", "0%"], 
        rotate: 360, rotate: 360, transition: { duration: 30, repeat: Infinity, ease: 'linear' } }}
        ></motion.div>
            <div className="lg:w-[55%] w-[90%]">
                <p className="max-md:text-5xl text-7xl text-slate-800 font-semibold bg-gradient-to-br from-primary to-purple-500 bg-clip-text text-transparent">Join Our Free</p>
                <p className="max-md:text-5xl text-7xl text-slate-800 font-semibold">Developers Community</p>
                <div className="w-[80%]">
                    <p className="py-4 text-base text-gray-600 font-medium">Dive into the world of web development and learn from the best. Engage in pratical strategies and techniques to help you grow as a developer and evolve in today{`'s`} tech industry.</p>
                </div>
                <div className="my-5 space-x-3">
                <button className='bg-primary py-4 px-6 text-secondary rounded-md font-medium'>Register Now</button>
                <button className='py-4 px-6 text-primary rounded-md border border-primary font-medium'>Contact Us</button>
                </div>
            </div>
            <div className="w-[80%] lg:w-[40%] flex lg:justify-end justify-center mt-10 lg:mt-0">
                <div 
                ref={heroImageRef}
                className="rounded-full border border-accent relative max-md:w-[300px] max-md:h-[300px] md:w-[400px] md:h-[400px] lg:h-[520px] lg:w-[520px] overflow-clip shadow-inner">
                    <Image
                    className="absolute top-[53%] left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
                    src='/img/bussinessman-profile-hero.png' 
                    alt='businessman' 
                    width={440} 
                    height={440} 
                    title="man" 
                    layout="responsive"/>
                </div>
            <div className="bg-white rounded-3xl w-fit p-2 flex gap-2 absolute shadow-xl bottom-0 right-0 md:-translate-y-28 max-md:-translate-x-[40%] max-md:-translate-y-28 md:-translate-x-[160%] lg:-translate-y-32 lg:-translate-x-[250%]">
                {Array.from({length: 5}).map((_, i) => (
                    <RiVerifiedBadgeFill key={i} color="#fbab1d" size={20} />
                ))}
            </div>
                <div className="absolute w-fit max-w-xs bg-white text-accent px-4 py-2 rounded-lg shadow-md flex -translate-x-1/3 -translate-y-1/2 font-semibold max-md:text-sm max-md:font-medium">
                Hi there! I{`'m`} John.
                <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white rotate-45 mr-3 shadow-md"></div>
                </div>
            </div>
        </motion.section>
        
    )
}