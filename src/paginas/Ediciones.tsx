// src/paginas/Ediciones.tsx

import TituloSeccion from "../componentes/atomos/TituloSeccion";
import CardEdicion from "../componentes/moleculas/CardEdicion";
import { obtenerEdiciones } from "../services/edicionesServicio";


function Ediciones() {

    const ediciones = obtenerEdiciones();

    return (

        <main className="container py-5">

            <TituloSeccion>Archivo de ediciones</TituloSeccion>

            <div className="row g-4">

                {ediciones.map((edicion) => (

                    <div className="col-12 col-sm-6 col-lg-3" key={edicion.id}>

                        <CardEdicion edicion={edicion} />

                    </div>

                ))}

            </div>

        </main>

    );

}

export default Ediciones;
