import Head from "next/head";

import dynamic from "next/dynamic";

import Link from "next/link";

import { FiPlus } from "react-icons/fi";

import mapMarkerImg from "../public/map-marker.svg";

import styled from "styled-components";

const MapWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
`;

const ASide = styled.aside`
  width: 448px;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.header`
  & h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }
  & p {
    line-height: 28px;
    margin-top: 24px;
  }
`;
const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  line-height: 24px;

  & strong {
    font-weight: 800;
  }
`;

const Logo = styled.img({});

const CreateOrphanage = styled.a`
  position: absolute;

  right: 40px;
  bottom: 40px;

  z-index: 9999;

  width: 64px;
  height: 64px;
  background: #15c3d6;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background: #17d6eb;
  }
`;

const app = () => {
  return (
    <div>
      <Head>
        <title>Happy - App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <ASide>
          <Header>
            <Logo src={mapMarkerImg} alt="Logo Happy" />
            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando a sua visita :)</p>
          </Header>
          <Footer>
            <strong>Jundiaí</strong>
            <span>São Paulo</span>
          </Footer>
        </ASide>

        <MapWithNoSSR />

        <Link href="/app">
          <CreateOrphanage>
            <FiPlus size={32} color="#FFF" />
          </CreateOrphanage>
        </Link>
      </Container>
    </div>
  );
};

export default app;
