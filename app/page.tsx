import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("@/components/sections/Projects"));
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection"),
);

export default function Home() {
  return (
    <main className="relative min-h-screen text-foreground selection:bg-primary/30">
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ContactSection />
    </main>
  );
}
