// ===== Mobile nav toggle =====
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });
}

// Close mobile menu after clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navbar.classList.remove('open'));
});

// ===== Footer year =====
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Skill bar animation on scroll =====
const bars = document.querySelectorAll('.bar-fill');
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.style.width; // triggers reflow
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.4 });
bars.forEach(bar => barObserver.observe(bar));

// ===== Contact form submission (AJAX to Django view) =====
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = 'Sending...';

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
      });

      if (response.ok) {
        status.textContent = 'Message sent successfully!';
        form.reset();
      } else {
        status.textContent = 'Something went wrong. Please try again.';
      }
    } catch (err) {
      status.textContent = 'Network error. Please try again later.';
    }
  });
}
