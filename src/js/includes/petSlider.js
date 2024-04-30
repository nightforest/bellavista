import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const petSlider = () => {
    new Swiper('.pet-slider', {
        modules: [Navigation],
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        // centeredSlides: false,
        observer: true,
        speed: 700,
        observeParents: true,
        watchOverflow: true,
        navigation: {
            nextEl: '.pet-slider__next',
            prevEl: '.pet-slider__prev',
        },
    });
}

export default petSlider;