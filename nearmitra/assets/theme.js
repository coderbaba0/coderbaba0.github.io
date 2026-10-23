const themeToggle = document.querySelector('.theme-toggle');
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
applyTheme(document.documentElement.dataset.theme || 'light');
themeToggle?.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  hasExplicitTheme = true;
  try { localStorage.setItem('nearmitra-theme', next); } catch (_) {}
  applyTheme(next);
});
window.addEventListener('storage', event => {
  if (event.key === 'nearmitra-theme') {
    hasExplicitTheme = ['dark', 'light'].includes(event.newValue);
    applyTheme(hasExplicitTheme ? event.newValue : 'light');
  }
});
