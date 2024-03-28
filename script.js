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

// Smooth scroll to section on dropdown link click
dropdownLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target.getAttribute('href');
        const targetSection = document.querySelector(target);
        targetSection.scrollIntoView({ behavior: 'smooth' });
        if (nav.classList.contains('open')) {
            nav.classList.remove('open');
        }
    });
});

// Animate hero image on scroll
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        const scrollPosition = window.pageYOffset;
        const offsetPosition = heroImage.offsetTop;
        const scrollOffset = 200; // Adjust this value to control when the animation starts
        
        if (scrollPosition > offsetPosition - scrollOffset) {
            heroImage.style.transform = `translate(${(scrollPosition - offsetPosition + scrollOffset) * 0.5}px, 50%)`;
        } else {
            heroImage.style.transform = 'translateY(50%)';
        }
    }
});

// Animate step images on scroll
const stepImages = document.querySelectorAll('.step-image');
window.addEventListener('scroll', () => {
    stepImages.forEach(image => {
        const imagePosition = image.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (imagePosition < screenPosition) {
            image.style.opacity = '1';
            image.style.transform = 'translateX(0)';
        } else {
            image.style.opacity = '0.5';
            image.style.transform = 'translateX(-50px)';
        }
    });
});

// Animate tokenomics image on scroll
const tokenomicsImage = document.querySelector('.tokenomics-image');
window.addEventListener('scroll', () => {
    if (tokenomicsImage) {
        const imagePosition = tokenomicsImage.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (imagePosition < screenPosition) {
            tokenomicsImage.style.opacity = '1';
            tokenomicsImage.style.transform = 'translateY(0)';
        } else {
            tokenomicsImage.style.opacity = '0.8';
            tokenomicsImage.style.transform = 'translateY(50px)';
        }
    }
});

// Animate FAQ image on scroll
const faqImage = document.querySelector('.faq-image');
window.addEventListener('scroll', () => {
    if (faqImage) {
        const imagePosition = faqImage.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (imagePosition < screenPosition) {
            faqImage.style.opacity = '1';
            faqImage.style.transform = 'translateX(0)';
        } else {
            faqImage.style.opacity = '0.7';
            faqImage.style.transform = 'translateX(-50px)';
        }
    }
});

// Animate social image on scroll
const socialImage = document.querySelector('.social-image');
window.addEventListener('scroll', () => {
    if (socialImage) {
        const imagePosition = socialImage.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (imagePosition < screenPosition) {
            socialImage.style.opacity = '1';
            socialImage.style.transform = 'translateX(0)';
        } else {
            socialImage.style.opacity = '0.6';
            socialImage.style.transform = 'translateX(50px)';
        }
    }
});