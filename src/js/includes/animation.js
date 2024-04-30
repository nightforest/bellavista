import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from "smoothscroll-for-websites/SmoothScroll"

const animation = () => {
    gsap.registerPlugin(ScrollTrigger);
    
    SmoothScroll({
        stepSize: 50,
        animationTime: 600,
    });

    const tl = gsap.timeline();

    tl.set(".preloader__img", {
        display: "block",
    });
    tl.from(".preloader__img", 1, {
        opacity: 0,
        ease: "expo.inOut",
    });
    tl.to(".preloader", 1, {
        yPercent: -100,
        ease: "expo.inOut",
    });
    tl.set(".preloader", {
        display: "none",
        onComplete: startScrollTrigger,
    });
    tl.set(".header",{clearProps:"transition"});
	tl.from(".header", 1, {
		opacity: 0,
		yPercent: -100,
		ease: "expo.easeInOut"
	});


    function startScrollTrigger() {
        gsap.utils.toArray('.animation-fade').forEach(function(animatedElement) {
            const delay = animatedElement.getAttribute('data-delay') ? animatedElement.getAttribute('data-delay') : 0;

            ScrollTrigger.create({
                trigger: animatedElement,
                start: "top 85%",
                end: "bottom 10%",
                once: true,
                onEnter: function() {
                    gsap.set(animatedElement, {autoAlpha: 1});
                    gsap.from(animatedElement, 1, {
                        delay: delay,
                        opacity: 0,
                        ease: "back.out"
                    });
                }
            });
        });

        gsap.utils.toArray('.animation-down').forEach(function(animatedElement) {
            const delay = animatedElement.getAttribute('data-delay') ? animatedElement.getAttribute('data-delay') : 0;

            ScrollTrigger.create({
                trigger: animatedElement,
                start: "top 85%",
                end: "bottom 10%",
                once: true,
                onEnter: function() {
                    gsap.set(animatedElement, {autoAlpha: 1});
                    gsap.from(animatedElement, 1, {
                        delay: delay,
                        opacity: 0,
                        y: 30,
                        ease: "back.out"
                    });
                }
            });
        });

        gsap.utils.toArray('.animation-up').forEach(function(animatedElement) {
            const delay = animatedElement.getAttribute('data-delay') ? animatedElement.getAttribute('data-delay') : 0;

            ScrollTrigger.create({
                trigger: animatedElement,
                start: "top 85%",
                end: "bottom 10%",
                once: true,
                onEnter: function() {
                    gsap.set(animatedElement, {autoAlpha: 1});
                    gsap.from(animatedElement, 1, {
                        delay: delay,
                        opacity: 0,
                        y: -30,
                        ease: "back.out"
                    });
                }
            });
        });

        gsap.utils.toArray('.animation-left').forEach(function(animatedElement) {
            const delay = animatedElement.getAttribute('data-delay') ? animatedElement.getAttribute('data-delay') : 0;

            ScrollTrigger.create({
                trigger: animatedElement,
                start: "top 85%",
                end: "bottom 10%",
                once: true,
                onEnter: function() {
                    gsap.set(animatedElement, {autoAlpha: 1});
                    gsap.from(animatedElement, 1, {
                        delay: delay,
                        opacity: 0,
                        x: -70,
                        ease: "back.out"
                    });
                }
            });
        });

        gsap.utils.toArray('.animation-right').forEach(function(animatedElement) {
            const delay = animatedElement.getAttribute('data-delay') ? animatedElement.getAttribute('data-delay') : 0;

            ScrollTrigger.create({
                trigger: animatedElement,
                start: "top 85%",
                end: "bottom 10%",
                once: true,
                onEnter: function() {
                    gsap.set(animatedElement, {autoAlpha: 1});
                    gsap.from(animatedElement, 1, {
                        delay: delay,
                        opacity: 0,
                        x: 70,
                        ease: "back.out"
                    });
                }
            });
        });
    }

    // Foots parallax
    const parallaxSectionAll = document.querySelectorAll('.parallax-section');

    const footBg1All = document.querySelectorAll('.foot-bg--1');
    const footBg2All = document.querySelectorAll('.foot-bg--2');
    const footBg3All = document.querySelectorAll('.foot-bg--3');
    const footBg4All = document.querySelectorAll('.foot-bg--4');
    const footBg5All = document.querySelectorAll('.foot-bg--5');
    const footBg6All = document.querySelectorAll('.foot-bg--6');

    parallaxSectionAll.forEach(item => {
        gsap.to(item.querySelector('.foot-bg--1'), {
            yPercent: 150,
            ease: "none",
            scrollTrigger: {
                trigger: item,
                scrub: true
            }, 
        });

        gsap.to(item.querySelector('.foot-bg--2'), {
            xPercent: 150,
            ease: "none",
            scrollTrigger: {
                trigger: item,
                scrub: true
            }, 
        });

        gsap.to(item.querySelector('.foot-bg--3'), {
            yPercent: -150,
            ease: "none",
            scrollTrigger: {
                trigger: item,
                scrub: true
            }, 
        });

        gsap.to(item.querySelector('.foot-bg--4'), {
            yPercent: 150,
            ease: "none",
            scrollTrigger: {
                trigger: item,
                scrub: true
            }, 
        });

        gsap.to(item.querySelector('.foot-bg--5'), {
            xPercent: -150,
            ease: "none",
            scrollTrigger: {
                trigger: item,
                scrub: true
            }, 
        });

        gsap.to(item.querySelector('.foot-bg--6'), {
            yPercent: -150,
            ease: "none",
            scrollTrigger: {
                trigger: item,
                scrub: true
            }, 
        });
    });
}

export default animation;