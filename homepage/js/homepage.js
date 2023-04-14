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
