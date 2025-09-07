import '../styles/header.css';
import Navbar from './Navbar';

export default function Header() {
  return (
    <>
        <header className="header">
            <h1>I'm Glad You're Here!</h1>
            <Navbar />
        </header>
    </>
  );
}