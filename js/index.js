$(document).ready(function () {
    const sliderObjects = new Swiper('.objects-slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.objects-slider__arrows > .swiper-button-next',
            prevEl: '.objects-slider__arrows > .swiper-button-prev'
        }
    });

    $('.header__burger-button').on('click', function () {
        const burger = $('.burger');
        const body = $('body');

        if(!$(this).hasClass('active')) {
            burger.addClass('active');
            body.addClass('noscroll');
        } else {
            burger.removeClass('active');
            body.removeClass('noscroll');
        }

        $(this).toggleClass('active');
    });
});