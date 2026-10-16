// src/services/seccionesServicio.ts

import type { Seccion } from "../interfaces/Seccion";
import { secciones } from "../datos/secciones";


export function obtenerSecciones(): Seccion[] {

    return secciones;

}
