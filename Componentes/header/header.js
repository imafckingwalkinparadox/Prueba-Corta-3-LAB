const MostrarMenu = () => {
    const header = document.createElement('header');
    header.id = 'header';

    const img = document.createElement('img');
    const title = document.createElement('h1');
    const circle = document.createElement('div');
    const number = document.createElement('span');

    img.src = "https://jumpseller.mx/generated/images/learn/los-10-productos-mas-vendidos-en-mexico/online-shopping-mexico-800-3423d44e0.png"; 
    img.alt = "";
    title.textContent = "Productos Marcados";
    number.textContent = "5";

    img.classList.add("header-img");
    title.classList.add("header-title");
    circle.classList.add("circle");
    number.classList.add("number");

    circle.appendChild(number);
    header.appendChild(img);
    header.appendChild(title);
    header.appendChild(circle);

    return header;
};

export { MostrarMenu };
