'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('open', !expanded);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    menuButton?.setAttribute('aria-expanded', 'false');
    navigation?.classList.remove('open');
    document.querySelectorAll('.nav-more[open]').forEach(item => { item.open = false; });
  }
});
document.addEventListener('click', event => {
  document.querySelectorAll('.nav-more[open]').forEach(item => {
    if (!item.contains(event.target)) item.open = false;
  });
});
const filters = document.querySelectorAll('[data-filter]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('[data-platform]').forEach(item => {
    item.hidden = button.dataset.filter !== 'all' && item.dataset.platform !== button.dataset.filter;
  });
}));
const dialog = document.querySelector('#image-dialog');
let lastTrigger;
document.querySelectorAll('[data-lightbox]').forEach(anchor => anchor.addEventListener('click', event => {
  if (!dialog || typeof dialog.showModal !== 'function') return;
  event.preventDefault();
  lastTrigger = anchor;
  const source = anchor.querySelector('img');
  const image = dialog.querySelector('img');
  image.src = anchor.href;
  image.alt = source.alt;
  dialog.querySelector('p').textContent = source.alt;
  dialog.showModal();
}));
dialog?.querySelector('button')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => {
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
});
dialog?.addEventListener('close', () => lastTrigger?.focus());
// Progressive enhancement: text remains visible if scripting or observation fails.
const motionAllowed = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (motionAllowed && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {threshold: 0.06});
  document.querySelectorAll('.section-heading, .feature-card, .usecase-grid article, .ai-flow article, .platform-card, .product-image, .roadmap-preview, .roadmap-stages article').forEach(element => {
    element.classList.add('reveal-ready');
    revealObserver.observe(element);
  });
}
const readingProgress = document.querySelector('.reading-progress');
let progressScheduled = false;
function updateReadingProgress() {
  const range = document.documentElement.scrollHeight - window.innerHeight;
  if (readingProgress) readingProgress.style.transform = `scaleX(${range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0})`;
  progressScheduled = false;
}
window.addEventListener('scroll', () => {
  if (!progressScheduled) { progressScheduled = true; requestAnimationFrame(updateReadingProgress); }
}, {passive: true});
updateReadingProgress();
const themeToggle = document.querySelector('.theme-toggle');
const systemTheme = window.matchMedia('(prefers-color-scheme: light)');
let hasExplicitTheme = false;
try { hasExplicitTheme = ['light', 'dark'].includes(localStorage.getItem('nearmitra-theme')); } catch (_) {}
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const light = theme === 'light';
  const label = `Switch to ${light ? 'dark' : 'light'} theme`;
  themeToggle?.setAttribute('aria-label', label);
  themeToggle?.setAttribute('title', label);
  themeToggle?.setAttribute('aria-pressed', String(light));
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#f5f8f6' : '#0e1117');
}
applyTheme(document.documentElement.dataset.theme || 'dark');
themeToggle?.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  hasExplicitTheme = true;
  try { localStorage.setItem('nearmitra-theme', next); } catch (_) {}
  applyTheme(next);
});
systemTheme.addEventListener('change', event => {
  if (!hasExplicitTheme) applyTheme(event.matches ? 'light' : 'dark');
});
window.addEventListener('storage', event => {
  if (event.key === 'nearmitra-theme') {
    hasExplicitTheme = ['dark', 'light'].includes(event.newValue);
    applyTheme(hasExplicitTheme ? event.newValue : (systemTheme.matches ? 'light' : 'dark'));
  }
});
