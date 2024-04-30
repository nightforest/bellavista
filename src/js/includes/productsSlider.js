import Swiper, { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

const productsSlider = () => {
    const breakpoint = window.matchMedia( '(min-width:768px)' );

    let productsSlider;

    const sliderBreakChacker = function() {

        // if larger viewport and multi-row layout needed
        if ( breakpoint.matches === true ) {

            // clean up old instances and inline styles when available
            if ( productsSlider !== undefined ) productsSlider.destroy( true, true );

            // or/and do nothing
            return;

        // else if a small viewport and single column layout needed
        } else if ( breakpoint.matches === false ) {

            // fire small viewport version of swiper
            return productsSlider = new Swiper ('.products-slider', {
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
                    },
                    576: {
                        slidesPerView: 2,
                    },
                },
            });
        }
    };

    if(breakpoint) {
        breakpoint.addListener(sliderBreakChacker);
        sliderBreakChacker();
    }
}

export default productsSlider;
