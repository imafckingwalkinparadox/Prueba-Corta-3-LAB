function resaltarProducto(id) {
    const producto = document.querySelector(`.producto[data-id='${id}']`);
    producto.classList.toggle("resaltado");
}

function eliminarProducto(id) {
    const index = dataProductos.findIndex(p => p.id === id);
    if (index !== -1) {
        dataProductos.splice(index, 1);
        cargarProductos();
    }
}