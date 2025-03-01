"use client"

import Image from "next/image";
import {motion} from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoChatboxEllipses } from "react-icons/io5";

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
        className="container py-24 flex justify-between mx-auto items-center z-20">
            <div className="w-[55%]">
                <p className="text-7xl text-slate-800 font-semibold bg-gradient-to-br from-primary to-purple-500 bg-clip-text text-transparent">Join Our Free</p>
                <p className="text-7xl text-slate-800 font-semibold">Title of Webnar</p>
                <div className="w-[80%]">
                    <p className="py-4 text-base text-gray-600 font-medium">Dive into the world of web development and learn from the best. Engage in pratical strategies and techniques to help you grow as a developer and evolve in today{`'s`} tech industry.</p>
                </div>
                <div className="my-5 space-x-3">
                <button className='bg-primary py-4 px-6 text-secondary rounded-md font-medium'>Register Now</button>
                <button className='py-4 px-6 text-primary rounded-md border border-primary font-medium'>Contact Us</button>
                </div>
            </div>
            <div className="w-[40%] flex justify-end">
                <div 
                ref={heroImageRef}
                className="rounded-full border border-accent relative h-[520px] w-[520px] overflow-clip shadow-inner">
                    <Image
                    className="absolute top-[53%] left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
                    src='/img/bussinessman-profile-hero.png' alt='businessman' width={440} height={440} title="man"/>
                </div>
            <div className="bg-white rounded-3xl w-fit p-2 flex gap-2 absolute shadow-xl left-1/2 top-1/2 translate translate-x-52 translate-y-44">
                {Array.from({length: 5}).map((_, i) => (
                    <RiVerifiedBadgeFill key={i} color="#fbab1d" size={20} />
                ))}
            </div>
                <div className="absolute w-fit max-w-xs bg-white text-accent px-4 py-2 rounded-lg shadow-md flex -translate-x-1/3 -translate-y-1/2 font-semibold">
                Hi there! I{`'m`} John.
                <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white rotate-45 mr-3 shadow-md"></div>
                </div>
            </div>
        </motion.section>
        
    )
}