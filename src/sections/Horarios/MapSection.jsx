import React from 'react';
import MapFrame from '../../components/layout/MapFrame/MapFrame';
import './MapSection.css';

const MapSection = ({ embedUrl, title = 'DONDE ESTAMOS' }) => {
  return (
    <div className="map-section">
      <h3 className="map-section__title">{title}</h3>
      <MapFrame src={embedUrl} title="Ubicación Pizzería Góndola" />
    </div>
  );
};

export default MapSection;
