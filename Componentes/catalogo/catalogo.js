import { dataProductos } from "../../data.js";
import { crearProducto } from "../Producto/producto.js";

export function cargarProductos() {
    const contenedor = document.getElementById("productos");
    dataProductos.forEach(producto => {
        contenedor.appendChild(crearProducto(producto));
    });
}