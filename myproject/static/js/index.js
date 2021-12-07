

const tl = gsap.timeline()

tl.to('.title1', {opacity:1, ease:"power", duration:1.5, rotation:360})

.from('.box', {opacity:0, duration:3 ,scrollTrigger: {
    trigger: ".title1",
    pin: true,
    markers:true,  // pin the trigger element while active
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "+=500", // end after scrolling 500px beyond the start
    scrub: 1}})