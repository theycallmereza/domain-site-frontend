$(document).ready(function () {
    // carousel setting
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
        autoplaySpeed: 3000,
    });
    // animation with scroll
    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 200) {
            $('.row-left').addClass('animation-left')
        }
        else {
            $('.row-left').removeClass('animation-left')
        }
    });
    $(window).scroll(function () {
        let position = $(this).scrollTop();
        console.log(position);
        if (position >= 850 ) {
            $('.row-right').addClass('animation-right')
        }
        else {
            $('.row-right').removeClass('animation-right')
        }
    });
});