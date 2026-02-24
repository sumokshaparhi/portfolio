import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechTicker from "../components/TechTicker";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="relative z-10 text-white">
      <Navbar />
      <Hero />
      <TechTicker />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}