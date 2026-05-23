import React from 'react';
import './MenuTabs.css';

const tabs = [
  { id: 'clasicas', label: 'Clásicas' },
  { id: 'variedades', label: 'Variedades' },
  { id: 'sugerencias', label: 'Sugerencias' },
  { id: 'smash', label: 'Smash' },
  { id: 'burgers', label: 'Burgers' },
  { id: 'compartir', label: 'Para Compartir' },
  { id: 'bocadillos', label: 'Bocadillos' },
  { id: 'entrepanes', label: 'Entrepanes' },
  { id: 'postres', label: 'Postres' },
  { id: 'bebidas', label: 'Bebidas' },
];

const MenuTabs = ({ activeTab, onChange }) => {
  return (
    <div className="menu-tabs" role="tablist" aria-label="Categorías del menú">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === tab.id}
          className={`menu-tabs__tab ${activeTab === tab.id ? 'menu-tabs__tab--active' : ''}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default MenuTabs;
