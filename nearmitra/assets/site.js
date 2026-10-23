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
