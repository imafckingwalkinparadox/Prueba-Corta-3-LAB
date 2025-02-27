export function resaltarProducto(id) {
    const producto = document.querySelector(`.producto[data-id="${id}"]`);
    if (producto) {
        producto.style.border = "2px solid yellow";
        console.log(`Producto ${id} resaltado.`);
    }
}

export function eliminarProducto(id) {
    const producto = document.querySelector(`.producto[data-id="${id}"]`);
    if (producto) {
        producto.remove();
        console.log(`Producto ${id} eliminado.`);
    }
}