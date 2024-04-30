const headerScroll = () => {    
    const header = document.querySelector('.header');

    if (window.scrollY > 0) {
        header?.classList.add('is-scroll');
    } else {
        header?.classList.remove('is-scroll');
    }

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header?.classList.add('is-scroll');
        } else {
            header?.classList.remove('is-scroll');
        }
    });
}

export default headerScroll;