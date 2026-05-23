// ============================================
// LA GÓNDOLA — Configuración del Sistema de Pedidos
// ============================================

export const CATEGORY = {
  PIZZA_CLASICA: 'pizzaClasica',
  PIZZA_VARIEDAD: 'pizzaVariedad',
  PIZZA_SUGERENCIA: 'pizzaSugerencia',
  SMASH_BURGER: 'smashBurger',
  BURGER_CLASICA: 'burgerClasica',
  PARA_COMPARTIR: 'paraCompartir',
  BOCADILLO: 'bocadillo',
  ENTREPAN: 'entrepan',
  POSTRE: 'postre',
  BEBIDA: 'bebida',
};

export const CATEGORIES = [
  { key: CATEGORY.PIZZA_CLASICA, label: 'Clásicas', icon: 'pizza' },
  { key: CATEGORY.PIZZA_VARIEDAD, label: 'Variedades', icon: 'pizza' },
  { key: CATEGORY.PIZZA_SUGERENCIA, label: 'Sugerencias', icon: 'star' },
  { key: CATEGORY.SMASH_BURGER, label: 'Smash', icon: 'beef' },
  { key: CATEGORY.BURGER_CLASICA, label: 'Burgers', icon: 'burger' },
  { key: CATEGORY.PARA_COMPARTIR, label: 'Para Compartir', icon: 'utensils' },
  { key: CATEGORY.BOCADILLO, label: 'Bocadillos', icon: 'sandwich' },
  { key: CATEGORY.ENTREPAN, label: 'Entrepanes', icon: 'baguette' },
  { key: CATEGORY.POSTRE, label: 'Postres', icon: 'ice-cream' },
  { key: CATEGORY.BEBIDA, label: 'Bebidas', icon: 'cup-soda' },
];

// ─── CONFIGURACIÓN DE PIZZA ───
export const pizzaConfig = {
  sizes: [
    { key: 'normal', name: 'Normal' },
    { key: 'familiar', name: 'Familiar' },
  ],
  extras: [
    { key: 'extra_normal', name: 'Ingrediente extra normal', price: 0.70 },
    { key: 'extra_especial', name: 'Ingrediente especial', price: 1.40, note: 'Salmón, Frankfurt, Carne, Pollo, Gulas, Carbonara, Serrano, Gambas, Queso de Cabra, Grana padano, Kebab, Anchoas, Queso cheddar, Queso Azul' },
    { key: 'extra_doble', name: 'Doble', price: 2.00, note: 'Masa, Queso, Carne hamburguesa, 4 Quesos, Jamón ibérico' },
    { key: 'extra_burrata', name: 'Burrata', price: 3.00 },
  ],
};

// ─── CONFIGURACIÓN BURGER CLÁSICA ───
export const burgerClasicaConfig = {
  proteins: [
    { key: 'ternera', name: 'Ternera', extraPrice: 0 },
    { key: 'pollo', name: 'Pollo crujiente', extraPrice: 0 },
  ],
  variants: [
    { number: 1, name: 'Tomate, lechuga y cebolla', price: 4.90 },
    { number: 2, name: 'Tomate, lechuga, cebolla y pepinillo', price: 5.20 },
    { number: 3, name: 'Tomate, lechuga, cebolla, pepinillo y bacon', price: 5.50 },
    { number: 4, name: 'Tomate, lechuga, cebolla, pepinillo y queso', price: 5.50 },
    { number: 5, name: 'Tomate, lechuga, cebolla, pepinillo, bacon y queso', price: 5.80 },
    { number: 6, name: 'Tomate, lechuga, cebolla, pepinillo, bacon, queso y huevo', price: 6.10 },
    { number: 7, name: 'Tomate, lechuga, cebolla, pepinillo, bacon, queso y york', price: 6.10 },
    { number: 8, name: 'Tomate, lechuga, cebolla, pepinillo, bacon, queso, york y huevo', price: 6.40 },
    { number: 9, name: 'Tomate, lechuga, cebolla caramelizada y queso de cabra', price: 5.90 },
  ],
};

