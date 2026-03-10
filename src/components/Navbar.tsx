import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/events', label: 'Events' },
  { path: '/fun-events', label: 'Fun Events' },
  { path: '/passes', label: 'Passes' },
  { path: '/coordinators', label: 'Coordinators' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
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
          {NAV_ITEMS.map(item => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}