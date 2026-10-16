// src/componentes/atomos/TituloSeccion.tsx

interface TituloSeccionProps {
    children: string;
    centrado?: boolean;
}

function TituloSeccion({ children, centrado = false }: TituloSeccionProps) {

    return (
        <h2 className={`titulo-seccion ${centrado ? "text-center" : ""}`}>
            {children}
        </h2>
    );

}

export default TituloSeccion;
