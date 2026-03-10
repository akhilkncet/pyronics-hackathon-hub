import { useState, useEffect } from 'react';
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

function getTimeLeft(target: Date) {
  const now = new Date().getTime();
  const diff = target.getTime() - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
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

  const eventDate = new Date('2026-03-24T09:00:00');
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(eventDate));

  useEffect(() => {
    if (!showCountdown) return;
    const timer = setInterval(() => setTimeLeft(getTimeLeft(eventDate)), 1000);
    return () => clearInterval(timer);
  }, [showCountdown]);

  const pad = (n: number) => String(n).padStart(2, '0');

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

        {showCountdown && (
          <div className="countdown-section">
            <div className="countdown-container">
              <div className="countdown-box">
                <span className="countdown-value">{pad(timeLeft.days)}</span>
                <span className="countdown-label">Days</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-box">
                <span className="countdown-value">{pad(timeLeft.hours)}</span>
                <span className="countdown-label">Hours</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-box">
                <span className="countdown-value">{pad(timeLeft.minutes)}</span>
                <span className="countdown-label">Minutes</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-box">
                <span className="countdown-value">{pad(timeLeft.seconds)}</span>
                <span className="countdown-label">Seconds</span>
              </div>
            </div>
          </div>
        )}

        {showCountdown && (
          <div className="hero-info">
            <span className="info-badge">📅 March 24, 2026</span>
            <span className="info-badge">📍 Kongunadu College of Engineering</span>
          </div>
        )}

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