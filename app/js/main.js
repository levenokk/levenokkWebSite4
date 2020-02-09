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

});