// ─── CONFIGURACIÓN GOFRE ───
export const gofreConfig = {
  toppings: [
    { key: 'chocolate', name: 'Chocolate' },
    { key: 'nata', name: 'Nata' },
    { key: 'chocokinder', name: 'Chocokinder' },
    { key: 'lacasitos', name: 'Lacasitos' },
    { key: 'chocolate_blanco', name: 'Chocolate blanco' },
    { key: 'galleta_lotus', name: 'Galleta lotus' },
  ],
  extraPrice: 0.20,
};

// ─── PRODUCTOS FIJOS ───
export const fixedProducts = [
  // SMASH BURGERS
  { category: CATEGORY.SMASH_BURGER, key: 'rialto', name: 'Rialto Burger', price: 9.90, description: 'Pan brioche, dos discos de 90 gr. de smash vacuno, emmental, pepinillos, cebolla a la plancha, bacon crunchy y salsa especial Góndola' },
  { category: CATEGORY.SMASH_BURGER, key: 'new_york', name: 'New York Burger', price: 9.90, description: 'Pan brioche, dos discos de 90 gr. de smash vacuno, cheddar, pepinillos, bacon crunchy y salsa burger' },
  { category: CATEGORY.SMASH_BURGER, key: 'emmy', name: 'Emmy Burger', price: 9.90, description: 'Pan brioche, dos discos de 90 gr. de smash vacuno, tomate, rúcula, cheddar, pepinillos, bacon crunchy y salsa Emmy' },
  { category: CATEGORY.SMASH_BURGER, key: 'bacon_cheese', name: 'Bacon CheeseBurger', price: 9.90, description: 'Pan brioche, dos discos de 90 gr. de smash vacuno, doble cheddar, mermelada de bacon, pepinillo, ketchup y mostaza' },

  // PARA COMPARTIR
  { category: CATEGORY.PARA_COMPARTIR, key: 'ensalada_italiana', name: 'Ensalada Italiana', price: 7.50, description: 'Lechuga, tomate, cebolla, atún, queso manchego, aceitunas, york, huevo duro y espárragos' },
  { category: CATEGORY.PARA_COMPARTIR, key: 'ensalada_cesar', name: 'Ensalada César', price: 7.50, description: 'Lechuga, tomate, picatostes, pollo plancha, queso manchego y salsa César' },
  { category: CATEGORY.PARA_COMPARTIR, key: 'ensalada_burrata', name: 'Ensalada de Burrata', price: 9.50, description: 'Tomates cherry, rúcula, picatostes, burrata, jamón ibérico y AOVE' },
  { category: CATEGORY.PARA_COMPARTIR, key: 'kebabpapas', name: 'Kebabpapas', price: 8.40 },
  { category: CATEGORY.PARA_COMPARTIR, key: 'salchipapas', name: 'Salchipapas', price: 4.50 },
  { category: CATEGORY.PARA_COMPARTIR, key: 'papas_bacon_cheddar', name: 'Papas Bacon-Cheddar', price: 5.50 },
  { category: CATEGORY.PARA_COMPARTIR, key: 'patatas_fritas', name: 'Patatas Fritas', price: 2.80 },
  { category: CATEGORY.PARA_COMPARTIR, key: 'nuggets_pollo', name: 'Nuggets Pollo (10 unid)', price: 5.10 },
  { category: CATEGORY.PARA_COMPARTIR, key: 'alitas', name: 'Alitas', price: 6.50 },
  { category: CATEGORY.PARA_COMPARTIR, key: 'tequenos', name: 'Tequeños', price: 6.50 },
  { category: CATEGORY.PARA_COMPARTIR, key: 'croquetas_jamon', name: 'Croquetas Jamón Ibérico', price: 8.90 },
  { category: CATEGORY.PARA_COMPARTIR, key: 'racion_calamares', name: 'Ración de Calamares', price: 9.90 },
  { category: CATEGORY.PARA_COMPARTIR, key: 'aros_cebolla', name: 'Aros Cebolla', price: 5.50 },

  // BOCADILLOS
  { category: CATEGORY.BOCADILLO, key: 'boc_1', name: '1. Bacon y tomate', price: 4.90 },
  { category: CATEGORY.BOCADILLO, key: 'boc_2', name: '2. Bacon y queso', price: 4.90 },
  { category: CATEGORY.BOCADILLO, key: 'boc_3', name: '3. Bacon y pimientos', price: 5.30 },
  { category: CATEGORY.BOCADILLO, key: 'boc_4', name: '4. Serrano y tomate', price: 5.50 },
  { category: CATEGORY.BOCADILLO, key: 'boc_5', name: '5. Lomo y tomate', price: 5.50 },
  { category: CATEGORY.BOCADILLO, key: 'boc_6', name: '6. Lomo, tomate y queso', price: 5.80 },
  { category: CATEGORY.BOCADILLO, key: 'boc_7', name: '7. Lomo y pimientos', price: 5.80 },
  { category: CATEGORY.BOCADILLO, key: 'boc_8', name: '8. Tortilla francesa y tomate', price: 4.90 },
  { category: CATEGORY.BOCADILLO, key: 'boc_9', name: '9. Calamares', price: 5.90 },
  { category: CATEGORY.BOCADILLO, key: 'boc_10', name: '10. Calamares y Pimientos', price: 6.20 },
  { category: CATEGORY.BOCADILLO, key: 'boc_11', name: '11. Lechuga, tomate, atún y espárragos', price: 4.90 },
  { category: CATEGORY.BOCADILLO, key: 'boc_12', name: '12. Lechuga, bacon, queso, pepinillos y cebolla', price: 5.50 },
  { category: CATEGORY.BOCADILLO, key: 'boc_13', name: '13. Salmón, lechuga, tomate y philadelphia', price: 6.50 },
  { category: CATEGORY.BOCADILLO, key: 'boc_14', name: '14. Pollo plancha y tomate', price: 5.90 },
  { category: CATEGORY.BOCADILLO, key: 'boc_15', name: '15. Pollo crujiente y tomate', price: 5.90 },
  { category: CATEGORY.BOCADILLO, key: 'boc_16', name: '16. Pollo crujiente y queso', price: 5.90 },
  { category: CATEGORY.BOCADILLO, key: 'boc_17', name: '17. Lomo, serrano, pimientos y tortilla francesa', price: 6.50 },

  // ENTREPANES
  { category: CATEGORY.ENTREPAN, key: 'kebab_durum', name: 'Kebab Durum', price: 6.40, description: 'Ternera, Pollo o Mixto' },
  { category: CATEGORY.ENTREPAN, key: 'bocapizza', name: 'Bocapizza', price: 4.00 },
  { category: CATEGORY.ENTREPAN, key: 'perrito', name: 'Perrito', price: 3.00 },
  { category: CATEGORY.ENTREPAN, key: 'sandwich_mixto', name: 'Sandwich Mixto', price: 4.00, description: 'York y queso' },
  { category: CATEGORY.ENTREPAN, key: 'sandwich_tintero', name: 'Sandwich Tintero', price: 4.40, description: 'York, queso y huevo' },
  { category: CATEGORY.ENTREPAN, key: 'sandwich_vegetal', name: 'Sandwich Vegetal', price: 4.90, description: 'Lechuga, tomate, atún y espárragos' },
  { category: CATEGORY.ENTREPAN, key: 'sandwich_cesar', name: 'Sandwich César', price: 5.20, description: 'Lechuga, tomate, pollo plancha y salsa césar' },
  { category: CATEGORY.ENTREPAN, key: 'sandwich_aleman', name: 'Sandwich Alemán', price: 4.90, description: 'Lechuga, pepinillo, cebolla, bacon y queso' },

  // POSTRES (fijos sin tamaño)
  { category: CATEGORY.POSTRE, key: 'torrija', name: 'Torrija', price: 5.50 },
  { category: CATEGORY.POSTRE, key: 'explosion_kinder', name: 'Explosión de Kinder Bueno', price: 5.50 },
  { category: CATEGORY.POSTRE, key: 'brownie', name: 'Brownie', price: 5.30 },
  { category: CATEGORY.POSTRE, key: 'tarta_queso', name: 'Tarta de Queso', price: 5.50 },
  { category: CATEGORY.POSTRE, key: 'coulant', name: 'Coulant de Chocolate', price: 5.30 },

  // BEBIDAS
  { category: CATEGORY.BEBIDA, key: 'bebida_llevar', name: 'Bebida (Para llevar)', price: 2.50 },
];

