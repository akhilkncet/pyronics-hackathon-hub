import { useState } from 'react';
import Hero from '../components/Hero';
import '../styles/pages.css';

const FAQS = [
  { question: "How do I register?", answer: "There is no need to create an account. Simply choose a pass on the Passes page and complete the Google Form to register." },
  { question: "What are the pass options and prices?", answer: "We offer three main passes: RUBY — ₹250 (1 technical + 1 non-technical), EMERALD — ₹300 (1 technical + 2 non-technical), TOPAZ — ₹350 (2 technical + 2 non-technical)." },
  { question: "Who can participate?", answer: "PYRONIX is open to students from all colleges. Events are grouped as Technical, Non-Technical and Fun. Check each event for rules and team sizes." },
  { question: "Is there a refund policy?", answer: "Pass fees are generally non-refundable. Requests for refunds due to exceptional circumstances will be evaluated by the organizing committee — contact us with details." },
  { question: "Can I change my team members after registration?", answer: "Minor team changes may be allowed before the event start, subject to approval. Use the contact form to request a change with team and registration details." },
  { question: "Where can I find the schedule?", answer: "The full schedule will be published on the Events page and shared via the official channels closer to the event date." },
  { question: "What is the code of conduct?", answer: "All participants must follow the event code of conduct — be respectful, follow safety guidelines, and comply with judge instructions." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="page-faq">
      <Hero 
        title="FAQ"
        subtitle="Quick answers about passes, rules and schedules."
        ctaText="View FAQ"
        ctaLink="/faq"
        overlayTitle="Frequently Asked Questions"
        overlaySubtitle="Quick answers about passes, rules and schedules."
      />

      <main className="section">
        <div className="container">
          <h2 className="section-title">FAQs</h2>
          <p className="section-subtitle">Quick answers to common questions</p>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                style={{
                  marginBottom: '0.75rem',
                  borderRadius: '12px',
                  border: `1px solid ${openIndex === index ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.04)'}`,
                  background: openIndex === index ? 'rgba(10, 0, 32, 0.6)' : 'rgba(10, 0, 32, 0.3)',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease',
                }}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  style={{
                    width: '100%',
                    padding: '1.1rem 1.3rem',
                    background: 'none',
                    border: 'none',
                    color: openIndex === index ? '#00f0ff' : '#eaf7ff',
                    fontWeight: 700,
                    fontSize: '1rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontFamily: 'Poppins, sans-serif',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {faq.question}
                  <span style={{ 
                    fontSize: '1.2rem', 
                    transition: 'transform 0.25s ease',
                    transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0)',
                    color: openIndex === index ? '#ff2d95' : 'rgba(255,255,255,0.4)',
                  }}>+</span>
                </button>
                {openIndex === index && (
                  <div style={{ 
                    padding: '0 1.3rem 1.1rem',
                    color: 'rgba(234, 247, 255, 0.75)',
                    lineHeight: 1.7,
                    fontSize: '0.92rem',
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}