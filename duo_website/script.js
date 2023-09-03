
function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },

    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}

init();

var cur= document.querySelector("#cursor")
var main= document.querySelector("#main")
document.addEventListener("mousemove",function(details){
    cur.style.left = details.x + 20+  "px"
    cur.style.top = details.y + 20 + "px"
})

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: "#main",
        //markers: true,
        start: "top -1%",
        end: "top -2%",
        scrub: 3,
    }
})

tl.to(".page1 h1", {
    x: -80,
    delay: 1,
}, "anim")

tl.to(".page1 h2", {
    x: 100,
    delay:1,
}, "anim")

tl.to(".page1 video", {
    width: "90%",
    delay:1,
}, "anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: "#main",
        //markers: true,
        start: "top -70%",
        end: "top -100%",
        scrub: 3
    }
})

tl2.to("#main", {
    backgroundColor: "white",
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: "#main",
        //markers: true,
        start: "top -360%",
        end: "top -400%",
        scrub: 3
    }
})

tl3.to("#main",{
    backgroundColor: "#0F0D0D"
})

var boxes= document.querySelectorAll("#box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att= elem.getAttribute("data-image")
        cur.style.width="300px"
        cur.style.height="250px"
        cur.style.borderRadius="0"
        cur.style.backgroundImage= `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor= "none"
        cur.style.width="20px"
        cur.style.height="20px"
        cur.style.borderRadius="50%"
        cur.style.backgroundImage= `none`
    })
})

