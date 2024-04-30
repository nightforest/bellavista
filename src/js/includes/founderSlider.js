import Swiper, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const founderSlider = () => {
    new Swiper('.founder-slider', {
        modules: [Pagination],
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        // centeredSlides: false,
        autoHeight: true,
        observer: true,
        speed: 700,
        observeParents: true,
        watchOverflow: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

export default founderSlider;