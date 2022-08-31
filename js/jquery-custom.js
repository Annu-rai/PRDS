$(document).ready(function () {
    $('#example').DataTable();
});

var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


/**Carousel**/

/*scrolling banner*/

  
 /*scrolling banner*/

    $(".carousel_se_01_carousel").owlCarousel({
      items: 3,
      nav: true,
      loop: true,
      margin: 30,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      smartSpeed: 500,

      mouseDrag: true,
      responsiveClass: true,
      /*navText : ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],*/
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        767: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });


    $('.current-slide .owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      smartSpeed: 500,
      responsive: {
          0: { items: 1, nav: false, },
          768: { items: 1 },
          1000: { items: 1 }
      }
  })

  $('.featured-slide .owl-carousel').owlCarousel({
      loop: true,
      margin: 40,
      nav: true,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      smartSpeed: 500,
      responsive: {
          0: { items: 1 },
          768: { items: 2 },
          1000: { items: 2 }
      }
  })
