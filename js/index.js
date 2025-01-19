$(document).ready(function () {
    const sliderObjects = new Swiper('.objects-slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.objects-slider__arrows > .swiper-button-next',
            prevEl: '.objects-slider__arrows > .swiper-button-prev'
        }
    });

    let scrollTop = 0;
    window.addEventListener('scroll', function () {
        if (!$('body').hasClass('noscroll')) {
            scrollTop = window.scrollY;
        }
    });

    $('.header__burger-button').on('click', function () {
        const burger = $('.burger');
        const body = $('body');

        if(!$(this).hasClass('active')) {
            burger.addClass('active');
            body.addClass('noscroll');
            body.css('top', `-${scrollTop}px`);
        } else {
            burger.removeClass('active');
            body.removeClass('noscroll');
            window.scroll(0, scrollTop);
        }

        $(this).toggleClass('active');
    });

    $('.form select').select2({
        placeholder: '--Выберите объект--',
        width: 'element'
    });
});