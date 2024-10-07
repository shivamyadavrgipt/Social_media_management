import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  const [isFAQOpen, setIsFAQOpen] = useState(false);

  const openFAQ = () => {
    setIsFAQOpen(true);
  };

  const closeFAQ = () => {
    setIsFAQOpen(false);
  };

  return (
    <footer className="footer-container">
      <p>© {year} Social Manager. All rights reserved.</p>
      <button onClick={openFAQ} className="faq-button">FAQ</button>

      {isFAQOpen && (
        <div className="faq-modal">
          <div className="faq-modal-content">
            <span className="close-faq" onClick={closeFAQ}>&times;</span>
            <h2>Frequently Asked Questions</h2>
            <div className="faq-item">
              <h4>What is Social Manager?</h4>
              <p>Social Manager is a tool for managing your social media posts, analytics, and settings from a single dashboard.</p>
            </div>
            <div className="faq-item">
              <h4>How can I manage my posts?</h4>
              <p>You can manage your posts from the 'Posts' tab where you can create, edit, and schedule your social media posts.</p>
            </div>
            <div className="faq-item">
              <h4>Can I see analytics for my social media?</h4>
              <p>Yes, you can view detailed analytics in the 'Analytics' tab to track your engagement, followers, and more.</p>
            </div>
            <div className="faq-item">
              <h4>How do I change my account settings?</h4>
              <p>You can change your account settings in the 'Settings' section, including your profile information and notifications.</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
