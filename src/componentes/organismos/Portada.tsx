// src/componentes/organismos/Portada.tsx

import { useState } from "react";

import FlechaCarrusel from "../atomos/FlechaCarrusel";
import { diapositivasPortada } from "../../datos/configuracion";


function Portada() {

    const [indice, setIndice] = useState(0);

    const total = diapositivasPortada.length;
    const diapositiva = diapositivasPortada[indice];

    return (

        <section className="portada" aria-roledescription="carrusel">

            <div className="container portada-contenido">

                <div className="portada-flechas">

                    <FlechaCarrusel
                        direccion="anterior"
                        onClick={() => setIndice((indice - 1 + total) % total)}
                    />

                    <FlechaCarrusel
                        direccion="siguiente"
                        onClick={() => setIndice((indice + 1) % total)}
                    />

                </div>

                <h1 className="portada-titulo">{diapositiva.titulo}</h1>

                <p className="portada-subtitulo">{diapositiva.subtitulo}</p>

            </div>

        </section>

    );

}

export default Portada;
