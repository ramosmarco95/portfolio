import "../styles/contact-page.css"
import ContactForm from "../components/ContactForm";
import '../styles/footer.css';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

export default function ContactPage () {
    return (
        <>
            <div className="contact-container">
                <div className="heading-contact-page">
                    <span>I am excited to hear from you!</span>
                    <p>📩 Note: This contact form is powered by Formspree, a secure third-party service that delivers your message directly to my inbox. Feel free to reach out — I’ll respond as soon as possible!</p>
                </div>
                <div className="contact-form-contact-page">
                    <ContactForm />
                    <div className="contact-me">

                        <div className="contact-info">
                            <h6 className="contact-title">Contact Me:</h6>
                            <ul className="contact-list">
                            <li>Email: <a href="mailto:tva.variant09@gmail.com" className="contact-link">tva.variant09@gmail.com</a></li>
                            <li>Phone: <a href="tel:+12084120338" className="contact-link">+1 (208) 412-0338</a></li>
                            </ul>
                        </div>

                        <div className="social-media">
                            <a href="https://www.linkedin.com/in/marco-ramos-9a07262a2/" target="_blank" rel="" className="social-link"><FaLinkedin className="social-icon" /></a>
                            <a href="https://github.com/ramosmarco95" target="_blank" rel="" className="social-link"><FaGithub className="social-icon"/></a>
                            <a href="https://www.facebook.com/marco.ramos.3557440" target="_blank" rel="" className="social-link"><FaFacebook className="social-icon"/></a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}