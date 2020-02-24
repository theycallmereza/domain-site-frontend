$(document).ready(function () {
    $('.card-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ],
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });
    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 100) {
            $('.row-left').addClass('animation-left')
            $('.row-right').addClass('animation-right')
        }else {
            $('.row-left').removeClass('animation-left')
            $('.row-right').removeClass('animation-right')
        }
    });
});