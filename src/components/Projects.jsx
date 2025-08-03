import React from "react";

export const projects = [
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
    title: "Kkuming韓國代購網站",
    desc: "以 React 與 Spring Boot 開發的完整代購電商系統（開發中）。前台提供會員登入註冊、商品展示、社群資訊、購物車、自動匯款通知與訂單統計功能；後台則支援商品內容更新、訂單狀態管理與手動確認匯款，協助小型代購業務自動化。",
    link: "#",
  },
];

const cardClass = (color) =>
  `p-6 rounded-2xl shadow-lg backdrop-blur-md border border-white/30 
   hover:scale-105 hover:shadow-2xl transform transition-all duration-300 text-center
   bg-white text-gray-800 hover:border-${color}-400`;

export default function Projects() {
  return (
    <section className="py-16 fade-section bg-blue-50" id="projects">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-8 text-center">Projects</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((proj) => (
            <div key={proj.title} className={cardClass("pink")}>
              <h4 className="text-xl font-bold mb-2">{proj.title}</h4>
              <p
                className="mb-3"
                dangerouslySetInnerHTML={{ __html: proj.desc }}
              />
              {proj.link !== "#" && (
                <a
                  href={proj.link}
                  target="_blank"
                  className="text-blue-600 underline inline-block mt-1"
                >
                  🔗 View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
