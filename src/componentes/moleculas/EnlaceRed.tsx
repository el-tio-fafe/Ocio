// src/componentes/moleculas/EnlaceRed.tsx

import IconoRed from "../atomos/IconoRed";
import type { NombreIcono } from "../atomos/IconoRed";

interface EnlaceRedProps {
    icono: NombreIcono;
    texto: string;
    url: string;
}

function EnlaceRed({ icono, texto, url }: EnlaceRedProps) {

    return (

        <a className="enlace-red" href={url}>
            <IconoRed nombre={icono} />
            <span>{texto}</span>
        </a>

    );

}

export default EnlaceRed;
