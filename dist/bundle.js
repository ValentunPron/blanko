/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/burger.js":
/*!******************************!*\
  !*** ./js/modules/burger.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction burger(parent, parentSelector){\r\n\t$(parent).click((event) => {\r\n\t\t$(`${parent}, ${parentSelector}`).toggleClass('active');\r\n\t\t$('body').toggleClass('lock')\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);\n\n//# sourceURL=webpack://blanko/./js/modules/burger.js?");

/***/ }),

/***/ "./js/modules/scroll.js":
/*!******************************!*\
  !*** ./js/modules/scroll.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction scroll() {\r\n\t$('.landing-button').click(() => {\r\n\t\t$('html, body').animate({\r\n\t\t\tscrollTop: ($('.pages__landing').offset().top) - 100\r\n\t\t}, 400);\r\n\t\tif ($('.header__burger, .header__menu').hasClass('active')) {\r\n\t\t\t$('.header__burger, .header__menu').toggleClass('active');\r\n\t\t\t$('body').toggleClass('lock')\r\n\t\t}\r\n\t});\r\n\t$('.pages-button').click(() => {\r\n\t\t$('html, body').animate({\r\n\t\t\tscrollTop: ($('.pages__other').offset().top) - 100\r\n\t\t}, 400);\r\n\t\tif ($('.header__burger, .header__menu').hasClass('active')) {\r\n\t\t\t$('.header__burger, .header__menu').toggleClass('active');\r\n\t\t\t$('body').toggleClass('lock')\r\n\t\t}\r\n\t});\r\n\t$('.template-button').click(() => {\r\n\t\t$('html, body').animate({\r\n\t\t\tscrollTop: ($('.template').offset().top)  - 50\r\n\t\t}, 400);\r\n\t\tif ($('.header__burger, .header__menu').hasClass('active')) {\r\n\t\t\t$('.header__burger, .header__menu').toggleClass('active');\r\n\t\t\t$('body').toggleClass('lock')\r\n\t\t}\r\n\t});\r\n\t$('.sign-up-button').click(() => {\r\n\t\t$('html, body').animate({\r\n\t\t\tscrollTop: ($('.forms').offset().top) - 50 \r\n\t\t}, 400);\r\n\t\tif ($('.header__burger, .header__menu').hasClass('active')) {\r\n\t\t\t$('.header__burger, .header__menu').toggleClass('active');\r\n\t\t\t$('body').toggleClass('lock')\r\n\t\t}\r\n\t});\r\n\t$('.logo__link').click(() => {\r\n\t\t$('html, body').animate({\r\n\t\t\tscrollTop: 0 \r\n\t\t}, 400);\r\n\t});\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://blanko/./js/modules/scroll.js?");

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction slider() {\r\n\t$('.slider__body').slick({\r\n\t\tdots: true,\r\n\t\tappendDots:$('.slider__dots'),\r\n\t\tinfinite: true,\r\n\t\tautoplay: true,\r\n\t\tautoplaySpeed: 15000,\r\n\t\tpauseOnFocus: false,\r\n\t\tpauseOnHover: false,\r\n\t\tarrows: false,\r\n\t\tspeed: 500,\r\n\t\tfade: true,\r\n\t\tcssEase: 'linear',\r\n\t});\r\n\r\n\tvar activeClass = 'slick-active',\r\n\tariaAttribute = 'aria-hidden';\r\n\t$( '.slider__body' )\r\n\t.on( 'init', function() {\r\n\t\t$( '.slick-dots li:first-of-type' ).addClass( activeClass ).attr( ariaAttribute, false );\r\n\t} )\r\n\t.on( 'afterChange', function( event, slick, currentSlide ) {\r\n\t\tvar $dots = $( '.slick-dots' );\r\n\t\t$( 'li', $dots ).removeClass( activeClass ).attr( ariaAttribute, true );\r\n\t\t$dots.each( function() {\r\n\t\t\t$( 'li', $( this ) ).eq( currentSlide ).addClass( activeClass ).attr( ariaAttribute, false );\r\n\t\t} );\r\n\t} );\r\n\t$( '.slider__body' ).slick();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://blanko/./js/modules/slider.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ \"./js/modules/burger.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./js/modules/slider.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./js/modules/scroll.js\");\n\r\n\r\n\r\n\r\n$(document).ready( () => {\r\n\t(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\t(0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.header__burger', '.header__menu');\r\n\t(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\n\n//# sourceURL=webpack://blanko/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;