// src/services/edicionesServicio.ts

import type { Edicion } from "../interfaces/Edicion";
import { ediciones } from "../datos/ediciones";


// Hoy lee datos locales; luego se reemplaza por una llamada a la API.
export function obtenerEdiciones(): Edicion[] {

    return ediciones;

}


export function obtenerUltimaEdicion(): Edicion {

    return ediciones[ediciones.length - 1];

}
