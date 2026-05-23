import React, { useState } from 'react';
import { gofreConfig } from '../../data/orderConfig';
import './GofreModal.css';

const GofreModal = ({ isOpen, onClose, onAdd }) => {
  const [selectedTopping, setSelectedTopping] = useState(gofreConfig.toppings[0]);
  const [extraTopping, setExtraTopping] = useState(false);

  if (!isOpen) return null;

  const handleAdd = () => {
    onAdd({ toppings: [selectedTopping], extraTopping });
    setSelectedTopping(gofreConfig.toppings[0]);
    setExtraTopping(false);
    onClose();
  };

  const total = (4.10 + (extraTopping ? gofreConfig.extraPrice : 0)).toFixed(2).replace('.', ',');

  return (
    <div className="gofre-modal-overlay" onClick={onClose}>
      <div className="gofre-modal" onClick={(e) => e.stopPropagation()}>
        <button className="gofre-modal__close" onClick={onClose} aria-label="Cerrar">×</button>

        <h2 className="gofre-modal__title">Gofres</h2>
        <p className="gofre-modal__desc">Elige tu topping y añade extra si quieres</p>

        <div className="gofre-modal__section">
          <h3 className="gofre-modal__label">Topping</h3>
          <div className="gofre-modal__toppings">
            {gofreConfig.toppings.map(t => (
              <button
                key={t.key}
                className={`gofre-modal__topping ${selectedTopping.key === t.key ? 'gofre-modal__topping--active' : ''}`}
                onClick={() => setSelectedTopping(t)}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>

        <div className="gofre-modal__section">
          <label className="gofre-modal__extra">
            <input
              type="checkbox"
              checked={extraTopping}
              onChange={(e) => setExtraTopping(e.target.checked)}
            />
            <span>Topping extra (+{gofreConfig.extraPrice.toFixed(2).replace('.', ',')}€)</span>
          </label>
        </div>

        <div className="gofre-modal__footer">
          <div className="gofre-modal__total">
            <span>Total:</span>
            <span className="gofre-modal__total-price">{total}€</span>
          </div>
          <button className="gofre-modal__add" onClick={handleAdd}>
            Añadir al pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default GofreModal;
