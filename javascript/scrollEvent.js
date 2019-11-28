'use strict';

const formDownload = document.querySelector('.download');
const navBarScroll = document.querySelector('nav');
const body = document.body;

// For sektion 2-4 text animation 
const textContents = document.querySelectorAll('.textContent');
const textContentsArry = [].slice.call(textContents);

// the diffrent secctions text
const textSection2 = textContentsArry[0];
const textSection3 = textContentsArry[1];
const textSection4 = textContentsArry[2];


window.addEventListener('scroll', () => {

    /* the size need to be updated therefore the variables is in
    the event because when scrolled the total scrollheight is
    uppdated and can be calculated with scroll event   
    */

    //converting the page to precentage
    let totalScrollHeight = body.scrollHeight - window.innerHeight;
    const scrollToPercent = totalScrollHeight / 100; 

    //converting the y scroll position to precentage
    const yOfScroll = (yScroll) => {
        return yScroll / scrollToPercent;
    }
    let scrolling = Math.floor(window.scrollY);
    let scroll = yOfScroll(scrolling);

    /**here can you write what's going to happen to the page.
      the page have been set up to always be 0-100 like 
      precentag or almost 100.
      so when you scroll and reach you can make things happen
      with an if statment.**/


    //makes the navbar go up and down
    if (scroll > 0.3) {
        // hide or show navbar (from stackoverflow  src = "https://stackoverflow.com/questions/31223341/detecting-scroll-direction")
        navBarScroll.classList.remove('opacityNav');
        if (this.oldScroll > this.scrollY || hamburgerIcon.classList.contains('change')) {
            navBarScroll.classList.add('navShow');
            navBarScroll.classList.remove('navHide');

        } else {
            navBarScroll.classList.add('navHide');
            navBarScroll.classList.remove('navShow');
        }
        this.oldScroll = this.scrollY;

    } else {
        navBarScroll.classList.add('opacityNav');
        navBarScroll.classList.remove('navShow');
    }

    // download appear/disappear in mobile
    if (window.innerWidth < 500) {
        if (scroll > 42.75 && scroll < 71.44) {
            formDownload.classList.remove('downloadAbsolute');
            formDownload.classList.add('downloadFixed2');

            if (scroll > 42 && scroll < 45.4) {
                formDownload.classList.add('ani');
            }
        } else {
            formDownload.classList.add('downloadAbsolute');
            formDownload.classList.remove('downloadFixed2');
            formDownload.classList.remove('ani');
        }
    }

    // download folder appear/disappear in Desktop
    if (window.innerWidth > 500) {
        if (scroll > 44 && scroll < 72.70) {
            formDownload.classList.add('downloadFixed')
            formDownload.classList.remove('downloadNone');
            formDownload.classList.remove('animate');
        } else {
            formDownload.classList.remove('downloadFixed2');
            formDownload.classList.remove('downloadFixed');

        }
        if (scroll > 63) {
            formDownload.classList.add('downloadNone');
            formDownload.classList.add('animate');
            formDownload.classList.remove('downloadFixed2');

        }

    }

    /** section 2-4 Text animation when page is scrolled **/

    //section 2 and 4 left animation 
    if (scroll > 5 && scroll < 19) {
        textSection2.classList.add('textContentShow');

    } else if (scroll > 34 && scroll < 58) {
        textSection4.classList.add('textContentShow');
    } else {
        textSection2.classList.remove('textContentShow');
        textSection4.classList.remove('textContentShow');

    }

    //section 3 right animation
    if (scroll > 20.5 && scroll < 36.5) {
        textSection3.classList.add('textContentShow2')

    } else {
        textSection3.classList.remove('textContentShow2')
    }
})






