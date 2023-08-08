let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

// Add Three.js code for 3D carousel here
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const images = [
  "public/images/portraits/editing_editing_0015.jpg",
  "public/images/portraits/editing_editing_0026.jpg",
  "public/images/portraits/portraits_0002.jpg",
  "public/images/portraits/editing_editing_0027.jpg",
  "public/images/portraits/IMG_0916.JPG",
  "public/images/portraits/editing_70's _0028.jpg",
  "public/images/portraits/editing_Maine_135mm_c41_0049.jpg",
  "public/images/portraits/editing_editing_0016.jpg",
  "public/images/portraits/IMG_0736.JPG",
  "public/images/weddings/weddings_0003.jpg",
  "public/images/lifestyle/editing_lebanon_135mm_c41_lores_0046.jpg",
  "public/images/weddings/weddings_0005.jpg",
  "public/images/weddings/weddings_0004.jpg",
  // Add more image URLs here
];

const imageTextures = images.map(imageUrl => new THREE.TextureLoader().load(imageUrl));

const carouselRadius = 12;
const carouselRotationSpeed = 0.003;

const slideGeometry = new THREE.PlaneGeometry(7, 7); // Adjust the size of the slides
const slideMaterials = imageTextures.map(texture => new THREE.MeshBasicMaterial({ map: texture }));
const slides = slideMaterials.map(material => new THREE.Mesh(slideGeometry, material));

slides.forEach((slide, index) => {
  const angle = (Math.PI * 2) * index / images.length;
  slide.position.x = carouselRadius * Math.cos(angle);
  slide.position.z = carouselRadius * Math.sin(angle);
  scene.add(slide);
});

camera.position.set(0, 5, 20);

function animate() {
  requestAnimationFrame(animate);

  slides.forEach(slide => {
    slide.rotateY(carouselRotationSpeed);
  });

  renderer.render(scene, camera);
}

animate();


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


// SERVICES 

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let  i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}