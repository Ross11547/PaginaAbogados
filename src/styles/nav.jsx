import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: transparent;
  width: 100%;
  height: 100%;
`;

export const Likes = styled(Link)`
color: black;
font-family: Google Sans;
font-size: 17px;
font-weight: 400;
text-decoration: none;
`

export const DivOpcion = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
`;

export const ImgLog = styled.img`
width: 114px;
height: 50px;
border-radius: 8px;
margin: 10% 0;
`

