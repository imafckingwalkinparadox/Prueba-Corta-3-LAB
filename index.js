import { MostrarMenu } from './Componentes/header/header.js';
function iniciarApp(){
    let Dom = document.querySelector("#root");

    const header = MostrarMenu();
    Dom.appendChild(header);
}

iniciarApp();
