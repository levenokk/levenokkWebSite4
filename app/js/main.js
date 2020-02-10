$(function () {

    AOS.init();

    $('.map').on('click', function (event) {
        if (event.target.closest('.map-marker')) {

            $('.description-show').addClass('active').animate({ 'opacity': 1 }, 200);
            $('.description-show').find('h5').html(event.target.closest('.map-marker').querySelector('.market__info p:nth-child(1)').innerHTML.trim());
            $('.description-show').find('.description__text p').html(event.target.closest('.map-marker').querySelector('.market__info p:nth-child(2)').innerHTML.trim());
            $('.description-show').find('.description__suptext p').html(event.target.closest('.map-marker').querySelector('.market__info p:nth-child(3)').innerHTML.trim());

            let destination = $('.description-show').offset().top;

            $('body, html').animate({ scrollTop: destination }, 500); //1100 - скорость

        } else {

            $('.description-show').animate({ 'opacity': 0 }, 200, function () {
                $('.description-show').removeClass('active');
            });

        }
    });

    $(window).lazyLoadXT();

    $('.mobile__btn').on('click', function () {
        $(this).toggleClass('mobile__btn-active');
        $('.header__nav').toggleClass('header__nav-open');
        $('body').toggleClass("fixed");

    })
    function checkDevice() {

        if (device.ios() || device.ipad() || device.iphone() || device.ipod()) {
            $('[data-device]').css({
                'background-attachment': 'scroll'
            });

        } else {
            $('[data-device]').css({
                'background-attachment': 'fixed'
            });
        };

    }

    checkDevice();

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > $(this).height()) {
            $('.up-arrow').addClass('active');
        } else {
            $('.up-arrow').removeClass('active');
        }

    })

    $('.up-arrow').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })

});