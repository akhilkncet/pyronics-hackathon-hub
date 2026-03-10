import { useEffect, useRef } from 'react';
import { EVENT_DATABASE } from '../constants';

interface EventGridProps {
  filterType?: 'all' | 'tech' | 'non-tech' | 'fun' | 'workshop';
  maxCols?: number;
}

export default function EventGrid({ filterType = 'all' }: EventGridProps) {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, index * 80);
        }
      });
    }, { threshold: 0.1 });

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const events = Object.entries(EVENT_DATABASE).filter(([_, event]) => {
    if (filterType === 'all') return true;
    return event.type === filterType;
  });

  const groups: Record<string, [string, any][]> = { tech: [], 'non-tech': [], workshop: [], fun: [] };
  events.forEach(([name, info]) => {
    if (info.type === 'tech') groups.tech.push([name, info]);
    else if (info.type === 'non-tech') groups['non-tech'].push([name, info]);
    else if (info.type === 'workshop') groups.workshop.push([name, info]);
    else if (info.type === 'fun') groups.fun.push([name, info]);
  });

  let cardIndex = 0;

  const renderSection = (title: string, items: [string, any][]) => {
    if (items.length === 0) return null;
    
    return (
      <div key={title} className="event-section">
        <h3 className="event-category">{title} ({items.length})</h3>
        <div className="event-container">
          {items.map(([name, info]) => (
            <div 
              key={name} 
              className={`event-card box-reveal ${info.type}-event`}
              ref={(el) => {
                if (el) cardsRef.current[cardIndex++] = el;
              }}
            >
              <div className="event-card-icon">{info.icon || '🔹'}</div>
              <div className="event-name">{name}</div>
              <div className="event-desc">{info.description || ''}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="events-wrapper">
      {filterType === 'all' && (
        <>
          {renderSection('⚡ Technical Events', groups.tech)}
          {renderSection('🎭 Non-Technical Events', groups['non-tech'])}
          {renderSection('Workshop', groups.workshop)}
          {renderSection('🎉 Fun Events', groups.fun)}
        </>
      )}
      {filterType === 'tech' && renderSection('⚡ Technical Events', groups.tech)}
      {filterType === 'non-tech' && renderSection('🎭 Non-Technical Events', groups['non-tech'])}
      {filterType === 'workshop' && renderSection('Workshop', groups.workshop)}
      {filterType === 'fun' && renderSection('🎉 Fun Events', groups.fun)}
    </div>
  );
}
