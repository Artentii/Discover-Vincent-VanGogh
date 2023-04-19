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

//Cuando hago CLICK en .Down-btn,
//a .First-container le AÑADO la clase .isHidden
//a .Second-container le QUITO la clase .isHidden

//Cuando hago CLICK en .Up-btn,
//a .First-container le QUITO la clase .isHidden
//a .Second-container le QUITO la clase .isActive

const downBtn = document.querySelector(".Down-btn");
const upBtn = document.querySelector(".Up-btn");
const firstContainer = document.querySelector(".First-container");
const secondContainer = document.querySelector(".Second-container");

downBtn.addEventListener("click", () => {
  firstContainer.classList.add("isHidden");
  secondContainer.classList.add("isActive");
});

upBtn.addEventListener("click", () => {
  firstContainer.classList.remove("isHidden")
  secondContainer.classList.remove("isActive")
})
