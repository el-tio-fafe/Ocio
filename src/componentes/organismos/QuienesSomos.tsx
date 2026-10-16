// src/componentes/organismos/QuienesSomos.tsx

import TituloSeccion from "../atomos/TituloSeccion";
import ImagenPlaceholder from "../atomos/ImagenPlaceholder";
import { textoNosotros } from "../../datos/configuracion";


function QuienesSomos() {

    return (

        <section id="nosotros" className="quienes-somos py-5">

            <div className="container">

                <div className="row align-items-center g-4">

                    <div className="col-12 col-md-5">

                        <TituloSeccion>Quiénes somos</TituloSeccion>

                        <p>{textoNosotros}</p>

                    </div>

                    <div className="col-12 col-md-7">

                        <ImagenPlaceholder descripcion="Equipo de la revista" />

                    </div>

                </div>

            </div>

        </section>

    );

}

export default QuienesSomos;
