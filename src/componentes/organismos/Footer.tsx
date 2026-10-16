// src/componentes/organismos/Footer.tsx

import TituloSeccion from "../atomos/TituloSeccion";
import EnlaceRed from "../moleculas/EnlaceRed";
import { contacto } from "../../datos/configuracion";


function Footer() {

    return (

        <footer id="contacto" className="container py-5">

            <div className="row align-items-center g-4">

                <div className="col-12 col-md-6">

                    <TituloSeccion>Si quieres ser parte, contáctanos</TituloSeccion>

                </div>

                <div className="col-12 col-md-6 d-grid gap-3">

                    <EnlaceRed icono="instagram" texto={contacto.instagram} url={contacto.urlInstagram} />

                    <EnlaceRed icono="tiktok" texto={contacto.tiktok} url={contacto.urlTiktok} />

                    <EnlaceRed icono="correo" texto={contacto.correo} url={`mailto:${contacto.correo}`} />

                </div>

            </div>

        </footer>

    );

}

export default Footer;
