

// GRID PICTURE FOR HOMEPAGE
let elements = document.getElementsByClassName("column");

// Declare a "loop" variable
let i;

// Full-width images
function one() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
  document.getElementsByClassName("container")[0].classList.add("one");
}

// Three  images side by side
function two() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.flex = "33.33%";
  }
  document.getElementsByClassName("container")[0].classList.add("two");
}

// Four images side by side
function four() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
  document.getElementsByClassName("container")[0].classList.add("four");
}
$(document).ready(function () {
  $('#carouselExampleAutoplaying').carousel();
});

// for about animation 

function typeText(elementId, text, speed) {
  const target = document.getElementById(elementId);
  let index = 0;
  function type() {
    if (index < text.length) {
      target.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }
  type();
}

typeText("line1", "An International Photographer", 100);
setTimeout(() => {
  typeText("line2", "with a Passion for Capturing Timeless Moments", 100);
},9000); // Delay the second line typing animation
