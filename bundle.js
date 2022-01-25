'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var version = "1.0.0";

const foo = () => {
    console.log('xxxxxx');   
};

function main () {
  console.log('version ' + version);
}

class A {
    constructor(param) {
        this.param = param;
    }
}

foo();

exports.A = A;
exports["default"] = main;
