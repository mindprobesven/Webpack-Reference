webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lVK7");


/***/ }),

/***/ "3Di9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = print;
function print(text) {
  console.log(text);
};

/***/ }),

/***/ "lVK7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("M4fF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__print__ = __webpack_require__("3Di9");



function component() {
  var element = document.createElement('div');
  element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['Hello', 'Sven'], ' ');

  var button = document.createElement('button');

  button.innerHTML = 'Click Me';
  button.onclick = __WEBPACK_IMPORTED_MODULE_1__print__["a" /* default */].bind(null, 'Hello Sven');

  element.appendChild(button);
 
  return element;
}

document.body.appendChild(component());

/***/ })

},[0]);