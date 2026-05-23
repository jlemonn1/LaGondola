import React from 'react';
import MenuListItem from './MenuListItem';
import './MenuListTab.css';

const MenuListTab = ({ title, items }) => {
  return (
    <div className="menu-list-tab">
      <ul className="menu-list-tab__list">
        {items.map((item) => (
          <MenuListItem
            key={item.name}
            name={item.name}
            price={item.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default MenuListTab;
