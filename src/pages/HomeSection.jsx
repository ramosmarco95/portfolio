import { useState, useEffect } from "react";
import heroImage from "../assets/hero-landing-img.png";
import '../styles/HomeSection.css';

const EYEBROW_TITLES = [
  "Software Developer",
  "Problem Solver",
  "Builder" ,
  "Team Player",
  "Lifelong Learner"
]

export default function HomeSection() {
  const [ index, setIndex ] = useState(0);
  const [ animating, setAnimating ] = useState(false);


  useEffect( () => {
    const interval = setInterval(() => {
      setAnimating(true); //trigger exit animation
      setTimeout(() => {
        setIndex( i => (i + 1) % EYEBROW_TITLES.length);
        setAnimating(false); //trigger enter animation
      }, 650); //matches exit animation duration
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
       <section id="home" className="home-section">
      <div className="home-hero">
        <img src={heroImage} alt="Marco Ramos developer portrait" className="home-hero-img" />

        <div className="home-overlay"></div>

        <div className="home-content">
          <p
            className={`home-eyebrow ${animating ? "eyebrow-exit" : "eyebrow-enter"}`}
          >
            {EYEBROW_TITLES[index]}
          </p>

          <h1>
            Building useful digital experiences with clean code and purpose.
          </h1>

          <p>
            I’m Marco Ramos, a software developer focused on creating practical,
            user-friendly applications with JavaScript, Python, SQL, and modern web tools.
          </p>

          <div className="home-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn btn-outline">
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </section>  
    </>
  );
}