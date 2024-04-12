console.log(window.innerWidth);

if (window.innerWidth >= 1440) {


    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#content",
            start: "20% 90%",
            end: "50% 50%",
            scrub: true,
            //markers:true,

        }
    })

    tl.to(".fanta", {

        top: "105%",
        left: "5%",
        width: "50vh",
    }, 'a1')

    tl.to(".orange-slice", {

        top: "130%",
        left: "20%",

    }, 'a1')

    tl.to(".orange", {

        top: "148%",
        left: "80%",

    }, 'a1')

    var t2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".special",
            start: "0% 90%",
            end: "10% 50%",
            //markers:true,
            scrub: true,


        }
    })

    t2.to(".fanta", {

        top: "180%",
        left: "36.5%",
        width: "55vh"

    }, 'a2')

    t2.to(".orange-slice", {

        top: "200%",
        left: "63%",
        width: "0%",

    }, 'a2')




    var t2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#buy",
            start: "0% 90%",
            end: "40% 50%",
            //markers:true,
            scrub: true,


        }
    })

    t2.to(".fanta", {

        top: "290%",
        left: "39%",
        width: "45vh"

    }, 'a2')

    t2.to(".orange-slice", {

        top: "280%",
        left: "43%",
        width: "15%",

    }, 'a2')

    t2.from("#coke", {
        rotate: "-90deg",
        left: "-100%",
    }, 'a2')


    t2.from("#pepsi", {
        rotate: "90deg",
        left: "100%",
    }, 'a2')




    var t3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".brands",
            start: "50% 50%",
            end: "100% 50%",
            //markers:true,
            scrub: 2,
            pin: true,


        }
    })

    t3.to(".top", {

        top: "-50%",

    }, 'a3')


    t3.to(".bottom", {

        bottom: "-50%",
    }, 'a3')

}




else if (window.innerWidth >= 1000 && window.innerWidth >780) {


    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#content",
            start: "20% 90%",
            end: "50% 50%",
            scrub: true,
            //markers:true,

        }
    })

    tl.to(".fanta", {

        top: "105%",
        left: "5%",
        width: "50vh",
    }, 'a1')

    tl.to(".orange-slice", {

        top: "130%",
        left: "30%",

    }, 'a1')

    tl.to(".orange", {

        top: "162%",
        left: "80%",

    }, 'a1')

    var t2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".special",
            start: "0% 90%",
            end: "10% 50%",
            //markers:true,
            scrub: true,


        }
    })

    t2.to(".fanta", {

        top: "180%",
        left: "30.5%",
        width: "55vh"

    }, 'a2')

    t2.to(".orange-slice", {

        top: "200%",
        left: "63%",
        width: "0%",

    }, 'a2')




    var t2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#buy",
            start: "0% 90%",
            end: "30% 50%",
            //markers:true,
            scrub: true,


        }
    })

    t2.to(".fanta", {

        top: "287%",
        left: "53%",
        width: "45vh"

    }, 'a2')

    t2.to(".orange-slice", {

        top: "280%",
        left: "63%",
        width: "15%",

    }, 'a2')

    t2.from("#coke", {
        rotate: "-90deg",
        left: "-100%",
    }, 'a2')


    t2.from("#pepsi", {
        rotate: "90deg",
        left: "100%",
    }, 'a2')




    var t3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".brands",
            start: "50% 50%",
            end: "100% 50%",
            //markers:true,
            scrub: 2,
            pin: true,


        }
    })

    t3.to(".top", {

        top: "-50%",

    }, 'a3')


    t3.to(".bottom", {

        bottom: "-50%",
    }, 'a3')

}


else if (window.innerWidth <780 && window.innerWidth >450){


    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#content",
            start: "45% 90%",
            end: "50% 50%",
            scrub: true,
            //markers:true,

        }
    })

    tl.to(".fanta", {

        top: "85%",
        left: "0%",
        width: "40vh",
    }, 'a1')

    tl.to(".orange-slice", {

        top: "110%",
        left: "25%",

    }, 'a1')

    tl.to(".orange", {

        top: "142%",
        left: "80%",

    }, 'a1')

    var t2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".special",
            start: "15% 90%",
            end: "10% 50%",
            //markers:true,
            scrub: true,


        }
    })

    t2.to(".fanta", {

        top: "160%",
        left: "27.5%",
        width: "45vh"

    }, 'a2')

    t2.to(".orange-slice", {

        top: "200%",
        left: "63%",
        width: "0%",

    }, 'a2')




    let fanta = document.querySelector("#buy-fanta");
    console.log(fanta);
    let img = fanta.querySelector('img');
    img.src = "images/Fanta.png";


    var t3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".brands",
            start: "50% 50%",
            end: "100% 50%",
            //markers:true,
            scrub: 2,
            pin: true,


        }
    })

    t3.to(".top", {

        top: "-50%",

    }, 'a3')


    t3.to(".bottom", {

        bottom: "-50%",
    }, 'a3')




}
else if ( window.innerWidth <450){

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#content",
            start: "45% 90%",
            end: "45% 50%",
            scrub: true,
            //markers:true,

        }
    })

    tl.to(".fanta", {

        top: "63%",
        left: "60%",
        width: "20vh",
    }, 'a1')

    tl.to(".orange-slice", {

        top: "60%",
        left: "58%",
        width: "10vh",

    }, 'a1')

    tl.to(".orange", {

        top: "130%",
        left: "0%",
        width: "20vh",

    }, 'a1')

    var t2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".special",
            start: "15% 90%",
            end: "10% 50%",
            //markers:true,
            scrub: true,


        }
    })

    t2.to(".fanta", {

        top: "175%",
        left: "16%",
        width: "35vh"

    }, 'a2')

    let fanta = document.querySelector("#buy-fanta");
    console.log(fanta);
    let img = fanta.querySelector('img');
    img.src = "images/Fanta.png";

    var t3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".brands",
            start: "50% 50%",
            end: "100% 50%",
            //markers:true,
            scrub: 2,
            pin: true,


        }
    })

    t3.to(".top", {

        top: "-50%",

    }, 'a3')


    t3.to(".bottom", {

        bottom: "-50%",
    }, 'a3')


}

