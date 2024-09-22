// Optional: Add some interactive hover effects or dynamic behavior to the hero section
document.querySelector('.cta-btn').addEventListener('click', function() {
    alert('Taking you to our shop!');
});
// JavaScript code to add scroll effect to the navbar
window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
      navbar.classList.add('navbar-scroll');
    } else {
      navbar.classList.remove('navbar-scroll');
    }
  };
  