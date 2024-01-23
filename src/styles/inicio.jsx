import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "./colors";
import Fondo from "../assets/img/FondoInicio.png";

export const BodyIni = styled.div`
/*   background-image: url(${Fondo});
  background-size: cover; */
  background: ${Colors.primary400};
  width: 100%;
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
`;
export const DivCard = styled.div`
  width: 100%;
  height:10%;
  display: flex;
  justify-content: end;
  flex-direction: row;
  & > div {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;
    background: rgba(255, 255, 255, 0);
    border-radius: 10px 0px 0px 0px;
    padding: 20px;
    color: ${Colors.primary200};
    backdrop-filter: blur(7px);
    border: 2px solid rgba(249, 249, 249, 0.086);
    box-shadow: 0 0 25px rgba(124, 116, 116, 0.397), 0 0 25px rgba(0, 0, 0, 0.1),
      0 0 25px rgba(0, 0, 0, 0.1);
    & > p {
      height: 50%;
    }
    & > div {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      & > h2 {
        display: flex;
        justify-content: center;
        gap: 10px;
        align-items: center;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
`;
export const Ini = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

export const Texto1 = styled.h3`
  width: 33vw;
  height: 10vh;
  display: flex;
  align-items: center;
  margin: 0 7.3%;
  color: ${Colors.primary200};
  font-size: 20px;
`;

export const Texto2 = styled.h1`
  width: 33vw;
  height: 30vh;
  display: flex;
  align-items: center;
  margin: 0 7.3%;
  color: ${Colors.primary700};
  font-size: 80px;
  line-height: 80px;
  letter-spacing: -6.5px;
`;

export const Parrafo1 = styled.p`
  width: 33vw;
  height: 20vh;
  display: flex;
  align-items: center;
  margin: 0 7.3%;
  color: ${Colors.primary200};
  font-size: 16px;
  line-height: 30px;
`;

export const Boton1 = styled.button`
  width: 8vw;
  height: 6vh;
  margin: -1% 7.3%;
  border-radius: 10px;
  background: ${Colors.primary700};
  border-color: transparent;
  cursor: pointer;
`;

export const Links = styled(Link)`
  color: ${Colors.primary200};
  text-align: center;
  font-size: 13px;
  text-decoration: none;
`;
