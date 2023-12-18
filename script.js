gsap.to("#nav", {
backgroundColor:"black",
    height: "110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers: true,
        start:"top-10%",
        end:"top -10%",
        scrub:1

    }
    
}) 