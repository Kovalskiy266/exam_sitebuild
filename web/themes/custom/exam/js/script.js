(function ($, Drupal, window, document, undefined) {
    Drupal.behaviors.myBehavior = {
      attach: function (context, settings) {
        $('.region-primary-menu', context).once('myFirstBehavior').each(function () {
          let prevPos = 0;
          $(window).scroll(function () {
            if ($(window).width() < 1140) {
              $(".region-primary-menu").css("top", Math.max(0, 0 - $(this).scrollTop()));
            } else {
              $(".region-primary-menu").css("top", Math.max(0, 100 - $(this).scrollTop()));
            }
            if (500 - $(this).scrollTop() < 0) {
              if (prevPos < $(this).scrollTop() && !$('.menu-button').hasClass('active')) {
                $(".region-primary-menu").css("top", -200)
                if ($(window).width() < 1200) {
                  $(".region-primary-menu").css("top", 0)
                }
              }
            }
            prevPos = $(this).scrollTop();
          });
            $(window).scroll(function () {
              if ($(this).scrollTop() > 1) {
                $('.region-primary-menu').addClass("scroll-fixed-header");
              } else {
                $('.region-primary-menu').removeClass("scroll-fixed-header");
              }
          });

        });
      }
    }
        Drupal.behaviors.mySecondBehavior = {
          attach: function (context, settings) {
            $('#block-burgermenu').once("beh").click(function () {
              $('.path-frontpage').toggleClass('burger-menu');
              $('.menu').toggleClass('burger-menu');
              $('.social-sharing-buttons').toggleClass('fixed-social-sharing-buttons');
            });
          }
        }
    }
)(jQuery, Drupal,  this, this.document);

