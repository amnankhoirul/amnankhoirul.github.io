// sidebar
// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Animasi ketik
  var typed = new Typed('#typed-desc', {
    strings: [
      'Web Developer yang membangun website modern, responsif, dan interaktif.',
      'Full-stack Developer dengan fokus pada UX yang baik.',
      'Pembuat solusi digital yang kreatif dan fungsional.'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: '|'
  });

  // Fungsi untuk menandai nav link aktif
  function setActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav a');
    
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  }
  
  // Panggil fungsi saat load dan scroll
  window.addEventListener('load', setActiveNav);
  window.addEventListener('scroll', setActiveNav);
  
  // Inisialisasi AOS
  AOS.init();
});


  // animasi


  // Typing Animation
  document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed-desc', {
      strings: [
        'Web Developer yang membangun website modern, responsif, dan interaktif.',
        'Full-stack Developer dengan fokus pada UX yang baik.',
        'Pembuat solusi digital yang kreatif dan fungsional.'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  });



