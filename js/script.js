$(function () {
    var $slider = $('.slider');
    var $progressBar = $('.progress');
    var $progressBarLabel = $('.slider__label');

    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

        $progressBar
            .css('background-size',  calc + '% 100%')
            .attr('aria-valuenow', calc);

        $progressBarLabel.text(calc + '% completed');
    });

    $slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        dots: true,
        nextArrow: '.blog_right_arr',
        prevArrow: '.blog_left_arr',
        autoplay: true,
        infinity: true,
        fade: true,
    });

});