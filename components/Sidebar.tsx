import styled from "styled-components";

import { FiArrowLeft } from "react-icons/fi";

import mapMarkerImg from "../public/map-marker.svg";

import { useRouter } from "next/router";

const Aside = styled.aside`
    position: fixed;
    height: 100%;
    padding: 32px 24px;
    background: linear-gradient(329.54deg, #15b6d6 0%, #15d6d6 100%);

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

        background: #12afcb;
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

export default function Sidebar() {
  const router = useRouter();

  const goBack = () => {
    router.push("/app");
  };
  return (
    <Aside>
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </Aside>
  );
}
