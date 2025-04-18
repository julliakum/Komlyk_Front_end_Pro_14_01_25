const imageFolder = "./images/";
const totalImages = 5;
let images = [];
let currentIndex = 0;
let intervalId;

const sliderImage = document.querySelector("#slider-image");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

function loadImages() {
    for (let i = 1; i <= totalImages; i++) {
        images.push(`${imageFolder}${i}.jpg`);
    }
}

function updateSlider() {
    sliderImage.src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
    resetInterval();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
    resetInterval();
}

function addEventListeners() {
    prevBtn.addEventListener("click", prevImage);
    nextBtn.addEventListener("click", nextImage);
}

function startAutoSlide() {
    intervalId = setInterval(() => {
        nextImage();
    }, 3000);
}

function resetInterval() {
    clearInterval(intervalId);
    startAutoSlide();
}

function initSlider() {
    loadImages();
    updateSlider();
    addEventListeners();
    startAutoSlide();
}

document.addEventListener("DOMContentLoaded", initSlider);
