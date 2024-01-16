import styled from "styled-components";
import { Link } from "react-router-dom";

export const BodyIni = styled.div`
  width: 100%;
  height: 100%;
  margin: 4% 0;
`;

export const DivTexto1 = styled.div`
width: 33vw;
height: 10vh;
display: flex;
align-items: center;
margin: 0 7.3%;
`;

export const Texto1 = styled.h3`
color: #000000;
font-family: Poppins;
font-size: 20px;
font-weight: 700;
text-transform: uppercase;
`;

export const DivTexto2 = styled.div`
width: 33vw;
height: 40vh;
display: flex;
align-items: center;
margin: 0 7.3%;
`;

export const Texto2 = styled.h1`
color: #181E4B;
font-family: Volkhov;
font-size: 80px;
font-weight: 700;
line-height: 89px;
letter-spacing: -3.36px;
`;

export const DivParrafo1 = styled.div`
width: 33vw;
height: 10vh;
display: flex;
align-items: center;
margin: 0 7.3%;
`;

export const Parrafo1 = styled.p`
color: #000000;
font-family: Poppins;
font-size: 16px;
font-weight: 500px;
line-height: 30px; 
`;

export const Boton1 = styled.button`
width: 10vw;
height: 5vh;
margin: 1% 7.3%;
border-radius: 10px;
background: #F1A501;
border-color: transparent;
`;

export const Links = styled(Link)`
color: #000000;
text-align: center;
font-family: Google Sans;
font-size: 15px;
text-decoration: none;
`;