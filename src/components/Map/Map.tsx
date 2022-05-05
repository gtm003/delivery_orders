import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { CENTER } from '../../constants/constants';

const Map = () => {
    console.log('render Map');

    return (
      <div className='map-container'>
        <MapContainer doubleClickZoom={false} zoom={11} center={CENTER}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={CENTER}>
                <Popup>Moscow</Popup>
            </Marker>
        </MapContainer>
      </div>
    );
};

export default Map;
