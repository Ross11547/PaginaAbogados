import React from "react";
import { Link } from "react-router-dom";
import { BodyIni } from "../styles/inicio";
import { Texto1 } from "../styles/inicio";
import { Texto2 } from "../styles/inicio";
import { Parrafo1 } from "../styles/inicio";
import { Boton1 } from "../styles/inicio";
import { Links } from "../styles/inicio";
import { DivTexto1 } from "../styles/inicio";
import { DivTexto2 } from "../styles/inicio";
import { DivParrafo1 } from "../styles/inicio";
import Section from "../components/inicio/section";
const Inicio = () => {
  return (
    <BodyIni>
      <DivTexto1>
        <Texto1>BEST DESTINATION AROUND THE WORLD</Texto1>
      </DivTexto1>
      <DivTexto2>
        <Texto2>Travel, enjoy and live a new and full life</Texto2>
      </DivTexto2>
      <DivParrafo1>
        <Parrafo1>
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </Parrafo1>
      </DivParrafo1>
      <Boton1>
        <Links to="/areapractica">Find out more</Links>
      </Boton1>
      <div>
        <DivParrafo1>CATEGORY</DivParrafo1>
        <DivParrafo1>CATEGORY</DivParrafo1>
        <div>
          <div>
            <img src="" alt="imagen" />
            <h4>Calculater Weather</h4>
            <p>Built wicket longer admire do barton vanity itself do in it.</p>
          </div>
          <div>
            <img src="" alt="imagen" />
            <h4>Calculater Weather</h4>
            <p>Built wicket longer admire do barton vanity itself do in it.</p>
          </div>
          <div>
            <img src="" alt="imagen" />
            <h4>Calculater Weather</h4>
            <p>Built wicket longer admire do barton vanity itself do in it.</p>
          </div>
          <div>
            <img src="" alt="imagen" />
            <h4>Rome, Italy</h4>
            <p>Built wicket longer admire do barton vanity itself do in it.</p>
          </div>
        </div>
      </div>
     <Section/>
    </BodyIni>
  );
};

export default Inicio;
