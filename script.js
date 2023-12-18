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

document.addEventListener("mousemove",function (dets){
    console.log(dets);
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