import '../styles/resume-download.css'
import { useMemo } from "react";
import resumePdf from "/public/resume/swdv-resume.pdf"; 


export default function ResumeDownload({
  label = "Download Resume (PDF)",
  version = "Designed",
  updated = "Sep 2025",
  size = "~180 KB"
}) {
  const fileName = useMemo(() => `Marco_Ramos_Resume_${version}.pdf`, [version]);

  return (
    <div className="resume-toolbar" role="group" aria-label="Resume actions">
      <a
        className="custom-btn resume-btn"
        href={resumePdf}
        download={fileName}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label}, last updated ${updated}, size ${size}`}
      >
     {label}
      </a>
      <div className="resume-meta">
        <span className="dot" /> <strong>Version:</strong> {version}
        <span className="dot" /> <strong>Updated:</strong> {updated}
        <span className="dot" /> <strong>Size:</strong> {size}
      </div>
    </div>
  );
}
