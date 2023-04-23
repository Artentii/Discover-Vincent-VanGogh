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

//Cuando hago CLICK en todos .Close-container,
//a .Grid-container se le QUITA la clase .isHidden,
//a .Discover-container se le AÑADE la clase .isHidden
//a .Immersive-container se le AÑADE la clase .isHidden.

const closeContainer = document.querySelectorAll(".Close-container");
const gridContainer = document.querySelector(".Grid-container");
const discoverContainer = document.querySelector(".Discover-container");
const immersiveContainer = document.querySelector(".Immersive-container");
const discover = document.querySelector(".Discover");
const immersive = document.querySelector(".Immersive");

closeContainer.forEach((eachClose, i) => {
  closeContainer[i].addEventListener("click", () => {
    gridContainer.classList.remove("isHidden");
    discoverContainer.classList.add("isHidden");
    immersiveContainer.classList.add("isHidden");
  });
});

//Cuando hago CLICK en .Discover,
//a .Grid-container se le AÑADE la clase .isHidden,
//a .Discover-container se le QUITA la clase .isHidden.

discover.addEventListener("click", () => {
  gridContainer.classList.add("isHidden");
  discoverContainer.classList.remove("isHidden");
});

//Cuando hago CLICK en .Immersive,
//a .Grid-container se le AÑADE la clase .isHidden,
//a .Immersive-container se le QUITA la clase .isHidden.

immersive.addEventListener("click", () => {
  gridContainer.classList.add("isHidden");
  immersiveContainer.classList.remove("isHidden");
});
