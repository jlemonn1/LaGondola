import React from 'react';
import { Plus } from 'lucide-react';
import { CATEGORY } from '../../data/orderConfig';
import './ProductoCard.css';

const ProductoCard = ({ product, onAdd, category, cart = [] }) => {
  const handleAdd = () => {
    onAdd(product, category);
  };

  const isPizza = category === CATEGORY.PIZZA_CLASICA || category === CATEGORY.PIZZA_VARIEDAD || category === CATEGORY.PIZZA_SUGERENCIA;

  const quantityInCart = cart.reduce((sum, item) => {
    if (item.type === 'fixed' && item.fixed?.productKey === product.key) return sum + item.quantity;
    if (item.type === 'pizza' && item.pizza?.productKey === product.key) return sum + item.quantity;
    return sum;
  }, 0);

  return (
    <div className="producto-card glass glass-border">
      <div className="producto-card__left">
        <h3 className="producto-card__name">{product.name}</h3>
        {product.description && (
          <p className="producto-card__desc">{product.description}</p>
        )}
      </div>
      <div className="producto-card__right">
        {isPizza && product.prices ? (
          <div className="producto-card__prices-dual">
            <span className="producto-card__price">{product.prices.normal.toFixed(2).replace('.', ',')}€</span>
            <span className="producto-card__price-sep">/</span>
            <span className="producto-card__price-fam">{product.prices.familiar.toFixed(2).replace('.', ',')}€</span>
          </div>
        ) : (
          <span className="producto-card__price">{product.price.toFixed(2).replace('.', ',')}€</span>
        )}
        <div className="producto-card__add-wrap">
          <button className="producto-card__add" onClick={handleAdd} aria-label={`Añadir ${product.name}`}>
            <Plus size={20} />
          </button>
          {quantityInCart > 0 && (
            <span className="producto-card__qty-badge">{quantityInCart}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductoCard;
