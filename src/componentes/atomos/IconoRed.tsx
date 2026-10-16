// src/componentes/atomos/IconoRed.tsx

import type { ReactNode } from "react";

export type NombreIcono = "instagram" | "tiktok" | "correo";

const trazos: Record<NombreIcono, ReactNode> = {
    instagram: (
        <>
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" />
        </>
    ),
    tiktok: <path d="M14 3v11a4 4 0 1 1-4-4M14 3c.5 3 2.5 4.5 5 4.5" />,
    correo: (
        <>
            <rect x="3" y="5" width="18" height="14" rx="1" />
            <path d="M3 6l9 7 9-7" />
        </>
    )
};

function IconoRed({ nombre }: { nombre: NombreIcono }) {

    return (
        <svg
            viewBox="0 0 24 24"
            width="36"
            height="36"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
        >
            {trazos[nombre]}
        </svg>
    );

}

export default IconoRed;
