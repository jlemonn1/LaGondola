import React from 'react';
import { RotateCcw, Clock, Hash } from 'lucide-react';
import { pizzaConfig } from '../../data/orderConfig';
import './VisorPedidoDisplay.css';

const VisorPedidoDisplay = ({ data, onReset }) => {
  if (!data || !data.items) return null;

  const formatDate = (iso) => {
    if (!iso) return '';
    const d = new Date(iso);
    return d.toLocaleString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit', day: '2-digit', month: '2-digit' });
  };

  const renderDetails = (item) => {
    if (item.pizza) {
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
    if (item.burgerClasica) {
      return `Variante ${item.burgerClasica.variant} · ${item.burgerClasica.proteinName}`;
    }
    if (item.gofre) {
      const parts = [];
      if (item.gofre.toppings?.length) parts.push(`Topping: ${item.gofre.toppings.join(', ')}`);
      if (item.gofre.extraTopping) parts.push('Extra topping');
      return parts.join(' · ');
    }
    return '';
  };

  return (
    <div className="visor-display">
      <div className="visor-display__header">
        <div className="visor-display__meta">
          <span className="visor-display__meta-item">
            <Hash size={14} /> {data.orderId?.slice(-6).toUpperCase() || '---'}
          </span>
          <span className="visor-display__meta-item">
            <Clock size={14} /> {formatDate(data.timestamp)}
          </span>
        </div>
        <button className="visor-display__reset" onClick={onReset}>
          <RotateCcw size={16} /> Escanear otro
        </button>
      </div>

      <ul className="visor-display__list">
        {data.items.map((item, idx) => (
          <li key={idx} className="visor-display__item">
            <div className="visor-display__item-main">
              <span className="visor-display__item-name">{item.name}</span>
              <span className="visor-display__item-qty">x{item.quantity}</span>
            </div>
            {renderDetails(item) && (
              <div className="visor-display__item-details">
                {renderDetails(item)}
              </div>
            )}
            <div className="visor-display__item-price">
              {(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}€
            </div>
          </li>
        ))}
      </ul>

      <div className="visor-display__total">
        <span className="visor-display__total-label">Total del pedido</span>
        <span className="visor-display__total-amount">{data.total?.toFixed(2).replace('.', ',')}€</span>
      </div>
    </div>
  );
};

export default VisorPedidoDisplay;
