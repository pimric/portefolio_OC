// script.js – interactions dynamiques pour Portfolio Consultant Data

document.addEventListener("DOMContentLoaded", () => {
  // Scroll fluide pour les boutons avec data-scroll
  document.querySelectorAll('[data-scroll]').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      const target = document.querySelector(button.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Animation d’apparition au scroll des encarts
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.encart').forEach(encart => {
    encart.classList.add('fade-init');
    observer.observe(encart);
  });
});
