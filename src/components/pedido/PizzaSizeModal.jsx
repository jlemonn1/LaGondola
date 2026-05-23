import React, { useState, useMemo } from 'react';
import { pizzaConfig, calcPizzaPrice, getPizzaByKey } from '../../data/orderConfig';
import './PizzaSizeModal.css';

const PizzaSizeModal = ({ isOpen, onClose, onAdd, productKey }) => {
  const [size, setSize] = useState('normal');
  const [selectedExtras, setSelectedExtras] = useState([]);

  const product = getPizzaByKey(productKey);
  if (!isOpen || !product) return null;

  const toggleExtra = (key) => {
    setSelectedExtras(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  const price = useMemo(() => calcPizzaPrice(product, size, selectedExtras), [product, size, selectedExtras]);

  const handleAdd = () => {
    onAdd({ productKey, size, extras: selectedExtras });
    setSize('normal');
    setSelectedExtras([]);
    onClose();
  };

  return (
    <div className="pizza-modal-overlay" onClick={onClose}>
      <div className="pizza-modal" onClick={(e) => e.stopPropagation()}>
        <button className="pizza-modal__close" onClick={onClose} aria-label="Cerrar">×</button>

        <h2 className="pizza-modal__title">{product.name}</h2>
        <p className="pizza-modal__desc">{product.description}</p>

        <div className="pizza-modal__section">
          <h3 className="pizza-modal__label">Tamaño</h3>
          <div className="pizza-modal__sizes">
            {pizzaConfig.sizes.map(s => (
              <button
                key={s.key}
                className={`pizza-modal__size-btn ${size === s.key ? 'pizza-modal__size-btn--active' : ''}`}
                onClick={() => setSize(s.key)}
              >
                <span className="pizza-modal__size-name">{s.name}</span>
                <span className="pizza-modal__size-price">{product.prices[s.key]}€</span>
              </button>
            ))}
          </div>
        </div>

        <div className="pizza-modal__section">
          <h3 className="pizza-modal__label">Extras (opcionales)</h3>
          <div className="pizza-modal__extras">
            {pizzaConfig.extras.map(extra => (
              <label key={extra.key} className={`pizza-modal__extra ${selectedExtras.includes(extra.key) ? 'pizza-modal__extra--selected' : ''}`}>
                <input
                  type="checkbox"
                  checked={selectedExtras.includes(extra.key)}
                  onChange={() => toggleExtra(extra.key)}
                />
                <span className="pizza-modal__extra-name">{extra.name}</span>
                <span className="pizza-modal__extra-price">+{extra.price.toFixed(2).replace('.', ',')}€</span>
                {extra.note && <span className="pizza-modal__extra-note">{extra.note}</span>}
              </label>
            ))}
          </div>
        </div>

        <div className="pizza-modal__footer">
          <div className="pizza-modal__total">
            <span>Total:</span>
            <span className="pizza-modal__total-price">{price.toFixed(2).replace('.', ',')}€</span>
          </div>
          <button className="pizza-modal__add" onClick={handleAdd}>
            Añadir al pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaSizeModal;
