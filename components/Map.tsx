import Link from "next/link";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";

import { FiArrowRight } from "react-icons/fi";

import mapMarkerImg from "../public/map-marker.svg";

import styled from "styled-components";

interface Orphanage {
  orphanages: Array;
  id: Number;
  latitude: Number;
  longitude: Number;
  name: String;
}

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [50, 60],
  iconAnchor: [25, 60],
  popupAnchor: [170, 2],
});

const GetOrphanage = styled.a`
  width: 40px;
  height: 40px;
  background: #15c3d6;
  cursor: pointer;
  box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPop = styled(Popup as any)`
  .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }

  .leaflet-popup-content {
    color: #0089a5;
    font-size: 18px;
    font-weight: bold;
    margin: 4px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .leaflet-popup-tip-container {
    display: none;
  }
`;

const MapWithNoSSR: React.FC<Orphanage> = ({ orphanages }) => {
  return (
    <Map
      center={[-23.1817208, -46.9029968]}
      zoom={15}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
      />

      {orphanages.map((orphanage) => {
        return (
          <Marker position={[orphanage.latitude, orphanage.longitude]} icon={mapIcon} key={orphanage.id}>
            <StyledPop closeButton={false} minWidth={240} maxWidth={240}>
              {orphanage.name}
              <Link href={`/orphanages/${orphanage.id}`}>
                <GetOrphanage>
                  <FiArrowRight size={20} color="#FFF" />
                </GetOrphanage>
              </Link>
            </StyledPop>
          </Marker>
        );
      })}
    </Map>
  );
};

export default MapWithNoSSR;
