import { Map, TileLayer } from "react-leaflet";

const MapWithNoSSR = () => {
  console.log(process);
  return (
    <Map
      center={[-23.1817208, -46.9029968]}
      zoom={15}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.MAPBOX_TOKEN}`}
      /> */}
    </Map>
  );
};

export default MapWithNoSSR;
