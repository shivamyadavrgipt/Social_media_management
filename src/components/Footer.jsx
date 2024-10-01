import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>© {year} Social Manager. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
