import { dataProductos } from "./data.js";
import {crearProducto} from "./Producto/producto.js"

function cargarProductos() {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";
    dataProductos.forEach(producto => {
        contenedor.appendChild(crearProducto(producto));
    });
}