// ─── PIZZAS CON PRECIOS DUAL (se manejan aparte porque tienen 2 precios) ───
export const pizzaProducts = [
  // CLÁSICAS
  { category: CATEGORY.PIZZA_CLASICA, key: '4_quesos', name: '4 Quesos', description: 'Tomate, mozzarella, emmental, cheddar y gouda', prices: { normal: 9.40, familiar: 18.80 } },
  { category: CATEGORY.PIZZA_CLASICA, key: 'atun', name: 'Atún', description: 'Tomate, mozzarella y atún', prices: { normal: 8.80, familiar: 17.60 } },
  { category: CATEGORY.PIZZA_CLASICA, key: 'bacon', name: 'Bacon', description: 'Tomate, mozzarella, bacon y champiñón', prices: { normal: 8.80, familiar: 17.60 } },
  { category: CATEGORY.PIZZA_CLASICA, key: 'barbacoa', name: 'Barbacoa', description: 'Salsa barbacoa, mozzarella y carne', prices: { normal: 9.40, familiar: 18.80 } },
  { category: CATEGORY.PIZZA_CLASICA, key: 'calzone', name: 'Calzone (Pizza Doblada)', description: 'Tomate, mozzarella, york, champiñón y alcachofas', prices: { normal: 9.10, familiar: 18.20 } },
  { category: CATEGORY.PIZZA_CLASICA, key: 'margarita', name: 'Margarita', description: 'Tomate y mozzarella', prices: { normal: 8.40, familiar: 16.80 } },
  { category: CATEGORY.PIZZA_CLASICA, key: 'carne', name: 'Carne', description: 'Tomate, mozzarella, carne y cebolla', prices: { normal: 9.40, familiar: 18.80 } },
  { category: CATEGORY.PIZZA_CLASICA, key: 'carbonara', name: 'Carbonara', description: 'Salsa carbonara, mozzarella y grana padano', prices: { normal: 9.90, familiar: 19.80 } },
  { category: CATEGORY.PIZZA_CLASICA, key: '5_quesos', name: 'Cinco Quesos', description: 'Tomate, mozzarella, emmental, cheddar, gouda y queso azul', prices: { normal: 9.90, familiar: 19.80 } },
  { category: CATEGORY.PIZZA_CLASICA, key: 'pepperoni', name: 'Pepperoni', description: 'Tomate, mozzarella, pepperoni y champiñón', prices: { normal: 9.10, familiar: 18.20 } },
  { category: CATEGORY.PIZZA_CLASICA, key: 'solona', name: 'Solona', description: 'Tomate, mozzarella, atún, huevo duro y aceitunas', prices: { normal: 9.10, familiar: 18.20 } },
  { category: CATEGORY.PIZZA_CLASICA, key: 'tropical', name: 'Tropical', description: 'Tomate, mozzarella, york y piña', prices: { normal: 9.10, familiar: 18.20 } },
  { category: CATEGORY.PIZZA_CLASICA, key: 'york_bacon', name: 'York-Bacon', description: 'Tomate, mozzarella, york y bacon', prices: { normal: 9.10, familiar: 18.20 } },
  { category: CATEGORY.PIZZA_CLASICA, key: 'york', name: 'York', description: 'Tomate, mozzarella y york', prices: { normal: 8.80, familiar: 17.60 } },

  // VARIEDADES
  { category: CATEGORY.PIZZA_VARIEDAD, key: 'ahumados', name: 'Ahumados', description: 'Tomate natural, philadelphia, salmón, anchoas y aceitunas', prices: { normal: 9.70, familiar: 19.40 } },
  { category: CATEGORY.PIZZA_VARIEDAD, key: 'americana', name: 'Americana', description: 'Tomate, mozzarella, frankfurt y bacon', prices: { normal: 9.40, familiar: 18.80 } },
  { category: CATEGORY.PIZZA_VARIEDAD, key: 'angel', name: 'Ángel', description: 'Tomate, mozzarella, carne, serrano, pimiento verde y berenjena', prices: { normal: 9.90, familiar: 19.80 } },
  { category: CATEGORY.PIZZA_VARIEDAD, key: 'bacon_atun', name: 'Bacon-Atún', description: 'Tomate, mozzarella, bacon, champiñón y atún', prices: { normal: 9.10, familiar: 18.20 } },
  { category: CATEGORY.PIZZA_VARIEDAD, key: 'bernina', name: 'Bernina', description: 'Tomate, mozzarella, york, chorizo, champiñón y pimiento', prices: { normal: 9.10, familiar: 18.20 } },
  { category: CATEGORY.PIZZA_VARIEDAD, key: 'compera', name: 'Compera', description: 'Salsa barbacoa, mozzarella, topping de pollo, pimiento y cebolla', prices: { normal: 9.70, familiar: 19.40 } },
  { category: CATEGORY.PIZZA_VARIEDAD, key: 'carne_especial', name: 'Carne Especial', description: 'Tomate, mozzarella, carne, cebolla y huevo', prices: { normal: 9.10, familiar: 18.20 } },
  { category: CATEGORY.PIZZA_VARIEDAD, key: 'cherry', name: 'Cherry', description: 'Tomate, mozzarella, serrano, queso de cabra y tomate cherry', prices: { normal: 9.90, familiar: 19.80 } },
  { category: CATEGORY.PIZZA_VARIEDAD, key: 'di_parma', name: 'Di Parma', description: 'Tomate, mozzarella, york, champiñón y grana padano', prices: { normal: 9.40, familiar: 18.80 } },
  { category: CATEGORY.PIZZA_VARIEDAD, key: 'gondola', name: 'Góndola', description: 'Tomate, mozzarella, serrano, atún, cebolla y pimiento', prices: { normal: 9.40, familiar: 18.80 } },
  { category: CATEGORY.PIZZA_VARIEDAD, key: 'gulas', name: 'Gulas', description: 'Philadelphia, gulas, gambas y salsa de ajo y perejil', prices: { normal: 9.90, familiar: 19.80 } },
  { category: CATEGORY.PIZZA_VARIEDAD, key: 'huerta', name: 'Huerta', description: 'Tomate natural, mozzarella, serrano, champiñón y cebolla', prices: { normal: 9.70, familiar: 19.40 } },
  { category: CATEGORY.PIZZA_VARIEDAD, key: 'momma_mia', name: 'Momma Mia', description: 'Tomate, mozzarella, atún, champiñón, cebolla y pimiento', prices: { normal: 9.10, familiar: 18.20 } },
  { category: CATEGORY.PIZZA_VARIEDAD, key: 'mediterranea', name: 'Mediterránea', description: 'Tomate, mozzarella, atún, gambas y salmón', prices: { normal: 10.30, familiar: 20.60 } },
  { category: CATEGORY.PIZZA_VARIEDAD, key: 'salmon', name: 'Salmón', description: 'Tomate, mozzarella, salmón y aceitunas', prices: { normal: 9.70, familiar: 19.40 } },
  { category: CATEGORY.PIZZA_VARIEDAD, key: 'vegetariana', name: 'Vegetariana', description: 'Tomate natural, mozzarella, pimiento verde y berenjena', prices: { normal: 9.40, familiar: 18.80 } },

  // SUGERENCIAS
  { category: CATEGORY.PIZZA_SUGERENCIA, key: 'burger_pizza', name: 'Burger (Pizza Doblada)', description: 'Base de salsa BBQ, mozzarella, hamburguesa, bacon, pepinillo y salsa burger', prices: { normal: 10.30, familiar: 20.60 } },
  { category: CATEGORY.PIZZA_SUGERENCIA, key: 'burratina', name: 'Burratina', description: 'Tomate, mozzarella, rúcula, jamón ibérico, tomates cherry, burrata y AOVE', prices: { normal: 10.40, familiar: 20.80 } },
  { category: CATEGORY.PIZZA_SUGERENCIA, key: 'cabramelizada', name: 'Cabramelizada', description: 'Tomate, mozzarella, queso de cabra y cebolla caramelizada', prices: { normal: 9.70, familiar: 19.40 } },
  { category: CATEGORY.PIZZA_SUGERENCIA, key: 'carbonara_especial', name: 'Carbonara Especial', description: 'Salsa carbonara, mozzarella, grana padano, bacon y champiñón', prices: { normal: 10.30, familiar: 20.60 } },
  { category: CATEGORY.PIZZA_SUGERENCIA, key: 'michigan', name: 'Michigan', description: 'Salsa emmy, mozzarella, carne, mermelada de bacon, cheddar y sésamo negro', prices: { normal: 10.90, familiar: 21.80 } },
  { category: CATEGORY.PIZZA_SUGERENCIA, key: 'cremosa', name: 'Cremosa', description: 'Salsa carbonara, mozzarella, kebab pollo y salsa barbacoa', prices: { normal: 10.30, familiar: 20.60 } },
  { category: CATEGORY.PIZZA_SUGERENCIA, key: 'goucha', name: 'Goucha', description: 'Salsa gaucha, mozzarella, carne y bacon', prices: { normal: 9.90, familiar: 19.80 } },
  { category: CATEGORY.PIZZA_SUGERENCIA, key: 'kebab', name: 'Kebab', description: 'Salsa BBQ, mozzarella, salsa yogur y kebab pollo, ternera o mixto', prices: { normal: 9.70, familiar: 19.40 } },
  { category: CATEGORY.PIZZA_SUGERENCIA, key: 'sweet_chili', name: 'Sweet Chili', description: 'Tomate, mozzarella, pollo crujiente, bacon y salsa mango habanero', prices: { normal: 10.30, familiar: 20.60 } },
  { category: CATEGORY.PIZZA_SUGERENCIA, key: 'serranito', name: 'Serranito', description: 'Salsa especial Góndola, mozzarella, carne, serrano, pimientos fritos y huevo batido', prices: { normal: 10.90, familiar: 21.80 } },
];

