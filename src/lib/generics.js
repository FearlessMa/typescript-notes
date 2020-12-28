"use strict";
//  未使用泛型：any类型太宽泛
function createArray(length, value) {
    var res = [];
    for (var i = 0; i < length; i++) {
        res[i] = value;
    }
    return res;
}
createArray(3, 'x');
// 使用泛型：通过使用泛型，将类型传入管理类型范围
function createArray1(length, value) {
    var res = [];
    for (var i = 0; i < length; i++) {
        res[i] = value;
    }
    return res;
}
createArray1(3, 'x');
createArray1(3, 'x');
// 定义泛型的时候，可以一次定义多个类型参数：
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([7, 'seven']); // ['seven', 7]
// 设置上限Lengthwise，泛型类型T必须是Lengthwise的子类
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
var createArray2;
createArray2 = function (length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
createArray2(3, 'x'); // ['x', 'x', 'x']
var createArray3;
createArray3 = function (length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
createArray3(3, 'x'); // ['x', 'x', 'x']
// 泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
