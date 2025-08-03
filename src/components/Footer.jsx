import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 bg-gray-900 text-white text-center" id="contact">
      <h3 className="text-2xl font-semibold mb-2">Contact</h3>
      <p>Email: angel871123@icloud.com</p>
      <p>Phone: 0963751056</p>
      <div className="mt-4 space-x-4">
        <a
          href="https://github.com/tingchi-1123"
          target="_blank"
          className="underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/%E5%BA%AD%E7%B6%BA-%E5%BC%B5-6a0952201"
          target="_blank"
          className="underline"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
