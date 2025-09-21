
"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "backdrop-blur bg-black/30" : ""}`}>
      <div className="container flex items-center justify-between py-4">
        <div className="text-lg font-semibold tracking-wide">Your Name</div>
        <nav className="hidden sm:flex gap-6 text-sm text-gray-200">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#feedback" className="hover:text-white">Feedback</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}
