const menuToggle = document.querySelector('.menu-toggle i');
const sidebar = document.querySelector('.sidebar');
const closeMenu = document.querySelector('.close-menu');

menuToggle.addEventListener('click', () => {
  sidebar.style.right = '0';
});

closeMenu.addEventListener('click', () => {
  sidebar.style.right = '-100%';
});
