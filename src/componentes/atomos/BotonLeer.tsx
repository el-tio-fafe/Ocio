// src/componentes/atomos/BotonLeer.tsx

interface BotonLeerProps {
    enlace: string;
}

function BotonLeer({ enlace }: BotonLeerProps) {

    return (
        <a className="btn boton-leer" href={enlace}>
            Leer
        </a>
    );

}

export default BotonLeer;
