"use strict";

(function () {
  var video = document.getElementsByTagName('video')[0];
  video.playbackRate = 0.5;
})();

(function () {
  var selected = document.getElementsByClassName('label__selected')[0];
  var formOrder = document.getElementsByClassName('form__order')[0];
  var sectionOrder = document.getElementsByClassName('section--order')[0];
  var sectionOrderImg = sectionOrder.getElementsByTagName('img')[0];
  var price = formOrder.getElementsByTagName('p')[0].getElementsByTagName('span')[0];
  var select = selected.getElementsByTagName('select')[0];
  var options = selected.getElementsByTagName('option');
  var num = document.getElementsByClassName('label__num')[0];
  var numInput = document.getElementsByTagName('input')[0];
  var numPlus = num.getElementsByClassName('plus')[0];
  var numMinus = num.getElementsByClassName('minus')[0];
  var i = 1;
  var selectOption;
  numPlus.addEventListener('click', function () {
    numInput.setAttribute('value', i += 1);
    searchSelected('data-price');
  });
  numMinus.addEventListener('click', function () {
    if (i > 1) {
      numInput.setAttribute('value', i -= 1);
      searchSelected('data-price');
    }
  });
  select.addEventListener('change', function () {
    searchSelected('data-price');

    for (var _i = 0, max = options.length; _i < max; _i += 1) {
      if (options[_i].selected) {
        if (options[_i].innerHTML === 'Березовые дрова') {
          sectionOrderImg.src = 'images/drova-1.jpg';
        } else if (options[_i].innerHTML === 'Осиновые дрова') {
          sectionOrderImg.src = 'images/drova-2.jpg';
        } else if (options[_i].innerHTML === 'Дрова из ольхи') {
          sectionOrderImg.src = 'images/drova-3.jpg';
        }
      }
    }
  });

  function searchSelected(atrib) {
    for (var _i2 = 0, max = options.length; _i2 < max; _i2 += 1) {
      if (options[_i2].selected) {
        selectOption = options[_i2].getAttribute(atrib);
        price.innerHTML = selectOption *= numInput.getAttribute('value');
      }
    }
  }
})();

(function () {
  var label = document.getElementsByClassName('label__selected')[0];
  var select = label.getElementsByTagName('select')[0];
  var icon = label.getElementsByClassName('icon')[0];
  select.addEventListener('click', function (e) {
    icon.classList.toggle('active');
  });
})();

(function () {
  var hamburger = document.getElementsByClassName('header__hamburger')[0];
  var nav = document.getElementsByClassName('header__navigation')[0];
  var main = document.getElementsByClassName('main')[0];
  hamburger.addEventListener('click', function () {
    this.classList.toggle('active');
    nav.classList.toggle('active');
    main.classList.toggle('active');
  });
})();
'use strict';

;

(function (window, document) {
  'use strict';

  var file = 'svg/sprite.svg',
      revision = 1;
  if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) return true;

  var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
      request,
      data,
      insertIT = function insertIT() {
    document.body.insertAdjacentHTML('afterbegin', data);
  },
      insert = function insert() {
    if (document.body) insertIT();else document.addEventListener('DOMContentLoaded', insertIT);
  };

  if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
    data = localStorage.getItem('inlineSVGdata');

    if (data) {
      insert();
      return true;
    }
  }

  try {
    request = new XMLHttpRequest();
    request.open('GET', file, true);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        data = request.responseText;
        insert();

        if (isLocalStorage) {
          localStorage.setItem('inlineSVGdata', data);
          localStorage.setItem('inlineSVGrev', revision);
        }
      }
    };

    request.send();
  } catch (e) {}
})(window, document);