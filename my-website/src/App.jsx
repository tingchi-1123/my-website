import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <Skills />
      <Timeline />
      <Projects />
      <Publications />
      <Footer />
    </div>
  );
}
