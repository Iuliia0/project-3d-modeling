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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation */ \"./src/modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('15 january 2022')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({containerSlider: '.portfolio-content', itemSlider: '.portfolio-item', containerDot: '.portfolio-dots'})\r\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100)\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({ \r\n  idForms: ['form1', 'form2', 'form3'],\r\n  someElem: [\r\n    {\r\n      type: 'block',\r\n      id: 'total'\r\n    }\r\n  ]})\r\n\n\n//# sourceURL=webpack://timer/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\r\n  const calcBlock = document.querySelector('.calc-block')\r\n  const calcType = document.querySelector('.calc-type')\r\n  const calcSquare = document.querySelector('.calc-square')\r\n  const calcCount = document.querySelector('.calc-count')\r\n  const calcDay = document.querySelector('.calc-day')\r\n  const total = document.getElementById('total')\r\n\r\n  const countCalc = () => {\r\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value\r\n    const calcSquareValue = calcSquare.value\r\n\r\n    let totalValue = 0\r\n    let calcCountValue = 1\r\n    let calcDayValue = 1\r\n\r\n    if (calcCount.value > 1) {\r\n      calcCountValue += (+calcCount.value / 10)\r\n    }\r\n\r\n    if (calcDay.value && calcDay.value < 5) {\r\n      calcDayValue = 2\r\n    } else if (calcDay.value && calcDay.value < 10) {\r\n      calcDayValue = 1.5\r\n    }\r\n    \r\n    if (calcType.value && calcSquare.value) {\r\n      totalValue = Math.round(price * calcSquareValue * calcTypeValue * calcCountValue * calcDayValue)\r\n    } else {\r\n      totalValue = 0\r\n    }\r\n    \r\n    total.textContent = totalValue\r\n    \r\n  }\r\n\r\n  calcBlock.addEventListener('input', (e) => {\r\n    if (e.target === calcType || e.target === calcSquare ||\r\n      e.target === calcCount || e.target === calcDay) {\r\n        countCalc()\r\n      }\r\n  })\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://timer/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\n  const animate = ({timing, draw, duration}) => {\r\n\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n\r\n  });\r\n}\r\n\r\n  \n\n//# sourceURL=webpack://timer/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menu = document.querySelector('menu')\r\n  const body = document.querySelector('body')\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle('active-menu')\r\n  }\r\n\r\n  body.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('close-btn') || e.target.matches('ul>li>a') || e.target.matches('.menu>img')) {\r\n      handleMenu()\r\n    }\r\n    if (menu.classList.contains('active-menu') && !e.target.closest('.active-menu') && !e.target.matches('.menu>img')) {\r\n      handleMenu()\r\n    }\r\n\r\n  })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://timer/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n  const buttons = document.querySelectorAll('.popup-btn')\r\n  const modal = document.querySelector('.popup')\r\n  const modalBlock = document.querySelector('.popup-content')\r\n\r\n  let offsetWidth\r\n\r\n  const animateClose = () => {\r\n      modal.style.display = 'none'\r\n  }\r\n\r\n  // плавная прокрутка\r\n  const scrollUp = () => {\r\n    const links = document.querySelectorAll('a[href*=\"#\"]')\r\n    for (let link of links) {\r\n      if (!link.classList.contains('close-btn')) {\r\n        link.addEventListener('click', function (e) {\r\n          e.preventDefault()\r\n          \r\n          const blockID = link.getAttribute('href').substr(1)\r\n          if (blockID !== '') {\r\n            document.getElementById(blockID).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n            })\r\n          }\r\n        })\r\n      }\r\n\r\n    }\r\n  }\r\n  buttons.forEach(btn => {\r\n    \r\n    modalBlock.style.top = '0'\r\n    btn.addEventListener('click', () => {\r\n      ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n      duration: 1000,\r\n      timing(timeFraction) {\r\n        return timeFraction;\r\n      },\r\n      draw(progress) {\r\n        offsetWidth = document.documentElement.offsetWidth\r\n        if (offsetWidth > 768) {\r\n          modal.style.display = 'block'\r\n          modalBlock.style.top = (20 * progress) +'%'\r\n        } else if (offsetWidth <= 768) {\r\n          modal.style.display = 'block'\r\n          modalBlock.style.top = '200px'\r\n          \r\n        } \r\n      }\r\n      })\r\n    })\r\n\r\n    })\r\n\r\n  modal.addEventListener('click', (e) => {\r\n    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n      animateClose()\r\n    }\r\n  })\r\n\r\n  scrollUp()\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://timer/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ idForms = [], someElem = [] }) => {\r\n  idForms.forEach((idForm) => {\r\n    let form = document.querySelector(`#${idForm}`)\r\n    const statusBlock = document.createElement('div')\r\n    const loadText = 'Загрузка'\r\n    const errorText = 'Ошибка'\r\n    const successText = 'Спасибо! Наш менеджер с Вами свжется'\r\n\r\n    const validate = (list) => {\r\n      let success = true\r\n      return success\r\n    }\r\n\r\n    const sendData = (data) => {\r\n      return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n      method: 'POST',\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        'Content-type': 'application/json',\r\n      }\r\n    }).then(res => res.json())\r\n    }\r\n\r\n    const submitForm = () => {\r\n      const formElements = form.querySelectorAll('input')\r\n      const formData = new FormData(form)\r\n      const formBody = {}\r\n      statusBlock.textContent = loadText\r\n      form.append(statusBlock)\r\n\r\n      formData.forEach((val, key) => {\r\n        formBody[key] = val\r\n      })\r\n\r\n      someElem.forEach(elem => {\r\n        const element = document.getElementById(elem.id)\r\n        console.log(element)\r\n        if (elem.type === 'block') {\r\n          formBody[elem.id] = element.textContent\r\n        } else if (elem.type === 'input') {\r\n          formBody[elem.id] = element.value\r\n          \r\n        }\r\n      })\r\n\r\n      if (validate(formElements)) {\r\n        sendData(formBody).then(data => {\r\n          statusBlock.textContent = successText\r\n\r\n          formElements.forEach(input => {\r\n            input.value = ''\r\n          })\r\n        })\r\n        .catch(error => {\r\n          statusBlock.textContent = errorText\r\n\r\n        })\r\n      } else {\r\n        alert('Данне не валидныы')\r\n      }\r\n    }\r\n    \r\n    try {\r\n      if (!form) {\r\n        throw new Error('Верните форму на место, пожалуйста)')\r\n      }\r\n\r\n      form.addEventListener('submit', (event) => {\r\n        event.preventDefault()\r\n\r\n        submitForm()\r\n      })\r\n    } catch(error) {\r\n      console.log(error.message)\r\n    }\r\n\r\n  })\r\n\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://timer/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = ({containerSlider, itemSlider, containerDot}) => {\r\n  const sliderBlock = document.querySelector(containerSlider)\r\n  const slides = document.querySelectorAll(itemSlider)\r\n  const dotBlock = document.querySelector(containerDot)\r\n\r\n  const arrBlock = [sliderBlock, slides, dotBlock]\r\n  for (let i = 0; i <= arrBlock.length; i++) {\r\n    if (arrBlock[i] === null || arrBlock[i] === 0) {\r\n    return\r\n    }\r\n  }\r\n\r\n  let dots = []\r\n\r\n  const timeInterval = 2000\r\n  let currentSlide = 0\r\n  let interval\r\n\r\n  const addBlock = () => {\r\n    let dot\r\n    for (let i = 1; i <= slides.length; i++) {\r\n      dot = document.createElement('li')\r\n      dot.classList.add('dot')\r\n      dots.push(dot)\r\n      dotBlock.append(dot)\r\n    }\r\n\r\n    dots[0].classList.add('dot-active')\r\n    slides[0].classList.add('portfolio-item-active')\r\n\r\n  }\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass)\r\n  }\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass)\r\n  }\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n    prevSlide(dots, currentSlide, 'dot-active')\r\n\r\n    currentSlide++\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0\r\n    }\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n    nextSlide(dots, currentSlide, 'dot-active')\r\n  }\r\n\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer)\r\n  }\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval)\r\n  }\r\n\r\n  sliderBlock.addEventListener('click', (e) => {\r\n    e.preventDefault()\r\n\r\n    if (!e.target.matches('.dot, .portfolio-btn')) {\r\n      return\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n    prevSlide(dots, currentSlide, 'dot-active')\r\n\r\n    if (e.target.matches('#arrow-right')) {\r\n      currentSlide++\r\n    } else if (e.target.matches('#arrow-left')) {\r\n      currentSlide--\r\n    } else if (e.target.classList.contains('dot')) {\r\n      dots.forEach((dot, index) => {\r\n        if (e.target === dot) {\r\n          currentSlide = index\r\n        }\r\n      })\r\n    }\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0\r\n    }\r\n\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length-1\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n    nextSlide(dots, currentSlide, 'dot-active')\r\n  })\r\n\r\n  sliderBlock.addEventListener('mouseenter', (e) => {\r\n    if (e.target.matches('.dot, .portfolio-btn')) {\r\n      stopSlide()\r\n    }\r\n  }, true)\r\n\r\n  sliderBlock.addEventListener('mouseleave', (e) => {\r\n    if (e.target.matches('.dot, .portfolio-btn')) {\r\n      startSlide(timeInterval)\r\n    }    \r\n  }, true)\r\n\r\n  startSlide(timeInterval)\r\n  addBlock()\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack://timer/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabPanel = document.querySelector('.service-header')\r\n  const tabs = document.querySelectorAll('.service-header-tab')\r\n  const tabsContent = document.querySelectorAll('.service-tab')\r\n\r\n  tabPanel.addEventListener('click', (e) => {\r\n    if (e.target.closest('.service-header-tab')) {\r\n      const tabBtn = e.target.closest('.service-header-tab')\r\n      tabs.forEach((tab, index) => {\r\n        if (tab === tabBtn) {\r\n          tab.classList.add('active')\r\n          tabsContent[index].classList.remove('d-none')\r\n        } else {\r\n          tab.classList.remove('active')\r\n          tabsContent[index].classList.add('d-none')\r\n        }\r\n      })\r\n    }\r\n  })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://timer/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const timerHours = document.getElementById('timer-hours')\r\n  const timerMinutes = document.getElementById('timer-minutes')\r\n  const timerSeconds = document.getElementById('timer-seconds')\r\n  let timeId\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime()\r\n    let dateNow = new Date().getTime()\r\n    let timeRemaining = (dateStop - dateNow) / 1000 \r\n    let hours = Math.floor(timeRemaining / 60 / 60)\r\n    let minutes = Math.floor((timeRemaining / 60) % 60)\r\n    let seconds = Math.floor(timeRemaining % 60)\r\n\r\n    return { timeRemaining, hours, minutes, seconds }\r\n  }\r\n\r\n  const addZero = (num) =>  {\r\n  if (num < 10) {\r\n    return num = '0' + num\r\n  } else {\r\n    return num\r\n  }\r\n}\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining()\r\n    if (getTime.timeRemaining > 0) {\r\n      timerHours.textContent = addZero(getTime.hours)\r\n      timerMinutes.textContent = addZero(getTime.minutes)\r\n      timerSeconds.textContent = addZero(getTime.seconds)\r\n    } else {\r\n      timerHours.textContent = '00'\r\n      timerMinutes.textContent = '00'\r\n      timerSeconds.textContent = '00'\r\n      clearInterval(timeId)\r\n    }\r\n  }\r\n  updateClock()\r\n  timeId = setInterval(updateClock, 1000)\r\n  \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\r\n\n\n//# sourceURL=webpack://timer/./src/modules/timer.js?");

