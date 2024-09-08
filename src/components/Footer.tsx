import React from 'react';
import '../index.css';


const Footer: React.FC = () => {
  return (
    <footer className="footer-section" id='Footer'>
      <div className="footer-content">
        <div className="footer-info">
          <h2 className="footer-title">אודותינו</h2>
          <p className="footer-text">השירותים אותם אנו מעניקים הינם בכל הארץ ונעשים במהירות, באיכות ובדיסקרטיות מלאה. אנו דוגלים במתן שירות אמין, מהיר ואיכותי ומחוייבים לסודיות מלאה כלפי לקוחותינו</p>
        </div>
        
        <div className="footer-links">
          <h2 className="footer-title">קישורים מהירים</h2>
          <ul className="footer-list">
            <li><a href="#NavBar">בית</a></li>
            <li><a href="#Main">שירותים</a></li>
            <li><a href="#Hero">אודות</a></li>
            <li><a href="#Footer">צור קשר</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h2 className="footer-title">צור קשר</h2>
          <p className="footer-text">טלפון: 123-456-7890</p>
          <p className="footer-text">דוא"ל: <a href="mailto:savion9@gmail.com" className='mail'>savion9@gmail.com</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">© {new Date().getFullYear()} כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
};

export default Footer;
