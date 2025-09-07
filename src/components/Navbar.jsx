import '../styles/navbar.css';
import { Outlet, Link } from "react-router-dom";
import marco_logo from "../assets/marco-logo-no-bg.png";


const Navbar = () => {

  return (
    <>
    <nav className="navbar navbar-expand-sm ">
      <Link className="navbar-brand" to="/home-page"><img src={marco_logo} style={{ height: "60px", borderRadius: "25%", backgroundColor: "white" }} alt="logo"/></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mynavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home-page">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about-page">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/experience-page">Experience</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects-page">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact-page">Contact</Link>
          </li>
        </ul>
      </div>
  </nav>
    <Outlet />
  </>
  )
}


export default Navbar