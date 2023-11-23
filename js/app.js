document.querySelectorAll('.slider').forEach((n, i) => {
    window[`slider${i + 1}`] = new Swiper(n, {
        freeMode: true,
        centeredSlides: true,
        direction: 'vertical',
        mousewheel: true,
        slidesPerView: 1.75,
        slidesOffsetBefore: -125,
        // breakpoints: {
        //     // when window width is >= 320px
        //     320: {
        //         slidesPerView: 2,
        //         spaceBetween: 20,
        //     },
        //     480: {
        //         slidesPerView: 3,
        //         spaceBetween: 30,
        //     },
        // },
    });
});
bindSwipers(slider1, slider3, slider2, slider4);

document.querySelectorAll('.slider__img').forEach((el) => {
    el.addEventListener('click', (e) => {
        const url = e.target.style.backgroundImage.replace('url("', '').replace('")', '');
        e.stopPropagation();
        picoModal({
            content: `<img src="${url}" alt="modal">`,
            overlayStyles: function (styles) {
                styles.opacity = 0.5;
                return styles;
            }
        }).show();
        
    });
    
})