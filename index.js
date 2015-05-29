//Ваш код будет здесь
window.addEventListener('load', function load() {
  var body = document.querySelector('body');
  var pQuery;
  var buttonQuery;
  var inputQuery;
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
  var inputVal;
  var div = document.createElement('div');
  var input = document.createElement('input');
  var button = document.createElement('button');
  var aside = document.createElement('aside');
  var docFrag = document.createDocumentFragment();
  var p = document.createElement('p');
  var createEL = function () {
    body.appendChild(aside);//беремо боді додаємо асайд.
    aside.appendChild(div);//додаємо в айсід дів
    divQuery = document.querySelector('div');
    docFrag.appendChild(input); //додаємо пару фрагментів інпуту
    div.appendChild(docFrag); //в дів кладемо інпут
    clone = div.cloneNode(true); // clone div  із інпутом
    aside.appendChild(clone);//додаємо в айсід дів
    docFrag.appendChild(p);
    divQuery.appendChild(docFrag);
    pQuery = document.querySelector('p');// вибираємо Р
    pQuery.textContent = text;
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
  pQuery = document.querySelector('p');
  divAllQuery = document.querySelectorAll('div');// all div to arr and toggle class
  inputQuery = document.querySelector('input');
  inputQueryAll = document.querySelectorAll('input');
  buttonQuery = document.querySelector('button');
  clone = div.cloneNode(true);
  inputVal = function () {
    inputValOne = (inputQueryAll[0].value);
    inputValToNumOne = +inputValOne;
    inputValTwo = (inputQueryAll[1].value);
    inputValToNumTwo = +inputValTwo;
  }; // береремо із інпута данні перетворюємо на намбер
  result = function () {
    return res = inputValToNumOne + inputValToNumTwo;
  };
  valid = function () {
    inputVal();
    console.log(inputValToNumOne);
    if (( isNaN(inputValToNumOne)) || isNaN(inputValToNumTwo) ) {
      console.log(inputValToNumOne);
      for (i = 0; i < divAllQuery.length; i++) {
        divAllQuery[i].classList.add('error-message');
        divAllQuery[i].appendChild(p);
        clone = p.cloneNode(true);
        divAllQuery[0].appendChild(clone);
        p.innerHTML = 'Это не число';
      }
    } else {
      div = document.createElement('div');
      body.appendChild(div);
      divAllQuery = document.querySelectorAll('div');
      divAllQuery[2].id = 'result';
      divAllQuery[2].innerHTML = 'Результат: ' + result();
    }
  };
  inputQuery.addEventListener('keyup', function (event) {
    if (event.keyCode !== 13) return;
    valid();
  });
  buttonQuery.addEventListener('click', valid);
});