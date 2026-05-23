import React, { useState } from 'react';
import { burgerClasicaConfig } from '../../data/orderConfig';
import './BurgerClasicaModal.css';

const BurgerClasicaModal = ({ isOpen, onClose, onAdd }) => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedProtein, setSelectedProtein] = useState(burgerClasicaConfig.proteins[0]);

  if (!isOpen) return null;

  const handleAdd = () => {
    if (!selectedVariant) return;
    onAdd({ variant: selectedVariant, protein: selectedProtein });
    setSelectedVariant(null);
    setSelectedProtein(burgerClasicaConfig.proteins[0]);
    onClose();
  };

  return (
    <div className="burger-modal-overlay" onClick={onClose}>
      <div className="burger-modal" onClick={(e) => e.stopPropagation()}>
        <button className="burger-modal__close" onClick={onClose} aria-label="Cerrar">×</button>

        <h2 className="burger-modal__title">Burger Clásica</h2>
        <p className="burger-modal__subtitle">Elige ternera o pollo crujiente</p>

        <div className="burger-modal__proteins">
          {burgerClasicaConfig.proteins.map(p => (
            <button
              key={p.key}
              className={`burger-modal__protein ${selectedProtein.key === p.key ? 'burger-modal__protein--active' : ''}`}
              onClick={() => setSelectedProtein(p)}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="burger-modal__variants">
          {burgerClasicaConfig.variants.map(v => (
            <button
              key={v.number}
              className={`burger-modal__variant ${selectedVariant?.number === v.number ? 'burger-modal__variant--active' : ''}`}
              onClick={() => setSelectedVariant(v)}
            >
              <span className="burger-modal__variant-num">{v.number}.</span>
              <span className="burger-modal__variant-name">{v.name}</span>
              <span className="burger-modal__variant-price">{v.price.toFixed(2).replace('.', ',')}€</span>
            </button>
          ))}
        </div>

        <div className="burger-modal__footer">
          {selectedVariant && (
            <div className="burger-modal__summary">
              <span>{selectedVariant.number}. {selectedVariant.name}</span>
              <span className="burger-modal__summary-protein">— {selectedProtein.name}</span>
            </div>
          )}
          <button
            className="burger-modal__add"
            onClick={handleAdd}
            disabled={!selectedVariant}
          >
            Añadir al pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default BurgerClasicaModal;
