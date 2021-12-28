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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation */ \"./src/modules/validation.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('1 january 2022')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n\n//# sourceURL=webpack://timer/./src/index.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector('.menu')\r\n  const menu = document.querySelector('menu')\r\n  const closeBtn = menu.querySelector('.close-btn')\r\n  const menuItems = menu.querySelectorAll('ul>li>a')\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle('active-menu')\r\n  }\r\n\r\n  menuBtn.addEventListener('click', handleMenu)\r\n  closeBtn.addEventListener('click', handleMenu)\r\n  menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://timer/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const buttons = document.querySelectorAll('.popup-btn')\r\n  const modal = document.querySelector('.popup')\r\n  const popupClose = modal.querySelector('.popup-close')\r\n  let offsetWidth\r\n  let open = true\r\n\r\n  const animateOpen = () => {\r\n    let idInterval = requestAnimationFrame(animateOpen)\r\n    if (open) {\r\n      modal.style.display = 'block'\r\n      modal.style.transform = 'translateY(100%)'\r\n      offsetWidth = document.documentElement.offsetWidth\r\n      open = false\r\n    } else if (!open && offsetWidth <= 768) {\r\n      modal.style.transition = 'all 0s'\r\n      modal.style.transform = 'translateY(0)'\r\n      cancelAnimationFrame(idInterval)\r\n      open = true\r\n      console.log(1)\r\n    }  else  if (!open && offsetWidth > 768){\r\n      modal.style.transition = 'all 1s'\r\n      modal.style.transform = 'translateY(0)'\r\n      cancelAnimationFrame(idInterval)\r\n      open = true\r\n    }\r\n  }\r\n\r\n  const animateClose = () => {\r\n    let idInterval = requestAnimationFrame(animateClose)\r\n      modal.style.transform = 'translateY(100%)'\r\n      cancelAnimationFrame(idInterval)\r\n  }\r\n\r\n  // плавная прокрутка\r\n  const scrollUp = () => {\r\n  const links = document.querySelectorAll('a[href*=\"#\"]')\r\n\r\n  for (let link of links) {\r\n    link.addEventListener('click', function (e) {\r\n      e.preventDefault()\r\n      \r\n      const blockID = link.getAttribute('href').substr(1)\r\n      \r\n      document.getElementById(blockID).scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n      })\r\n    })\r\n  }\r\n}\r\n\r\n  buttons.forEach(btn => {\r\n    btn.addEventListener('click', animateOpen)\r\n  })\r\n\r\n  popupClose.addEventListener('click', animateClose)\r\n\r\n  scrollUp()\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\r\n\n\n//# sourceURL=webpack://timer/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const timerHours = document.getElementById('timer-hours')\r\n  const timerMinutes = document.getElementById('timer-minutes')\r\n  const timerSeconds = document.getElementById('timer-seconds')\r\n  let timeId\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime()\r\n    let dateNow = new Date().getTime()\r\n    let timeRemaining = (dateStop - dateNow) / 1000 \r\n    let hours = Math.floor(timeRemaining / 60 / 60)\r\n    let minutes = Math.floor((timeRemaining / 60) % 60)\r\n    let seconds = Math.floor(timeRemaining % 60)\r\n\r\n    return { timeRemaining, hours, minutes, seconds }\r\n  }\r\n\r\n  const addZero = (num) =>  {\r\n  if (num < 10) {\r\n    return num = '0' + num\r\n  } else {\r\n    return num\r\n  }\r\n}\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining()\r\n    if (getTime.timeRemaining > 0) {\r\n      timerHours.textContent = addZero(getTime.hours)\r\n      timerMinutes.textContent = addZero(getTime.minutes)\r\n      timerSeconds.textContent = addZero(getTime.seconds)\r\n    } else {\r\n      timerHours.textContent = '00'\r\n      timerMinutes.textContent = '00'\r\n      timerSeconds.textContent = '00'\r\n      clearInterval(timeId)\r\n    }\r\n  }\r\n  \r\n  timeId = setInterval(updateClock, 1000)\r\n  \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\r\n\n\n//# sourceURL=webpack://timer/./src/modules/timer.js?");

/***/ }),

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n  const textInputAll = document.querySelectorAll('input[type=\"text\"]')\r\n  const emailInputAll = document.querySelectorAll('input[type=\"email\"]')\r\n  const telInputAll = document.querySelectorAll('input[type=\"tel\"]')\r\n\r\n  const regText = /[^а-я \\s \\-]/gi\r\n  const regEmail = /([^\\@ \\- \\_ \\. \\! \\~ \\* \\' \\w]+)/gi\r\n  const regTel = /[^0-9\\( \\) \\-]/gi\r\n\r\n  textInputAll.forEach(text => {\r\n    text.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(regText, '')\r\n    })\r\n  })\r\n\r\n  emailInputAll.forEach(email => {\r\n    email.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(regEmail, '')\r\n    })\r\n  })\r\n\r\n  telInputAll.forEach(tel => {\r\n    tel.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(regTel, '')\r\n    })\r\n  })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack://timer/./src/modules/validation.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;