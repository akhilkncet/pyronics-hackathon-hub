import Hero from '../components/Hero';
import EventGrid from '../components/EventGrid';
import '../styles/pages.css';

export default function FunEvents() {
  return (
    <div className="page-fun-events">
      <Hero 
        title="Fun Events"
        subtitle="Experience exciting and engaging fun activities."
        ctaText="Explore Fun Events"
        ctaLink="/fun-events"
        overlayTitle="Fun Events & Night Shows"
        overlaySubtitle="Light-hearted competitions — fun for everyone."
      />

      <main className="section events-section">
        <div className="container">
          <h2 className="section-title">Fun Events</h2>
          <p className="section-subtitle">Enjoy our exciting fun-filled activities and entertainment</p>
          <EventGrid filterType="fun" />
        </div>
      </main>
    </div>
  );
}
