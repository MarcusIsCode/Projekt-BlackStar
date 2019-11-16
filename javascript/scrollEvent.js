const formEmail = document.querySelector('.mailForm');
const body = document.body;

    window.addEventListener('scroll', ()=>{
        /* the size need to be uppdated therfore the variables is
        the event becuse when scrolled the total scrollheight is
        uppdated and can be calculated with scroll event   
        */
        //converting the page to precentage
        let totalScrollHeight = body.scrollHeight - window.innerHeight
        const scrollToPercent = totalScrollHeight / 100; //  1/100
        
        //just to see the total scroll height in precentage
        //const totalScroll = totalScrollHeight / scrollToPercent; // 100/100
        
        //converting the y scroll position to precentag
        const yOfScroll = (yScroll) => {
            return yScroll / scrollToPercent;
        }
       let scrolling = Math.floor(window.scrollY);
        let event = yOfScroll(scrolling);

        if(event >10 && event < 20){
            console.log('hello')
        }
        
     console.log(event)
})



    


