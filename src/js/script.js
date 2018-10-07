$(document).ready(function () {
    $('.header-navbar').hide();

    $('.header-menu-btn').click(function (e) {
        if (!$('.header-menu-btn')[0].className.includes('active')) {
            doingX($('.header-menu-btn-line'));
            $('.header-menu-btn').addClass('active');
            $('.header-navbar').fadeIn();
        } else {
            doingBurger($('.header-menu-btn-line'));
            $('.header-menu-btn').removeClass('active');
            $('.header-navbar').fadeOut();
        }

    });
    function doingX(lines) {
        $(lines[1]).css({opacity:0});
        $(lines[0]).css({transformOrigin:'top right',transform:'rotate(-45deg) translateY(-0.1rem)', transition:'transform 0.3s'});
        $(lines[2]).css({transformOrigin:'bottom right', transform:'rotate(45deg) translateX(-0.1rem)', transition:'transform 0.3s'});
    }

    function doingBurger(lines) {
        $(lines[1]).css({opacity:1});
        $(lines[0]).css({transformOrigin:'top right',transform:'rotate(0deg)', transition:'transform 0.3s'});
        $(lines[2]).css({transformOrigin:'bottom right', transform:'rotate(0deg)', transition:'transform 0.3s'});
    }
});

