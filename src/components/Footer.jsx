import '../styles/footer.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import marco_logo from '../assets/marco-logo-no-bg.png';

export default function Footer() {
   return (
    <footer className="footer">
      <div className="footer-container">

        <div className="company-info">
          <Link to="/home-page">
            <img src={marco_logo} alt="Marco Logo" className="marco-logo" style={{width:'60px', backgroundColor:'white', borderRadius: "25%"}} />
          </Link>          
          <p className="believe-text">Secure. Reliable. Innovative</p>
        </div>

        <div className="quick-links">
          <h6 className="quick-links-title">Quick Links:</h6>
          <ul className="links-list">
            <li><Link to="/home-page" className="footer-link">Home</Link></li>
            <li><Link to="/about-page" className="footer-link">About</Link></li>
            <li><Link to="/experience-page" className="footer-link">Experience</Link></li>
            <li><Link to="/projects-page" className="footer-link">Projects</Link></li>
            <li><Link className="footer-link" to={"/contact-page"}>Contact</Link></li>
          </ul>
        </div>

        {/*<div className="contact-me">

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

        </div>*/}
        
      </div>
    </footer>
  )
}