const hamburgerIcon = document.querySelector('.hamburgerIcon');
const menuItems = document.querySelector('.menuItems');
const menuContainer = document.querySelector('.menu');

// Function toggles between class names to show/hide menu items and change styling to menu and icon.
hamburgerIcon.addEventListener('click', () => {
    menuItems.classList.toggle('showMenu');
    menuContainer.classList.toggle('changeBackground');
    hamburgerIcon.classList.toggle("change");
}) 

window.addEventListener('resize', function() {
    if (window.innerWidth > 400 && menuContainer.classList.contains('changeBackground')) {
        menuContainer.classList.remove('changeBackground');
        menuItems.classList.remove('showMenu');
        hamburgerIcon.classList.remove('change');
    }
  });