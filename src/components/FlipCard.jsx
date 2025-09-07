import { useEffect, useRef, useState } from "react";
import '../styles/flip-card.css';

export default function FlipCard({ imgSrc, alt, caption, title, details }) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Refs for focus management
  const frontBtnRef = useRef(null);
  const backBtnRef  = useRef(null);

  // Move focus when flip state changes (keyboard + SR friendly)
  useEffect(() => {
    if (isFlipped) {
      // Focus something meaningful on the back
      backBtnRef.current?.focus();
    } else {
      // Return focus to where the user came from
      frontBtnRef.current?.focus();
    }
  }, [isFlipped]);

  return (
    <div className="flip-card" aria-live="polite">
      <div className={`flip-card-inner ${isFlipped ? "is-flipped" : ""}`}>
        {/* FRONT */}
        <div className="card-front" aria-hidden={isFlipped}>
          <figure className="card-figure">
            <img src={imgSrc} alt={alt} className="about-image" />
            <figcaption className="image-caption">{caption}</figcaption>
          </figure>

          <button
            className="flip-btn front"
            onClick={() => setIsFlipped(true)}
            aria-expanded={isFlipped}
            aria-label={`Show details about ${caption}`}
            ref={frontBtnRef}
            type="button"
          >
            More Info
          </button>
        </div>

        {/* BACK */}
        <div className="card-back" aria-hidden={!isFlipped}>
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{details}</p>

          <button
            className="flip-btn back"
            onClick={() => setIsFlipped(false)}
            aria-label="Hide details and return to image"
            ref={backBtnRef}
            type="button"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
