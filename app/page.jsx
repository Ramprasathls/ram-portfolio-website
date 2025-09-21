
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Feedback from "@/components/Feedback";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import "./globals.css";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Feedback />
      <Contact />
      <Footer />
    </main>
  );
}
