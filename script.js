gsap.to("#nav", {
backgroundColor:"black",
    height: "110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers: true,
        start:"top -10%",
        end:"top -10%",
        scrub:1

    }
    
}) 


// cursor animation
let cursorpoint=document.querySelector("#cursor")
let cursorpointblur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function (dets){
    cursorpoint.style.left=dets.x+"px"
    cursorpoint.style.top=dets.y+"px"
    cursorpointblur.style.left=dets.x-150+"px"
    cursorpointblur.style.top=dets.y-150+"px"

})



gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})