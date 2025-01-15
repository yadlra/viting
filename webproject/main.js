import './style.css';
import { initPlants } from './plants.js';


const images = document.querySelectorAll('.float-image');


// Initialising the plant cards
initPlants();

// function to move each image to a random position within the viewport
function moveImageRandomly(image) {
  const x = Math.random() * (window.innerWidth - 150); // random X position, with padding for image width
  const y = Math.random() * (window.innerHeight - 150); // random Y position, with padding for image height

  image.style.transition = `transform 5s ease`; // smooth transition effect
  image.style.transform = `translate(${x}px, ${y}px)`; // moveing to new position
}

// applying random floating effect to all images
function randomFloatingEffect() {
  images.forEach(image => {
    moveImageRandomly(image);
    // periodically updating the position every 5 seconds
    setInterval(() => moveImageRandomly(image), 5000);
  });
}

// init the floating effect on load
randomFloatingEffect();






