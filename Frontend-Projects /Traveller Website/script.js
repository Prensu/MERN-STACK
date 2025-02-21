// Sticky Navbar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Parallax Effect
const parallaxElements = document.querySelectorAll('.parallax-bg');
window.addEventListener('scroll', () => {
  parallaxElements.forEach(el => {
    const speed = el.getAttribute('data-speed');
    const yPos = -(window.scrollY * speed);
    el.style.backgroundPositionY = `${yPos}px`;
  });
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  });
});

// Form Submission
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector('textarea').value;
  if (email && message) {
    alert('Message sent successfully! I’ll respond soon.');
    this.reset();
  } else {
    alert('Please fill out all fields.');
  }
});

// Intersection Observer for Animations
const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-slide-in-left, .animate-slide-in-up, .animate-slide-in-right');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('start-animation');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));