import { useLocation } from 'react-router-dom';
import '../styles/hero.css';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  overlayTitle?: string;
  overlaySubtitle?: string;
  showCountdown?: boolean;
}

export default function Hero({ 
  title = 'PYRONIX 2K26', 
  subtitle = 'Unleash Your Innovation · March 24, 2026',
  ctaText = '🎯 Get Started',
  ctaLink = '/passes',
  overlayTitle,
  overlaySubtitle,
  showCountdown = false
}: HeroProps) {
  const location = useLocation();
  const showPrimaryAction = !!ctaLink && ctaLink !== location.pathname;
  const showEventsAction = location.pathname !== '/events';

  return (
    <div className={`page-hero ${showCountdown ? '' : 'minimal'}`.trim()} data-sign-overlay="true">
      {overlayTitle && (
        <div className="hero-overlay" role="region" aria-label={`${overlayTitle} hero`}>
          <h2>{overlayTitle}</h2>
          {overlaySubtitle && <p>{overlaySubtitle}</p>}
        </div>
      )}
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-tagline">{subtitle}</p>

        {showCountdown && <div className="countdown-section">
          <div className="countdown-container">
            <div className="countdown-box">
              <span className="countdown-value">00</span>
              <span className="countdown-label">Days</span>
            </div>
            <span className="countdown-separator">:</span>
            <div className="countdown-box">
              <span className="countdown-value">00</span>
              <span className="countdown-label">Hours</span>
            </div>
            <span className="countdown-separator">:</span>
            <div className="countdown-box">
              <span className="countdown-value">00</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <span className="countdown-separator">:</span>
            <div className="countdown-box">
              <span className="countdown-value">00</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        </div>}

        {showCountdown && <div className="hero-info">
          <span className="info-badge">📅 March 24, 2026</span>
          <span className="info-badge">📍 Engineering Block, Kongunadu College</span>
        </div>}

        {(showPrimaryAction || showEventsAction) && (
          <div className="hero-buttons">
            {showPrimaryAction && <a href={ctaLink} className="btn btn-primary">{ctaText}</a>}
            {showEventsAction && <a href="/events" className="btn btn-secondary">📊 Explore Events</a>}
          </div>
        )}
      </div>
    </div>
  );
}
