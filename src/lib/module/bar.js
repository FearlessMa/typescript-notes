"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as foo from './foo';
// import { foo1 } from './foo'
var foo_1 = require("./foo");
// bar.ts
var bar = 'bar';
// 找不到名称“foo1”。你是否指的是“foo”?ts(2552)
// assertType.ts(54, 7): 在此处声明了 "foo"
// bar = foo.foo1;
// bar = foo1;
bar = foo_1.foo1;
console.log('bar: ', bar);
