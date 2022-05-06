import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {
  
  const instance = L.Routing.control({
    lineOptions: {
      styles: [{ color: "#1890ff", weight: 4 }],
      extendToWaypoints: false,
      missingRouteTolerance: 0,
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: false,
    draggableWaypoints: false,
    fitSelectedRoutes: false,
    showAlternatives: false,
    ...props,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
