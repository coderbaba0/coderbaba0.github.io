// Apply the saved choice before the stylesheet paints; default to light on every page.
(() => {
  let theme;
  try { theme = localStorage.getItem('nearmitra-theme'); } catch (_) {}
  if (theme !== 'dark' && theme !== 'light') {
    theme = 'light';
  }
  document.documentElement.dataset.theme = theme;
})();
