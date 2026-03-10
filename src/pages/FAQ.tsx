import Hero from '../components/Hero';
import '../styles/pages.css';

export default function FAQ() {
  const faqs = [
    {
      question: "How do I register?",
      answer: "There is no need to create an account. Simply choose a pass on the Passes page and complete the Google Form to register."
    },
    {
      question: "What are the pass options and prices?",
      answer: "We offer three main passes: RUBY — ₹250 (1 technical + 1 non-technical), EMERALD — ₹300 (1 technical + 2 non-technical), TOPAZ — ₹350 (2 technical + 2 non-technical)."
    },
    {
      question: "Who can participate?",
      answer: "PYRONIX is open to students from all colleges. Events are grouped as Technical, Non-Technical and Fun. Check each event for rules and team sizes."
    },
    {
      question: "Is there a refund policy?",
      answer: "Pass fees are generally non-refundable. Requests for refunds due to exceptional circumstances will be evaluated by the organizing committee — contact us with details."
    },
    {
      question: "Can I change my team members after registration?",
      answer: "Minor team changes may be allowed before the event start, subject to approval. Use the contact form to request a change with team and registration details."
    },
    {
      question: "Where can I find the schedule?",
      answer: "The full schedule will be published on the Events page and shared via the official channels closer to the event date."
    },
    {
      question: "What is the code of conduct?",
      answer: "All participants must follow the event code of conduct — be respectful, follow safety guidelines, and comply with judge instructions."
    }
  ];

  return (
    <div className="page-faq">
      <Hero 
        title="Frequently Asked Questions"
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
          
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            {faqs.map((faq, index) => (
              <div key={index} style={{marginBottom: '1rem', padding: '1.2rem', background: '#0f1419', borderRadius: '10px'}}>
                <strong>{faq.question}</strong>
                <p style={{marginTop: '0.6rem'}}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
