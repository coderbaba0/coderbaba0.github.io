// Apply the saved choice before the stylesheet paints; default to the OS theme.
(() => {
  let theme;
  try { theme = localStorage.getItem('nearmitra-theme'); } catch (_) {}
  if (theme !== 'dark' && theme !== 'light') {
    theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  document.documentElement.dataset.theme = theme;
})();
