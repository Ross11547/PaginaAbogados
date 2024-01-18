import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "./colors";

export const BodyIni = styled.div`
  width: 100%;
  height: 100%;
  background: ${Colors.gray300};
`;

export const Ini = styled.div`
width: 50%;
height: 100%;
`;

export const Inic = styled.div`
display:flex;
flex-direction: row;
`;

export const InicImg = styled.img`
height: 417px;
margin: 2% 4%;
border-radius: 10px;
border: solid 1px ${Colors.gray200};
`;

export const Texto1 = styled.h3`
width: 33vw;
height: 10vh;
display: flex;
align-items: center;
margin: 0 7.3%;
color: ${Colors.gray200};
font-size: 20px;
`;

export const Texto2 = styled.h1`
width: 33vw;
height: 30vh;
display: flex;
align-items: center;
margin: 0 7.3%;
color: ${Colors.primary100};
font-size: 80px;
line-height: 80px;
letter-spacing: -6.50px;
`;

export const Parrafo1 = styled.p`
width: 33vw;
height: 20vh;
display: flex;
align-items: center;
margin: 0 7.3%;
color: ${Colors.gray200};
font-size: 16px;
line-height: 30px; 
`;

export const Boton1 = styled.button`
width: 8vw;
height: 6vh;
margin: -1% 7.3%;
border-radius: 10px;
background: ${Colors.primary100};
border-color: transparent;
`;

export const Links = styled(Link)`
color: ${Colors.primary200};
text-align: center;
font-size: 15px;
text-decoration: none;
`;