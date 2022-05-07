import L, { ControlOptions } from 'leaflet';
import 'leaflet-routing-machine';
import { useAppDispatch } from './useAppDispatch';
import {
  changeLoadingState,
  handleLoadingRouteError,
} from '../store/oder/orderSlice';

export const useRoutineMachineLayer = (props: ControlOptions) => {
  const dispatch = useAppDispatch();
  const showSpinner = () => {
    dispatch(changeLoadingState());
  };
  const hideSpinner = () => {
    dispatch(changeLoadingState());
  };
  const showErrorMessage = () => {
    dispatch(changeLoadingState());
    dispatch(handleLoadingRouteError());
  };
  const instance = L.Routing.control({
    lineOptions: {
      styles: [{ color: '#1890ff', weight: 4 }],
      extendToWaypoints: false,
      missingRouteTolerance: 0,
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: false,
    fitSelectedRoutes: false,
    showAlternatives: false,
    ...props,
  })
    .on('routingstart', showSpinner)
    .on('routesfound', hideSpinner)
    .on('routingerror', showErrorMessage);

  return instance;
};
