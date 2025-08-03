import React from "react";

const programming = ["Python", "Java", "HTML / CSS / JavaScript"];
const frameworks = [
  "NumPy",
  "Pandas",
  "scikit-learn",
  "LLM fine-tune",
  "React",
  "Flask",
  "Spring Boot",
];

const cardClass = (color) =>
  `p-6 rounded-2xl shadow-lg backdrop-blur-md border border-white/30 
   hover:scale-105 hover:shadow-2xl transform transition-all duration-300 text-center
   bg-white text-gray-800 hover:border-${color}-400`;

export default function Skills() {
  return (
    <section className="py-16 fade-section bg-blue-50" id="skills">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-8 text-center">
          Technical Skills
        </h3>

        <h4 className="text-xl font-bold mb-4">💻 Programming</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8">
          {programming.map((skill) => (
            <div key={skill} className={cardClass("blue")}>
              {skill}
            </div>
          ))}
        </div>

        <h4 className="text-xl font-bold mb-4">⚡ Framework & Tools</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {frameworks.map((tool) => (
            <div key={tool} className={cardClass("purple")}>
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
