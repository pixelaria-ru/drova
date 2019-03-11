"use strict";

(function () {
  var video = document.getElementsByTagName('video')[0];
  video.playbackRate = 0.5;
})();

(function () {
  var label = document.getElementsByClassName('label__selected')[0];
  var select = label.getElementsByTagName('select')[0];
  var icon = label.getElementsByClassName('icon')[0];
  select.addEventListener('click', function (e) {
    icon.classList.toggle('active');
  });
})();

formOrder();
buttonsForOrder();
"use strict";

function buttonsForOrder() {
  var buttonsOrder = document.getElementsByClassName('button');
  var formOrder = document.getElementById('form-order');
  var price = formOrder.getElementsByTagName('p')[0].getElementsByTagName('span')[0];

  var _loop = function _loop(i, max) {
    buttonsOrder[i].onclick = function (e) {
      e.preventDefault();
    };

    if (buttonsOrder[i].href) {
      buttonsOrder[i].addEventListener('click', function () {
        formOrder.classList.add('fixed');
      });
    } else {
      buttonsOrder[i].addEventListener('click', function () {
        formOrder.classList.add('step-two');
        formOrder.querySelector('.form__order').prepend(formOrder.querySelector('img'));
        buttonsOrder[i].innerHTML = 'Завершить заказ';
      });
    }
  };

  for (var i = 0, max = buttonsOrder.length; i < max; i += 1) {
    _loop(i, max);
  }

  formOrder.querySelector('form').addEventListener('change', function () {
    if (buttonsOrder[1].innerHTML === 'Завершить заказ') {
      buttonsOrder[1].addEventListener('click', function () {
        var xhr = new XMLHttpRequest();
        var masBody = [];
        masBody[0] = encodeURIComponent(formOrder.querySelectorAll('input')[0].value);
        masBody[1] = encodeURIComponent(formOrder.querySelectorAll('input')[1].value);
        masBody[2] = encodeURIComponent(formOrder.querySelectorAll('input')[2].value);
        masBody[3] = encodeURIComponent(formOrder.querySelectorAll('select')[0].value);
        masBody[4] = encodeURIComponent(formOrder.querySelectorAll('input')[3].value);
        masBody[5] = price.innerHTML;
        var body = 'name=' + masBody[0] + '&tel=' + masBody[1] + '&email=' + masBody[2] + '&select=' + masBody[3] + '&num=' + masBody[4] + '&price=' + masBody[5];
        xhr.open('POST', 'send.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(body);

        xhr.onreadystatechange = function () {
          if (xhr.readystate = 4) {
            console.log('succses');
            formOrder.classList.remove('fixed');
            formOrder.classList.remove('step-two');
            formOrder.appendChild(formOrder.querySelector('img'));
            buttonsOrder[1].innerHTML = 'Заказать';
          }
        };
      });
    }
  });
  formOrder.addEventListener('click', function (e) {
    var target = e.target;

    if (target.classList.contains('section--order') && target.classList.contains('fixed')) {
      this.classList.remove('fixed');
      this.classList.remove('step-two');
      formOrder.appendChild(formOrder.querySelector('img'));
      buttonsOrder[1].innerHTML = 'Заказать';
    }
  });
}
"use strict";

function formOrder() {
  var selected = document.getElementsByClassName('label__selected')[0];
  var formOrder = document.getElementsByClassName('form__order')[0];
  var sectionOrder = document.getElementsByClassName('section--order')[0];
  var sectionOrderImg = sectionOrder.getElementsByTagName('img')[0];
  var price = formOrder.getElementsByTagName('p')[0].getElementsByTagName('span')[0];
  var select = selected.getElementsByTagName('select')[0];
  var options = selected.getElementsByTagName('option');
  var num = document.getElementsByClassName('label__num')[0];
  var numInput = num.getElementsByTagName('input')[0];
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
        formOrder.getElementsByTagName('p')[0].getElementsByTagName('span')[1].style.visibility = 'visible';

        if (options[_i].innerHTML === 'Березовые дрова') {
          sectionOrderImg.src = 'images/drova-1.jpg';
        } else if (options[_i].innerHTML === 'Осиновые дрова') {
          sectionOrderImg.src = 'images/drova-2.jpg';
        } else if (options[_i].innerHTML === 'Дрова из ольхи') {
          sectionOrderImg.src = 'images/drova-3.jpg';
        } else if (options[_i].innerHTML === 'Смесь') {
          sectionOrderImg.src = '';
          formOrder.getElementsByTagName('p')[0].getElementsByTagName('span')[1].style.visibility = 'hidden';
          price.innerHTML = 'договорная';
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
}
"use strict";

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
"use strict";

var anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 300,
    framesCount = 20;
anchors.forEach(function (item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function (e) {
    // убираем стандартное поведение
    e.preventDefault(); // для каждого якоря берем соответствующий ему элемент и определяем его координату Y

    var coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top; // запускаем интервал, в котором

    var scroller = setInterval(function () {
      // считаем на сколько скроллить за 1 такт
      var scrollBy = coordY / framesCount; // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто

      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      } // время интервала равняется частному от времени анимации и к-ва кадров

    }, animationTime / framesCount);
  });
});