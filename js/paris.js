/* Selecciono elementos del documento HTML utilizando sus nombres de clase y asignándolos a variables. */
const hamburger = document.querySelector(".Hamburger");
const headerUl = document.querySelector(".Header-ul");
const circle = document.querySelector(".Circle");
const navLink = document.querySelectorAll(".Nav-link");

//Cuando hago CLICK en .Hamburger
//se le AÑADE a .Header-ul la clase .isActive
//se le AÑADE a .Hamburger la clase .isActive
//se le AÑADE a .Circle la clase .isActive

/* Agrego un addEventListener al elemento con la clase "hamburger". Cuando lo clickeo, el código alternará la clase "isActive" en los elementos con las clases "Header-ul", "hamburger" y "Circle". */
hamburger.addEventListener("click", () => {
  headerUl.classList.toggle("isActive");
  hamburger.classList.toggle("isActive");
  circle.classList.toggle("isActive");
});

//Cuando hago MOUSEOVER sobre .navLink,
//a TODOS .Header-li les AÑADO la clase .isInactive,

//Cuando hago MOUSEOUT sobre .navLink,
//a TODOS .Header-li les QUITO la clase .isInactive,

/* Agrego un addEventListener a cada elemento con el nombre de clase "Nav-link". */
navLink.forEach((eachHeader, i) => {
  navLink[i].addEventListener("mouseover", () => {
    navLink.forEach((eachHeader, j) => {
      navLink[j].classList.add("isInactive");
    });
  });
});
navLink.forEach((eachHeader, i) => {
  navLink[i].addEventListener("mouseout", () => {
    navLink.forEach((eachHeader, k) => {
      navLink[k].classList.remove("isInactive");
    });
  });
});

// MAIN - Images
/* Este código es para crear y manejar la funcionalidad de una galería de imágenes. */
/* Selecciono elementos del documento HTML utilizando sus nombres de clase o IDs y los asigno a variables. */
const leftContainer = document.querySelector(".Left-container");
const upContainer = document.querySelector(".Up-container");
const downContainer = document.querySelector(".Down-container");
const gridContainer = document.querySelector(".Grid-container");

const closeContainer = document.querySelectorAll(".Close-container");

const selfPortrait = document.getElementById("Self-Portrait");
const drinkers = document.getElementById("Drinkers");
const bridge = document.getElementById("Bridge");

//Cuando hago CLICK en .Left-container,
//a .Grid-container se le AÑADE la clase .isHidden,
//a selfPortrait se le QUITA la clase .isHidden,
//a TODOS .Close-container se le QUITA la clase .isHidden.

/* Agrego un addEventListener al elemento con el nombre de clase "Left-container". Cuando este elemento es clickeado, el código ejecutará las siguientes acciones: */
leftContainer.addEventListener("click", () => {
  gridContainer.classList.add("isHidden");
  selfPortrait.classList.remove("isHidden");
  console.log(leftContainer);

  closeContainer.forEach((eachClose, i) => {
    closeContainer[i].classList.remove("isHidden");
  });
});

//Cuando hago CLICK en .Up-container,
//a .Grid-container se le AÑADE la clase .isHidden,
//a drinkers se le QUITA la clase .isHidden,
//a TODOS .Close-container se le QUITA la clase .isHidden.

/* Agrego un addEventListener al elemento con el nombre de clase "Up-container". Cuando este elemento es clickeado, el código ejecutará las siguientes acciones: */

upContainer.addEventListener("click", () => {
  gridContainer.classList.add("isHidden");
  drinkers.classList.remove("isHidden");

  closeContainer.forEach((eachClose, i) => {
    closeContainer[i].classList.remove("isHidden");
  });
});

//Cuando hago CLICK en .Up-container,
//a .Grid-container se le AÑADE la clase .isHidden,
//a drinkers se le QUITA la clase .isHidden,
//a TODOS .Close-container se le QUITA la clase .isHidden.

/* Agrego un addEventListener al elemento con el nombre de clase "Down-container". Cuando este elemento es clickeado, el código ejecutará las siguientes acciones: */
downContainer.addEventListener("click", () => {
  gridContainer.classList.add("isHidden");
  bridge.classList.remove("isHidden");

  closeContainer.forEach((eachClose, i) => {
    closeContainer[i].classList.remove("isHidden");
  });
});

//Cuando hago CLICK en TODOS .Close-container,
//a selfPortrait se le AÑADE la clase .isHidden,
//a .Grid-container se le QUITA la clase .isHidden,

/* Agrego un addEventListener al elemento con el nombre de clase "Down-container". Cuando este elemento es clickeado, el código ejecutará las siguientes acciones: */
closeContainer.forEach((eachClose, i) => {
  closeContainer[i].addEventListener("click", () => {
    selfPortrait.classList.add("isHidden");
    drinkers.classList.add("isHidden");
    bridge.classList.add("isHidden");
    gridContainer.classList.remove("isHidden");
  });
});
