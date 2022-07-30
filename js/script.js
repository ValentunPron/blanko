'use strict';

const burger = document.querySelector('.header__burger'),
	  burgerBody = document.querySelector('.menu__body'),
	  burgerList = document.querySelector('.menu__list'),
	  burgerItem = burgerList.querySelector('.menu__item');

burger.addEventListener('click', (event) => {
	burgerBody.classList.toggle('menu__body')
})