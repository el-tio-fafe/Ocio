// src/hooks/useScrollHash.ts

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


// Desplaza la página hasta el ancla (#id) de la URL al navegar.
function useScrollHash() {

    const { pathname, hash } = useLocation();

    useEffect(() => {

        if (hash === "") {

            window.scrollTo({ top: 0 });
            return;

        }

        document.getElementById(hash.slice(1))?.scrollIntoView();

    }, [pathname, hash]);

}

export default useScrollHash;
