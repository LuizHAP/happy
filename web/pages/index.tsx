import Head from "next/head";
import Link from "next/link";

import { FiArrowRight } from "react-icons/fi";

import logoImg from "../public/logo.svg";
import landingSVG from "../public/landing.svg";

import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url("${landingSVG}") no-repeat right center;
`;

const Logo = styled.img({});

const Main = styled.main`
  max-width: 350px;

  h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  };

  p {
    margin-top: 40px;
    font-size: 24px
    line-height: 34px;
  };
`;

const Location = styled.div`
  position: absolute;

  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;

  & strong {
    font-weight: 800;
  }
`;

const EnterApp = styled.a`
  position: absolute;

  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;
  background: #ffd666;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background: #96feef;
  }
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Happy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <ContentWrapper>
          <Logo src={logoImg} alt="Logo Happy" />

          <Main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </Main>

          <Location>
            <strong>Jundiaí</strong>
            <span>São Paulo</span>
          </Location>
          <Link href="/">
            <EnterApp>
              <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
            </EnterApp>
          </Link>
        </ContentWrapper>
      </Container>
    </div>
  );
}
