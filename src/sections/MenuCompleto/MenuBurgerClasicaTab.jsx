import React from 'react';
import MenuListItem from './MenuListItem';
import './MenuBurgerClasicaTab.css';

const MenuBurgerClasicaTab = ({ config }) => {
  return (
    <div className="menu-burger-tab">
      <p className="menu-burger-tab__subtitle">{config.subtitle}</p>
      <ul className="menu-burger-tab__list">
        {config.variants.map((v) => (
          <MenuListItem key={v.number} name={`${v.number}. ${v.name}`} price={v.price} />
        ))}
      </ul>
    </div>
  );
};

export default MenuBurgerClasicaTab;
