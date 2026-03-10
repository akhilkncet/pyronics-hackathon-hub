import { PASSES } from '../constants';
import { registerForPass } from '../utils';
import '../styles/passes.css';

export default function Passes() {
  return (
    <div className="page-passes">
      <div className="page-hero" data-sign-overlay="true">
        <div className="hero-overlay" role="region" aria-label="Passes hero">
          <h2>Grab Your Pass</h2>
          <p>Choose the pass that fits you — register and secure your spot.</p>
          <button className="hero-cta" onClick={() => window.location.href = '/passes'}>Choose Passes</button>
        </div>
      </div>

      <main className="section registration-dashboard" style={{background: 'var(--section-violet)', padding: '3rem 2rem', borderTop: '2px solid rgba(157,0,255,0.3)'}}>
        <div className="container">
          <h2 className="section-title" style={{color: '#00f0ff'}}>🎟️ Choose Your Pass & Register</h2>
          <p className="section-subtitle" style={{color: 'rgba(255,255,255,0.85)'}}>Select a pass type and click to complete your registration via Google Form</p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '2rem', marginTop: '2.5rem', maxWidth: '1000px', margin: '2.5rem auto'}}>
            {PASSES.map(pass => (
              <div key={pass.id} className={`pass-card-interactive pass-variant-${pass.name.toLowerCase()}`}>
                <div className="pass-card-top">
                  <div style={{fontSize: '3rem', marginBottom: '0.25rem'}}>{pass.icon}</div>
                  <h3>{pass.name}</h3>
                  <p>{pass.description}</p>
                </div>
                <div className="pass-card-body">
                  <div className="pass-price" style={{color: pass.priceColor}}>{pass.price}</div>
                  <ul className="pass-features">
                    {pass.features.map((feature, i) => (
                      <li key={i}>✅ {feature}</li>
                    ))}
                  </ul>
                  <button 
                    className="pass-cta btn btn-primary"
                    onClick={() => registerForPass(pass.id)}
                    style={{background: pass.gradient, color: '#071017'}}
                  >
                    Register →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{background: 'rgba(0,240,255,0.08)', borderLeft: '4px solid #00f0ff', padding: '1.5rem', borderRadius: '12px', marginTop: '2rem', color: '#eaf7ff', maxWidth: '900px', margin: '2rem auto'}}>
            <p style={{margin: 0, fontSize: '1rem'}}>📢 How it Works: Select a pass → Complete the Google Form to register (no account required)</p>
          </div>
        </div>
      </main>
    </div>
  );
}
