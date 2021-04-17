gsap.registerPlugin(ScrollTrigger)

const imagen = document.querySelectorAll('imagen-loca').offsetHeight;
// gsap.to(".izquierda", {
//     x: -50,
//     duration: 3,
//     scrollTrigger: ".izquierda"
// })

let conte = gsap.timeline({
    scrollTrigger: {
        trigger: "#conte",
        pin: true,
        start: "bottom",
        end: "top",
        scrub: 4,
    }
});

let conteprin = gsap.timeline({
    scrollTrigger: {
        trigger: ".conprin",
        pin: true,
        start: "top top",
        end: "bottom",
        scrub: 2,
    }
});

// let contemedio = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".contemedio",
//         pin: true,
//         start: "top top",
//         end: "bottom",
//         scrub: 2,
//     }
// });

conteprin.to(".context", {
    duration: 2,
    x: -600,
    scale: 2,
    ease: "linear",
    force3D: true,
    opacity: 0.9,
    delay: 0.3,
    // stagger: 0.2,
}).from(".context", {
    // duration: 2,
    // x: -600,
    // scale: 2,
    // ease: "bounce",
    // force3D: true,
    // opacity: 0.5,
    // // // // // // delay: 0.2,
    // stagger: 0.2,
}).to(".cometa", {
    duration: 2,
    scale: 1.5,
    ease: "linear",
    force3D: true,
    opacity: 0,
    delay: 0.1,
    // stagger: 0.2,
    transformOrigin: '50% 50%',
}).from(".cometa", {
    // duration: 2,
    // // // // // // scale: .5,
    // ease: "linear",
    // // // // // // force3D: true,
    // opacity: 0.5,
    // delay: 0.2,
    // stagger: 0.2,
    // transformOrigin: '50% 50%',
})

gsap.to(".izquierda", {
    // x: -60,
    duration: 3,
    scrollTrigger: {
        trigger: ".izquierda",
        start: "top bottom",
        end: "top",
        scrub: 2,
        // markers: true,
        toggleClass: "red",
        toggleActions: "restart pause resume complete"
    }
})

gsap.to(".derecha", {
    x: 15,
    duration: 3,
    scrollTrigger: {
        trigger: ".derecha",
        start: "top bottom",
        end: "top",
        scrub: true,
        // markers: true,
        toggleClass: "red",
        toggleActions: "restart pause resume complete"
    }
})

gsap.to(".imagen-loca", {
    x: -800,
    duration: 2,
    ease: "bounce",
    scrollTrigger: {
        trigger: ".imagen-loca",
        start: "top",
        end: "bottom",
        scrub: 2,
        // markers: true,
        // toggleClass: "bg-danger",
        toggleActions: "restart none none none",
        // pin: true,
        // pinSpacing: true
    }
})

gsap.to(".jou", {
    y: -80,
    duration: 3,
    scrollTrigger: {
        trigger: ".jou",
        start: "top 80%",
        end: "top 10%",
        scrub: 4,
        // markers: true,
        // toggleClass: "bg-danger",
        toggleActions: "restart none none none"
    }
})

conte.from(".jouDos", {
    x: 80,
    duration: 4,
    force3D: true,
    autoAlpha: 0,
    ease: "power4",
}).from(".texto1", {
    duration: 8,
    delay: 0.5,
    y: 25,
    autoAlpha: 0,
    ease: 'power4',
})



// gsap.to(".fondo-desaparece", {
//     duration: 10,
//     scrollTrigger: {
//         trigger: ".fondo-desaparece",
//         start: "top 80%",
//         end: "top 30%",
//         scrub: 4,
//         markers: true,
//         toggleClass: "bg-dark",
//         toggleActions: "restart none none none",
//         pin: true,
//         pinSpacing: true
//     }
// })