import React from "react";
import styled from "styled-components";

import mapMarkerImg from "../../public/map-marker.svg";

const CreateOrphanageDiv = styled.div`
  display: flex;

  aside{
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
      a, button {
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

      a:hover, button:hover{
        background: #17D6EB;
      }
    }
  }
`;

const Main = styled.main`
  flex: 1;
`;

const Form = styled.form`
  width: 700px;
  margin: 64px auto;

  background: #FFFFFF;
  border: 1px solid #D3E2E5;
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden;

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
    color: #5C8599;
    font-weight: 700;
  
    border-bottom: 1px solid #D3E2E5;
    margin-bottom: 40px;
    padding-bottom: 24px;
  }

  .input-block + .input-block {
    margin-top: 24px;
  }
  
  .input-block label {
    display: flex;
    color: #8FA7B3;
    margin-bottom: 8px;
    line-height: 24px;
  }

  .input-block label span {
    font-size: 14px;
    color: #8FA7B3;
    margin-left: 24px;
    line-height: 24px;
  }

  .input-block input, .input-block textarea {
    width: 100%;
    background: #F5F8FA;
    border: 1px solid #D3E2E5;
    border-radius: 20px;
    outline: none;
    color: #5C8599;
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
    background: #F5F8FA;
    border: 1px dashed #96D2F0;
    border-radius: 20px;
    cursor: pointer;
  }

  .input-block .button-select {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .input-block .button-select button {
    height: 64px;
    background: #F5F8FA;
    border: 1px solid #D3E2E5;
    color: #5C8599;
    cursor: pointer;
  }

  .input-block .button-select button.active {
    background: #EDFFF6;
    border: 1px solid #A1E9C5;
    color: #37C77F;
  }

  .input-block .button-select button:first-child {
    border-radius: 20px 0px 0px 20px;
  }

  .input-block .button-select button:last-child {
    border-radius: 0 20px 20px 0;
    border-left: 0;
  }
`;

export default function CreateOrphanage() {
  return (
    <CreateOrphanageDiv>
      
    </CreateOrphanageDiv>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
