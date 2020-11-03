import React from "react";
import styled from "styled-components";

import Head from "next/head";
import dynamic from "next/dynamic";

import { FiPlus } from "react-icons/fi";

import Sidebar from "../../components/Sidebar";

const CreateOrphanageDiv = styled.div`
  display: flex;
`;

const Main = styled.main`
  flex: 1;
`;

const Form = styled.form`
  width: 700px;
  margin: 64px auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden;

  .map-container {
    margin-bottom: 30px;
  }

  fieldset {
    border: 0;
  }

  fieldset + fieldset {
    margin-top: 80px;
  }

  fieldset legend {
    width: 100%;

    font-size: 32px;
    line-height: 34px;
    color: #5c8599;
    font-weight: 700;

    border-bottom: 1px solid #d3e2e5;
    margin-bottom: 40px;
    padding-bottom: 24px;
  }

  .input-block + .input-block {
    margin-top: 24px;
  }

  .input-block label {
    display: flex;
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;
  }

  .input-block label span {
    font-size: 14px;
    color: #8fa7b3;
    margin-left: 24px;
    line-height: 24px;
  }

  .input-block input,
  .input-block textarea {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    outline: none;
    color: #5c8599;
  }

  .input-block input {
    height: 64px;
    padding: 0 16px;
  }

  .input-block textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }

  .input-block .new-image {
    width: 100%;
    height: 64px;
    background: #f5f8fa;
    border: 1px dashed #96d2f0;
    border-radius: 20px;
    cursor: pointer;
  }

  .input-block .button-select {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .input-block .button-select button {
    height: 64px;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    color: #5c8599;
    cursor: pointer;
  }

  .input-block .button-select button.active {
    background: #edfff6;
    border: 1px solid #a1e9c5;
    color: #37c77f;
  }

  .input-block .button-select button:first-child {
    border-radius: 20px 0px 0px 20px;
  }

  .input-block .button-select button:last-child {
    border-radius: 0 20px 20px 0;
    border-left: 0;
  }
`;

const Button = styled.button`
  margin-top: 64px;

  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: #3cdc8c;
  border-radius: 20px;
  color: #ffffff;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  svg {
    margin-right: 16px;
  }

  :hover {
    background: #36cf82;
  }
`;

const MapWithNoSSR = dynamic(() => import("../../components/MapCreate"), {
  ssr: false,
});

export default function CreateOrphanage() {
  return (
    <div>
      <Head>
        <title>Happy - Cadastro Orfanato</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CreateOrphanageDiv>
        <Sidebar />
        <Main>
          <Form>
            <fieldset>
              <legend>Dados</legend>
              <div className="map-container">
                <MapWithNoSSR />
              </div>

              <div className="input-block">
                <label htmlFor="name">Nome</label>
                <input id="name" />
              </div>

              <div className="input-block">
                <label htmlFor="about">
                  Sobre <span>Máximo de 300 caracteres</span>
                </label>
                <textarea id="name" maxLength={300} />
              </div>

              <div className="input-block">
                <label htmlFor="images">Fotos</label>

                <div className="uploaded-image"></div>

                <button className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </button>
              </div>
            </fieldset>
            <fieldset>
              <legend>Visitação</legend>

              <div className="input-block">
                <label htmlFor="instructions">Instruções</label>
                <textarea id="instructions" />
              </div>

              <div className="input-block">
                <label htmlFor="opening_hours">Nome</label>
                <input id="opening_hours" />
              </div>

              <div className="input-block">
                <label htmlFor="open_on_weekends">Atende fim de semana</label>

                <div className="button-select">
                  <button type="button" className="active">
                    Sim
                  </button>
                  <button type="button">Não</button>
                </div>
              </div>
            </fieldset>

            <Button type="submit">Confirmar</Button>
          </Form>
        </Main>
      </CreateOrphanageDiv>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
