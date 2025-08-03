import React from "react";

export default function Header() {
  return (
    <header className="p-6 shadow-md sticky top-0 z-10 bg-white/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ting-Chi Chang</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
          <a href="#timeline" className="hover:underline">
            Timeline
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#publications" className="hover:underline">
            Publications
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
