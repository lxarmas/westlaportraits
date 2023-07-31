// SLIDE SHOW FOR HOMEPAGE
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000);
}


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

// Two images side by side
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

// TEXT FOR ABOUT 
// JavaScript for animations and form submission (if needed)
document.getElementById("newsletter-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const email = event.target.elements.email.value;
  // Add your newsletter subscription logic here (e.g., using AJAX)
});
