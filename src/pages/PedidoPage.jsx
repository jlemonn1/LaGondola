import React, { useState } from 'react';
import PedidoNavbar from '../components/pedido/PedidoNavbar';
import CategoriaTabs from '../components/pedido/CategoriaTabs';
import ProductoGrid from '../components/pedido/ProductoGrid';
import PizzaSizeModal from '../components/pedido/PizzaSizeModal';
import BurgerClasicaModal from '../components/pedido/BurgerClasicaModal';
import GofreModal from '../components/pedido/GofreModal';
import CartDrawer from '../components/pedido/CartDrawer';
import QRModal from '../components/pedido/QRModal';
import { useCart } from '../hooks/useCart';
import { CATEGORY, getProductsByCategory, pizzaChocolate, gofreProduct } from '../data/orderConfig';
import './PedidoPage.css';

const PedidoPage = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORY.PIZZA_CLASICA);
  const [pizzaModalProduct, setPizzaModalProduct] = useState(null);
  const [showBurgerModal, setShowBurgerModal] = useState(false);
  const [showGofreModal, setShowGofreModal] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const {
    cart,
    addPizzaItem,
    addBurgerClasicaItem,
    addGofreItem,
    addFixedItem,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    total,
    getOrderPayload,
  } = useCart();

  const products = getProductsByCategory(activeCategory);

  const handleAdd = (product, category) => {
    if (category === CATEGORY.PIZZA_CLASICA || category === CATEGORY.PIZZA_VARIEDAD || category === CATEGORY.PIZZA_SUGERENCIA) {
      setPizzaModalProduct(product);
      return;
    }
    if (category === CATEGORY.BURGER_CLASICA) {
      setShowBurgerModal(true);
      return;
    }
    if (product.key === 'pizza_chocolate') {
      setPizzaModalProduct(product);
      return;
    }
    if (product.key === 'gofre') {
      setShowGofreModal(true);
      return;
    }
    addFixedItem(product.key);
  };

  const handlePizzaAdd = ({ productKey, size, extras }) => {
    addPizzaItem(productKey, size, extras);
    setPizzaModalProduct(null);
  };

  const handleBurgerAdd = ({ variant, protein }) => {
    addBurgerClasicaItem(variant, protein);
    setShowBurgerModal(false);
  };

  const handleGofreAdd = ({ toppings, extraTopping }) => {
    addGofreItem(toppings, extraTopping);
    setShowGofreModal(false);
  };

  const handleGenerateQR = () => {
    setShowQR(true);
    setShowCart(false);
  };

  const handleResetOrder = () => {
    clearCart();
    setShowQR(false);
  };

  return (
    <div className="pedido-page">
      <PedidoNavbar itemCount={itemCount} onCartClick={() => setShowCart(true)} />

      <main className="pedido-page__main container">
        <h1 className="pedido-page__title animate-fade-in-up">Haz tu pedido</h1>
        <p className="pedido-page__subtitle animate-fade-in-up delay-1">
          Selecciona una categoría y añade productos a tu cesta
        </p>

        <div className="pedido-page__tabs animate-fade-in-up delay-2">
          <CategoriaTabs active={activeCategory} onChange={setActiveCategory} />
        </div>

        <div className="pedido-page__grid animate-fade-in-up delay-3">
          <ProductoGrid products={products} onAdd={handleAdd} category={activeCategory} cart={cart} />
        </div>
      </main>

      <PizzaSizeModal
        isOpen={!!pizzaModalProduct}
        onClose={() => setPizzaModalProduct(null)}
        onAdd={handlePizzaAdd}
        productKey={pizzaModalProduct?.key}
      />

      <BurgerClasicaModal
        isOpen={showBurgerModal}
        onClose={() => setShowBurgerModal(false)}
        onAdd={handleBurgerAdd}
      />

      <GofreModal
        isOpen={showGofreModal}
        onClose={() => setShowGofreModal(false)}
        onAdd={handleGofreAdd}
      />

      <CartDrawer
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeItem}
        total={total}
        onGenerateQR={handleGenerateQR}
      />

      <QRModal
        isOpen={showQR}
        onClose={() => setShowQR(false)}
        onReset={handleResetOrder}
        orderData={getOrderPayload()}
      />
    </div>
  );
};

export default PedidoPage;
