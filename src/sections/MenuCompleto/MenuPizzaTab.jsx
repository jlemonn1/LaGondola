import React from 'react';
import MenuCard from './MenuCard';
import './MenuPizzaTab.css';

const MenuPizzaTab = ({ title, items }) => {
  return (
    <div className="menu-pizza-tab">
      <div className="menu-pizza-tab__grid">
        {items.map((item) => (
          <MenuCard
            key={item.name}
            name={item.name}
            prices={item.prices}
            ingredients={[item.description]}
            top={item.top}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuPizzaTab;
