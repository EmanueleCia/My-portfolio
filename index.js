// animations.js

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add fade-in animation
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Add event listener for scroll
window.addEventListener('scroll', fadeInOnScroll);

// Initial check for elements in viewport on page load
document.addEventListener('DOMContentLoaded', fadeInOnScroll);

// Add hover effect for links
const links = document.querySelectorAll('.icon-link');

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
        link.style.transition = 'transform 0.2s ease';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});