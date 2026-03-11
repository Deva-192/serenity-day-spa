/* ==========================================
   SERENITY DAY SPA – App Logic
   ========================================== */

// --- NAVBAR SCROLL ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// --- HAMBURGER MENU ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// --- SCROLL ANIMATIONS ---
const aosElements = document.querySelectorAll('[data-aos]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
aosElements.forEach(el => observer.observe(el));

// --- BOOKING FORM ---
function handleBooking(e) {
  e.preventDefault();
  const form = document.getElementById('bookingForm');
  const success = document.getElementById('bookingSuccess');
  form.style.display = 'none';
  success.style.display = 'block';
}

function resetForm(e) {
  e.preventDefault();
  const form = document.getElementById('bookingForm');
  const success = document.getElementById('bookingSuccess');
  form.reset();
  success.style.display = 'none';
  form.style.display = 'flex';
}

// --- NEWSLETTER ---
function subscribeNewsletter(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const input = e.target.querySelector('input');
  btn.textContent = '✓ Subscribed!';
  btn.style.background = '#5a8a5a';
  input.value = '';
  setTimeout(() => {
    btn.textContent = 'Join ✦';
    btn.style.background = '';
  }, 3500);
}

// --- SMOOTH SCROLL for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// --- Set min date for booking ---
const dateInput = document.getElementById('date');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.min = today;
}
