import { cargarProductos } from "./Componentes/catalogo/catalogo.js";
import { MostrarMenu } from "./Componentes/header/header.js";
function iniciarApp() {

    const root = document.querySelector("#root");
    root.className = "root";

    root.appendChild(MostrarMenu());
    root.appendChild(cargarProductos());
    return root;
    
}

iniciarApp();

