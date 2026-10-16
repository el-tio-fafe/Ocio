// src/componentes/moleculas/CardSeccion.tsx

import type { Seccion } from "../../interfaces/Seccion";

interface CardSeccionProps {
    seccion: Seccion;
}

function CardSeccion({ seccion }: CardSeccionProps) {

    return (

        <article className="card-seccion row g-0">

            <div className="col-12 col-md-4 card-seccion-nombre">
                <h3>{seccion.nombre}</h3>
            </div>

            <p className="col-12 col-md-8 card-seccion-texto">
                {seccion.descripcion}
            </p>

        </article>

    );

}

export default CardSeccion;
