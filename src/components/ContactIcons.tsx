import React from 'react';
import '../index.css'; // Import the CSS file for styling

const ContactIcons: React.FC = () => {
  return (
    <div className="contact-icons">
      <a href="https://wa.me/+975508570555" target="_blank" rel="noopener noreferrer" className="icon">
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="tel:+972508570555" className="icon">
        <i className="fas fa-phone-alt"></i>
      </a>
    </div>
  );
};

export default ContactIcons;
