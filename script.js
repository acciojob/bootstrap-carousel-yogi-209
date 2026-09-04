$(document).ready(function () {

    // Initialize carousel
    $('#myCarousel').carousel();

    // Next slide
    $('.right').click(function () {
        $('#myCarousel').carousel('next');
    });

    // Previous slide
    $('.left').click(function () {
        $('#myCarousel').carousel('prev');
    });

});