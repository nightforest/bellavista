import Swiper, { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

const interestingSlider = () => {
    new Swiper('.interesting-slider', {
        modules: [Scrollbar],
        spaceBetween: 30,
        loop: false,
        centeredSlides: false,
        observer: true,
        speed: 700,
        observeParents: true,
        watchOverflow: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                autoHeight: true,
            },
            992: {
                slidesPerView: 2,
                autoHeight: false,
            },
            1500: {
                slidesPerView: 3,
                autoHeight: false,
            },
        },
    });
}

export default interestingSlider;