/***/ }),

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n  const calcBlock = document.querySelector('.calc-block')\r\n  const inputCalcBlock = calcBlock.querySelectorAll('input[type=\"text\"]')\r\n  const inputMessage = document.querySelector('input[name=\"user_message\"]')\r\n\r\n  const regText = /[^а-я \\s \\-]/gi\r\n  const regMessage = /[^а-я0-9 \\s\\.\\,\\:\\;\\'\\\"\\-]/gi\r\n  const regEmail = /([^\\@  \\_ \\. \\! \\~ \\* \\' \\w \\-]+)/gi\r\n  const regTel = /([\\+7|7|8])[(]?(\\d{3})[)]?(\\d{3})[-]?(\\d{2})[-]?(\\d{2})/g;\r\n  const regCalcBlock = /^[0-9]+/g\r\n  \r\n  inputCalcBlock.forEach(input => {\r\n    input.type = ''\r\n    input.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.match(regCalcBlock, '')\r\n    })\r\n  })\r\n\r\n  const textInputAll = document.querySelectorAll('input[type=\"text\"]')\r\n  const emailInputAll = document.querySelectorAll('input[type=\"email\"]')\r\n  const telInputAll = document.querySelectorAll('input[type=\"tel\"]')\r\n\r\n  textInputAll.forEach(text => {\r\n    text.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(regText, '')\r\n    })\r\n  })\r\n\r\n  emailInputAll.forEach(email => {\r\n    email.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(regEmail, '')\r\n    })\r\n  })\r\n\r\n  telInputAll.forEach(tel => {\r\n    tel.addEventListener('blur', (e) => {\r\n      if(regTel.test(e.target.value)) {\r\n        tel.value = e.target.value\r\n      } else {\r\n        tel.value = e.target.value.replace(/[а-яa-z \\ё \\Ё \\@  \\_ \\. \\! \\~ \\* \\' \\: \\; \\\" \\# \\№ \\^ \\&]+/g, '').replace(/\\++/g, '+').replace(/^\\d\\(\\)\\-\\+/g, '').replace(/^[\\-\\s]+/gm, '').replace(/[\\-\\s]+$/gm, '')\r\n      }\r\n    })\r\n  })\r\n\r\n  inputMessage.addEventListener('input', (e) => {\r\n    e.target.value = e.target.value.replace(regMessage, '')\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack://timer/./src/modules/validation.js?");

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