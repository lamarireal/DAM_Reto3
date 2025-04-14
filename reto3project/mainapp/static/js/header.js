document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.main-nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-4px)';
        link.style.transition = 'transform 0.3s ease, color 0.3s ease';
        link.style.color = '#ffffff';
      });
  
      link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
        link.style.color = '#ccc';
      });
    });
  });