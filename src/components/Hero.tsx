import React from 'react';
import '../index.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section" id='Hero'>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">בבל תרגומים – שרותי משרד מתקדמים</h1>
        <p className="hero-subtitle">דיוק ומהירות ללא פשרות הינה חברה בעלת ניסיון רב [משנת 1998] המתמחה בביצוע תרגומים מקצועיים ובשירותי תמלול והקלטה במגוון רחב של שפות. </p>
        <button className="hero-cta">התחל עכשיו</button>
      </div>
    </section>
  );
};

export default Hero;
