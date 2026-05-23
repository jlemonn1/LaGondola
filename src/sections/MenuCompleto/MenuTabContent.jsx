import React from 'react';
import { menuData } from '../../data/menuData';
import MenuPizzaTab from './MenuPizzaTab';
import MenuSmashBurgerTab from './MenuSmashBurgerTab';
import MenuBurgerClasicaTab from './MenuBurgerClasicaTab';
import MenuListTab from './MenuListTab';
import MenuPostresTab from './MenuPostresTab';
import './MenuTabContent.css';

const MenuTabContent = ({ activeTab }) => {
  const renderTab = () => {
    switch (activeTab) {
      case 'clasicas':
        return <MenuPizzaTab title={menuData.pizzaClasicas.title} items={menuData.pizzaClasicas.items} />;
      case 'variedades':
        return <MenuPizzaTab title={menuData.pizzaVariedades.title} items={menuData.pizzaVariedades.items} />;
      case 'sugerencias':
        return <MenuPizzaTab title={menuData.pizzaSugerencias.title} items={menuData.pizzaSugerencias.items} />;
      case 'smash':
        return <MenuSmashBurgerTab title={menuData.smashBurgers.title} items={menuData.smashBurgers.items} />;
      case 'burgers':
        return <MenuBurgerClasicaTab config={menuData.burgerClasica} />;
      case 'compartir':
        return <MenuListTab title={menuData.paraCompartir.title} items={menuData.paraCompartir.items} />;
      case 'bocadillos':
        return <MenuListTab title={menuData.bocadillos.title} items={menuData.bocadillos.items} />;
      case 'entrepanes':
        return <MenuListTab title={menuData.entrepanes.title} items={menuData.entrepanes.items} />;
      case 'postres':
        return <MenuPostresTab postres={menuData.postres} />;
      case 'bebidas':
        return <MenuListTab title={menuData.bebidas.title} items={menuData.bebidas.items} />;
      default:
        return null;
    }
  };

  return (
    <div className="menu-tab-content" key={activeTab}>
      {renderTab()}
    </div>
  );
};

export default MenuTabContent;
