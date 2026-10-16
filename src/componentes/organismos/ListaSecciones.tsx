// src/componentes/organismos/ListaSecciones.tsx

import TituloSeccion from "../atomos/TituloSeccion";
import CardSeccion from "../moleculas/CardSeccion";
import { obtenerSecciones } from "../../services/seccionesServicio";


function ListaSecciones() {

    const secciones = obtenerSecciones();

    return (

        <section id="secciones" className="container py-5">

            <TituloSeccion>Secciones</TituloSeccion>

            <div className="d-grid gap-4">

                {secciones.map((seccion) => (

                    <CardSeccion key={seccion.nombre} seccion={seccion} />

                ))}

            </div>

        </section>

    );

}

export default ListaSecciones;
