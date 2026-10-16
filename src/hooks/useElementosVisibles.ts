// src/hooks/useElementosVisibles.ts

import { useEffect, useState } from "react";


function calcular(): number {

    if (window.innerWidth < 576) return 1;
    if (window.innerWidth < 992) return 2;
    return 3;

}


// Cantidad de tarjetas visibles en el carrusel según el ancho de pantalla.
function useElementosVisibles(): number {

    const [cantidad, setCantidad] = useState(calcular());

    useEffect(() => {

        const actualizar = () => setCantidad(calcular());

        window.addEventListener("resize", actualizar);

        return () => window.removeEventListener("resize", actualizar);

    }, []);

    return cantidad;

}

export default useElementosVisibles;
