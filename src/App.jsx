import React, { useEffect } from "react";
import "./Portfolio.css";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoSpringBoot } from "react-icons/bi";
import {
  FaPython,
  FaReact,
  FaJava,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiFlask,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si";

export default function Portfolio() {
  const projects = [
    {
      title: "個性化 LLM 投資/保險助理",
      desc: "設計並微調 LLaMA-3 語言模型，使之呈現內/外向兩種性格，協助使用者進行基金投資與留學保險方案選擇。",
      link: "https://github.com/110306041/custom-llm-frontend",
    },
    {
      title: "Spotify 熱門歌曲分析與 RAG 系統",
      desc: "分析 Spotify 熱門歌曲資料，辨識音樂類型並結合 TikTok 資料建構 RAG 系統，串接 Gemini 提供個人化音樂推薦。",
      link: "https://www.canva.com/design/DAGaxhd1EuI/OOz2-5JPpITXWzksJu_dzQ/edit",
    },
    {
      title: "IBM 智能保戶助理提案",
      desc: "為保戶提供 24 小時 AI 服務，整合保險資訊與客服功能，透過模擬聊天介面提升用戶體驗並減輕客服壓力。",
      link: "https://docs.google.com/presentation/d/1ORU5ldVYBI9qAu1VVkptAeZ6XkgV7yEdYkEeiFxVC5s/edit?usp=sharing",
    },
    {
      title: "Kkuming 韓國代購網站",
      desc: "以 React 與 Spring Boot 開發的完整代購電商系統（開發中）。前台提供會員登入註冊、商品展示、社群資訊、購物車、自動匯款通知與訂單統計功能；後台則支援商品內容更新、訂單狀態管理與手動確認匯款，協助小型代購業務自動化。",
      link: "#",
    },
  ];

  const programming = [
    { icon: <FaPython size={28} />, label: "Python" },
    { icon: <FaJava size={28} />, label: "Java" },
    { icon: <TbBrandJavascript size={28} />, label: "HTML / CSS / JS" },
  ];

  const frameworks = [
    { icon: <SiNumpy size={28} />, label: "NumPy" },
    { icon: <SiPandas size={28} />, label: "Pandas" },
    { icon: <SiScikitlearn size={28} />, label: "scikit-learn" },
    { icon: <FaReact size={28} />, label: "React" },
    { icon: <SiFlask size={28} />, label: "Flask" },
    { icon: <BiLogoSpringBoot size={28} />, label: "Spring Boot" },
  ];

  const timeline = [
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.1 }
    );
    document
      .querySelectorAll(".fade-section")
      .forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <h1 className="logo">Ting-Chi Chang</h1>
          <nav>
            <a href="#home">Home</a>
            <a href="#skills">Skills & Timeline</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Publications & Contact</a>
          </nav>
        </div>
      </header>

      {/* 1️⃣ Hero + About */}
      <section className="hero fade-section" id="home">
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        <h2>Hi, I’m Ting-Chi Chang</h2>
        <p className="intro">
          Data & AI Enthusiast with experience in media, public diplomacy, and
          semiconductor R&D. Passionate about building intelligent systems and
          connecting low-level hardware with high-level applications.
        </p>
        <div className="hero-links">
          <a href="/resume.pdf" target="_blank" className="btn blue">
            Download Resume
          </a>
          <a
            href="https://github.com/tingchi-1123"
            target="_blank"
            className="btn dark"
          >
            <FaGithub style={{ marginRight: "8px" }} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/%E5%BA%AD%E7%B6%BA-%E5%BC%B5-6a0952201"
            target="_blank"
            className="btn blue"
          >
            <FaLinkedin style={{ marginRight: "8px" }} /> LinkedIn
          </a>
        </div>
      </section>

      {/* 2️⃣ Skills + Timeline */}
      <section className="skills-timeline fade-section" id="skills">
        <div className="skills-panel">
          <h3>Technical Skills</h3>
          <h4>💻 Programming</h4>
          <div className="grid">
            {programming.map((s) => (
              <div className="card" key={s.label}>
                {s.icon}
                <p>{s.label}</p>
              </div>
            ))}
          </div>
          <h4>⚡ Framework & Tools</h4>
          <div className="grid">
            {frameworks.map((s) => (
              <div className="card" key={s.label}>
                {s.icon}
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-panel">
          <h3>Experience & Education Timeline</h3>
          <div className="timeline-container">
            {timeline.map((item, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <p className="year">{item.year}</p>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ Projects */}
      <section className="fade-section" id="projects">
        <h3>Projects</h3>
        <div className="project-grid">
          {projects.map((proj) => (
            <div className="project-card" key={proj.title}>
              <h4>{proj.title}</h4>
              <p>{proj.desc}</p>
              {proj.link && proj.link !== "#" && (
                <a href={proj.link} target="_blank" rel="noreferrer">
                  🔗 View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4️⃣ Publications + Contact */}
      <section className="contact-section fade-section" id="contact">
        <div className="publications">
          <h3>Publications</h3>
          <ul>
            <li>
              <strong>Conference Paper:</strong>{" "}
              <em>
                A Review on Shaping Chatbot Personalities via Large Language
                Models
              </em>{" "}
              – HICSS.{" "}
              <a
                href="https://scholarspace.manoa.hawaii.edu/items/41351a50-c96f-483b-9a1c-dd737797dcd2"
                target="_blank"
                rel="noreferrer"
              >
                Full Text
              </a>
            </li>
            <li>
              <strong>Master Thesis:</strong>{" "}
              <em>
                Impact of LLM Introversion and Extraversion on User Choice
                Closure and Risk-Based Decision-Making
              </em>{" "}
              – NCCU, 2025.{" "}
              <a
                href="https://drive.google.com/file/d/1hnBiYSS-UpuuEg3E3hG5Ux32Me3_UUzi/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
            </li>
          </ul>
        </div>

        <div className="contact">
          <h3>Contact</h3>
          <p>Email: angel871123@icloud.com</p>
          <p>Phone: 0963751056</p>
          <div>
            <a
              href="https://github.com/tingchi-1123"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/%E5%BA%AD%E7%B6%BA-%E5%BC%B5-6a0952201"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
