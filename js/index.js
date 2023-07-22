//index.js se ha vinculado a las siguientes páginas ya que compartían exactamente el mismo código y he decidido hacerlo así para optimizar muchas líneas de código: vincent's art, discover (loving e immersive), contact

//Primero de todo selecciono los elementos del documento HTML utilizando sus nombres de clase y los asigno a las siguiente variables variables. */
//Selecciono el elemento hamburger (será el menú de la página web)
const hamburger = document.querySelector(".Hamburger");
//Selecciono el elemento headerUl (será el fondo que aparecerá cuando esté activo)
const headerUl = document.querySelector(".Header-ul");
//Selecciono el elemento circle (será el círculo de alrededor del las tres barras que formarán el menú hamburguesa)
const circle = document.querySelector(".Circle");
//Selecciono el elemento navLink (es la lista de items de dentro de mi ul)
const navLink = document.querySelectorAll(".Nav-link");

//Mi intención es que pase lo siguiente cuando hago click en el menú hamburguesa en cualquier página de la web
//Cuando hago CLICK en .Hamburger
//se le AÑADE a .Header-ul la clase .isActive
//se le AÑADE a .Hamburger la clase .isActive
//se le AÑADE a .Circle la clase .isActive

/* Para ello agrego un addEventListener al elemento con la clase "hamburger". 
Cuando le hago click, como el evento está escuchando, el código alternará la clase "isActive" en los elementos con las clases "Header-ul", "hamburger" y "Circle". */
hamburger.addEventListener("click", () => {
  //Cuando el evento esucha el 'click, esta línea de código agrega/quita la clase "isActive" del elemento con la clase "Header-ul". Si tiene la clase "isActive", la clase será removida; si no la tiene, la clase será añadida.
  headerUl.classList.toggle("isActive");
  //Agrega o quita la clase "isActive" del propio elemento "hamburger". Si el elemento tiene la clase "isActive", la clase será removida; si no la tiene, la clase será añadida.
  hamburger.classList.toggle("isActive");
  //Como ha pasado en las dos veces anteriores si el elemento tiene la clase "isActive", la clase será removida; si no la tiene, la clase será añadida.
  circle.classList.toggle("isActive");
});