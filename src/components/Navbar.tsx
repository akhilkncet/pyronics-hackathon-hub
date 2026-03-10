import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          PYRONIX 2K26
        </Link>
        <button 
          type="button"
          className="nav-toggle"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('/'); }}>Home</Link></li>
          <li><Link to="/events" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('/events'); }}>Events</Link></li>
          <li><Link to="/fun-events" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('/fun-events'); }}>Fun Events</Link></li>
          <li><Link to="/passes" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('/passes'); }}>Passes</Link></li>
          <li><Link to="/coordinators" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('/coordinators'); }}>Coordinators</Link></li>
          <li><Link to="/faq" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('/faq'); }}>FAQ</Link></li>
          <li><Link to="/contact" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('/contact'); }}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
