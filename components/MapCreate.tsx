import { Fragment } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import mapIcon from "../utils/mapIcon";

const MapCreate = () => {
  return (
    <Fragment>
      <Map
        center={[-27.2092052, -49.6401092]}
        style={{ width: "100%", height: 280 }}
        zoom={15}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
        />

        <Marker
          interactive={false}
          icon={mapIcon}
          position={[-27.2092052, -49.6401092]}
        />
      </Map>
    </Fragment>
  );
};

export default MapCreate;
