// src/paginas/Inicio.tsx

import Portada from "../componentes/organismos/Portada";
import NuevaEdicion from "../componentes/organismos/NuevaEdicion";
import ListaSecciones from "../componentes/organismos/ListaSecciones";
import CarruselEdiciones from "../componentes/organismos/CarruselEdiciones";
import QuienesSomos from "../componentes/organismos/QuienesSomos";


function Inicio() {

    return (

        <>

            <Portada />

            <main>

                <NuevaEdicion />

                <ListaSecciones />

                <CarruselEdiciones />

                <QuienesSomos />

            </main>

        </>

    );

}

export default Inicio;
