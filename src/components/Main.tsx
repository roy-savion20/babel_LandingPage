import React from 'react';
import '../index.css';

const Main: React.FC = () => {
  return (
    <main className="main-section" id='Main'>
      <section className="features">
        <div className="container">
          <div className="feature">
            <h2 className="feature-title">שירותי הקלטה ותמלול</h2>
            <p className="feature-description">זקוקים להקלטה ותמלול של ישיבות בית משפט, ישיבות עסקית למיניהן, ישיבות ZOOM, וידאו קונפרנס? בבל תרגומים מציעה שירותי הקלטה עם מכשור חדשני ומקצועי המבטיח איכות שמע מעולה ויכולת להעביר במדויק את ההקלטה לתמלול. </p>
          </div>
          <div className="feature">
            <h2 className="feature-title">שירותי תרגום</h2>
            <p className="feature-description">הדיוק בתרגום הינו בעל חשיבות גדולה ביותר. למסמך המתורגם נעשית עריכה לשונית כדי להתאים את הטקסט לשפה המתורגמת תוך שמירה על אותנטיות הטקסט.
תרגומים משפטיים, תרגומים טכניים, תרגומים רפואיים, תרגום עסקי, תרגום נוטריוני, תרגום אתרי אינטרנט ותוכנות, תרגום מסמכים ועוד.
</p>
          </div>
          <div className="feature">
            <h2 className="feature-title">שירותי תמלול – בצרוף חוו"ד משפטית. </h2>
            <p className="feature-description">תמלול הנעשה מהקלטות שיחות, כנסים,ועדות, ישיבות דירקטוריון ועוד. התמלול נעשה בהקפדה מלאה לנאמר בהקלטה. לכל תמלול מצ"ב הצהרה לקבילות התמלול בבתי המשפט</p>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <h2 className="cta-title">הצטרף אלינו עוד היום</h2>
        <p className="cta-subtitle">התחל להינות מהשירותים שלנו כבר עכשיו וראה את ההבדל.</p>
        <button className="cta-button"> <a href="mailto:savion9@gmail.com" className='contact'>צור קשר</a> </button>
      </section>
    </main>
  );
};

export default Main;
