"use strict";
//  类型断言（Type Assertion）可以用来手动指定一个值的类型。
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function isFish(animal) {
    // 类型“ICat | IFish”上不存在属性“swim”。
    // 类型“ICat”上不存在属性“swim”。
    // if (typeof animal.swim == 'function') {
    //   return true;
    // }
    // 使用断言 
    if (typeof animal.swim == 'function') {
        return true;
    }
    return false;
}
// 将一个父类断言为更加具体的子类
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.code = 0;
        return _this;
    }
    return ApiError;
}(Error));
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.statusCode = 200;
        return _this;
    }
    return HttpError;
}(Error));
function isApiError(error) {
    if (typeof error.code === 'number') {
        return true;
    }
    return false;
}
// 将任何一个类型断言为 any
var foo = 1;
// foo.length = 1;
// 类型“number”上不存在属性“length”。ts(2339)
// window.foo = 1;
// 类型“Window & typeof globalThis”上不存在属性“foo”。ts(2339)
window.foo = 1;
// 将 any 断言为一个具体的类型
function getCacheData(key) {
    return window.cache[key];
}
var tom = getCacheData('tom');
tom.run();
