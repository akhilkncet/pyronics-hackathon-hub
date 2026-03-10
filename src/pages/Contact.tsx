import Hero from '../components/Hero';
import { SITE_INFO } from '../constants';
import '../styles/pages.css';

export default function Contact() {
  return (
    <div className="page-contact">
      <Hero 
        title="Get In Touch"
        subtitle="Questions about PYRONIX 2K26? Reach out to us directly."
        overlayTitle="Get In Touch"
        overlaySubtitle="Questions about PYRONIX 2K26? Reach out to us directly."
      />

      <main className="section">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">We're happy to help — reach out via any of the channels below</p>

          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-info-icon">📧</div>
              <div className="contact-info-label">Email</div>
              <a href={`mailto:${SITE_INFO.email}`} className="contact-info-value">{SITE_INFO.email}</a>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">📞</div>
              <div className="contact-info-label">Phone</div>
              <a href={`tel:${SITE_INFO.phone}`} className="contact-info-value">{SITE_INFO.phone}</a>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">📍</div>
              <div className="contact-info-label">Venue</div>
              <div className="contact-info-value">{SITE_INFO.location}</div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">📅</div>
              <div className="contact-info-label">Event Date</div>
              <div className="contact-info-value">{SITE_INFO.eventDate}</div>
            </div>
          </div>

          <div className="contact-address-box">
            <strong>Address:</strong> {SITE_INFO.address}
          </div>
        </div>
      </main>
    </div>
  );
}
