'use script';

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', function() {
       let goToNextSection = event.currentTarget.getAttribute('data-goto');
       document.querySelector('#'+ goToNextSection).scrollIntoView();
    })
})