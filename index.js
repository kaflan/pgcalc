// Ваш код будет здесь
window.addEventListener('load', function load() {
  'use strict';
  var body = document.querySelector('body');
  var buttonQuery;
  var inputQueryAll;
  var divAllQuery;
  var clone;
  var text = '+';
  var div = document.createElement('div');
  var input = document.createElement('input');
  var button = document.createElement('button');
  var docFrag = document.createDocumentFragment();
  var nav = document.createElement('nav');

  function createEL() {
    docFrag.appendChild(input); //  додаємо пару фрагментів інпуту
    body.appendChild(docFrag); //  в дів кладемо інпут
    body.appendChild(div);
    body.appendChild(nav);
    clone = input.cloneNode(true); // clone div  із інпутом
    body.appendChild(clone); // додаємо в айсід дів
    clone = div.cloneNode(true);
    body.appendChild(clone);
    nav.innerHTML = text;
    divAllQuery = document.querySelectorAll('div'); // all div to arr and toggle class
    body.appendChild(button);
    buttonQuery = document.querySelector('button');
    buttonQuery.innerHTML = 'Посчитать';
  }

  createEL();
  //  після создння елементи найдуться.
  divAllQuery = document.querySelectorAll('div');// all div to arr and toggle class
  inputQueryAll = document.querySelectorAll('input');
  buttonQuery = document.querySelector('button');
  clone = div.cloneNode(true);

  function getInputValue1() {
    return inputQueryAll[0].value;
  } // береремо із інпута данні перетворюємо на намбер
  function getInputValue2() {
    return inputQueryAll[1].value;
  }

  function removeClass1() {
    return divAllQuery[0].classList.remove('error-message');
  }

  function removeClass2() {
    return divAllQuery[1].classList.remove('error-message');
  }

  function valid1() {
    var num = getInputValue1();
    if (num.trim().substring(0, 2) === '0x' || num.trim() === '') {
      return false;
    }
    num = Number(num);
    if (isNaN(num) || !isFinite(num) ) {
      return false;
    }
    removeClass1();
    divAllQuery[0].innerHTML = '';
    return num;
  }

  function valid2() {
    var num = getInputValue2();
    if (num.trim().substring(0, 2) === '0x' || num.trim() === '') {
      return false;
    }
    num = Number(num);
    if (isNaN(num) || !isFinite(num) ) {
      return false;
    }
    removeClass2();
    divAllQuery[1].innerHTML = '';
    return num;
  }

  function result() {
    return valid1() + valid2();
  }

  function validErr1() {
    if (!valid1()) {
      divAllQuery[0].classList.add('error-message');
      divAllQuery[0].innerHTML = 'Это не число';
      return false;
    }
    return true;
  }

  function validErr2() {
    if (!valid2()) {
      divAllQuery[1].classList.add('error-message');
      divAllQuery[1].innerHTML = 'Это не число';
      return false;
    }
    divAllQuery[1].innerHTML = '';
    return true;
  }

  function res() {
    div = document.createElement('div');
    validErr1();
    validErr2();
    body.appendChild(div);
    divAllQuery = document.querySelectorAll('div');
    if (divAllQuery[1].classList.contains('error-message') || divAllQuery[0].classList.contains('error-message')) {
      divAllQuery[2].parentNode.removeChild(divAllQuery[2]);
      return false;
    }
    divAllQuery[2].id = 'result';
    divAllQuery[2].innerHTML = result();
    return true;
  }

  inputQueryAll[0].addEventListener('keyup', function firstInput(event) {
    if (event.keyCode !== 13) return;
    validErr1();
  });
  inputQueryAll[1].addEventListener('keyup', function secondInput(event) {
    if (event.keyCode !== 13) return;
    validErr2();
  });
  buttonQuery.addEventListener('click', res);
});