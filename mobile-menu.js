document.addEventListener('DOMContentLoaded', function () {
    // Get the menu toggle button and navigation list
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');

    // Add an event listener to toggle the 'show' class on the navList when button is clicked
    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
});





