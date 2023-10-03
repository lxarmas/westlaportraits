let slideIndex = 1;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  slides[slideIndex - 1].style.display = "block";
}

function changeSlide(n) {
  slideIndex += n;
  showSlides();
}

document.querySelector(".prev").addEventListener("click", () => {
  changeSlide(-1);
});

document.querySelector(".next").addEventListener("click", () => {
  changeSlide(1);
});


// GRID PICTURE FOR HOMEPAGE
let elements = document.getElementsByClassName("column");

// Declare a "loop" variable
let i;

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
  document.getElementsByClassName("container")[0].classList.add("one");
}

// Three  images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
  document.getElementsByClassName("container")[0].classList.add("two");
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "5%";
  }
  document.getElementsByClassName("container")[0].classList.add("four");
}


