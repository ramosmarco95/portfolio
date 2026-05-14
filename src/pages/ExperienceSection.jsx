import "../styles/ExperienceSection.css";
import ResumeDownload from "../components/ResumeDownload";

const jobs = [
  {
    role: "Business Operations Support",
    company: "DMA Lighting · Boise, ID",
    period: "June 2026 – Present",
    type: "ops",
    bullets: [
      "Prepare quotations for national accounts and support customer pricing needs.",
      "Create quick quotes for distribution and sales-related requests.",
      "Assist with IT support and basic troubleshooting for internal users.",
      "Support marketing tasks connected to business growth and customer communication.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Khamu Solutions · Boise, ID",
    period: "Jun – Aug 2025",
    type: "dev",
    bullets: [
      "Replicated a production website with pixel-accurate HTML/CSS and modern layout techniques.",
      "Improved responsiveness and UI consistency across screen sizes within existing design constraints.",
      "Collaborated through structured mentorship and iterative feedback cycles.",
    ],
  },
  {
    role: "Marketing Intern",
    company: "DMA Lighting · Boise, ID",
    period: "Oct 2025 – Jan 2026",
    type: "dev",
    bullets: [
      "Managed cross-channel digital presence across LinkedIn, Instagram, and Facebook.",
      "Implemented GA4-style event tracking to measure engagement and guide content decisions.",
      "Built internal tooling in Microsoft Access/Excel to structure marketing contacts and improve outreach targeting.",
    ],
  },
  {
    role: "English–Spanish Interpreter",
    company: "Language Line Solutions · Boise, ID",
    period: "Aug 2025 – Jan 2026",
    type: "inter",
    bullets: [
      "Provided bilingual medical interpretation supporting clear communication between patients and healthcare teams.",
      "Maintained confidentiality and accuracy in high-stakes clinical settings.",
    ],
  },
  {
    role: "Flight Operations / Customer Service",
    company: "Horizon Air · Boise, ID",
    period: "Apr 2016 – Apr 2023",
    type: "ops",
    bullets: [
      "Operated in high-stakes, time-sensitive environments requiring precision communication and cross-team coordination.",
      "Developed reliability, attention to detail, and calm decision-making under pressure — skills directly transferable to Agile delivery.",
    ],
  },
];

const skillGroups = [
  { label: "Languages", tags: ["C#", "JavaScript", "Python", "SQL", "HTML", "CSS"] },
  { label: "Front-End", tags: ["React", "Tailwind", "Bootstrap", "jQuery"] },
  { label: "Back-End", tags: ["ASP.NET Core", "Node.js", ".NET MAUI", "SQLite"] },
  { label: "Tooling", tags: ["Git", "GitHub", "Pytest", "CI/CD"] },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-container">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>What I bring to the table.</h2>
          <p>
            A mix of technical training, real-world teamwork, and customer-focused
            experience — built across aviation, interpretation, and software.
          </p>
        </div>

        <div className="tl-wrap">
          <div className="tl-line" />
          {jobs.map((job, i) => (
            <article className="tl-item" key={i}>
              <div className={`tl-dot${i < 3 ? " active" : ""}`} />
              <div className="tl-card">
                <div className="tl-header">
                  <h3 className="tl-role">{job.role}</h3>
                  <span className={`tl-badge ${job.type}`}>{job.period}</span>
                </div>
                <p className="tl-company">{job.company}</p>
                <ul className="tl-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.label}>
              <p className="skill-card-label">{group.label}</p>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="experience-resume">
          <ResumeDownload />
        </div>
      </div>
    </section>
  );
}