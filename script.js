gsap.to("#nav", {
backgroundColor:"black",
    height: "110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
       
        start:"top -10%",
        end:"top -10%",
        scrub:1

    }
    
}) 


// cursor animation
let cursorpoint=document.querySelector("#cursor")
let cursorpointblur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function (dets){
    cursorpoint.style.left=dets.x+2+"px"
    cursorpoint.style.top=dets.y-3+"px"
    cursorpointblur.style.left=dets.x-150+"px"
    cursorpointblur.style.top=dets.y-150+"px"

})


const h4all=document.querySelectorAll('#nav h4')

h4all.forEach(function(elem){
   elem.addEventListener("mouseenter", function(){
    cursorpoint.style.scale=2
    cursorpoint.style.border="1px solid #fff"
    cursorpoint.style.backgroundColor="transparent"

   })
   elem.addEventListener("mouseleave", function(){
    cursorpoint.style.scale=1
    cursorpoint.style.border="0px"
    cursorpoint.style.backgroundColor="#4aa6e7 "
    
   })
})



gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})



gsap.from("#aboutus img,#about-us-title ",{

    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us-title",
        scroller:"body",
        
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }
})

gsap.from(".card ",{

    scale:0.8,
    opacity:0,
    duration:1,
  
    scrollTrigger:{
        trigger:".card",
        scroller:"body",

        start:"top 90%",
        end:"top 65%",
        scrub:0.2
    }
})
gsap.from("#backtext ",{

   y:50,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:"#backtext",
        scroller:"body",
        
        start:"top 90%",
        end:"top 10%",
        scrub:0.2
    }
})



gsap.from("#col1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#col1",
        scroller:"body",
        
        start:"top 57%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#col2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#col2",
        scroller:"body",
        
        start:"top 120%",
        end:"top 45%",
        scrub:4
    }
})