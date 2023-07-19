"use strict";

(function ($) {
  $(function () {
    if (!String.prototype.startsWith) {
      String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
      };
    }
    console.log('common.js is ready');

    /* eslint-disable no-lonely-if */
    /* eslint-disable indent */
    /* eslint-disable no-inner-declarations */
    //Определение длинны линии времени
    (function setLength() {
      var curValYear = new Date().getFullYear();
      var lines = Array.from(document.querySelectorAll('.table__time-line'));
      lines.forEach(function (line) {
        var lineValue = line.getAttribute('data-year');
        var years = curValYear - Number(lineValue);
        var lenghtValue = 10 - years;
        line.style.gridColumn = lenghtValue + '/10';
        var text = line.querySelector('.table__text');
        if (years >= 5) {
          text.innerHTML = years + ' лет';
        } else if (years > 1) {
          text.innerHTML = years + ' года';
        } else {
          text.innerHTML = years + ' год';
        }
      });
    })();

    //Анимация элементов хедера
    var animItem = document.querySelector(".table__wrapper");
    if (animItem) {
      var animOnScroll = function animOnScroll() {
        var animItemHeight = animItem.offsetHeight;
        var animItemOffset = offset(animItem).top;
        var animStart = 4;
        var animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) animItemPoint = window.innerHeight - window.innerHeight / animStart;
        if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) removeHidden();
      };
      var offset = function offset(el) {
        var rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
          top: rect.top + scrollTop,
          left: rect.left + scrollLeft
        };
      };
      window.addEventListener('scroll', animOnScroll);
      setTimeout(function () {
        animOnScroll();
      }, 300);
    }
    //adwdadawd
    function removeHidden() {
      var header = document.querySelector('.table__header');
      var main = document.querySelector('.table__main');
      var numbers = Array.from(header.querySelectorAll('.table__number'));
      var items = Array.from(header.querySelectorAll('.table__item'));
      var rows = Array.from(main.querySelectorAll('.table__time-line'));
      var clients = Array.from(main.querySelectorAll('.table__client_hidden'));
      header.classList.remove('table__header_hidden');
      function removeHiddenClass(item, delay) {
        setTimeout(function () {
          item.classList.remove('table__client_hidden');
          item.classList.remove('table__time-line_small');
          item.classList.remove('table__item_hidden');
          item.classList.remove('table__number_hidden');
        }, delay);
      }
      setTimeout(function () {
        items.forEach(function (item, index) {
          var delay = 100 * index; // Задержка в миллисекундах
          removeHiddenClass(item, delay);
        });
      }, 200);
      setTimeout(function () {
        numbers.forEach(function (item, index) {
          var delay = 100 * index; // Задержка в миллисекундах
          removeHiddenClass(item, delay);
        });
      }, 200);
      var clientWidth = window.innerWidth;
      console.log(clientWidth);
      var container;
      if (clientWidth >= 1279) {
        container = document.querySelector('.table__main');
      } else {
        container = document.querySelector('.table__wrapper');
      }
      console.log(container);
      // Функция для обработки события scroll
      setTimeout(function () {
        (function handleScroll() {
          // Получаем позицию контейнера относительно видимой области окна
          var containerTop = container.getBoundingClientRect().top;
          var containerBottom = container.getBoundingClientRect().bottom;
          // Проверяем каждый элемент, чтобы определить, виден ли он
          rows.forEach(function (item, index) {
            var itemTop = item.getBoundingClientRect().top;
            var itemBottom = item.getBoundingClientRect().bottom;
            // Если элемент видим, то удаляем класс 'table__time-line_small'
            if (itemTop >= containerTop && itemBottom <= containerBottom) {
              if (clientWidth >= 1024) {
                if (index <= 8) {
                  var delay = 300 * index; // Задержка в миллисекундах для первых 8
                  removeHiddenClass(item, delay);
                } else {
                  var _delay = 100;
                  removeHiddenClass(item, _delay);
                }
              } else {
                if (index <= 6) {
                  var _delay2 = 300 * index; // Задержка в миллисекундах для первых 8
                  removeHiddenClass(item, _delay2);
                } else {
                  var _delay3 = 100;
                  removeHiddenClass(item, _delay3);
                }
              }
            }
          });
          clients.forEach(function (item, index) {
            var itemTop = item.getBoundingClientRect().top;
            var itemBottom = item.getBoundingClientRect().bottom;
            // Если элемент видим, то удаляем класс 'table__time-line_small'
            if (itemTop >= containerTop && itemBottom <= containerBottom) {
              if (clientWidth >= 1024) {
                if (index <= 8) {
                  var delay = 300 * index; // Задержка в миллисекундах для первых 8
                  removeHiddenClass(item, delay);
                } else {
                  var _delay4 = 100;
                  removeHiddenClass(item, _delay4);
                }
              } else {
                if (index <= 6) {
                  var _delay5 = 300 * index; // Задержка в миллисекундах для первых 8
                  removeHiddenClass(item, _delay5);
                } else {
                  var _delay6 = 100;
                  removeHiddenClass(item, _delay6);
                }
              }
            }
          });
          container.addEventListener('scroll', handleScroll);
        })();
      }, 1500);
    }
  });
})(jQuery);