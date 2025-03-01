import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Image from "next/image";

export default function Home() {
  return (
      <div className="flex flex-col items-center min-h-screen">
        <Hero />
        <Stats />
      </div>
  );
}
