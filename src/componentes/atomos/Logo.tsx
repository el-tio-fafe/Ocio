// src/componentes/atomos/Logo.tsx

import { Link } from "react-router-dom";

function Logo() {

    return (

        <Link
            className="navbar-brand logo-revista"
            to="/"
            aria-label="Revista Ocio, inicio"
        >
            <span className="logo-revista-superior">Revista</span>
            <span className="logo-revista-principal">Ocio</span>
        </Link>

    );

}

export default Logo;
