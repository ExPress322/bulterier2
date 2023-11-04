$(document).ready(function(){
    if ($(window).width() <= 768) {
        // слайдер
        $('.memory-slider').slick({
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            adaptiveHeight: true,
            arrows: true,
        });

        var nextButton = $('.memory-slider-next');
        nextButton.on('click', function() {
            $('.memory-slider').slick('slickNext');
        });
    }
});