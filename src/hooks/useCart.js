import { useState, useCallback, useEffect } from 'react';
import {
  getProductByKey,
  getPizzaByKey,
  calcPizzaPrice,
  calcBurgerClasicaPrice,
  calcGofrePrice,
  calcFixedPrice,
} from '../data/orderConfig';

const STORAGE_KEY = 'gondola_cart';

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch { /* noop */ }
  return [];
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

function generateId() {
  return Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
}

export function useCart() {
  const [cart, setCart] = useState(loadCart);

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  // ─── PIZZA ───
  const addPizzaItem = useCallback((productKey, size, extras = []) => {
    const product = getPizzaByKey(productKey);
    if (!product) return;
    const unitPrice = calcPizzaPrice(product, size, extras);
    const newItem = {
      id: generateId(),
      type: 'pizza',
      name: product.name,
      unitPrice,
      quantity: 1,
      pizza: {
        productKey: product.key,
        size,
        extras,
      },
    };
    setCart(prev => [...prev, newItem]);
    return newItem;
  }, []);

  // ─── BURGER CLÁSICA ───
  const addBurgerClasicaItem = useCallback((variant, protein) => {
    const unitPrice = calcBurgerClasicaPrice(variant);
    const newItem = {
      id: generateId(),
      type: 'burgerClasica',
      name: `Burger ${variant.number}. ${variant.name}`,
      unitPrice,
      quantity: 1,
      burgerClasica: {
        variant: variant.number,
        variantName: variant.name,
        protein: protein.key,
        proteinName: protein.name,
      },
    };
    setCart(prev => [...prev, newItem]);
    return newItem;
  }, []);

  // ─── GOFRE ───
  const addGofreItem = useCallback((toppings, extraTopping = false) => {
    const unitPrice = calcGofrePrice(4.10, extraTopping ? 1 : 0);
    const newItem = {
      id: generateId(),
      type: 'gofre',
      name: 'Gofres',
      unitPrice,
      quantity: 1,
      gofre: {
        toppings: toppings.map(t => t.key),
        extraTopping,
      },
    };
    setCart(prev => [...prev, newItem]);
    return newItem;
  }, []);

  // ─── PRODUCTOS FIJOS ───
  const addFixedItem = useCallback((productKey) => {
    const product = getProductByKey(productKey);
    if (!product) return;
    const unitPrice = calcFixedPrice(product);
    const newItem = {
      id: generateId(),
      type: 'fixed',
      name: product.name,
      unitPrice,
      quantity: 1,
      fixed: {
        productKey: product.key,
        category: product.category,
      },
    };
    setCart(prev => [...prev, newItem]);
    return newItem;
  }, []);

  const removeItem = useCallback((id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    if (quantity < 1) {
      removeItem(id);
      return;
    }
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  const getOrderPayload = useCallback(() => {
    return {
      orderId: generateId(),
      timestamp: new Date().toISOString(),
      items: cart.map(item => ({
        name: item.name,
        unitPrice: item.unitPrice,
        quantity: item.quantity,
        ...(item.type === 'pizza' ? { pizza: item.pizza } :
          item.type === 'burgerClasica' ? { burgerClasica: item.burgerClasica } :
          item.type === 'gofre' ? { gofre: item.gofre } :
          { fixed: item.fixed }),
      })),
      total: parseFloat(total.toFixed(2)),
    };
  }, [cart, total]);

  return {
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
  };
}
