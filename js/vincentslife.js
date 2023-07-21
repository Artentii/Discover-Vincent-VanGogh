/* Selecciono elementos del documento HTML utilizando sus nombres de clase y asignándolos a variables. */
const hamburger = document.querySelector(".Hamburger");
const headerUl = document.querySelector(".Header-ul");
const circle = document.querySelector(".Circle");
const navLink = document.querySelectorAll(".Nav-link");

//Cuando hago CLICK en .Hamburger
//se le AÑADE a .Header-ul la clase .isActive
//se le AÑADE a .Hamburger la clase .isActive
//se le AÑADE a .Circle la clase .isActive

/* Agrego un addEventListener al elemento con la clase "hamburger". Cuando lo clickeo, el código alternará la clase "isActive" en los elementos con las clases "Header-ul", "hamburger" y "Circle". */
hamburger.addEventListener("click", () => {
  headerUl.classList.toggle("isActive");
  hamburger.classList.toggle("isActive");
  circle.classList.toggle("isActive");
});

//Cuando hago MOUSEOVER sobre .navLink,
//a TODOS .Header-li les AÑADO la clase .isInactive,

//Cuando hago MOUSEOUT sobre .navLink,
//a TODOS .Header-li les QUITO la clase .isInactive,

/* Agrego un addEventListener a cada elemento con el nombre de clase "Nav-link". */
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

/* Selecciono elementos del documento HTML utilizando sus nombres de clase y los asigno a variables. */
const nextBtn = document.querySelector(".Next-container");
nextBtn.classList.add("isActive");
const prevBtn = document.querySelector(".Prev-container");
const columnImages = document.querySelectorAll(".Column-images");

// Cuando hago CLICK en .Next-container,
// AGREGO la clase .isActive a .Prev-container
// SUMO 1 a COUNTER
// SUMO 2 a COUNTER

// Cuando hago CLICK en .Prev-container,
// RESTO 1 a COUNTER
// RESTO 2 a COUNTER

/* El fragmento de código está agregando un addEventListener al último elemento hijo del elemento nextBtn.
Cuando se hace click en este elemento, la variable counter se incrementa en 1. */
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

/* Agrego un addEventListener al último elemento hijo del elemento prevBtn. 
Cuando se hace click en este elemento, la variable counter se decrementa en 1. 
Si counter se vuelve menor que 0, se restablece a 0. 
De lo contrario, se agrega la clase "isActive" al elemento nextBtn. 
La clase "isHidden" se agrega a todos los elementos con la clase "Column-images". 
Luego, se elimina la clase "isHidden" de los elementos columnImages[counter], columnImages[counter + 1] y columnImages[counter + 2]. 
Finalmente, si counter es igual a 0, se elimina la clase "isActive" del elemento prevBtn. */
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

//Cuando el ANCHO DE PANTALLA es menor a 1200px,
//AGREGAR la clase .isHidden a TODAS LAS COLUMNAS, si coincide
//AGREGAR la clase .isHidden a los DOS ÚLTIMOS ELEMENTOS, si es más ancho

/*La siguiente función esconde o muestra las imágenes dependiendo del ancho de la pantalla*/
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
