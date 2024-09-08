import React from 'react';
import '../index.css';

const Aside: React.FC = () => {
  return (
    <aside className="aside-section" id='Aside'>
      <div className="aside-content">
        <h2 className="aside-title">למה לבחור בנו?</h2>
        <ul className="aside-list">
          <li className="aside-item">שירות מהיר ומקצועי</li>
          <li className="aside-item">תמיכה זמינה 24/7</li>
          <li className="aside-item">מחירים תחרותיים</li>
          <li className="aside-item">איכות גבוהה ללא פשרות</li>
        </ul>
        <button className="aside-cta"><a href="mailto=savion9@gmail.com" className='mail'> למידע נוסף </a></button>
      </div>
    </aside>
  );
};

export default Aside;
