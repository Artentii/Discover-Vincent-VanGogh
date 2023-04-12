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

//Cuando hago CLICK en .Next-container,
//a .Prev-container le AÑADO la clase .isActive

const nextBtn = document.querySelector(".Next-container");
const prevBtn = document.querySelector(".Prev-container");
const columnLife = document.getElementById(".Life");
const columnJourneys = document.getElementById(".Journeys");
const columnIllness = document.getElementById(".Illness");
const columnDeath = document.getElementById(".Death");
const columnCareer = document.getElementById(".Career");

let prevClicks = 0;
let nextClicks = 0;
const maxNextClicks = 2;
const maxPrevClicks = 2;

let currentState = "Life";

nextBtn.addEventListener("click", () => {
  prevBtn.classList.add("isActive");

  if (currentState === "Life") {
    Life.classList.add("hiddenColumn");
    Illness.classList.remove("hiddenColumn");
    Career.classList.remove("hiddenColumn");
    Journeys.classList.add("visibleColumn");
    currentState = "Illness";
  } else if (currentState === "Illness") {
    Illness.classList.add("hiddenColumn");
    Career.classList.remove("hiddenColumn");
    Journeys.classList.add("visibleColumn");
    Death.classList.add("visibleColumn");
    currentState = "Career";
  }
});

prevBtn.addEventListener("click", () => {
  // nextBtn.classList.add("isActive");

  if (currentState === "Illness") {
    Illness.classList.remove("hiddenColumn");
    Life.classList.remove("hiddenColumn");
    Career.classList.remove("hiddenColumn");
    Death.classList.remove("visibleColumn");
    Journeys.classList.remove("visibleColumn");
    currentState = "Life";
  } else if (currentState === "Career") {
    Death.classList.add("visibleColumn");
    currentState = "Illness";
  }
});
