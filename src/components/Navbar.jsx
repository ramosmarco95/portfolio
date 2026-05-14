import "../styles/navbar.css";
import { Outlet } from "react-router-dom";
import marco_logo from "../assets/marco-logo-no-bg.png";

const Navbar = () => {
  return (
    <>
      <header className="site-header">
        <nav className="navbar">
          <a className="logo" href="#home" aria-label="Go to home section">
            <img src={marco_logo} alt="Marco Ramos logo" />
          </a>

          <div className="nav-links">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <a className="nav-cta" href="#contact">
            Let&apos;s Talk
          </a>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Navbar;