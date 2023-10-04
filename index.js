


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
    elements[i].style.flex = "50%";
  }
  document.getElementsByClassName("container")[0].classList.add("two");
}

// Four images side by side
function four() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.flex = "5%";
  }
  document.getElementsByClassName("container")[0].classList.add("four");
}


