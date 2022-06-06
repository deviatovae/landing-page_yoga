$(document).ready(function (){
    $('.challenge__slider').slick({
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 2,
        variableWidth: true,
        infinite: true,
        speed: 500,
        draggable: true,
        slidesToScroll: 2,
    });
    $('.courses__slider').slick({
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        variableWidth: true,
        infinite: true,
        speed: 500,
        draggable: true,
        slidesToScroll: 1,
    });
    $('.practice-w-confidence__slider').slick({
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 4,
        variableWidth: true,
        infinite: true,
        speed: 500,
        draggable: true,
        slidesToScroll: 1,
    });
})
