import React from "react";

export default function Publications() {
  return (
    <section className="py-16 fade-section bg-white" id="publications">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-8 text-center">
          Publications
        </h3>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>Conference Paper:</strong>{" "}
            <em>
              A Review on Shaping Chatbot Personalities via Large Language
              Models
            </em>
            <br />
            Presented at the Hawaii International Conference on System Sciences
            (HICSS).{" "}
            <a
              href="https://scholarspace.manoa.hawaii.edu/items/41351a50-c96f-483b-9a1c-dd737797dcd2"
              target="_blank"
              className="text-blue-600 underline"
            >
              Full Text
            </a>
          </li>
          <li>
            <strong>Master Thesis:</strong>{" "}
            <em>
              Impact of LLM Introversion and Extraversion on User Choice Closure
              and Risk-Based Decision-Making
            </em>
            <br />
            National ChengChi University, MIS Graduate Program (2025).{" "}
            <a
              href="https://drive.google.com/file/d/1hnBiYSS-UpuuEg3E3hG5Ux32Me3_UUzi/view?usp=sharing"
              target="_blank"
              className="text-blue-600 underline"
            >
              Download
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
