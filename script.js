// script.js
const contractAddress = document.getElementById('contractAddress');
const copyButton = document.getElementById('copyButton');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');
const dropdownLinks = document.querySelectorAll('.dropdown-menu a');

// Copy contract address to clipboard
copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(contractAddress.textContent)
        .then(() => alert('Contract address copied to clipboard!'))
        .catch((err) => console.error('Failed to copy contract address: ', err));
});

// Toggle navigation menu on mobile
navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Background animation
const backgroundAnimation = document.querySelector('.background-animation');

function createFallingImage() {
    const fallingImage = document.createElement('img');
    fallingImage.src = 'assets/images/fAdgsdgasd-removebg-preview.png';
    fallingImage.alt = 'Falling Image';
    fallingImage.classList.add('falling-image');
    fallingImage.style.left = `${Math.random() * window.innerWidth}px`;
    fallingImage.style.animationDuration = `${Math.random() * 3 + 2}s`;
    backgroundAnimation.appendChild(fallingImage);

    setTimeout(() => {
        fallingImage.remove();
    }, 5000);
}

setInterval(createFallingImage, 1000);

setInterval(startBackgroundAnimation, 3000);

// Fade in images on scroll
const fadeInImages = document.querySelectorAll('.fade-in');

function fadeInOnScroll() {
    fadeInImages.forEach(image => {
        const imagePosition = image.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (imagePosition < windowHeight * 0.8) {
            image.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);