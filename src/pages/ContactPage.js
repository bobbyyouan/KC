import React, { useState } from 'react';

function ContactPage() {
  const [suggestion, setSuggestion] = useState('');
  const [sent, setSent] = useState(false);

  const handleSuggestCity = () => {
    if (suggestion.trim()) {
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setSuggestion('');
      }, 2000);
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px' }}>
      <h1 style={{ marginBottom: '30px' }}>Get In Touch</h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '60px' }}>
        {/* Contact Info */}
        <div>
          <h2 style={{ marginBottom: '20px' }}>Contact Information</h2>
          <p style={{ fontSize: '16px', marginBottom: '10px' }}>
            <strong>Email:</strong>
          </p>
          <ul style={{ listStyle: 'none', marginBottom: '30px' }}>
            <li><a href="mailto:bobby.youan@ibhc.com" style={{ color: '#ff8c00', textDecoration: 'none' }}>bobby.youan@ibhc.com</a></li>
            <li><a href="mailto:bobbyyouan@gmail.com" style={{ color: '#ff8c00', textDecoration: 'none' }}>bobbyyouan@gmail.com</a></li>
          </ul>

          <p style={{ fontSize: '16px', marginBottom: '10px' }}>
            <strong>LinkedIn:</strong>
          </p>
          <a href="https://www.linkedin.com/in/bobbyyouan/" target="_blank" rel="noopener noreferrer" style={{ color: '#ff8c00', textDecoration: 'none' }}>Bobby Youan's LinkedIn Profile</a>
        </div>

        {/* Donation */}
        <div>
          <h2 style={{ marginBottom: '20px' }}>Support KC Pavement Analysis</h2>
          <p style={{ fontSize: '16px', marginBottom: '20px' }}>Donate to Bobby and Danny to support their website!</p>
          <a href="https://paypal.me/Bobbyyouan" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-block', marginBottom: '20px' }}>
            💳 Donate via PayPal
          </a>
        </div>
      </div>

      {/* Suggest a City */}
      <div style={{ backgroundColor: '#f5f5f5', padding: '40px', borderRadius: '8px' }}>
        <h2 style={{ marginBottom: '20px' }}>Suggest a City</h2>
        <p style={{ fontSize: '16px', marginBottom: '20px' }}>Which city should we add next?</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            placeholder="Enter city name"
            style={{ flex: 1, padding: '12px', borderRadius: '6px', border: '1px solid #e0e0e0' }}
          />
          <button onClick={handleSuggestCity} className="btn btn-primary">
            Suggest
          </button>
        </div>
        {sent && (
          <p style={{ color: '#4CAF50', marginTop: '10px', fontSize: '14px' }}>✅ Sent! Thank you for the suggestion.</p>
        )}
      </div>
    </div>
  );
}

export default ContactPage;
