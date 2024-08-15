import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';

const RoutingMachine = ({ from, to }) => {
  const map = useMap();

  L.Routing.control({
    waypoints: [
      L.latLng(from),
      L.latLng(to)
    ],
    routeWhileDragging: true
  }).addTo(map);


  return null;
};

export default RoutingMachine;
