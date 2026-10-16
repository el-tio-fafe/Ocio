// src/layouts/LayoutPublico.tsx

import { Outlet } from "react-router-dom";

import Navbar from "../componentes/organismos/Navbar";
import Footer from "../componentes/organismos/Footer";
import useScrollHash from "../hooks/useScrollHash";


function LayoutPublico() {

    useScrollHash();

    return (

        <div className="app">

            <Navbar />

            <Outlet />

            <Footer />

        </div>

    );

}

export default LayoutPublico;
