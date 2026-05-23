export const menuData = {
  // ─── TOP SUGERENCIAS (sección destacada en landing) ───
  topSugerencias: {
    title: "Nuestras Sugerencias",
    items: [
      {
        name: "Michigan ★",
        price: "10,90€",
        ingredients: ["Salsa emmy", "mozzarella", "carne", "mermelada de bacon", "cheddar", "sésamo negro"],
        top: true
      },
      {
        name: "Serranito ★",
        price: "10,90€",
        ingredients: ["Salsa especial Góndola", "mozzarella", "carne", "serrano", "pimientos fritos", "huevo batido"],
        top: true
      },
      {
        name: "Burratina",
        price: "10,40€",
        ingredients: ["Tomate", "mozzarella", "rúcula", "jamón ibérico", "tomates cherry", "burrata", "AOVE"],
        top: false
      },
      {
        name: "Burger (Pizza Doblada)",
        price: "10,30€",
        ingredients: ["Base BBQ", "mozzarella", "hamburguesa", "bacon", "pepinillo", "salsa burger"],
        top: false
      },
      {
        name: "Carbonara Especial",
        price: "10,30€",
        ingredients: ["Salsa carbonara", "mozzarella", "grana padano", "bacon", "champiñón"],
        top: false
      },
      {
        name: "Sweet Chili",
        price: "10,30€",
        ingredients: ["Tomate", "mozzarella", "pollo crujiente", "bacon", "salsa mango habanero"],
        top: false
      }
    ]
  },

  // ─── PIZZAS CLÁSICAS ───
  pizzaClasicas: {
    title: "Pizzas Clásicas",
    items: [
      { name: "4 Quesos", description: "Tomate, mozzarella, emmental, cheddar y gouda", prices: { normal: "9,40€", familiar: "18,80€" } },
      { name: "Atún", description: "Tomate, mozzarella y atún", prices: { normal: "8,80€", familiar: "17,60€" } },
      { name: "Bacon", description: "Tomate, mozzarella, bacon y champiñón", prices: { normal: "8,80€", familiar: "17,60€" } },
      { name: "Barbacoa", description: "Salsa barbacoa, mozzarella y carne", prices: { normal: "9,40€", familiar: "18,80€" } },
      { name: "Calzone (Pizza Doblada)", description: "Tomate, mozzarella, york, champiñón y alcachofas", prices: { normal: "9,10€", familiar: "18,20€" } },
      { name: "Margarita", description: "Tomate y mozzarella", prices: { normal: "8,40€", familiar: "16,80€" } },
      { name: "Carne", description: "Tomate, mozzarella, carne y cebolla", prices: { normal: "9,40€", familiar: "18,80€" } },
      { name: "Carbonara", description: "Salsa carbonara, mozzarella y grana padano", prices: { normal: "9,90€", familiar: "19,80€" } },
      { name: "Cinco Quesos", description: "Tomate, mozzarella, emmental, cheddar, gouda y queso azul", prices: { normal: "9,90€", familiar: "19,80€" } },
      { name: "Pepperoni", description: "Tomate, mozzarella, pepperoni y champiñón", prices: { normal: "9,10€", familiar: "18,20€" } },
      { name: "Solona", description: "Tomate, mozzarella, atún, huevo duro y aceitunas", prices: { normal: "9,10€", familiar: "18,20€" } },
      { name: "Tropical", description: "Tomate, mozzarella, york y piña", prices: { normal: "9,10€", familiar: "18,20€" } },
      { name: "York-Bacon", description: "Tomate, mozzarella, york y bacon", prices: { normal: "9,10€", familiar: "18,20€" } },
      { name: "York", description: "Tomate, mozzarella y york", prices: { normal: "8,80€", familiar: "17,60€" } },
    ]
  },

  // ─── PIZZAS DE VARIEDAD ───
  pizzaVariedades: {
    title: "Pizzas de Variedad",
    items: [
      { name: "Ahumados", description: "Tomate natural, philadelphia, salmón, anchoas y aceitunas", prices: { normal: "9,70€", familiar: "19,40€" } },
      { name: "Americana", description: "Tomate, mozzarella, frankfurt y bacon", prices: { normal: "9,40€", familiar: "18,80€" } },
      { name: "Ángel", description: "Tomate, mozzarella, carne, serrano, pimiento verde y berenjena", prices: { normal: "9,90€", familiar: "19,80€" } },
      { name: "Bacon-Atún", description: "Tomate, mozzarella, bacon, champiñón y atún", prices: { normal: "9,10€", familiar: "18,20€" } },
      { name: "Bernina", description: "Tomate, mozzarella, york, chorizo, champiñón y pimiento", prices: { normal: "9,10€", familiar: "18,20€" } },
      { name: "Compera", description: "Salsa barbacoa, mozzarella, topping de pollo, pimiento y cebolla", prices: { normal: "9,70€", familiar: "19,40€" } },
      { name: "Carne Especial", description: "Tomate, mozzarella, carne, cebolla y huevo", prices: { normal: "9,10€", familiar: "18,20€" } },
      { name: "Cherry", description: "Tomate, mozzarella, serrano, queso de cabra y tomate cherry", prices: { normal: "9,90€", familiar: "19,80€" } },
      { name: "Di Parma", description: "Tomate, mozzarella, york, champiñón y grana padano", prices: { normal: "9,40€", familiar: "18,80€" } },
      { name: "Góndola", description: "Tomate, mozzarella, serrano, atún, cebolla y pimiento", prices: { normal: "9,40€", familiar: "18,80€" } },
      { name: "Gulas", description: "Philadelphia, gulas, gambas y salsa de ajo y perejil", prices: { normal: "9,90€", familiar: "19,80€" } },
      { name: "Huerta", description: "Tomate natural, mozzarella, serrano, champiñón y cebolla", prices: { normal: "9,70€", familiar: "19,40€" } },
      { name: "Momma Mia", description: "Tomate, mozzarella, atún, champiñón, cebolla y pimiento", prices: { normal: "9,10€", familiar: "18,20€" } },
      { name: "Mediterránea", description: "Tomate, mozzarella, atún, gambas y salmón", prices: { normal: "10,30€", familiar: "20,60€" } },
      { name: "Salmón", description: "Tomate, mozzarella, salmón y aceitunas", prices: { normal: "9,70€", familiar: "19,40€" } },
      { name: "Vegetariana", description: "Tomate natural, mozzarella, pimiento verde y berenjena", prices: { normal: "9,40€", familiar: "18,80€" } },
    ]
  },

  // ─── PIZZAS SUGERENCIAS ───
  pizzaSugerencias: {
    title: "Pizzas Sugerencias",
    items: [
      { name: "Burger (Pizza Doblada)", description: "Base de salsa BBQ, mozzarella, hamburguesa, bacon, pepinillo y salsa burger", prices: { normal: "10,30€", familiar: "20,60€" }, top: true },
      { name: "Burratina", description: "Tomate, mozzarella, rúcula, jamón ibérico, tomates cherry, burrata y AOVE", prices: { normal: "10,40€", familiar: "20,80€" }, top: true },
      { name: "Cabramelizada", description: "Tomate, mozzarella, queso de cabra y cebolla caramelizada", prices: { normal: "9,70€", familiar: "19,40€" } },
      { name: "Carbonara Especial", description: "Salsa carbonara, mozzarella, grana padano, bacon y champiñón", prices: { normal: "10,30€", familiar: "20,60€" } },
      { name: "Michigan ★", description: "Salsa emmy, mozzarella, carne, mermelada de bacon, cheddar y sésamo negro", prices: { normal: "10,90€", familiar: "21,80€" }, top: true },
      { name: "Cremosa", description: "Salsa carbonara, mozzarella, kebab pollo y salsa barbacoa", prices: { normal: "10,30€", familiar: "20,60€" } },
      { name: "Goucha", description: "Salsa gaucha, mozzarella, carne y bacon", prices: { normal: "9,90€", familiar: "19,80€" } },
      { name: "Kebab", description: "Salsa BBQ, mozzarella, salsa yogur y kebab pollo, ternera o mixto", prices: { normal: "9,70€", familiar: "19,40€" } },
      { name: "Sweet Chili", description: "Tomate, mozzarella, pollo crujiente, bacon y salsa mango habanero", prices: { normal: "10,30€", familiar: "20,60€" } },
      { name: "Serranito ★", description: "Salsa especial Góndola, mozzarella, carne, serrano, pimientos fritos y huevo batido", prices: { normal: "10,90€", familiar: "21,80€" }, top: true },
    ]
  },

  // ─── SMASH BURGERS ───
  smashBurgers: {
    title: "Smash Burgers",
    items: [
      { name: "Rialto Burger", price: "9,90€", description: "Pan brioche, dos discos de 90 gr. de smash vacuno, emmental, pepinillos, cebolla a la plancha, bacon crunchy y salsa especial Góndola" },
      { name: "New York Burger", price: "9,90€", description: "Pan brioche, dos discos de 90 gr. de smash vacuno, cheddar, pepinillos, bacon crunchy y salsa burger" },
      { name: "Emmy Burger", price: "9,90€", description: "Pan brioche, dos discos de 90 gr. de smash vacuno, tomate, rúcula, cheddar, pepinillos, bacon crunchy y salsa Emmy" },
      { name: "Bacon CheeseBurger", price: "9,90€", description: "Pan brioche, dos discos de 90 gr. de smash vacuno, doble cheddar, mermelada de bacon, pepinillo, ketchup y mostaza" },
    ]
  },

  // ─── BURGERS CLÁSICAS ───
  burgerClasica: {
    title: "Burgers Clásicas",
    subtitle: "Elige ternera o pollo crujiente",
    proteins: [
      { key: "ternera", name: "Ternera" },
      { key: "pollo", name: "Pollo crujiente" },
    ],
    variants: [
      { number: 1, name: "Tomate, lechuga y cebolla", price: "4,90€" },
      { number: 2, name: "Tomate, lechuga, cebolla y pepinillo", price: "5,20€" },
      { number: 3, name: "Tomate, lechuga, cebolla, pepinillo y bacon", price: "5,50€" },
      { number: 4, name: "Tomate, lechuga, cebolla, pepinillo y queso", price: "5,50€" },
      { number: 5, name: "Tomate, lechuga, cebolla, pepinillo, bacon y queso", price: "5,80€" },
      { number: 6, name: "Tomate, lechuga, cebolla, pepinillo, bacon, queso y huevo", price: "6,10€" },
      { number: 7, name: "Tomate, lechuga, cebolla, pepinillo, bacon, queso y york", price: "6,10€" },
      { number: 8, name: "Tomate, lechuga, cebolla, pepinillo, bacon, queso, york y huevo", price: "6,40€" },
      { number: 9, name: "Tomate, lechuga, cebolla caramelizada y queso de cabra", price: "5,90€" },
    ]
  },

  // ─── PARA COMPARTIR ───
  paraCompartir: {
    title: "Para Compartir",
    items: [
      { name: "Ensalada Italiana", price: "7,50€", description: "Lechuga, tomate, cebolla, atún, queso manchego, aceitunas, york, huevo duro y espárragos" },
      { name: "Ensalada César", price: "7,50€", description: "Lechuga, tomate, picatostes, pollo plancha, queso manchego y salsa César" },
      { name: "Ensalada de Burrata", price: "9,50€", description: "Tomates cherry, rúcula, picatostes, burrata, jamón ibérico y AOVE" },
      { name: "Kebabpapas", price: "8,40€" },
      { name: "Salchipapas", price: "4,50€" },
      { name: "Papas Bacon-Cheddar", price: "5,50€" },
      { name: "Patatas Fritas", price: "2,80€" },
      { name: "Nuggets Pollo (10 unid)", price: "5,10€" },
      { name: "Alitas", price: "6,50€" },
      { name: "Tequeños", price: "6,50€" },
      { name: "Croquetas Jamón Ibérico", price: "8,90€" },
      { name: "Ración de Calamares", price: "9,90€" },
      { name: "Aros Cebolla", price: "5,50€" },
    ]
  },

  // ─── BOCADILLOS ───
  bocadillos: {
    title: "Bocadillos",
    items: [
      { name: "1. Bacon y tomate", price: "4,90€" },
      { name: "2. Bacon y queso", price: "4,90€" },
      { name: "3. Bacon y pimientos", price: "5,30€" },
      { name: "4. Serrano y tomate", price: "5,50€" },
      { name: "5. Lomo y tomate", price: "5,50€" },
      { name: "6. Lomo, tomate y queso", price: "5,80€" },
      { name: "7. Lomo y pimientos", price: "5,80€" },
      { name: "8. Tortilla francesa y tomate", price: "4,90€" },
      { name: "9. Calamares", price: "5,90€" },
      { name: "10. Calamares y Pimientos", price: "6,20€" },
      { name: "11. Lechuga, tomate, atún y espárragos", price: "4,90€" },
      { name: "12. Lechuga, bacon, queso, pepinillos y cebolla", price: "5,50€" },
      { name: "13. Salmón, lechuga, tomate y philadelphia", price: "6,50€" },
      { name: "14. Pollo plancha y tomate", price: "5,90€" },
      { name: "15. Pollo crujiente y tomate", price: "5,90€" },
      { name: "16. Pollo crujiente y queso", price: "5,90€" },
      { name: "17. Lomo, serrano, pimientos y tortilla francesa", price: "6,50€" },
    ]
  },

  // ─── ENTREPANES ───
  entrepanes: {
    title: "Entrepanes",
    items: [
      { name: "Kebab Durum", price: "6,40€", description: "Ternera, Pollo o Mixto" },
      { name: "Bocapizza", price: "4,00€" },
      { name: "Perrito", price: "3,00€" },
      { name: "Sandwich Mixto", price: "4,00€", description: "York y queso" },
      { name: "Sandwich Tintero", price: "4,40€", description: "York, queso y huevo" },
      { name: "Sandwich Vegetal", price: "4,90€", description: "Lechuga, tomate, atún y espárragos" },
      { name: "Sandwich César", price: "5,20€", description: "Lechuga, tomate, pollo plancha y salsa césar" },
      { name: "Sandwich Alemán", price: "4,90€", description: "Lechuga, pepinillo, cebolla, bacon y queso" },
    ]
  },

  // ─── POSTRES ───
  postres: {
    title: "Postres",
    items: [
      { name: "Pizza Chocolate", prices: { normal: "7,90€", familiar: "15,80€" } },
      { name: "Torrija", price: "5,50€" },
      { name: "Explosión de Kinder Bueno", price: "5,50€" },
      { name: "Brownie", price: "5,30€" },
      { name: "Tarta de Queso", price: "5,50€" },
      { name: "Coulant de Chocolate", price: "5,30€" },
    ],
    gofre: {
      name: "Gofres",
      price: "4,10€",
      description: "Con topping a elegir entre chocolate, nata, chocokinder, lacasitos, chocolate blanco y galleta lotus.",
      extra: "+0,20€ topping extra",
    }
  },

  // ─── BEBIDAS ───
  bebidas: {
    title: "Bebidas",
    items: [
      { name: "Bebida (Para llevar)", price: "2,50€" },
    ]
  },

  // ─── EXTRAS DE PIZZA (para sección informativa) ───
  extrasPizza: {
    title: "Extras para pizzas",
    normal: "+0,70€ ingrediente extra normal",
    especial: "+1,40€ ingrediente especial (salmón, frankfurt, carne, pollo, gulas, carbonara, serrano, gambas, queso de cabra, grana padano, kebab, anchoas, cheddar, queso azul)",
    doble: "+2,00€ doble (masa, queso, carne hamburguesa, 4 quesos, jamón ibérico)",
    burrata: "+3,00€ burrata",
    gluten: "+2,00€ sin gluten (puede contener trazas)",
    lactosa: "+1,00€ queso sin lactosa",
  },

  // ─── NUESTRA HISTORIA ───
  story: {
    title: "Orígenes",
    paragraphs: [
      "Góndola nació en 1983 en el corazón de Mocejón, cuando una familia soñaba con traer el auténtico sabor de la pizza italiana a su pueblo. Con masa tradicional, ingredientes de primera y una receta de salsa guardada celosamente, pronto se convirtió en el punto de encuentro de generaciones enteras.",
      "Han pasado más de cuarenta años, pero el horno sigue encendido con la misma ilusión. El faro que nos representa no es solo un símbolo: es la promesa de que, cuando llegas a Góndola, siempre encuentras calor, buena comida y una mesa esperando.",
      "Hoy seguimos amasando cada día, horneando con leña cuando el tiempo lo permite y combinando lo clásico con nuevas ideas —como nuestras Smash Burgers— para que nadie se quede con hambre."
    ]
  },

  // ─── CONTACTO ───
  contact: {
    name: "Pizzería Góndola",
    address: "Pl. Don Tomás Galindo, 3, 45270 Mocejón, Toledo",
    phone: "601 50 27 44",
    phoneLink: "tel:+34601502744",
    instagram: "@pizzeriagondolamocejon",
    instagramLink: "https://www.instagram.com/pizzeriagondolamocejon",
    mapEmbed: "https://www.google.com/maps?q=Pl.+Don+Tom%C3%A1s+Galindo,+3,+45270+Mocej%C3%B3n,+Toledo&output=embed"
  },

  // ─── HORARIOS ───
  hours: {
    title: "Horarios de Apertura",
    days: [
      { day: "Lunes", hours: "20:00 – 23:00" },
      { day: "Martes", hours: "Cerrado", closed: true },
      { day: "Miércoles", hours: "20:00 – 23:00" },
      { day: "Jueves", hours: "19:00 – 23:30" },
      { day: "Viernes", hours: "19:00 – 24:00", weekend: true },
      { day: "Sábado", hours: "19:00 – 0:30", weekend: true },
      { day: "Domingo", hours: "14:00 – 15:30 | 19:30 – 23:30" }
    ]
  }
};
