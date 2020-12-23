"use strict";
// array
// 基础用法
var arr = [1, 2, 3];
// 泛型
var arrString = ['1', '2', '3'];
var arrInterface = [1, '2', '2'];
function fn() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log('item: ', item);
    var arg = arguments;
    console.log('arg: ', arg);
}
fn(1, { a: 1 }, 'test');
