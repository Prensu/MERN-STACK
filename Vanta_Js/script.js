// Vanta.js Background Effect
VANTA.NET({
    el:".fog",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x4fbbbb,
    backgroundColor: 0x40406,
    points: 8.00,
    maxDistance: 26.00,
    spacing: 14.00,
    showDots: false
  })

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});
