const hamburgerIcon = document.querySelector('.hamburger-icon');
const menuItems = document.querySelector('.menu-items');
// Function toggles between class names to show/hide menu items.
hamburgerIcon.addEventListener('click', () => {
    menuItems.classList.toggle('show-menu');
}) 

//Animate hamburger menu icon
hamburgerIcon.addEventListener("click", function(){
    hamburgerIcon.classList.toggle("change");
})
