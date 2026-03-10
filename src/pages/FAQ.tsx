import { useState } from 'react';
import Hero from '../components/Hero';
import '../styles/pages.css';

const FAQS = [
  { question: "How do I register?", answer: "No account needed. Visit the Passes page, choose your pass type, and click Register — you'll be taken directly to the Google Form to complete your registration." },
  { question: "What are the pass options and prices?", answer: "We offer four passes: WORKSHOP — ₹200 (access to the Cybersecurity & Ethical Hacking workshop + labs), RUBY — ₹250 (1 tech + 1 non-tech event), EMERALD — ₹300 (1 tech + 2 non-tech events), TOPAZ — ₹350 (2 tech + 2 non-tech events)." },
  { question: "What is the Workshop pass?", answer: "The Workshop pass (₹200) gives you access to the Cybersecurity and Ethical Hacking workshop, including hands-on labs and materials. It is a standalone pass separate from the Tech/Non-Tech event passes." },
  { question: "Who can participate?", answer: "PYRONIX 2K26 is open to students from all colleges. Events span Technical, Non-Technical, and Fun categories. Check individual event details for team sizes and eligibility rules." },
  { question: "Is there a refund policy?", answer: "Pass fees are non-refundable. In exceptional circumstances, please contact the coordinators directly with your registration details and reason for the request." },
  { question: "Can I change my team members after registration?", answer: "Minor team changes before the event start may be allowed at the organizer's discretion. Contact a student coordinator via the Coordinators page with your registration details." },
  { question: "Where can I find the schedule?", answer: "The detailed schedule will be shared on the Events page and through official channels closer to the event date (March 2026)." },
  { question: "What is the code of conduct?", answer: "All participants must be respectful, follow safety guidelines, and comply with judge and organizer instructions. Misconduct may result in disqualification." },
  { question: "Do I need a laptop for events?", answer: "Laptops are required for technical events. AI tools and external resources are generally not permitted during competitions unless explicitly stated in the event rules." },
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