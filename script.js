// Particles.js Configuration
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1 } },
    size: { value: 4, random: true, anim: { enable: true, speed: 2, size_min: 0.1 } },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      
      // Animate progress bars
      const progressBars = entry.target.querySelectorAll('.progress-fill');
      progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent;
      });
      
      scrollObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    scrollObserver.observe(el);
  });

  // Navbar active state
  const navLinks = document.querySelectorAll('.nav-link-animate');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.glass-nav');
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(255, 255, 255, 0.15)';
      navbar.style.backdropFilter = 'blur(25px)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.1)';
      navbar.style.backdropFilter = 'blur(20px)';
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Add this to your existing script.js

// Email Copy Functionality
document.querySelectorAll('.email-copy').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const email = this.getAttribute('data-email');
    navigator.clipboard.writeText(email).then(() => {
      const originalText = this.textContent;
      this.innerHTML = '<i class="fas fa-check me-2"></i>Copied!';
      this.classList.add('copied');
      setTimeout(() => {
        this.innerHTML = originalText;
        this.classList.remove('copied');
      }, 2000);
    });
  });
});

// Contact Form Submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('.form-submit');
  btn.parentElement.classList.add('submitting');
  
  // Simulate form submission
  setTimeout(() => {
    alert('Message sent successfully! (Update form action for real submission)');
    this.reset();
    btn.parentElement.classList.remove('submitting');
  }, 2000);
});
// STAT COUNTER ANIMATION
function animateStats() {
  const stats = document.querySelectorAll('.stat-number');
  stats.forEach(stat => {
    const target = +stat.getAttribute('data-target'); // e.g. 17, 5, 6
    let current = 0;
    const duration = 1500; // ms
    const startTime = performance.now();

    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      stat.textContent = value;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

// run when page is loaded
window.addEventListener('load', animateStats);
