import styled from "styled-components";
import { Link } from "react-router-dom";
import {Colors} from "../styles/colors";

export const Nav = styled.nav`
  width: 100vw;
  height: 75px;
  background: ${Colors.primary400};
  display: flex;
  flex-direction:row;
`
export const Likes = styled(Link)`
color: ${Colors.primary100};
font-size: 17px;
font-weight: 400;
text-decoration: none;
`;

export const DivOpcion = styled.div`
width: 60%;
height: 100%;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
`;

export const ImgLog = styled.img`
width: 110px;
height: 85px;
background-size:cover;
`;
export const Divimage=styled.div`
  height: 100%;
  width: 40%;
`;
