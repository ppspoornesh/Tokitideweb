// your code goes here
// your code goes here

// Fade-In Scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.1 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(el => appearOnScroll.observe(el));

// Floating Back-to-Top Button
const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// Like Button Animation
document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('liked');
  });
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Model Showcase Pop In Animation
// Model Showcase Pop In Animation
const poppers = document.querySelectorAll('.pop-in');
const popOptions = { threshold: 0.5 };
const popOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.transform = "scale(1.05)";
    setTimeout(() => {
      entry.target.style.transform = "scale(1)";
    }, 400);
    observer.unobserve(entry.target);
  });
}, popOptions);

poppers.forEach(el => popOnScroll.observe(el));

