import Hero from '../components/Hero';
import EventGrid from '../components/EventGrid';
import '../styles/pages.css';

export default function Events() {
  return (
    <div className="page-events">
      <Hero 
        title="Events Lineup"
        subtitle="Discover Technical, Non-Technical and Fun events across the fest."
        ctaText="See Events"
        ctaLink="/events"
        overlayTitle="Events Lineup"
        overlaySubtitle="Discover Technical, Non-Technical and Fun events across the fest."
      />

      <main className="section events-section">
        <div className="container">
          <h2 className="section-title">Events Lineup</h2>
          <p className="section-subtitle">Explore our technical and non-technical events</p>
          <EventGrid filterType="all" />
        </div>
      </main>
    </div>
  );
}
