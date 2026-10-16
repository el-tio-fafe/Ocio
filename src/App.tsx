// src/App.tsx

import { Routes, Route } from "react-router-dom";

import LayoutPublico from "./layouts/LayoutPublico";

import Inicio from "./paginas/Inicio";
import Ediciones from "./paginas/Ediciones";

function App() {
    return (
        <Routes>
            {/* ===== SITIO PÚBLICO (Navbar + Footer) ===== */}
            <Route element={<LayoutPublico />}>
                <Route path="/" element={<Inicio />} />
                <Route path="/ediciones" element={<Ediciones />} />
            </Route>
        </Routes>
    );
}

export default App;
