$(function () {


    $('.map').on('click', function (event) {
        if (event.target.closest('.map-marker')) {

            $('.description-show').addClass('active');
            $('.description-show').find('h5').html(event.target.closest('.map-marker').querySelector('.market__info p:nth-child(1)').innerHTML.trim());
            $('.description-show').find('.description__text p').html(event.target.closest('.map-marker').querySelector('.market__info p:nth-child(2)').innerHTML.trim());
            $('.description-show').find('.description__suptext p').html(event.target.closest('.map-marker').querySelector('.market__info p:nth-child(3)').innerHTML.trim());

        } else {

            $('.description-show').removeClass('active');

        }
    })

});