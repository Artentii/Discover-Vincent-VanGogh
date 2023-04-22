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
nextBtn.classList.add("isActive");
const prevBtn = document.querySelector(".Prev-container");
const columnImages = document.querySelectorAll(".Column-images");

//Cuando hago CLICK en .Next-container,
//a .Prev-container le AÑADO la clase .isActive

//Cuando hago CLICK en .Next-container,
//a COUNTER se le AÑADE 1
//a COUNTER se le AÑADE 2

//Cuando hago CLICK en .Prev-container,
//a COUNTER se le RESTA 1
//a COUNTER se le RESTA 2

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

prevBtn.lastElementChild.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = 0;
  } else {
    nextBtn.classList.add("isActive");
    columnImages.forEach((eachColumn, i) => {
      columnImages[i].classList.add("isHidden");
    });
    columnImages[counter].classList.remove("isHidden");
    columnImages[counter + 1].classList.remove("isHidden");
    columnImages[counter + 2].classList.remove("isHidden");
  }
  if (counter === 0) {
    prevBtn.classList.remove("isActive");
  }
});

// Cuando el ancho de la pantalla es menor a 1200px,
// Si la ventana coincide, se le AÑADE la clase isHidden a TODAS LAS COLUMNAS
// Si la ventana es grande, le AÑADO la clase isHidden a los dos útlimos elementos

function toggleHidden() {
  const mediaQuery = window.matchMedia("(max-width:1200px)");
  if (!mediaQuery.matches) {
    columnImages.forEach((eachColumn, i) => {
      columnImages[i].classList.add("isHidden");
    });
    for (let i = counter; i < counter + 3; i++) {
      columnImages[i].classList.remove("isHidden");
    }
    nextBtn.classList.add("isActive");
    if (counter != 0) {
      prevBtn.classList.add("isActive");
    }
  } else {
    columnImages.forEach((eachColumn, i) => {
      columnImages[i].classList.add("isHidden");
    });
    for (let i = 0; i < columnImages.length; i++) {
      columnImages[i].classList.remove("isHidden");
    }
    nextBtn.classList.remove("isActive");
    prevBtn.classList.remove("isActive");
  }
}

toggleHidden();
window.addEventListener("resize", toggleHidden);
