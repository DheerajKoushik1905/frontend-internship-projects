const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');
const header = document.querySelector('.site-header');

function closeMenu() {
  nav.classList.remove('open');
  toggle.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation menu');
}

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});

document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', closeMenu));

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 10));
window.addEventListener('resize', () => { if (window.innerWidth > 720) closeMenu(); });
document.getElementById('year').textContent = new Date().getFullYear();
