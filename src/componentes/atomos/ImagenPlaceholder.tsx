// src/componentes/atomos/ImagenPlaceholder.tsx

interface ImagenPlaceholderProps {
    proporcion?: string;
    descripcion: string;
}

// Bloque gris del wireframe. Se reemplaza por <img> cuando haya imágenes.
function ImagenPlaceholder({ proporcion = "4 / 3", descripcion }: ImagenPlaceholderProps) {

    return (
        <div
            className="imagen-placeholder"
            style={{ aspectRatio: proporcion }}
            role="img"
            aria-label={descripcion}
        />
    );

}

export default ImagenPlaceholder;
