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