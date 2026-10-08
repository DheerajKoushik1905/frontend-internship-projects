const button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

function setMenu(open) {
  menu.classList.toggle('open', open);
  button.classList.toggle('open', open);
  button.setAttribute('aria-expanded', String(open));
  button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

button.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
window.addEventListener('resize', () => { if (window.innerWidth > 760) setMenu(false); });
