import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <img src="" alt="" />
            <div>
                <h4>Company</h4>
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/areapractica">Áreas de Práctica</Link>
                <h4>Contact</h4>
                <Link to={`https://api.whatsapp.com/send?phone=${+59170727383}`} target="_blank" rel="noopener noreferrer">WhatsApp 1</Link>
                <Link to={`https://api.whatsapp.com/send?phone=${+59170723161}`} target="_blank" rel="noopener noreferrer">WhatsApp 2</Link>
                <h4>Social Networks</h4>
                <Link to={`https://www.facebook.com/belc.consortium?mibextid=ZbWKwL`}>Facebook</Link>
                <Link to={``}>Instagram</Link>
                <Link to={``}>TikTok</Link>
            </div>
        </div>
    );
}

export default Footer;

