
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  if (!showPortfolio) {
    return <Welcome onContinue={() => setShowPortfolio(true)} />;
  }

  return (
    <div className="bg-slate-950 text-white min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
