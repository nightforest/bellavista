import Swiper, { Scrollbar, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

const gallerySlider = () => {
    new Swiper('.gallery-slider', {
        modules: [Scrollbar, FreeMode],
        spaceBetween: 30,
        loop: false,
        centeredSlides: false,
        observer: true,
        speed: 700,
        observeParents: true,
        watchOverflow: true,
        freeMode: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.4,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1500: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
}

export default gallerySlider;