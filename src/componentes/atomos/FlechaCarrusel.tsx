// src/componentes/atomos/FlechaCarrusel.tsx

interface FlechaCarruselProps {
    direccion: "anterior" | "siguiente";
    onClick: () => void;
}

function FlechaCarrusel({ direccion, onClick }: FlechaCarruselProps) {

    const trazo = direccion === "siguiente"
        ? "M4 2 L20 20 L4 38"
        : "M20 2 L4 20 L20 38";

    return (

        <button
            type="button"
            className="flecha-carrusel"
            onClick={onClick}
            aria-label={direccion === "siguiente" ? "Siguiente" : "Anterior"}
        >

            <svg viewBox="0 0 24 40" width="22" height="36" aria-hidden="true">
                <path d={trazo} fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>

        </button>

    );

}

export default FlechaCarrusel;
