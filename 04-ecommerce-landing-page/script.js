const products = [
  { name: 'Focus Keyboard', category: 'workspace', price: 3499, emoji: '⌨️', bg: '#d7e7ff' },
  { name: 'Cloud Headphones', category: 'audio', price: 4299, emoji: '🎧', bg: '#ffd9d1' },
  { name: 'Daily Ceramic Mug', category: 'home', price: 699, emoji: '☕', bg: '#e7e2ca' },
  { name: 'Desk Light', category: 'workspace', price: 1899, emoji: '💡', bg: '#e2f0c7' },
  { name: 'Mini Speaker', category: 'audio', price: 2499, emoji: '🔊', bg: '#e6dbf5' },
  { name: 'Soft Throw Pillow', category: 'home', price: 899, emoji: '🛋️', bg: '#f4d8e5' },
  { name: 'Analog Desk Clock', category: 'workspace', price: 1199, emoji: '⏰', bg: '#d6ece6' },
  { name: 'Planter Set', category: 'home', price: 1299, emoji: '🪴', bg: '#d9ead3' }
];

const grid = document.getElementById('product-grid');
let cartCount = 0;

function currency(value) { return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value); }

function renderProducts(filter = 'all') {
  const visible = filter === 'all' ? products : products.filter((item) => item.category === filter);
  grid.innerHTML = visible.map((item) => `
    <article class="product-card">
      <div class="product-visual" style="background:${item.bg}" aria-hidden="true">${item.emoji}</div>
      <div class="product-body">
        <div class="product-meta"><div><h3>${item.name}</h3><p>${item.category}</p></div><span class="price">${currency(item.price)}</span></div>
        <button class="add-btn" data-product="${item.name}">Add to cart</button>
      </div>
    </article>`).join('');
}

renderProducts();

document.querySelector('.filters').addEventListener('click', (event) => {
  const button = event.target.closest('button[data-filter]');
  if (!button) return;
  document.querySelectorAll('.filters button').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  renderProducts(button.dataset.filter);
});

grid.addEventListener('click', (event) => {
  const button = event.target.closest('.add-btn');
  if (!button) return;
  cartCount += 1;
  document.getElementById('cart-count').textContent = cartCount;
  const original = button.textContent;
  button.textContent = 'Added ✓';
  setTimeout(() => { button.textContent = original; }, 900);
});

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => menu.classList.remove('open')));

document.getElementById('newsletter-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.getElementById('newsletter-email');
  document.getElementById('newsletter-message').textContent = `Thanks! ${input.value} was added to this demo list.`;
  event.currentTarget.reset();
});
