$(function () {
  //плавный скролл
  $(".footer__top-btn").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 60
    }, 800);
  });

  $('.popular__slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    draggable: true,
    // responsive: [
    //   {
    //     breakpoint: 1100,
    //     settings: {
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 750,
    //     settings: {
    //       slidesToShow: 2
    //     }
    //   },
    // ]
  })
  // $('.team__slider-prev').on('click', function (e) {
  //   e.preventDefault()
  //   $('.team__slider').slick('slickPrev')
  // })
  // $('.team__slider-next').on('click', function (e) {
  //   e.preventDefault()
  //   $('.team__slider').slick('slickNext')
  // })

  $('.partners__slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    draggable: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2
        }
      },
    ]
  })
  $('.partners__prev').on('click', function (e) {
    e.preventDefault()
    $('.partners__slider').slick('slickPrev')
  })
  $('.partners__next').on('click', function (e) {
    e.preventDefault()
    $('.partners__slider').slick('slickNext')
  })

  $('.comments__slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    draggable: true,
  })
  $('.comments__prev').on('click', function (e) {
    e.preventDefault()
    $('.comments__slider').slick('slickPrev')
  })
  $('.comments__next').on('click', function (e) {
    e.preventDefault()
    $('.comments__slider').slick('slickNext')
  })


  $('.burger-menu, .owerlay, .close').on('click', function (e) {
    e.preventDefault()
    if ($('.header__menu').hasClass('header__menu--open')) {
      $('.header__menu').removeClass('header__menu--open');
      $('.owerlay').removeClass('owerlay--show');
      //$('.burger-menu').removeClass('burger-menu--open');
    }
    else {
      $('.header__menu').addClass('header__menu--open');
      $('.owerlay').addClass('owerlay--show');
      //$('.burger-menu').addClass('burger-menu--open');
    }

  })

})