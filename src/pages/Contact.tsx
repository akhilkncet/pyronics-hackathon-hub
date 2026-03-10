import { useState } from 'react';
import Hero from '../components/Hero';
import { SITE_INFO } from '../constants';
import { showAlert } from '../utils';
import '../styles/pages.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showAlert('Please fill in all fields', 'error');
      return;
    }

    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    messages.push({
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('contactMessages', JSON.stringify(messages));

    showAlert('✓ Message saved successfully! We will contact you soon.', 'success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page-contact">
      <Hero 
        title="Get In Touch"
        subtitle="Questions about PYRONIX 2K26? We're here to help — send us a message."
        ctaText="Contact Us"
        ctaLink="/contact"
        overlayTitle="Get In Touch"
        overlaySubtitle="Questions about PYRONIX 2K26? We're here to help — send us a message."
      />

      <main className="section">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Have a question? Send us a message.</p>

          <div className="contact-grid">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="contact-field">
                  <label htmlFor="contactName">Name</label>
                  <input
                    id="contactName"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contactEmail">Email</label>
                  <input
                    id="contactEmail"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contactMessage">Message</label>
                  <textarea
                    id="contactMessage"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message"
                    rows={6}
                    required
                  />
                </div>

                <div className="contact-actions">
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
              </form>
            </div>

            <aside className="contact-aside">
              <h3>Event Details</h3>
              <p><strong>Date:</strong> {SITE_INFO.eventDate}</p>
              <p><strong>Location:</strong> {SITE_INFO.location}</p>
              <p><strong>Email:</strong> {SITE_INFO.email}</p>
              <p><strong>Phone:</strong> {SITE_INFO.phone}</p>
              <p className="contact-address">{SITE_INFO.address}</p>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
