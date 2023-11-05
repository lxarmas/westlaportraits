

// GRID PICTURE FOR HOMEPAGE
let elements = document.getElementsByClassName("column");

// Declare a "loop" variable
let i;



// Three  images side by side
function two() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.flex = "33.33%";
  }
  document.getElementsByClassName("container")[0].classList.add("two");
}


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

