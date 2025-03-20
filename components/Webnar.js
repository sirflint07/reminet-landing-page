import { Udemy } from "@/data/db";
import Image from "next/image"; // If you're using Next.js; otherwise use a regular <img> tag

export default function Webnar() {

  return (
    <section className="w-[95vw] md:w-[80vw] lg:w-[90vw] mx-auto px-4 py-12">
      {/* Top Section: Title, Subtitle, and "See More" Button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-800">
            Exclusive and Premium Resources
          </h2>
          <p className="mt-2 text-gray-600">
            Gain access to expertly curated materials, insightful guides, and
            actionable tools that complement the webinar experience effectively
            and achieve measurable results.
          </p>
        </div>
        <button className="mt-4 md:mt-0 px-6 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 transition">
          See More
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Udemy.map((course, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-4">
          
          <div className="relative w-full h-48">
            <Image
              src={course.image}
              alt={course.category}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <span>{course.category}</span>
            <span className="mx-2">•</span>
            <span>{course.duration}</span>
          </div>
          <h3 className="mt-2 text-lg font-semibold text-gray-800">
            {course.title}
          </h3>
          <p className="mt-2 text-gray-600">
            {course.description}
          </p>
        </div>
        ))}
        

      </div>
    </section>
  );
}
