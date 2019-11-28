'use strict';

const buttons = document.querySelectorAll('.button');

//Add click event to each button with class "button".
//Function make page scroll down to the id that matches the targeted data-togo value.
buttons.forEach((button) => {
    button.addEventListener('click', function() {
       let goToNextSection = event.currentTarget.getAttribute('data-goto');
       document.querySelector('#'+ goToNextSection).scrollIntoView();
    })
})