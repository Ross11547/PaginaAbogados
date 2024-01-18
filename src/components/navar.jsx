import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../styles/nav";
import { Likes } from "../styles/nav";
import { DivOpcion } from "../styles/nav";
import { ImgLog, Divimage, DivOutlet } from "../styles/nav";
import Logo from "../assets/img/LogoRecortado.png";
import Footer from "./footer";
const Navbar = () => {
  return (
    <>
      <Nav>
        <Divimage>
          <ImgLog src={Logo} alt="Logo" />
        </Divimage>
        <DivOpcion>
          <Likes to="/">Inicio</Likes>
          <Likes to="/nosotros">Nosotros</Likes>
          <Likes to="/areapractica">Área de práctica</Likes>
          <Likes to="/contacto">Contacto</Likes>
        </DivOpcion>
      </Nav>
      <DivOutlet>
        <Outlet />
      </DivOutlet>
      <Footer />
    </>
  );
};

export default Navbar;
