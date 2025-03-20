// Images for slider
const imageFolder = "./images/";
const totalImages = 5;
let images = [];
let currentIndex = 0;

// #DOM
const sliderImage = document.querySelector("#slider-image");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

// Load images
function loadImages() {
    for (let i = 1; i <= totalImages; i++) {
        images.push(`${imageFolder}${i}.jpg`);
    }
}

// Slider update
function updateSlider() {
    sliderImage.src = images[currentIndex];

    prevBtn.classList.toggle("hidden", currentIndex === 0);
    nextBtn.classList.toggle("hidden", currentIndex === images.length - 1);
}

// Button - Prev
function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
}

// Button - Next
function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateSlider();
    }
}


function addEventListeners() {
    prevBtn.addEventListener("click", prevImage);
    nextBtn.addEventListener("click", nextImage);
}

function initSlider() {
    loadImages();
    updateSlider();
    addEventListeners();
}

document.addEventListener("DOMContentLoaded", initSlider);
