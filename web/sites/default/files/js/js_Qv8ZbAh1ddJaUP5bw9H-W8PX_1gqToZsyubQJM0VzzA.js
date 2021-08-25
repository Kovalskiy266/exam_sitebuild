(function ($, Drupal) {
    Drupal.behaviors.myBehavior = {
      attach: function (context, settings) {
        $('.region-primary-menu', context).once('myFirstBehavior').each(function () {
          let prevPos = 0;
          $(window).scroll(function () {
            if ($(window).width() < 1140) {
              $(".region-primary-menu").css("top", Math.max(0, 0 - $(this).scrollTop()));
            }
            else {
              $(".region-primary-menu").css("top", Math.max(0, 100 - $(this).scrollTop()));
            }
            if (500 - $(this).scrollTop() < 0) {
              if (prevPos < $(this).scrollTop() && !$('.menu-button').hasClass('active')) {
                $(".region-primary-menu").css("top", -200)
                if ($(window).width() < 845) {
                  $(".region-primary-menu").css("top", 0)
                }
                // if ($(window).width() < 1140) { $(".region-primary-menu").css("top", Math.max(0, 100 - $(this).scrollTop()));

              }
            }
            prevPos = $(this).scrollTop();
          });
        });
      }
    }
        Drupal.behaviors.mySecondBehavior = {
          attach: function (context, settings) {
            $('#block-burgermenu').once("beh").click(function () {
              $('body').toggleClass('burger-menu');
              $('html').toggleClass('burger-menu');
              $('.block-menu').toggleClass('burger-menu');
              $('.menu').toggleClass('burger-menu');
              $('.social-sharing-buttons').toggleClass('fixed-social-sharing-buttons');
            });
          }
        }


    }

)(jQuery, Drupal);

// jQuery(window).scroll(function() {
//   var windowScrollPosTop = jQuery(window).scrollTop();
//   if (windowScrollPosTop >= 50) {
//     jQuery(".region-primary-menu").addClass("scroll-header");
//   } else {
//     jQuery(".region-primary-menu").css({"background": "#fff",});
//   }
// })
;
;
