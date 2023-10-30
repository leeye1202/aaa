$(document).ready(function () {
    $(".mainmenu>li").mouseover(function () {
        $(".submenu").stop().slideDown(500);
    }).mouseout(function () {
        $(".submenu").stop().slideUp(500);
    });

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 2000,
      });
});