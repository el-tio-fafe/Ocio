# Revista Ocio – MVP Frontend

React + TypeScript + Vite, Bootstrap, React Router y Atomic Design.

```bash
npm install
npm run dev
```

## Estructura (src)
- `componentes/atomos`: Logo, TituloSeccion, BotonLeer, ImagenPlaceholder, FlechaCarrusel, IconoRed
- `componentes/moleculas`: CardSeccion, CardEdicion, EnlaceRed
- `componentes/organismos`: Navbar, Portada, NuevaEdicion, ListaSecciones, CarruselEdiciones, QuienesSomos, Footer
- `layouts`: LayoutPublico (Navbar + Outlet + Footer)
- `paginas`: Inicio, Ediciones
- `routes`: reservado para rutas protegidas del futuro CMS
- `services`: acceso a datos (hoy lee `datos/`, luego la API)
- `datos`, `interfaces`, `hooks`, `utilities`, `styles`

Imágenes de portadas: `public/img/portadas/` (hoy 16 / 10 / 26  se muestran bloques grises).
