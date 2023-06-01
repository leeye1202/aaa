$(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 2000,
  });

  // $(".left li").eq(0).find("a").addClass("on");
  $(".subMenu > ul").css("opacity", "0");
  $(".left li").hover(
    function () {
      let i = $(this).index();
      //console.log(i);
      $(".subMenu ul").eq(i).css("opacity", "0").animate({ opacity: "1" }, 300);
    },
    function () {
      $(".subMenu ul").css("opacity", "0");
    }
  );
  $(".subMenu ul").hover(
    function () {
      $(this).css("opacity", "1");
    },
    function () {
      $(this).css("opacity", "0");
    }
  );

  $(".left li a").each(function () {
    let currentPage = window.location.href;
    let hr = currentPage.slice(-10);
    console.log(hr);
    if ($(this).attr("href") === hr) {
      $(this).addClass("on");
    }
  });
  //let href = $(this).attr("href"); // href 속성 값 가져오기
  //window.location.href = href;

  $(window).scroll(function () {
    $(".product02").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({ opacity: "1" }, 300);
      }
    });

    $(".product03").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({ opacity: "1" }, 300);
      }
    });

    $(".product04").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({ opacity: "1" }, 300);
      }
    });
  });
});
