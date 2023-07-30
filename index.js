let slideIndex = 0;
showSlides();

document.addEventListener("DOMContentLoaded", function () {
    const textOne = document.querySelector(".TextOne");
    textOne.style.animationPlayState = "running";
});



function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}








// Get the elements with class="column"
let elements = document.getElementsByClassName("column");

// Declare a "loop" variable
let i;

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "5%";
  }
}