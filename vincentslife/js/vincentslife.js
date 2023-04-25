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


const nextBtn = document.querySelector(".Next-container");
nextBtn.classList.add("isActive");
const prevBtn = document.querySelector(".Prev-container");
const columnImages = document.querySelectorAll(".Column-images");

//When I CLICK on .Next-container,
//I ADD the class .isActive to .Prev-container
//I ADD 1 to COUNTER
//I ADD 2 to COUNTER

//When I CLICK on .Prev-container,
//I REMOVE 1 to COUNTER
//I REMOVE 2 to COUNTER

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

//When the SCREEN WIDTH is less than 1200px,
//ADD class .isHidden to ALL COLUMNS, if it matches
//ADD class .isHidden to the LAST TWO ELEMENTS, if it's wider

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
