const sideBar = document.querySelector('.nav-links-side');
const menuOpen = document.querySelector('.menuOpen i');
const menuClose = document.querySelector('.nav-links-side i');

menuOpen.addEventListener('click', () => {
  sideBar.style.right = '0%';
})

menuClose.addEventListener('click', () => {
  sideBar.style.right = '-100%';
});