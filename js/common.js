// Common JavaScript functionality for all pages

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Logo click handler
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', function (e) {
      e.preventDefault();
      // Check if we're on the main page or sub-pages
      if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        window.location.href = '../#top';
      }
    });
  }

  // Add scroll effect to header
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY;
  });

  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const nav = document.querySelector('.nav');

  if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('Mobile menu button clicked');
      mobileMenuBtn.classList.toggle('active');
      nav.classList.toggle('active');
      console.log('Nav classes:', nav.className);
    });

    // Close menu when clicking on nav links
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        mobileMenuBtn.classList.remove('active');
        nav.classList.remove('active');
      }
    });
  } else {
    console.log('Mobile menu elements not found:', { mobileMenuBtn, nav });
  }
});
