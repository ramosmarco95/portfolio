import '../styles/resume-download.css'
import { useMemo } from "react";
import resumePdf from "/public/resume/resume-2-24-2026.pdf"; 


export default function ResumeDownload({
  label = "Download Resume (PDF)",
  version = "Designed",
  updated = "Feb 2026",
  size = "~180 KB"
}) {
  const fileName = useMemo(() => `Marco_Ramos_Resume_${version}.pdf`, [version]);

  return (
    <div className="resume-toolbar" role="group" aria-label="Resume actions">
      <a
        className="btn btn-primary"
        href={resumePdf}
        download={fileName}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label}, last updated ${updated}, size ${size}`}
      >
     {label}
      </a>
      <div className="resume-meta">
        <span className="dot" /> <strong>Updated:</strong> {updated}
      </div>
    </div>
  );
}