// Pizza Chocolate (postre con 2 tamaños)
export const pizzaChocolate = {
  category: CATEGORY.POSTRE,
  key: 'pizza_chocolate',
  name: 'Pizza Chocolate',
  prices: { normal: 7.90, familiar: 15.80 },
};

// Gofre
export const gofreProduct = {
  category: CATEGORY.POSTRE,
  key: 'gofre',
  name: 'Gofres',
  basePrice: 4.10,
  description: 'Con topping a elegir',
};

// ─── HELPERS ───
export function getProductsByCategory(category) {
  if (category === CATEGORY.PIZZA_CLASICA || category === CATEGORY.PIZZA_VARIEDAD || category === CATEGORY.PIZZA_SUGERENCIA) {
    return pizzaProducts.filter(p => p.category === category);
  }
  return fixedProducts.filter(p => p.category === category);
}

export function getProductByKey(key) {
  const all = [...fixedProducts, ...pizzaProducts, pizzaChocolate, gofreProduct];
  return all.find(p => p.key === key);
}

export function getPizzaByKey(key) {
  return pizzaProducts.find(p => p.key === key);
}

export function calcPizzaPrice(product, size, extras = []) {
  let price = product.prices[size] || product.prices.normal;
  extras.forEach(eKey => {
    const extra = pizzaConfig.extras.find(e => e.key === eKey);
    if (extra) price += extra.price;
  });
  return parseFloat(price.toFixed(2));
}

export function calcBurgerClasicaPrice(variant) {
  return variant.price;
}

export function calcGofrePrice(basePrice, extraToppings = 0) {
  return parseFloat((basePrice + (extraToppings * gofreConfig.extraPrice)).toFixed(2));
}

export function calcFixedPrice(product) {
  return product.price;
}
