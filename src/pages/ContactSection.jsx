import '../styles/ContactSection.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import ContactForm from '../components/ContactForm-v1';

export default function ContactSection() {
    return (
        <section id="contact" className="section contact-section">
            <div className="section-container contact-grid">

                {/* Left column */}
                <div className="contact-info">
                    <p className="eyebrow">Contact</p>
                    <h2>Let's build something useful.</h2>
                    <p className="section-copy">
                        Have a project, opportunity, or idea? Send me a message and I'll get
                        back to you.
                    </p>

                    {/* Contact details */}
                    <div className="contact-details">
                        <a href="mailto:tva.variant09@gmail.com" className="contact-detail-item">
                            <HiMail className="contact-detail-icon" aria-hidden="true" />
                            <span>tva.variant09@gmail.com</span>
                        </a>
                        <div className="contact-detail-item">
                            <HiLocationMarker className="contact-detail-icon" aria-hidden="true" />
                            <span>Boise, ID</span>
                        </div>
                    </div>

                    {/* Social links */}
                    <div className="social-links">
                        <p className="social-label">Stay connected</p>
                        <div className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/marco-ramos-9a07262a2/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon-link"
                                aria-label="LinkedIn profile"
                            >
                                <FaLinkedin />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/ramosmarco95"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon-link"
                                aria-label="GitHub profile"
                            >
                                <FaGithub />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>

                
                {/* Right column */}
                <ContactForm />

            </div>
        </section>
    );
}
