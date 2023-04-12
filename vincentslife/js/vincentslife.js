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

const nextBtn = document.querySelector(".Next-container");
const prevBtn = document.querySelector(".Prev-container");
const column = document.querySelectorAll(".Column");

//Cuando hago CLICK en .Next-container,
//a .Prev-container le AÑADO la clase .isActive

//Cuando hago CLICK en .Next-container,
//a COUNTER se le AÑADE 1
//a COUNTER se le AÑADE 2

//Cuando hago CLICK en .Prev-container,
//a COUNTER se le RESTA 1
//a COUNTER se le RESTA 2

let counter = 0;
nextBtn.addEventListener("click", () => {
  prevBtn.classList.add("isActive");
  counter++;
  if (counter + 2 > column.length - 1) {
    counter--;
  } else {
    prevBtn.classList.remove("notActive");
    column.forEach((eachColumn, i) => {
      column[i].classList.add("isHidden");
    });
    column[counter].classList.remove("isHidden");
    column[counter + 1].classList.remove("isHidden");
    column[counter + 2].classList.remove("isHidden");
  }
  if (counter > 1) {
    nextBtn.classList.add("notActive");
  }
});

prevBtn.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = 0;
  } else {
    nextBtn.classList.remove("notActive");
    column.forEach((eachColumn, i) => {
      column[i].classList.add("isHidden");
    });
    column[counter].classList.remove("isHidden");
    column[counter + 1].classList.remove("isHidden");
    column[counter + 2].classList.remove("isHidden");
  }
  if (counter < 1) {
    prevBtn.classList.add("notActive");
  }
});
