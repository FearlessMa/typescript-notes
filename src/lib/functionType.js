"use strict";
//  函数类型
// 普通返回值类型设置
function fn1() {
    console.log('fn1');
}
fn1();
// 参数设置
function add(a, b) {
    return a + b;
}
console.log('add(1,2): ', add(1, 2));
// 可选参数
function joinStr(str1, str2) {
    return str1 + str2;
}
console.log('joinStr("123"): ', joinStr('123'));
console.log('joinStr("123","456"): ', joinStr("123", "456"));
// 默认参数
function defaultParams(str, num) {
    if (str === void 0) { str = "default"; }
    if (num === void 0) { num = 1; }
    console.log('defaultParams: str', str);
    console.log('defaultParams: num', num);
}
defaultParams();
// 函数表达式
// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
var myFn = function (x, y) {
    return x + y;
};
// es6的箭头函数实现
var myTest = function (x, y) { return x + y; };
var myIFn;
myIFn = function (x, y) {
    console.log('myIFn.name: ', myIFn.name);
    return x + y;
};
myIFn(1, 2);
//  剩余参数
function res(a) {
    var list = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        list[_i - 1] = arguments[_i];
    }
    console.log('a: ', a);
    console.log('list: ', list);
}
// 类型“boolean”的参数不能赋给类型“string | number”的参数。ts(2345)
// res('1', 2, 3, '4', true)
res('1', 2, 3, '4');
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else {
        return x.split('').reverse().join('');
    }
}
