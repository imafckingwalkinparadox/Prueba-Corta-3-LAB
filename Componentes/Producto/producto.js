import { resaltarProducto, eliminarProducto } from "./funcionesProducto.js";

export function crearProducto(producto) {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.dataset.id = producto.id;

    div.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>Q ${producto.precio.toFixed(2)}</p>
        <button class="resaltar-btn">Resaltar</button>
        <button class="eliminar-btn">Eliminar</button>
    `;

    const resaltarBtn = div.querySelector(".resaltar-btn");
    const eliminarBtn = div.querySelector(".eliminar-btn");

    resaltarBtn.addEventListener("click", () => resaltarProducto(producto.id));
    eliminarBtn.addEventListener("click", () => eliminarProducto(producto.id));

    return div;
}