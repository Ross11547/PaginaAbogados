import React from "react";
import {
  BodyIni,
  Texto1,
  Texto2,
  Parrafo1,
  Boton1,
  Links,
  Ini,
  DivCard,
} from "../styles/inicio";
import IconPhone from "../assets/icons/iconPhone";
import IconGmail from "../assets/icons/iconGmail";
const Inicio = () => {
  return (
    <BodyIni>
      <Ini>
        <Texto1>BEST DESTINATION AROUND THE WORLD</Texto1>
        <Texto2>Travel, enjoy and live a new and full life</Texto2>
        <Parrafo1>
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </Parrafo1>
        <Boton1>
          <Links to="/areapractica">Find out more</Links>
        </Boton1>
      </Ini>
      <DivCard>
        <div>
          <div>
            <h2>
              <IconPhone /> +591 79730320
            </h2>
            <h2>
              <IconGmail /> AbogaditosDefendiendo@gmail.com
            </h2>
          </div>
        </div>
      </DivCard>
    </BodyIni>
  );
};

export default Inicio;
