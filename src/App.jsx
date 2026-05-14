import { Routes, Route } from "react-router-dom";

/* css */
import "./App.css";

/* pages */
import HomeSection from "./pages/HomeSection.jsx";
import AboutSection from "./pages/AboutSection.jsx";
import ExperienceSection from "./pages/ExperienceSection.jsx";
import ProjectsSection from "./pages/ProjectsSection.jsx";
import ContactSection from "./pages/ContactSection.jsx";

/* components */
import Navbar from "./components/Navbar.jsx";


function App() {
  return (
    <>
       <div className="portfolio-app">
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
    </>
  );
}

export default App;
