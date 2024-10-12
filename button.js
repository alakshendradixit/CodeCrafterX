// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', function () {
    // Toggle visibility of the nav list on button click
    navList.classList.toggle('show');
});
