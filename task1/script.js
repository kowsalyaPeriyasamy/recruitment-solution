// Smooth scrolling for anchor links
const smoothScroll = (target) => {
  const element = document.querySelector(target);
  window.scrollTo({
    top: element.offsetTop,
    behavior: 'smooth'
  });
};

document.addEventListener('DOMContentLoaded', () => {
  // Add smooth scrolling to anchor links
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target.getAttribute('href');
      smoothScroll(target);
    });
  });
});








  
  