import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../styles/colors";

export const BodyF = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: row;
  background: #1e1c1c;
`;
export const ContentFI = styled.div`
  width: 35%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:50px;
`;

export const ImgF = styled.img`
  width: 200px;
  height :140px;
  border-radius: 10px;
`;

export const ContentF = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: row; 
  justify-content: space-evenly;
  align-items: center;
`;

export const DivContent = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > h4{
    color: ${Colors.primary700};
    font-size: 22px;
  }
`;
export const Links = styled(Link)`
  color: ${Colors.primary200};
  text-decoration: none;
  font-size: 15px;
  line-height: 30px;
`;
