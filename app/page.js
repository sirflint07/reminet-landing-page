import About from "@/components/About";
import Course from "@/components/Courses";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Stats from "@/components/Stats";
import SuccessStories from "@/components/Testimonials";
// import TestimonialsCarousel from "@/components/Testimonials";
import Webnar from "@/components/Webnar";

export default function Home() {
  return (
      <div className="flex flex-col items-center min-h-screen overflow-hidden">
        <Hero />
        <Stats />
        <Partners />
        <About />
        <Course />
        <Webnar />
        <SuccessStories />
      </div>
  );
}
