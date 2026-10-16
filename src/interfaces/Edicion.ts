// src/interfaces/Edicion.ts

export interface Edicion {
    id: number;
    numero: string;
    tematica: string;
    descripcion: string;
    portada: string | null;
    enlace: string;
}
