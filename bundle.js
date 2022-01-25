'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _createClass = require('@babel/runtime/helpers/createClass');
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);

var version = "1.0.0";

var foo = function foo() {
  console.log('xxxxxx');
};

function main () {
  console.log('version ' + version);
}
var A = /*#__PURE__*/_createClass__default["default"](function A(param) {
  _classCallCheck__default["default"](this, A);

  this.param = param;
});
foo();

exports.A = A;
exports["default"] = main;
