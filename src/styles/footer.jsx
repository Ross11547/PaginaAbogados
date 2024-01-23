import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../styles/colors";

export const BodyF = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background: #1e1c1c;
`;
export const ContentFI = styled.div`
  width: 50%;
  height: 50%;
  flex-direction: row; 
  margin: 2.5% 2.5%;
`;

export const ImgF = styled.img`
  width: 50%; 
  display: flex;
  justify-content: center; 
  align-items: center;
`;

export const ContentF = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: row; 
  justify-content: center;
  margin: 2.5% 2%;
`;

export const DivContent = styled.div`
  display: flex; 
  flex-direction: column;
  margin: 0 3%;
  & > h4{
    color: ${Colors.primary700};
  }
`;
export const Links = styled(Link)`
  color: ${Colors.primary200};
  text-decoration: none;
  font-size: 15px;
  line-height: 30px;
`;
