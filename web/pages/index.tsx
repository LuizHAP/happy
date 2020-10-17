import Head from "next/head";
import Link from "next/link";

import { FiArrowRight } from "react-icons/fi";

import logoImg from "../public/logo.svg";
import landingSVG from "../public/landing.svg";

import styled from "styled-components";

const Container = styled.div({
  background: "linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%)",
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ContentWrapper = styled.div({
  position: "relative",

  width: "100%",
  maxWidth: "1100px",

  height: "100%",
  maxHeight: "680px",

  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  justifyContent: "space-between",

  background: `url('${landingSVG}') no-repeat right center`,
});

const Logo = styled.img``;

const Main = styled.main({
  maxWidth: "350px",

  "& h1": {
    fontSize: "76px",
    fontWeight: "900",
    lineHeight: "70px",
  },

  "& p": {
    marginTop: "40px",
    fontSize: "24px",
    linHeight: "34px",
  },
});

const Location = styled.div({
  position: "absolute",

  right: "0",
  top: "0",

  fontSize: "24px",
  lineHeight: "34px",

  display: "flex",
  flexDirection: "column",

  textAlign: "right",

  "& strong": {
    fontWeight: "800",
  },
});

const EnterApp = styled.a({
  position: "absolute",

  right: "0",
  bottom: "0",

  width: "80px",
  height: "80px",
  background: "#FFD666",
  borderRadius: "30px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  cursor: "pointer",

  transition: "background-color 0.2s",

  "&:hover": {
    background: "#96FEEF",
  },
});

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
