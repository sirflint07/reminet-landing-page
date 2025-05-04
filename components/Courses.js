import { techCourses } from "@/data/db";
import Image from "next/image";

export default function Course() {
  return (
    <section className="relative w-full bg-[#f6f3ff] py-12 md:py-16 mb-20 overflow-hidden">
      
      <div className="absolute inset-0">
        <Image
          src="/img/background.jpg"
          alt="pattern"
          fill
          className="object-cover opacity-20"
        />
      </div>

     
      <div className="relative z-10 w-[90vw] mx-auto">
       
        <span className="block text-sm font-semibold tracking-wide text-purple-600 uppercase mb-2">
          — Strength of Our Webinar
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Strong Point About Your Webinar
        </h2>

       
        <p className="mt-4 text-gray-600 md:text-lg max-w-3xl">
          Our webinar stands out for its practical insights and actionable takeaways,
          empowering participants to apply what they learn immediately for real results.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {techCourses.map((course, index) => (
        <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
            
            <div className="mb-4">
              {course.icon}
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {course.title}
            </h3>
           
            <p className="text-gray-600">
              {course.description}
            </p>
          </div>
      ))}

        </div>
      </div>
    </section>
  );
}
