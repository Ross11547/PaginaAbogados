import React from "react";
import { Link } from "react-router-dom";
import {
  BodyF,
  ImgF,
  Links,
  ContentF,
  ContentFI,
  DivContent,
} from "../styles/footer";
const Footer = () => {
  return (
    <BodyF>
      <ContentFI>
        <ImgF
          src="https://www.shutterstock.com/image-photo/portrait-young-female-lawyer-attorney-600nw-2139778293.jpg"
          alt="imagen"
        />
      </ContentFI>
      <ContentF>
        <DivContent>
          <h4>Company</h4>
          <Links to="/nosotros">Nosotros</Links>
          <Links to="/areapractica">Áreas de Práctica</Links>
        </DivContent>
        <DivContent>
          <h4>Contact</h4>
          <Links
            to={`https://api.whatsapp.com/send?phone=${+59170727383}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp 1
          </Links>
          <Links
            to={`https://api.whatsapp.com/send?phone=${+59170723161}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp 2
          </Links>
        </DivContent>
        <DivContent>
          <h4>Social Networks</h4>
          <Links
            to={`https://www.facebook.com/belc.consortium?mibextid=ZbWKwL`}
          >
            Facebook
          </Links>
          <Links to={``}>Instagram</Links>
        </DivContent>
      </ContentF>
    </BodyF>
  );
};

export default Footer;
