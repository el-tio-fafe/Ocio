// src/componentes/moleculas/CardEdicion.tsx

import type { Edicion } from "../../interfaces/Edicion";
import ImagenPlaceholder from "../atomos/ImagenPlaceholder";

interface CardEdicionProps {
    edicion: Edicion;
}

function CardEdicion({ edicion }: CardEdicionProps) {

    return (

        <article className="card-edicion text-center">

            {edicion.portada !== null ? (

                <img
                    src={edicion.portada}
                    className="img-fluid"
                    alt={`Portada ${edicion.tematica}`}
                />

            ) : (

                <ImagenPlaceholder
                    proporcion="5 / 7"
                    descripcion={`Portada ${edicion.tematica}`}
                />

            )}

            <h3 className="mt-3">{edicion.tematica}</h3>

            <p>Edición {edicion.numero}</p>

        </article>

    );

}

export default CardEdicion;
