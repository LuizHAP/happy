import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import Leaflet from "leaflet";

import mapMarkerImg from "../public/map-marker.svg";

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [50, 60],
  iconAnchor: [25, 60],
  popupAnchor: [170, 2],
});

const MapWithNoSSR = () => {
  return (
    <Map
      center={[-23.1817208, -46.9029968]}
      zoom={15}
      style={{ width: "100%", height: "100%" }}
    >
      {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
      />

      <Marker position={[-23.1817208, -46.9029968]} icon={mapIcon}>
        <Popup closeButton={false} minWidth={240} maxWidth={240}>
          Lar das Meninas
        </Popup>
      </Marker>
    </Map>
  );
};

export default MapWithNoSSR;
