import React from 'react'
import { BodyIni, Texto1, Texto2, Parrafo1, Boton1, Links, Ini, Inic, InicImg } from '../styles/inicio'
import Abogado from "../assets/img/abogado.jpg";
import Section from '../components/inicio/sectioninicio'
const Inicio = () => {
    return (
        <BodyIni>
            <Inic>
                <Ini>
                    <Texto1>BEST DESTINATION AROUND THE WORLD</Texto1>
                    <Texto2>Travel, enjoy and live a new and full life</Texto2>
                    <Parrafo1>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</Parrafo1>
                    <div>
                        <Boton1><Links to="/areapractica">Find out more</Links></Boton1>
                    </div>
                </Ini>
                <InicImg src={Abogado} alt="Foto" />
            </Inic>
            <Section />
        </BodyIni>
    )
}

export default Inicio

