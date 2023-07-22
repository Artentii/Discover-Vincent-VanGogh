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

closeContainer.forEach((eachClose, i) => {
  closeContainer[i].addEventListener("click", () => {
    selfPortrait.classList.add("isHidden");
    drinkers.classList.add("isHidden");
    bridge.classList.add("isHidden");
    gridContainer.classList.remove("isHidden");
  });
});
