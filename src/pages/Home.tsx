import Hero from '../components/Hero';
import EventGrid from '../components/EventGrid';
import '../styles/pages.css';

export default function Home() {
  return (
    <div className="page-home">
      <Hero 
        title="PYRONIX 2K26"
        subtitle="Unleash Your Innovation · March 24, 2026"
        ctaText="🎯 Get Your Pass"
        ctaLink="/passes"
        overlayTitle="PYRONIX 2K26 — IGNITE THE INNOVATION"
        overlaySubtitle="Competitions, concerts and creativity — join us March 24, 2026."
        showCountdown={true}
      />

      <section className="section about-section">
        <div className="container">
          <h2 className="section-title">📋 Instructions</h2>
          <p className="section-subtitle">Important participation details</p>
          <p className="about-description">
            All participants must bring their own laptops and AI tools. No additional provisions will be provided by the organizers except internet. All should register individually and can team up for their events.
          </p>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About PYRONIX 2K26</h2>
          <p className="section-subtitle">Unleash Your Innovation · Showcase Your Talent</p>
          
          <div className="about-content">
            <p className="about-description">
              PYRONIX 2K26 is a national level symposium organized at Kongunadu College of Engineering and Technology. 
              A grand platform for students to showcase their technical expertise, creativity, innovation, and cultural 
              talents through various competitive and collaborative events.
            </p>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">9+</div>
                <div className="stat-label">Events</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Expected Participants</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Fun & Learning</div>
              </div>
            </div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Technical Excellence</h3>
              <p>Compete with students from top institutions across the nation</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Innovation Hub</h3>
              <p>Showcase your creative ideas and groundbreaking projects</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3>Networking Powerhouse</h3>
              <p>Connect with peers and industry professionals</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Career Opportunities</h3>
              <p>Meet leading organizations and showcase your skills</p>
            </div>
          </div>

          <div className="about-illustration">
            <div className="illustration-title">INNOVATE</div>
            <div className="illustration-subtitle">Connect • Create • Conquer</div>
            <div className="illustration-grid">
              <div className="illustration-card">
                <div className="illustration-icon">&lt;/&gt;</div>
                <div className="illustration-label">Code</div>
              </div>
              <div className="illustration-card">
                <div className="illustration-icon">AI</div>
                <div className="illustration-label">Build</div>
              </div>
              <div className="illustration-card">
                <div className="illustration-icon">LAUNCH</div>
                <div className="illustration-label">Launch</div>
              </div>
              <div className="illustration-card">
                <div className="illustration-icon">DATA</div>
                <div className="illustration-label">Analyze</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="section events-section">
        <div className="container">
          <h2 className="section-title">Events</h2>
          <p className="section-subtitle">Explore our Technical, Non-Technical and Fun events</p>
          <EventGrid filterType="all" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3 className="event-category">🎤 Common Event</h3>
          <div className="event-container">
            <div className="event-card highlight">
              <div className="event-card-icon">🎤</div>
              <div className="event-name">Open Stage</div>
              <div className="event-desc">For all participants</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}