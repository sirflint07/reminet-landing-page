import About from "@/components/About";
import BarGraphStats from "@/components/BarGraphStats";
import Course from "@/components/Courses";
import Hero from "@/components/Hero";
import LoginForm from "@/components/LoginForm";
import Partners from "@/components/Partners";
import PieChartStats from "@/components/PieChartStats";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import Students from "@/components/Students";
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
        <Students />
        <LoginForm />
        <Pricing />
        <BarGraphStats />
        <PieChartStats />
      </div>
  );
}
