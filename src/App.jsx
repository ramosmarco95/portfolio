
import './App.css';
import {  Routes, Route } from 'react-router-dom';

/* pages */ 
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

/* components */
import Header from './components/Header';
import Footer from './components/Footer';
import MatrixBg from './components/MatrixBg';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {

  return (
    <> 
      <MatrixBg fontSize={16} speed={50} opacity={0.09}/> 
        <main>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="/home-page" element={<>
              <Header />
              <HomePage />
              <Footer />
            </>} />

            <Route path="/about-page" element={<>
              <Header />
              <AboutPage />
              <Footer />
            </>} />

            <Route path='/experience-page' element={<>
              <Header />
              <ExperiencePage />
              <Footer />
            </>} />
            
            <Route path='/projects-page' element={<>
              <Header />
              <ProjectPage />
              <Footer />
            </>} />

            <Route path='/contact-page' element={<>
              <Header />
              <ContactPage />
              <Footer />
            </>} />

          </Routes>
        </main>
    </>
  )
}

export default App
