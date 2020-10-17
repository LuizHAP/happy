import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  width: 100vw;
  height: 100vh;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Happy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1>Teste</h1>
      </Container>
    </div>
  );
}
