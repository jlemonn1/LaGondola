import React from 'react';
import MenuCard from './MenuCard';
import MenuListItem from './MenuListItem';
import './MenuPostresTab.css';

const MenuPostresTab = ({ postres }) => {
  const { items, gofre } = postres;

  return (
    <div className="menu-postres-tab">
      <div className="menu-postres-tab__grid">
        {/* Pizza Chocolate (único con dos tamaños) */}
        {items.filter(i => i.prices).map((item) => (
          <MenuCard
            key={item.name}
            name={item.name}
            prices={item.prices}
            ingredients={[]}
          />
        ))}
      </div>

      <ul className="menu-postres-tab__list">
        {/* Postres fijos (sin tamaños) */}
        {items.filter(i => i.price).map((item) => (
          <MenuListItem key={item.name} name={item.name} price={item.price} />
        ))}
        {/* Gofres */}
        <MenuListItem
          name={gofre.name}
          price={gofre.price}
        />
        <li className="menu-postres-tab__gofre-desc">
          {gofre.description} <span className="menu-postres-tab__gofre-extra">{gofre.extra}</span>
        </li>
      </ul>
    </div>
  );
};

export default MenuPostresTab;
