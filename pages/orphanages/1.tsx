import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo, FiArrowLeft } from "react-icons/fi";

import Head from "next/head";
import Link from "next/link";

import styled from "styled-components";

import mapMarkerImg from '../../public/map-marker.svg';

const OrphanagePage = styled.div`
  display: flex;
  min-height: 100vh;

  aside {
    position: fixed;
    height: 100%;
    padding: 32px 24px;
    background: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img {
      width: 48px;
    }

    footer {
      a,
      button {
        width: 48px;
        height: 48px;

        border: 0;

        background: #12AFCB;
        border-radius: 16px;

        cursor: pointer;

        transition: background-color 0.2s;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      a:hover,
      button:hover {
        background: #17d6eb;
      }
    }
  }
`;

const Main = styled.main`
  flex: 1;
`;

const OrphanageDetails = styled.div`
  width: 700px;
  margin: 64px auto;

  background: #FFFFFF;
  border: 1px solid #D3E2E5;
  border-radius: 20px;

  overflow: hidden;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .images {
    display: grid;
    grid-template-columns: repeat(6 ,1fr);
    column-gap: 16px;

    margin: 16px 40px 0;

    button {
      border: 0;
      height: 88px;
      background: none;
      cursor: pointer;
      border-radius: 20px;
      overflow: hidden;
      outline: none;
      
      opacity: 0.6;
      .active {
        opacity: 1;
      }

      img {
        width: 100%;
        height: 88px;
        object-fit: cover;
      }
    }
  }
  
  .orphanage-details-content {
    padding: 80px;
    h1 {
      color: #4D6F80;
      font-size: 54px;
      line-height: 54px;
      margin-bottom: 8px;
    }

    p {
      line-height: 28px;
      color: #5C8599;
      margin-top: 24px;
    }

    .map-container {
      margin-top: 64px;
      background: #E6F7FB;
      border: 1px solid #B3DAE2;
      border-radius: 20px;
      footer {
        padding: 20px 0;
        text-align: center;
        a {
          line-height: 24px;
          color: #0089A5;
          text-decoration: none;
        }
      }
    }

    hr {
      width: 100%;
      height: 1px;
      border: 0;
      background: #D3E2E6;
      margin: 64px 0;
    }

    h2 {
      font-size: 36px;
      line-height: 46px;
      color: #4D6F80;
    }

    .open-details {
      margin-top: 24px;

      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;

      div {
        padding: 32px 24px;
        border-radius: 20px;
        line-height: 28px;

        svg {
          display: block;
          margin-bottom: 20px;
        }

      }

      .hour {
        background: linear-gradient(149.97deg, #E6F7FB 8.13%, #FFFFFF 92.67%);
        border: 1px solid #B3DAE2;
        color: #5C8599;
      }

      .open-on-weekends {
        background: linear-gradient(154.16deg, #EDFFF6 7.85%, #FFFFFF 91.03%);
        border: 1px solid #A1E9C5;
        color: black;
      }
    }


  }
`;

const ContactButton = styled.button`
  margin-top: 64px;

  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: #3CDC8C;
  border-radius: 20px;
  color: #FFFFFF;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  svg {
    margin-right: 16px;
  }

  :hover {
    background: #36CF82;
  }
`;


export default function Orphanage() {
  return (
    <div>
    <Head>
        <title>Happy - Detalhes do Orfanato</title>
      </Head>
      <OrphanagePage>
          <aside>
            <img src={mapMarkerImg} alt="Happy" />

            <footer>
              <button type="button">
                <FiArrowLeft size={24} color="#FFF" />
              </button>
            </footer>
          </aside>

          <Main>
            <OrphanageDetails>
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />

              <div className="images">
                <button className="active" type="button">
                  <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
                </button>
                <button type="button">
                  <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
                </button>
                <button type="button">
                  <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
                </button>
                <button type="button">
                  <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
                </button>
                <button type="button">
                  <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
                </button>
                <button type="button">
                  <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
                </button>
              </div>
              
              <div className="orphanage-details-content">
                <h1>Lar das meninas</h1>
                <p>Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.</p>

                <div className="map-container">
                  <footer>
                    <a href="">Ver rotas no Google Maps</a>
                  </footer>
                </div>

                <hr />

                <h2>Instruções para visita</h2>
                <p>Venha como se sentir mais à vontade e traga muito amor para dar.</p>

                <div className="open-details">
                  <div className="hour">
                    <FiClock size={32} color="#15B6D6" />
                    Segunda à Sexta <br />
                    8h às 18h
                  </div>
                  <div className="open-on-weekends">
                    <FiInfo size={32} color="#39CC83" />
                    Atendemos <br />
                    fim de semana
                  </div>
                </div>

                <ContactButton>
                  <FaWhatsapp size={20} color="#FFF" />
                  Entrar em contato
                </ContactButton>
              </div>
            </OrphanageDetails>
          </Main>
          </OrphanagePage>
    </div>
  );
}