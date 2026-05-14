import { useEffect, useRef } from 'react';
import '../styles/AboutSection.css';
import aboutPhoto from '../assets/about-section.png';

export default function AboutSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const imageRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.15 }
    );

    const els = [leftRef.current, rightRef.current, imageRef.current].filter(Boolean);
    els.forEach((el) => observer.observe(el));

    return () => els.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-inner">

        {/* Left column — image */}
        <div className="about-image-wrap" ref={imageRef}>
          <div className="about-image-frame">
            <img src={aboutPhoto} alt="Developer portrait" className="about-photo" />
          </div>
          <div className="about-image-accent" aria-hidden="true" />
        </div>

        {/* Right column — text */}
        <div className="about-content">
          <div className="about-text-block" ref={leftRef}>
            <p className="eyebrow">About Me</p>
            <h2 className="about-heading">
              A developer who likes&nbsp;practical solutions.
            </h2>
          </div>

          <div className="about-copy" ref={rightRef}>
            <p>
              I enjoy building applications that are useful, organized, and easy to
              understand. My background includes software development, customer service,
              airline operations, and bilingual communication.
            </p>
            <p>
              I like projects where I can combine logic, design, and problem-solving.
              My goal is to keep growing as a developer while building things that
              actually help people.
            </p>

            <div className="about-tags">
              <span className="tag">Javascript</span>
              <span className="tag">Node.js</span>
              <span className="tag">React</span>
              <span className="tag">Python</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
