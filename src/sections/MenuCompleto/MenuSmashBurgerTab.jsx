import React from 'react';
import './MenuSmashBurgerTab.css';

const MenuSmashBurgerTab = ({ title, items }) => {
  return (
    <div className="menu-smash-tab">
      <div className="menu-smash-tab__grid">
        {items.map((item) => (
          <div key={item.name} className="menu-smash-card">
            <div className="menu-smash-card__header">
              <h3 className="menu-smash-card__name">{item.name}</h3>
              <span className="menu-smash-card__price">{item.price}</span>
            </div>
            <p className="menu-smash-card__desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSmashBurgerTab;
