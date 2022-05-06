import L, { point } from 'leaflet';
import { useEffect, useMemo } from 'react';
import { useMap } from 'react-leaflet';
import { useSelectedOrder } from '../../store/oder/orderSlice';
import RoutingMachine from './RoutingMachine';

const CurrentOrderLayer = () => {
  const selectedOrder = useSelectedOrder();

  const routePoints = useMemo(() => !selectedOrder ? [] : [
    [selectedOrder.from.latLng[0], selectedOrder.from.latLng[1]],
    [selectedOrder.to.latLng[0], selectedOrder.to.latLng[1]],
  ], [selectedOrder]);
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
