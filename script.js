var crsr = document.querySelector("#cursor");
var crsrBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsrBlur.style.left = dets.x - 200 + "px";
    crsrBlur.style.top = dets.y - 200 + "px";
});

var navH4 = document.querySelectorAll(" #nav h4");
navH4.forEach(function(value){
    value.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid rgb(243, 243, 243)";
        crsr.style.backgroundColor = "transparent";
    });
    value.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95c11e";
        crsr.style.backgroundColor = "#95c11e";
    });
});


gsap.to("#nav",{
    backgroundColor: "#000",
    duration:0.5,
    height:"100px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
});

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        // markers: true,
        start: "top -30%",
        end: "top -80%",
        scrub: 2
    }
});

gsap.from("#about-us img, #text-section",{
    y: 100,
    opacity: 0,
    duration:1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 2
    }
});

gsap.from(".cards",{
    scale: 0.8,
    opacity: 0,
    duration:1,
    scrollTrigger: {
        trigger: ".cards",
        scroller: "body",
        // markers: true,
        start: "top 69%",
        end: "top 64%",
        scrub: 2
    }
});

gsap.from("#colun1", {
    y: -25,
    x: -25,
    rotate:210,
    duration:1,
    scrollTrigger:{
        trigger:"#colun1",
        scroller: "body",
        // markers: true,
        start: "top 30%",
        end: "top 25%",
        scrub:2
    }
});

gsap.from("#colun2", {
    y: 25,
    x: 25,
    rotate:30,
    duration:1,
    scrollTrigger:{
        trigger:"#colun2",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 85%",
        scrub:2
    }
});

gsap.from("#cards2-container>h2",{
    y:70,
    opacity:0.9,
    duration:1.4,
    scrollTrigger:{
        trigger: "#cards2-container>h2",
        scroller: "body",
        // markers:true,
        start:"top 75%",
        end: "top 73%",
        scrub:1
    }
});

gsap.from("#cards2-container .cards2 ",{
    x: -100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger: ".cards2",
        scroller: "body",
        // markers:true,
        start:"top 75%",
        end: "top 73%",
        scrub:1
    }
});

gsap.from("#img-sec img", {
    x:-70,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#img-sec img",
        scroller: "body",
        // markers:true,
        start: "top 40%",
        end: "top 35%",
        scrub:1
    }
});

gsap.from("#food-drink-content", {
    x:70,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#food-drink-content",
        scroller: "body",
        // markers:true,
        start: "top 40%",
        end: "top 35%",
        scrub:1
    }
});

