import L, { point } from 'leaflet';
import { useEffect, useMemo } from 'react';
import { useMap } from 'react-leaflet';
import { useAppSelector } from '../../hooks/useAppSelector';
import RoutingMachine from './RoutingMachine';

const CurrentOrderLayer = () => {
  const {from, to, key} = useAppSelector((state) => state.order.currentOder);

  const routePoints = !key ? [] : [
    [from.latLng[0], from.latLng[1]],
    [to.latLng[0], to.latLng[1]],
  ];
  const map = useMap();
  const defaultBounds = useMemo(() => map.getBounds(), [map]);

  useEffect(() => {
    if (routePoints.length) {
      const points = routePoints.map((point) =>
        L.latLng(point[0], point[1])
      );
      map?.fitBounds(L.latLngBounds(points), { padding: point(20, 20) });
    } else {
      defaultBounds && map.fitBounds(defaultBounds, { padding: point(0, 0) });
    }
  }, [defaultBounds, map, routePoints]);
  return (
    <>
      {routePoints.length ? (
        <RoutingMachine
          key={routePoints.toString()}
          waypoints={routePoints.map((point) =>
            L.latLng(point[0], point[1])
          )}
        />
      ) : null}
    </>
  );
};
export default CurrentOrderLayer;
