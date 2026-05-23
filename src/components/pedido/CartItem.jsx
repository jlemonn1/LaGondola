import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { pizzaConfig } from '../../data/orderConfig';
import './CartItem.css';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const details = () => {
    if (item.type === 'pizza' && item.pizza) {
      const parts = [];
      parts.push(item.pizza.size === 'normal' ? 'Normal' : 'Familiar');
      if (item.pizza.extras?.length) {
        const names = item.pizza.extras.map(k => {
          const extra = pizzaConfig.extras.find(e => e.key === k);
          return extra?.name;
        }).filter(Boolean);
        if (names.length) parts.push(`Extras: ${names.join(', ')}`);
      }
      return parts.join(' · ');
    }
    if (item.type === 'burgerClasica' && item.burgerClasica) {
      return `${item.burgerClasica.proteinName}`;
    }
    if (item.type === 'gofre' && item.gofre) {
      const parts = [];
      if (item.gofre.toppings?.length) {
        parts.push(`Topping: ${item.gofre.toppings.join(', ')}`);
      }
      if (item.gofre.extraTopping) parts.push('Extra topping');
      return parts.join(' · ');
    }
    return '';
  };

  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <span className="cart-item__name">{item.name}</span>
        {details() && <span className="cart-item__details">{details()}</span>}
      </div>
      <div className="cart-item__controls">
        <div className="cart-item__qty">
          <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} aria-label="Menos">
            <Minus size={14} />
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} aria-label="Más">
            <Plus size={14} />
          </button>
        </div>
        <span className="cart-item__price">{(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}€</span>
        <button className="cart-item__remove" onClick={() => onRemove(item.id)} aria-label="Eliminar">
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
