import React from "react";

export default function Home() {
  return (
    <section className="text-center py-20 bg-white fade-section" id="home">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
      />
      <h2 className="text-3xl font-bold mb-4">Hi, I’m Ting-Chi Chang</h2>
      <p className="text-lg">
        Data & AI Enthusiast with cross-disciplinary experience in tech, media,
        and diplomacy.
      </p>
      <div className="mt-6 space-x-4">
        <a
          href="/resume.pdf"
          target="_blank"
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          Download Resume
        </a>
        <a
          href="https://github.com/tingchi-1123"
          target="_blank"
          className="px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-900"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/%E5%BA%AD%E7%B6%BA-%E5%BC%B5-6a0952201"
          target="_blank"
          className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
