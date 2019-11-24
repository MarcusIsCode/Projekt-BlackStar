'use strict';

const changeSlideButtons = document.querySelectorAll('.changeSlide');
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.mySlides');
const slideImages =  document.querySelectorAll('.slideImg');
let slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls. If target element contains specified class name, add or remove 1 to slideIndex.
function plusSlides(event) {
  if (event.target.classList.contains('prev')) {
    showSlides(slideIndex += -1);
  } else if (event.target.classList.contains('next')) {
    showSlides(slideIndex += 1);
  }
  
}

// Add click event to each changeSlideButton
changeSlideButtons.forEach(changeSlideButton => {
  changeSlideButton.addEventListener('click', plusSlides);
});

// Add touch event for mobile
slideImages.forEach(slideImage => {
  slideImage.addEventListener('touchstart', handleTouchStart, false); 
  slideImage.addEventListener('touchmove', handleTouchMove, false);
});
const xDown = null;                                                        
const yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    // yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown /*|| ! yDown */) {
        return;
    }

    let xUp = evt.touches[0].clientX;                                    
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
          showSlides(slideIndex += -1); 
        } else {
          showSlides(slideIndex += 1);
        }                       
    // } else {
    //     if ( yDiff > 0 ) {
    //         /* up swipe */ 
    //     } else { 
    //         /* down swipe */
    //     }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};  


// Dot image controls. Check if target element contains specified class name, then assign slideIndex new value.
function currentSlide(event) {
 
  if (event.target.classList.contains('one')) {
    showSlides(slideIndex = 1);

  } else if (event.target.classList.contains('two')) {
    showSlides(slideIndex = 2);

  } else if (event.target.classList.contains('three')) {
    showSlides(slideIndex = 3);

  } else if (event.target.classList.contains('four')) {
    showSlides(slideIndex = 4);

  }
}

// Add click event to each dot
dots.forEach(dot => {
  dot.addEventListener('click', currentSlide);
})

// Depending on the value of slideIndex from previous functions, 
// this function determine which slide image to show and which dot should have the class "active".
function showSlides(n) {
  let i;
 
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += ' active';
}