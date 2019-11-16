const formEmail = document.querySelector('.mailForm');
const sectionHeight = document.querySelector('section');
const arrayOfSections = document.querySelectorAll('section')

console.log(arrayOfSections)
arrayOfSections.forEach(section => {
        let h = section.offsetTop
    }); 
    console.log(h)


window.addEventListener('scroll', function () {
    let yHeight = sectionHeight.offsetHeight;
    if(yHeight< window.pageYOffset){
        
        formEmail.style.opacity = '0';
    }else{
        formEmail.style.opacity = '1';
    }
    
    console.log(yHeight)

    console.log(window.pageYOffset)
});