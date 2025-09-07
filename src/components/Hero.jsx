import React from "react";
import "../styles/hero.css";
import { Link } from "react-router-dom";
import meImg from "../assets/meImg.png";

function Hero() {
    return (
        <div className="hero-intro">
            <div className="text-container">
                <span>Hola Soy,</span>
                <h1>Marco</h1>
                <p className="cs-text">A passionate software developer who enjoys building clean, reliable, and user-friendly applications. Whether it’s a web app, mobile project, or backend system, I approach every project with curiosity, care, and a commitment to learning. This portfolio is a small collection of what I’ve created so far, and I'm always excited about what’s next.</p>
                <Link to="/projects-page"  className="custom-btn">View Projects</Link>
            </div>
            <div className="img-container">
                <div className="img-border"></div>
                <img src={meImg} alt="me_image" className="image"/>
            </div>
        </div>
    )
}

export default Hero;