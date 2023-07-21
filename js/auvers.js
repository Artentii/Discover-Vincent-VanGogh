//Cuando hago CLICK en .Hamburger
//se le AÑADE a .Header-ul la clase .isActive
//se le AÑADE a .Hamburger la clase .isActive
//se le AÑADE a .Circle la clase .isActive

const hamburger = document.querySelector(".Hamburger");
const headerUl = document.querySelector(".Header-ul");
const circle = document.querySelector(".Circle");
const navLink = document.querySelectorAll(".Nav-link");

hamburger.addEventListener("click", () => {
  headerUl.classList.toggle("isActive");
  hamburger.classList.toggle("isActive");
  circle.classList.toggle("isActive");
});

//Cuando hago MOUSEOVER sobre .navLink,
//a TODOS .Header-li les AÑADO la clase .isInactive,

//Cuando hago MOUSEOUT sobre .navLink,
//a TODOS .Header-li les QUITO la clase .isInactive,

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

const leftContainer = document.querySelector(".Left-container");
const upContainer = document.querySelector(".Up-container");
const downContainer = document.querySelector(".Down-container");
const gridContainer = document.querySelector(".Grid-container");

const closeContainer = document.querySelectorAll(".Close-container");

const church = document.getElementById("Church");
const crows = document.getElementById("Crows");
const gachet = document.getElementById("Gachet");


//Cuando hago CLICK en .Left-container,
//a .Grid-container se le AÑADE la clase .isHidden,
//a church se le QUITA la clase .isHidden,
//a TODOS .Close-container se le QUITA la clase .isHidden.

leftContainer.addEventListener("click", () => {
  gridContainer.classList.add("isHidden");
  church.classList.remove("isHidden");

  closeContainer.forEach((eachClose, i) => {
    closeContainer[i].classList.remove("isHidden");
  });
});

//Cuando hago CLICK en .Up-container,
//a .Grid-container se le AÑADE la clase .isHidden,
//a crows se le QUITA la clase .isHidden,
//a TODOS .Close-container se le QUITA la clase .isHidden.

upContainer.addEventListener("click", () => {
  gridContainer.classList.add("isHidden");
  crows.classList.remove("isHidden");

  closeContainer.forEach((eachClose, i) => {
    closeContainer[i].classList.remove("isHidden");
  });
});

//Cuando hago CLICK en .Up-container,
//a .Grid-container se le AÑADE la clase .isHidden,
//a gachet se le QUITA la clase .isHidden,
//a TODOS .Close-container se le QUITA la clase .isHidden.

downContainer.addEventListener("click", () => {
  gridContainer.classList.add("isHidden");
  gachet.classList.remove("isHidden");

  closeContainer.forEach((eachClose, i) => {
    closeContainer[i].classList.remove("isHidden");
  });
});

//Cuando hago CLICK en TODOS .Close-container,
//a portrait se le AÑADE la clase .isHidden,
//a .Grid-container se le QUITA la clase .isHidden,

closeContainer.forEach((eachClose, i) => {
  closeContainer[i].addEventListener("click", () => {
    church.classList.add("isHidden");
    crows.classList.add("isHidden");
    gachet.classList.add("isHidden");
    gridContainer.classList.remove("isHidden");
  });
});