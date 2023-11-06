







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

