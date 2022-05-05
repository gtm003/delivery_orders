import React from 'react';
import {
  MapContainer,
  TileLayer,
} from 'react-leaflet';
import { CENTER } from '../../constants/constants';
import CurrentOrderLayer from './CurrentOrderLayer';

const Map = () => {

  return (
    <div className="map-container">
      <MapContainer doubleClickZoom={false} zoom={11} center={CENTER}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <CurrentOrderLayer />
      </MapContainer>
    </div>
  );
};

export default Map;
