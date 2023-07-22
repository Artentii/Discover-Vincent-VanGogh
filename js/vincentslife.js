// Almaceno mis elementos en variables
const hamburger = document.querySelector(".Hamburger");
const headerUl = document.querySelector(".Header-ul");
const circle = document.querySelector(".Circle");
const navLink = document.querySelectorAll(".Nav-link");

//Cuando hago CLICK en .Hamburger
//se le AÑADE a .Header-ul la clase .isActive
//se le AÑADE a .Hamburger la clase .isActive
//se le AÑADE a .Circle la clase .isActive

hamburger.addEventListener("click", () => {
  headerUl.classList.toggle("isActive");
  hamburger.classList.toggle("isActive");
  circle.classList.toggle("isActive");
});

const nextBtn = document.querySelector(".Next-container");
nextBtn.classList.add("isActive");
const prevBtn = document.querySelector(".Prev-container");
const columnImages = document.querySelectorAll(".Column-images");

// Cuando hago CLICK en .Next-container,
// AGREGO la clase .isActive a .Prev-container
// SUMO 1 a COUNTER
// SUMO 2 a COUNTER

// Cuando hago CLICK en .Prev-container,
// RESTO 1 a COUNTER
// RESTO 2 a COUNTER

//El fragmento de código está agregando un addEventListener al último elemento hijo del elemento nextBtn.
//Cuando se hace click en este elemento, la variable counter se incrementa en 1.
//El objetivo es consegui que cada vez que se hace 'click' en siguiente se avance a la siguiente imagen hasta alcanzar el máximo número en el array (counter+2) y se muestres tres columnas a la vez
let counter = 0;
nextBtn.lastElementChild.addEventListener("click", () => {
  counter++;
  if (counter + 2 > columnImages.length - 1) {
    counter--;
  } else {
    prevBtn.classList.add("isActive");
    columnImages.forEach((eachColumn, i) => {
      columnImages[i].classList.add("isHidden");
    });
    columnImages[counter].classList.remove("isHidden");
    columnImages[counter + 1].classList.remove("isHidden");
    columnImages[counter + 2].classList.remove("isHidden");
  }
  if (counter + 2 > columnImages.length - 2) {
    nextBtn.classList.remove("isActive");
  }
});

// Agrego un addEventListener al último elemento hijo del elemento prevBtn.
prevBtn.lastElementChild.addEventListener("click", () => {
  //Cuando se hace click, la variable counter se decrementa en 1.
  counter--;
  //Si counter se es menor que 0, se restablece a 0.
  if (counter < 0) {
    counter = 0;
    //De lo contrario, se agrega la clase "isActive" a nextBtn.
  } else {
    nextBtn.classList.add("isActive");
    columnImages.forEach((eachColumn, i) => {
      columnImages[i].classList.add("isHidden");
    });
    //Elimino la clase "isHidden" de los elementos columnImages[counter], columnImages[counter + 1] y columnImages[counter + 2].
    columnImages[counter].classList.remove("isHidden");
    columnImages[counter + 1].classList.remove("isHidden");
    columnImages[counter + 2].classList.remove("isHidden");
  }
  //Si counter es igual a 0, se elimina la clase "isActive" del elemento prevBtn
  if (counter === 0) {
    prevBtn.classList.remove("isActive");
  }
});

//Cuando el ANCHO DE PANTALLA es menor a 1200px,
//AGREGAR la clase .isHidden a TODAS LAS COLUMNAS, si coincide
//AGREGAR la clase .isHidden a los DOS ÚLTIMOS ELEMENTOS, si es más ancho

//Muestro/oculto columnas de imágenes en función del tamaño de la ventana del navegador.
//Si el ancho de la ventana es mayor que 1200px, se muestran tres columnas de imágenes a la vez, y los botones de "siguiente" y "anterior" están activados o desactivados según la posición actual de las imágenes. Si el ancho de la ventana es igual o menor que 1200 píxeles, se muestran todas las columnas de imágenes y se desactivan ambos botones (esto sirve para la versión móbil).

function toggleHidden() {
  //Se aplicará a dispositivos con un ancho máximo de 1200 px
  const mediaQuery = window.matchMedia("(max-width:1200px)");
  //Esta condición se cumplirá cuando el ancho de la ventana sea mayor que 1200 px
  if (!mediaQuery.matches) {
    columnImages.forEach((eachColumn, i) => {
      columnImages[i].classList.add("isHidden");
    });
    for (let i = counter; i < counter + 3; i++) {
      columnImages[i].classList.remove("isHidden");
    }
    nextBtn.classList.add("isActive");
    //Activa el botón de "anterior" solo cuando counter no es igual a cero.
    if (counter != 0) {
      prevBtn.classList.add("isActive");
    }
    //Ancho de la ventana es igual o menor que 1200 px
  } else {
    columnImages.forEach((eachColumn, i) => {
      columnImages[i].classList.add("isHidden");
    });
    //Recorre todos los elementos del array
    for (let i = 0; i < columnImages.length; i++) {
      columnImages[i].classList.remove("isHidden");
    }
    //Desactiva el botón siguiente
    nextBtn.classList.remove("isActive");
    //Desactiva el botón anterior
    prevBtn.classList.remove("isActive");
  }
}

toggleHidden();
window.addEventListener("resize", toggleHidden);
