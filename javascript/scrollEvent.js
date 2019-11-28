const formDownload = document.querySelector('.download');
const navBarScroll = document.querySelector('nav');
const body = document.body;
/** For sektion 2-4 text animation **/
const textContents = document.querySelectorAll('.textContent');
const textContentsArry = [].slice.call(textContents);
 /** the diffrent secctions text**/
    const textSection2 = textContentsArry[0];
    const textSection3 = textContentsArry[1];
    const textSection4 = textContentsArry[2];
    const textSectionMerch = textContentsArry[3];

  
    window.addEventListener('scroll', ()=>{
        
        /* the size need to be uppdated therfore the variables is
        the event becuse when scrolled the total scrollheight is
        uppdated and can be calculated with scroll event   
        */
        //converting the page to precentage
        let totalScrollHeight = body.scrollHeight - window.innerHeight;
        const scrollToPercent = totalScrollHeight / 100; //  1/100
       
        //just to see the total scroll height in precentage
        //const totalScroll = totalScrollHeight / scrollToPercent; // 100/100
        
        //converting the y scroll position to precentage
        const yOfScroll = (yScroll) => {
            return yScroll / scrollToPercent;
        }
       let scrolling = Math.floor(window.scrollY);
       let scroll = yOfScroll(scrolling);

        /**here can you write what's going to hapen the page.
          the page have been set up to always be 0 -100 like 
          precentag or almost 100.
          so when you scroll and reach you can make things happen
          with an if statment.
             **/
       

        //makes the navbar go upp and down;
        /** from stackoverflow  src = "https://stackoverflow.com/questions/31223341/detecting-scroll-direction" */
       
        if(scroll > 0.3){
            // hide show navbar
            navBarScroll.classList.remove('opacityNav');
            if (this.oldScroll > this.scrollY  || hamburgerIcon.classList.contains('change')) {
                navBarScroll.classList.add('navShow');
                navBarScroll.classList.remove('navHide');
                
            }else{
                navBarScroll.classList.add('navHide');
                navBarScroll.classList.remove('navShow');
            }
            this.oldScroll = this.scrollY;
        
        }else{
            navBarScroll.classList.add('opacityNav');
            navBarScroll.classList.remove('navShow');   
        }
        // download appear/dissipear mobiel
        if(window.innerWidth < 500){
            if(scroll > 42.75 && scroll < 70){
                formDownload.classList.remove('downloadAbsolute');
                formDownload.classList.add('downloadFixed2');
                
                 if(scroll > 42 && scroll< 45.4){
                        formDownload.classList.add('ani');
                 }
            }else{      
                formDownload.classList.add('downloadAbsolute');
                formDownload.classList.remove('downloadFixed2');
                formDownload.classList.remove('ani');
            }
        } 
        // download folder appear/disappear in Desktop
        if (window.innerWidth > 500){
            if (scroll > 44 && scroll < 71.60){
                formDownload.classList.add('downloadFixed')
                formDownload.classList.remove('downloadNone');
                formDownload.classList.remove('animate');
            }else{
                formDownload.classList.remove('downloadFixed2');
                formDownload.classList.remove('downloadFixed');
        
            }
            if( scroll > 71.3){
                formDownload.classList.add('downloadNone');
                formDownload.classList.add('animate');
                formDownload.classList.remove('downloadFixed2');
                
            }

        }     

        /** section 2-4  scrooll Text  animation **/
        
        //section 2 and 4  left animation 
       if(scroll >5 && scroll < 19 ){
            textSection2.classList.add('textContentShow');

       } else if (scroll > 34 && scroll < 58){
           textSection4.classList.add('textContentShow');
        } else{
           textSection2.classList.remove('textContentShow');
           textSection4.classList.remove('textContentShow');

        }

        //section 3 right animation
       if(scroll > 20.5 && scroll < 36.5){
           textSection3.classList.add('textContentShow2')

        }else{
           textSection3.classList.remove('textContentShow2')
        }

        /* Merch sidan*/
        /* 
        if (scroll > 80 && scroll < 36.5) {
            textSectionMerch.classList.add('textContentShow')

        } else {
            textSectionMerch.classList.remove('textContentShow')
        }
 */
    
        // toll for setting scroll event right
        console.log(scroll)
})



    


