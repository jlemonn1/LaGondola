import React from 'react';
import Sticker from '../../components/ui/Sticker/Sticker';
import './MenuCard.css';

const MenuCard = ({ name, price, prices, ingredients, top = false }) => {
  const hasDualPrice = prices && prices.normal && prices.familiar;

  return (
    <div className={`menu-card ${top ? 'menu-card--top' : ''}`}>
      {top && (
        <div className="menu-card__sticker">
          <Sticker variant="red" rotation={8}>TOP</Sticker>
        </div>
      )}
      <div className="menu-card__header">
        <h3 className="menu-card__name">{name}</h3>
        {hasDualPrice ? (
          <div className="menu-card__prices">
            <span className="menu-card__price">{prices.normal}</span>
            <span className="menu-card__price-sep">/</span>
            <span className="menu-card__price-fam">{prices.familiar}</span>
          </div>
        ) : (
          <span className="menu-card__price">{price}</span>
        )}
      </div>
      <ul className="menu-card__items">
        {ingredients.map((ing) => (
          <li key={ing}>{ing}</li>
        ))}
      </ul>
      <div className="menu-card__drip" aria-hidden="true" />
    </div>
  );
};

export default MenuCard;
