import { resaltarProducto, eliminarProducto } from "./funcionesProducto.js";

function crearProducto(producto) {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.dataset.id = producto.id;
    
    div.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>Q ${producto.precio.toFixed(2)}</p>
        <button onclick="resaltarProducto(${producto.id})">Resaltar</button>
        <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
    `;
    return div;
}