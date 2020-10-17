import { Map, TileLayer } from "react-leaflet";

i

const MapWithNoSSR = () => {
  return (
    <Map
      center={[-23.1817208, -46.9029968]}
      zoom={15}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </Map>
  );
};

export default MapWithNoSSR;
