//When I CLICK on .Hamburger
//it ADDS the class .isActive to the .Hamburger
//it ADDS the class .isActive to the .Header-ul
//it ADDS the class .isActive to the .Circle

const hamburger = document.querySelector(".Hamburger");
const headerUl = document.querySelector(".Header-ul");
const circle = document.querySelector(".Circle");
const navLink = document.querySelectorAll(".Nav-link");

hamburger.addEventListener("click", () => {
  headerUl.classList.toggle("isActive");
  hamburger.classList.toggle("isActive");
  circle.classList.toggle("isActive");
});

//When I do MOUSEOVER on .navLink,
//I ADD the class .notActive to ALL .Header-li

//When I do MOUSEOVER on .navLink,
//I REMOVE the class .notActive to ALL .Header-li

navLink.forEach((eachHeader, i) => {
  navLink[i].addEventListener("mouseover", () => {
    navLink.forEach((eachHeader, j) => {
      navLink[j].classList.add("notActive");
    });
  });
});
navLink.forEach((eachHeader, i) => {
  navLink[i].addEventListener("mouseout", () => {
    navLink.forEach((eachHeader, k) => {
      navLink[k].classList.remove("notActive");
    });
  });
});

//When I CLICK on ALL .Close-container,
//I REMOVE the class .isHidden to .Grid-container,
//I ADD the class .isHidden to .Discover-container,
//I ADD the class .isHidden to .Immersive-container.


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

//When I CLICK on .Discover,
//I ADD the class .isHidden to .Grid-container,
//I REMOVE the class .isHidden to .Discover-container.

discover.addEventListener("click", () => {
  gridContainer.classList.add("isHidden");
  discoverContainer.classList.remove("isHidden");
});

//When I CLICK on .Immersive,
//I ADD the class .isHidden to .Grid-container,
//I REMOVE the class .isHidden to .Immersive-container.

immersive.addEventListener("click", () => {
  gridContainer.classList.add("isHidden");
  immersiveContainer.classList.remove("isHidden");
});
