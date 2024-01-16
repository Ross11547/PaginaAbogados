import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import IconHome from '../assets/icons/iconHome';
import { Nav } from '../styles/nav';
import { Likes } from '../styles/nav';
import { DivOpcion } from '../styles/nav';
import { ImgLog } from '../styles/nav';
import Logo from '../assets/img/LogoBelc.png';
const Navbar = () => {
    return (
        <Nav>
            <DivOpcion>
                <Likes to="/"><ImgLog src={Logo} alt="" /></Likes>
                <Likes to="/">Inicio</Likes>
                <Likes to="/nosotros">Nosotros</Likes>
                <Likes to="/areapractica">Área de práctica</Likes>
                <Likes to="/contacto">Contacto</Likes>
            </DivOpcion>
            <Outlet/>
        </Nav>
    );
}

export default Navbar;
