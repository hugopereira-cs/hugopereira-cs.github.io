const toggleTheme = document.getElementById('toggleTheme');
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll('.accordion__header');
const menuLinks = document.querySelectorAll('.menu__link');

function applyTheme(theme) {
  rootHtml.setAttribute('data-theme', theme);
  toggleTheme && (
    theme === 'dark' ? (toggleTheme.classList.remove('bi-moon-stars'), toggleTheme.classList.add('bi-sun')) : (toggleTheme.classList.remove('bi-sun'), toggleTheme.classList.add('bi-moon-stars'))
  );
}

function saveTheme(theme) {
  try {
    localStorage.setItem('theme', theme);
  } catch (e) {
  }
}

function initTheme () {
  const saved = localStorage.getItem('theme');
  const initial = saved || rootHtml.getAttribute('data-theme') || 'dark';
  applyTheme(initial);
}

function changeTheme() {
  const currentTheme = rootHtml.getAttribute('data-theme') || 'dark';
  const next = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  saveTheme(next);
}

initTheme();

toggleTheme.addEventListener('click', changeTheme);

accordionHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains('active');

    accordionActive
      ? accordionItem.classList.remove('active')
      : accordionItem.classList.add('active');
  });
});


menuLinks.forEach(item => {
  item.addEventListener('click', () => {
    menuLinks.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  })
})
