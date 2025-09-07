import { Link } from 'react-router-dom';
import {  FaHome } from 'react-icons/fa';
import '../styles/landing-page.css';
/* components */
import MatrixBg from '../components/MatrixBg';

export default function LandingPage() {
  return (
    <>
        <section>
            <div className="glass-card">
                <h1>Welcome to my Portfolio</h1>
                <p>I’m Marco Ramos — Full Stack Developer.</p>
                <Link to="/home-page" className="custom-btn"><FaHome size={30}/></Link>
            </div>
        </section>
    </>
    
  );
}

