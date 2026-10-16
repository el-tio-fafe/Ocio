// src/componentes/organismos/NuevaEdicion.tsx

import TituloSeccion from "../atomos/TituloSeccion";
import BotonLeer from "../atomos/BotonLeer";
import ImagenPlaceholder from "../atomos/ImagenPlaceholder";
import { obtenerUltimaEdicion } from "../../services/edicionesServicio";


function NuevaEdicion() {

    const edicion = obtenerUltimaEdicion();

    return (

        <section className="container py-5">

            <div className="row align-items-center g-4">

                <div className="col-12 col-md-6">

                    <TituloSeccion>{`Nueva edición ${edicion.numero}`}</TituloSeccion>

                    <p>{edicion.descripcion}</p>

                    <BotonLeer enlace={edicion.enlace} />

                </div>

                <div className="col-12 col-md-6">

                    <ImagenPlaceholder
                        proporcion="10 / 7"
                        descripcion="Portada de la nueva edición"
                    />

                </div>

            </div>

        </section>

    );

}

export default NuevaEdicion;
