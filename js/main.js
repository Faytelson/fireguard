$(document).ready(function () {

   (function () {
      // подключение оверлея с таймаутом
      $('.js-button-click').click(function () {
         $('.js-callback-overlay').fadeIn(300);
         $('body').toggleClass('scroll-lock');
         $('.js-callback-overlay').addClass('disabled');
      });

      $('.js-form-btn').click(function () {
         $('.js-callback-overlay').addClass('disabled');
      });

      $('.js-close-popup').click(function () {
         $('.js-callback-overlay').fadeOut(200);
         $('body').toggleClass('scroll-lock');
      })

      $(window).on('load', function () {
         setTimeout(function () {
            if ($('.js-callback-overlay').hasClass('disabled')) {
               return false
            } else {
               $('.js-callback-overlay').fadeIn(300);
               $('body').toggleClass('scroll-lock');
            }
         }, 40000)
      });
   })();

   (function () {
      // выпадающее меню
      $('.js-menu-btn').click(function () {
         $('.js-burger-line').toggleClass('show');
         $('.js-dropdown-menu').toggleClass('showMenu');
         $('body').toggleClass('lock');
         $('.showMenu').fadeIn(400);
         if (!$('.js-dropdown-menu').hasClass('showMenu')) {
            $('.js-dropdown-menu').fadeOut(400);
         }
      });
   })();

   (function () {
      // слайдер
      const container = $('.js-slider');
      const item = $('.slider-box__item');
      let offset = 0;
      let itemWidth = item.outerWidth(true);

      let numberOfItems = $('.js-slider').children().length;


      let counterCurrent = $('.slider-box__counter-current');
      let counterTotal = $('.slider-box__counter-total');
      let counter = 1;

      counterTotal.text(numberOfItems);
      $('.slider-box__counter-current').text(counter);
      $('.js-next').click(function () {
         offset = offset + itemWidth;
         if (offset >= numberOfItems * itemWidth) {
            offset = 0;
            counter = 0;
         }
         container.css("left", -offset + 'px');
         counter++;
         $('.slider-box__counter-current').text(counter);
      });

      $('.js-prev').click(function () {
         offset = offset - itemWidth;
         if (offset <= 0) {
            offset = 0;
            counter = 2;
         }
         container.css("left", -offset + 'px');
         counter--;
         $('.slider-box__counter-current').text(counter);
      });
   })();

   (function () {
      // выпадающие окна на инфо
      let elems = document.querySelectorAll('[data-open]');
      for (let elem of elems) {
         elem.addEventListener('click', function () {
            let open = this.dataset.open;
            $('[data-block="' + open + '"]').fadeIn(400);
         })
      }
      let closeElems = document.querySelectorAll('[data-close]');
      for (let closeElem of closeElems) {
         closeElem.addEventListener('click', function () {
            let close = this.dataset.close;
            $('[data-block="' + close + '"]').fadeOut(400);
         })
      }
   })();

   (function () {
      // выпадающие окна на сметы
      let elemsEstimate = document.querySelectorAll('[data-openestimate]');
      for (let elemEstimate of elemsEstimate) {
         elemEstimate.addEventListener('click', function () {
            let openEstimate = this.dataset.openestimate;
            $('[data-blockestimate="' + openEstimate + '"]').fadeIn(400);

            $('body').toggleClass('scroll-disable');
         })
      }
      let closeElemsEstimate = document.querySelectorAll('[data-estimateclose]');
      for (let closeElemEstimate of closeElemsEstimate) {
         closeElemEstimate.addEventListener('click', function () {
            let estimateClose = this.dataset.estimateclose;
            $('[data-blockestimate="' + estimateClose + '"]').fadeOut(400);

            $('body').toggleClass('scroll-disable');
         })
      }
   })();

});