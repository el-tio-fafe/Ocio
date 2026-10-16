// src/componentes/organismos/Navbar.tsx

import { Link } from "react-router-dom";

import Logo from "../atomos/Logo";
import { enlacesNavegacion } from "../../datos/configuracion";


function Navbar() {

    return (

        <header>

            <nav className="navbar navbar-expand-lg navbar-dark bg-black">

                <div className="container">

                    <Logo />

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Abrir navegación"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav ms-auto">

                            {enlacesNavegacion.map((enlace) => (

                                <li className="nav-item" key={enlace.etiqueta}>

                                    <Link
                                        className="nav-link text-white enlace-navegacion"
                                        to={enlace.ruta}
                                    >
                                        {enlace.etiqueta}
                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>

                </div>

            </nav>

        </header>

    );

}

export default Navbar;
