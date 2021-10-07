$(function () {
    // Blog Slider start here
    $('.blog_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '.blog_left_arr',
        prevArrow: '.blog_right_arr',
        dots: true,
    });
});