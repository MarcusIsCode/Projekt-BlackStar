/*slideindex is what's conntrolls the whole thing
if  it's changed to 2 the carusel starts att number 2 in slides
*/
let slideIndex =1; 


showSlides(slideIndex);

// Next/previous controls,it's called upp on in the carusel.html.
//it's used to add or subtract from slideIndex and used in "onclik"


function plusSlides(n) {
  showSlides(slideIndex += n);
}

const slid = document.getElementsByClassName("mySlides").length
let x = 0;
setInterval (function(){
  x++
  if(x <slid){
    plusSlides(x)
    x = 0;
  }
},5000)

  


// Thumbnail image controls, makes sure that the dots and number on the image is the same
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  
  const slides = document.getElementsByClassName("mySlides"); //to easier acces the id 
  const dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1}
  /* if n > is bigger then slides.lenght then it returns back to the first picture*/
  
  if (n < 1) {slideIndex = slides.length}
  //if n is less then one then i goes upp to 3 in the carusel.
  
  
//the forloops removes the img and changes color dots.
//under the foorloops is the reason they are active and seen.  
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      //if the slider image isn't active so won't it be shown beacuse this says display none.
    
      dots[i].className = dots[i].className.replace(" active", "");
    // this one makes the dots light gray 
  } 
  
  slides[slideIndex-1].style.display = "block"; //this makes the picture vissble.
  dots[slideIndex-1].className += " active";//this makes the dot darkgray to se which is active.

  console.log(n);  

}