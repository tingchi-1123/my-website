import React from "react";

export const timeline = [
  {
    year: "2017-2021",
    title: "B.A. in Civic Education, NTNU",
    desc: "Gained foundational knowledge in law, politics, economics, and broader social sciences through comprehensive civic education studies.",
  },
  {
    year: "2020 Fall",
    title: "Public Diplomacy Intern, AIT",
    desc: "Produced social media campaigns and multimedia content to support public diplomacy initiatives and community engagement.",
  },
  {
    year: "2021 Spring",
    title: "Exchange Student, Tampere University, Finland",
    desc: "Enhanced cross-cultural communication and global perspective through international study and collaboration.",
  },
  {
    year: "2021",
    title: "Marketing Intern, WordUp",
    desc: "Designed Instagram growth strategies, achieving 130k followers; managed brand collaborations and content planning.",
  },
  {
    year: "2021-2022",
    title: "Assistant Technical PM Intern, PressLogic",
    desc: "Facilitated product specification meetings, resolved user issues, and contributed to prototyping and QA testing of internal content management systems for multiple media web and app projects.",
  },
  {
    year: "2024",
    title: "TSMC Intern, Testing & Integration Service Division",
    desc: "Assisted in digital transformation initiatives for probe card projects, developed an internal R&D project platform, and integrated an intelligent assistant for workflow automation.",
  },
  {
    year: "2023-2025",
    title: "M.S. in MIS, NCCU",
    desc: "Conducted research on personalized LLMs and their influence on user decision-making and behavioral outcomes.",
  },
];

export default function Timeline() {
  return (
    <section className="py-16 fade-section bg-white" id="timeline">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-8 text-center">
          Experience & Education Timeline
        </h3>
        <div className="relative border-l-2 border-blue-400 ml-4">
          {timeline.map((item, idx) => (
            <div key={idx} className="mb-8 ml-4">
              <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-2 border-2 border-white"></div>
              <p className="text-sm text-gray-500">{item.year}</p>
              <h4 className="text-xl font-bold">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
