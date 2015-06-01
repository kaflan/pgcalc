//Ваш код будет здесь
window.addEventListener('load', function load() {
  var body = document.querySelector('body');
  var buttonQuery;
  var inputQueryAll;
  var divQuery;
  var divAllQuery;
  var clone;
  var i;
  var inputValOne;
  var inputValTwo;
  var inputValToNumOne;
  var inputValToNumTwo;
  var text = '+';
  var res;
  var div = document.createElement('div');
  var input = document.createElement('input');
  var button = document.createElement('button');
  var aside = document.createElement('aside');
  var docFrag = document.createDocumentFragment();
  var nav = document.createElement('nav');
  var p = document.createElement('p');
  p.innerHTML = 'Это не число';
  var createEL = function () {
    body.appendChild(aside);//беремо боді додаємо асайд.
    aside.appendChild(div);//додаємо в айсід дів
    divQuery = document.querySelector('div');
    docFrag.appendChild(input); //додаємо пару фрагментів інпуту
    div.appendChild(docFrag); //в дів кладемо інпут
    clone = div.cloneNode(true); // clone div  із інпутом
    aside.appendChild(clone);//додаємо в айсід дів
    divQuery.appendChild(nav);
    nav.innerHTML = text;
    divAllQuery = document.querySelectorAll('div');// all div to arr and toggle class
    for (i = 0; i < divAllQuery.length; i++) {
      divAllQuery[i].classList.add('error-message');//err mess add to class
      divAllQuery[i].classList.toggle('error-message');
    }
    aside.appendChild(button);
    buttonQuery = document.querySelector('button');
    buttonQuery.innerHTML = 'Посчитать';
  };
  var result;
  var valid;
  createEL();
  //після создння елементи найдуться.
  divQuery = document.querySelector('div');
  divAllQuery = document.querySelectorAll('div');// all div to arr and toggle class
  inputQueryAll = document.querySelectorAll('input');
  buttonQuery = document.querySelector('button');
  clone = div.cloneNode(true);
  var getInputValues = function () {
    inputValOne = (inputQueryAll[0].value);
    inputValToNumOne = +inputValOne;
    inputValTwo = (inputQueryAll[1].value);
    inputValToNumTwo = +inputValTwo;
  }; // береремо із інпута данні перетворюємо на намбер
  result = function () {
    return res = inputValToNumOne + inputValToNumTwo;
  };
  valid = function () {
    getInputValues();
    var navSelector = document.querySelector('nav');
    var isValid = true;
    if (divAllQuery[0].parentNode.contains(p) && divAllQuery[1].parentNode.contains(p)) {
      p.innerHTML  = '';
    }
    if (( isNaN(inputValToNumOne))) {
      divAllQuery[0].classList.add('error-message');
      divAllQuery[0].appendChild(p);
      divAllQuery[0].insertBefore(p, navSelector);
    }
    if (isNaN(inputValToNumTwo)) {
      divAllQuery[1].classList.add('error-message');
      divAllQuery[1].appendChild(p);
      divAllQuery[1].insertBefore(p, navSelector);
    }
    if (!isValid) {
      return;
    }
    divAllQuery[0].classList.remove('error-message');
    divAllQuery[1].classList.remove('error-message');
    div = document.createElement('div');
    body.appendChild(div);
    divAllQuery = document.querySelectorAll('div');
    divAllQuery[2].id = 'result';
    divAllQuery[2].innerHTML = 'Результат: ' + result();
  };
  inputQueryAll[0].addEventListener('keyup', function (event) {
    if (event.keyCode !== 13) return;
    valid();
  });
  inputQueryAll[1].addEventListener('keyup', function (event) {
    if (event.keyCode !== 13) return;
    valid();
  });
  buttonQuery.addEventListener('click', valid);
});