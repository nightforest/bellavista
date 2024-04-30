import SmoothScroll from 'smooth-scroll/src/js/smooth-scroll/smooth-scroll';
import Gumshoe from 'gumshoejs/src/js/gumshoe/gumshoe'

const scrollToId = () => {
    // const header = document.querySelector('.header');
    const headerHeight = document.querySelector('.header').offsetHeight;

    if(document.querySelector('[data-scroll]')) {
        new SmoothScroll('[data-scroll]', { 
            speed: 100,
            speedAsDuration: true,
            offset: headerHeight,
            updateURL: false,
        });
    }
    
    if(document.querySelector('.menu__link')) {
        new Gumshoe('.menu__link', {
            offset: headerHeight,
            navClass: 'is-active',
        });
    }

    if(document.querySelector('.mobile-nav-menu__link')) {
        new Gumshoe('.mobile-nav-menu__link', {
            offset: headerHeight,
            navClass: 'is-active',
        });
    }
}

export default scrollToId;