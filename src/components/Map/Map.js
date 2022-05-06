import React, { useCallback } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { CENTER } from '../../constants/constants';
import CurrentOrderLayer from './CurrentOrderLayer';

const Map = React.forwardRef((props, ref) => {
  const onMapCreated = useCallback(
    (map) => {
      if (ref) {
        ref.current = map;
      }
    },
    [ref]
  );
  return (
    <MapContainer
      doubleClickZoom={false}
      zoom={11}
      center={CENTER}
      whenCreated={onMapCreated}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <CurrentOrderLayer />
    </MapContainer>
  );
});

export default Map;
