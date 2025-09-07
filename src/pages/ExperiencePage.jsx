import { useState } from "react";
import "../styles/experience-page.css";
import ResumeDownload from "../components/ResumeDownload";

function AccordionItem({ title, children, defaultOpen = false, nested = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const id = title.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className={`accordion-item ${nested ? "nested" : ""}`}>
      <button
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        id={`${id}-header`}
      >
        <span>{title}</span>
        <span className="accordion-icon" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div
          className="accordion-content"
          id={`${id}-content`}
          role="region"
          aria-labelledby={`${id}-header`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <div className="experience-container">
      <h1 className="page-title">Experience</h1>
      
      {/* Skills & Abilities */}
      <AccordionItem title="Tech Skills">
        <ul className="skills-list">
          <li>
            <strong>Programming Languages:</strong> HTML5, CSS3, JavaScript (ES6+), C#, Python
          </li>
          <li>
            <strong>Front-End Frameworks & Libraries:</strong> React, Vue.js
          </li>
          <li>
            <strong>Back-End Frameworks & Libraries:</strong> Node.js, Express.js, Django
          </li>
          <li>
            <strong>Databases:</strong> SQL (MySQL), NoSQL (MongoDB)
          </li>
          <li>
            <strong>Tools & Platforms:</strong> Git & GitHub, Docker
          </li>
          <li>
            <strong>Methodologies:</strong> Agile & Scrum, Test-Driven Development (TDD), Continuous Integration / Continuous Deployment (CI/CD)
          </li>
          <li>
            <strong>Soft Skills:</strong> Problem-Solving, Team Collaboration, Effective Communication, Adaptability
          </li>
        </ul>
      </AccordionItem>

      {/* Work Experience (Top-level) */}
      <AccordionItem title="Work Experience">
        {/* Job 1 */}
        <AccordionItem title="Web Development Intern — Khamu Solutions" nested>
          <p className="job-duration">Summer 2025</p>
          <ul className="job-responsibilities">
            <li>Collaborated with the development team to replicate and style client websites using HTML & CSS.</li>
            <li>Translated design mockups and live site references into responsive, pixel-perfect web pages.</li>
            <li>Applied modern CSS techniques to improve layout consistency, mobile responsiveness, and user experience.</li>
            <li>Gained hands-on experience with front-end workflows, version control, and iterative feedback processes.</li>
          </ul>
        </AccordionItem>

        {/* Job 2 */}
        <AccordionItem title="Software Development Student — College of Western Idaho" nested>
          <p className="job-duration">Fall 2023 – Spring 2025</p>
          <ul className="job-responsibilities">
            <li>Developed console and GUI applications using C#, focusing on algorithmic problem-solving, debugging, and OOP principles.</li>
            <li>Built front-end web applications with HTML, CSS, and JavaScript, leveraging frameworks like Vue and React.</li>
            <li>Implemented Agile/Scrum practices including planning, requirements documentation, test case development, modeling, and prototyping.</li>
            <li>Designed and managed relational databases with SQL, applying data modeling techniques for efficient application development.</li>
            <li>Explored server-side programming with Python and ASP.NET, integrating database access and API interactions.</li>
            <li>Coursework included mobile development, industry-standard tools, source control (GitHub), testing frameworks (NUnit for C#, pytest for Python), Agile project management, and containerization with Docker for deployment and scalability.</li>
          </ul>
        </AccordionItem>

        {/* Job 3 */}
        <AccordionItem title="Ground Service Agent — Alaska Airlines" nested>
          <p className="job-duration">Jan 2022 – Present</p>
          <ul className="job-responsibilities">
            <li>Loaded and unloaded baggage, ensuring efficient processing and passenger satisfaction.</li>
            <li>Provided accurate flight information and assisted guests with baggage procedures.</li>
            <li>Followed airport and airline security protocols, adhering to federal, state, and local regulations.</li>
            <li>Supported passengers with disabilities using aisle chairs and wheelchairs, documenting necessary information for seamless service.</li>
            <li>Coordinated flight needs—arrival, departure, and boarding—to maintain schedule efficiency.</li>
            <li>Operated heavy equipment safely (tugs, belt loaders, jet bridges) and maintained aircraft cleanliness, including lavatory servicing, vacuuming, trash removal, and safety inspections.</li>
          </ul>
        </AccordionItem>
      </AccordionItem>

      {/* Education */}
      <AccordionItem title="Education">
        <div className="school">
          <h3>College of Western Idaho</h3>
          <p className="degree">Associate of Applied Science in Software Development</p>
          <p className="graduation-date">Graduated Spring 2025</p>
        </div>

        <div className="school">
          <h3>Boise State University</h3>
          <p className="degree">High School Diploma (GED)</p>
          <p className="graduation-date">Graduated Fall 2008</p>
        </div>
      </AccordionItem>
      <ResumeDownload/>
    </div>
  );
}
