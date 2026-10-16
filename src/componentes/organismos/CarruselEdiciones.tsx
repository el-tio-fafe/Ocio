// src/componentes/organismos/CarruselEdiciones.tsx

import { useState } from "react";

import TituloSeccion from "../atomos/TituloSeccion";
import FlechaCarrusel from "../atomos/FlechaCarrusel";
import CardEdicion from "../moleculas/CardEdicion";
import useElementosVisibles from "../../hooks/useElementosVisibles";
import { obtenerEdiciones } from "../../services/edicionesServicio";


function CarruselEdiciones() {

    const ediciones = obtenerEdiciones();
    const visibles = useElementosVisibles();

    const [inicio, setInicio] = useState(0);

    const maximo = Math.max(0, ediciones.length - visibles);
    const actual = Math.min(inicio, maximo);

    const mover = (paso: number) => {

        setInicio(Math.min(maximo, Math.max(0, actual + paso)));

    };

    return (

        <section id="ediciones" className="container py-5">

            <TituloSeccion centrado>Ediciones</TituloSeccion>

            <div className="carrusel-ediciones">

                <FlechaCarrusel direccion="anterior" onClick={() => mover(-1)} />

                <div className="carrusel-ediciones-pista">

                    {ediciones.slice(actual, actual + visibles).map((edicion) => (

                        <CardEdicion key={edicion.id} edicion={edicion} />

                    ))}

                </div>

                <FlechaCarrusel direccion="siguiente" onClick={() => mover(1)} />

            </div>

        </section>

    );

}

export default CarruselEdiciones;
