
## TypeScript 

> 参考
> [深入理解TypeScript](https://jkchao.github.io/typescript-book-chinese/)
> [TypeScript入门教程](https://ts.xcatliu.com/)

> 1.初始化ts配置，生成tsconfig.json文件。

```shell
tsc --init 
```

> 2.使用node运行ts文件，安装ts-node。


## 原始数据类型

```ts
// boolean number string undefined null
let boolean: boolean = false;
let number: number = 1;
let string: string = "string";
let undefinedData: undefined = undefined;
let nullData: null = null;
```


## any 

> 为声明的变量默认为`any`类型

```ts
// any 任意值
// 默认any 类型
let a ;
let anyThing: any = null;
anyThing = 5;
anyThing = "abc";
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');
```

## 推论类型

```ts
//  推论类型
let num7 = "seven";
// 不能将类型“number”分配给类型“string”。ts(2322)
// num7 = 7;
// 等价于 let num7 : string = "seven";
```


## 联合类型

> 联合类型（Union Types）表示取值可以为多种类型中的一种。

```ts
//  联合类型
type des = number | string;
let description: des = "desc";
description = 123;

let a: number | boolean = 1;
a = false;
```

## 对象类型——接口

> 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。


```ts
// interface
// 接口定义函数
interface fun {
  (): any
}

interface IData {
  // 只读属性
  readonly id: number,
  // 基本类型属性
  name: string,
  age: number,
  // 可有可无属性
  description?: string,
  // 函数
  toString(age?: number, name?: string): void,
  // 引用 fun
  getAge: fun
}

// 定义任意属性的接口
interface IProps {
  [name: string]: any
}

const data: IData = {
  id: 1,
  name: "data",
  age: 10,
  toString() {
    console.log(this.age, this.name)
  },
  getAge() {
    return this.age;
  }
}

data.toString();

const props: IProps = {
  name: 'p',
  age: 1,
  data: data,
  getAge: data.getAge.bind(data)
}
props.data.toString();
console.log('props.getAge(): ', props.getAge());
```

## 数组的类型

> 在 TypeScript 中，数组类型有多种定义方式，比较灵活。

```ts
// 基础用法
const arr: number[] = [1, 2, 3];

// 泛型
const arrString: Array<string> = ['1', '2', '3'];

// 接口表示
interface IArrType {
  // 下标 number 值 是联合类型 number | string
  [index: number]: number | string,
}

const arrInterface: IArrType = [1, '2', '2']

// 类数组
interface ILikeArrType {
  [index: number]: any,
  length: number,
  callee: Function
}

function fn(...item: Array<any>): void {
  console.log('item: ', item);
  let arg: ILikeArrType = arguments;
  console.log('arg: ', arg);
}

fn(1, { a: 1 }, 'test')

```


## 函数类型

> 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

```ts
//  函数类型

// 普通返回值类型设置
function fn1(): void {
  console.log('fn1')
}

fn1()

// 参数设置

function add(a: number, b: number): number {
  return a + b;
}
console.log('add(1,2): ', add(1, 2));

// 可选参数

function joinStr(str1: string, str2?: string): string {
  return str1 + str2;
}

console.log('joinStr("123"): ', joinStr('123'));
console.log('joinStr("123","456"): ', joinStr("123", "456"));

// 默认参数

function defaultParams(str: string = "default", num: number = 1): void {
  console.log('defaultParams: str', str);
  console.log('defaultParams: num', num);
}

defaultParams();

// 函数表达式

// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
const myFn: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
}


//  接口定义函数形状
interface IFn {
  (x: number, y: number): number,
  name?: string
}
// es6的箭头函数实现
const myTest: IFn = (x: number, y: number): number => { return x + y }
let myIFn: IFn;
myIFn = function (x: number, y: number): number {
  console.log('myIFn.name: ', myIFn.name);
  return x + y
}

myIFn(1, 2);


//  剩余参数
function res(a: string, ...list: Array<string | number>): void {
  console.log('a: ', a);
  console.log('list: ', list);
}

// 类型“boolean”的参数不能赋给类型“string | number”的参数。ts(2345)
// res('1', 2, 3, '4', true)
res('1', 2, 3, '4')


// 重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else {
    return x.split('').reverse().join('');
  }
}

```


## 断言类型

>  类型断言（Type Assertion）可以用来手动指定一个值的类型。



```ts
// 语法
// 值 as 类型 或 <类型>值

// 类型断言的常见用途有以下几种：
// 将一个联合类型断言为其中一个类型
// 之前提到过，当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型中共有的属性或方法：
// 而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法，比如下例

interface ICat {
  name: string,
  run(): void
}

interface IFish {
  name: string,
  swim(): void
}

function isFish(animal: ICat | IFish): boolean {
  // 类型“ICat | IFish”上不存在属性“swim”。
  // 类型“ICat”上不存在属性“swim”。
  // if (typeof animal.swim == 'function') {
  //   return true;
  // }

  // 使用断言 
  if (typeof (animal as IFish).swim == 'function') {
    return true;
  }

  return false;
}

// 将一个父类断言为更加具体的子类
class ApiError extends Error {
  code: number = 0;
}
class HttpError extends Error {
  statusCode: number = 200;
}

function isApiError(error: Error) {
  if (typeof (error as ApiError).code === 'number') {
    return true;
  }
  return false;
}

// 将任何一个类型断言为 any


const foo: number = 1;
// foo.length = 1;
// 类型“number”上不存在属性“length”。ts(2339)

// window.foo = 1;
// 类型“Window & typeof globalThis”上不存在属性“foo”。ts(2339)
(window as any).foo = 1;

// 将 any 断言为一个具体的类型

function getCacheData(key: string): any {
  return (window as any).cache[key];
}
interface Cat {
  name: string;
  run(): void;
}

const tom = getCacheData('tom') as Cat;
tom.run();

```

## 声明文件

* declare var 声明全局变量
* declare function 声明全局方法
* declare class 声明全局类
* declare enum 声明全局枚举类型
* declare namespace 声明（含有子属性的）全局对象
* interface 和 type 声明全局类型
* export 导出变量
* export namespace 导出（含有子属性的）对象
* export default ES6 默认导出
* export = commonjs 导出模块
* export as namespace UMD 库声明全局变量
* declare global 扩展全局变量
* declare module 扩展模块
* /// <reference /> 三斜线指令

> [TypeScript入门教程——声明文件](https://ts.xcatliu.com/basics/declaration-files.html)


```ts

// 声明语句
// 声明全面变量 JQuery 的描述，一个方法 接收string参数 返回 any 
// declare var JQuery: (selector: string) => any;
// 找不到名称“JQuery”。ts(2304)
const eleFoo = JQuery('foo');

// 声明文件
// 通常我们会把声明语句放到一个单独的文件（jQuery.d.ts）中，这就是声明文件：
// 一般来说，ts 会解析项目中所有的 *.ts 文件，当然也包含以 .d.ts 结尾的文件。
// 所以当我们将 jQuery.d.ts 放到项目中时，其他所有 *.ts 文件就都可以获得 jQuery 的类型定义了。

// 第三方声明文件
// 我们可以直接下载下来使用，但是更推荐的是使用 @types 统一管理第三方库的声明文件。
// @types 的使用方式很简单，直接用 npm 安装对应的声明模块即可，以 jQuery 举例：
// npm install @types/jquery --save-dev

// Animal.t.ds 声明后不需要通过 import 引入即可使用
const cat = new Animal('mimi', 2);


// 三斜杠

// 拆分声明文件
// 当我们的全局变量的声明文件太大时，可以通过拆分为多个文件，然后在一个入口文件中将它们一一引入，来提高代码的可维护性。比如 jQuery 的声明文件就是这样的：

// node_modules/@types/jquery/index.d.ts

/// <reference types="sizzle" />
/// <reference path="JQueryStatic.d.ts" />
/// <reference path="JQuery.d.ts" />
/// <reference path="misc.d.ts" />
/// <reference path="legacy.d.ts" />

export = jQuery;
// 其中用到了 types 和 path 两种不同的指令。它们的区别是：types 用于声明对另一个库的依赖，而 path 用于声明对另一个文件的依赖。
// 上例中，sizzle 是与 jquery 平行的另一个库，所以需要使用 types="sizzle" 来声明对它的依赖。
// 而其他的三斜线指令就是将 jquery 的声明拆分到不同的文件中了，然后在这个入口文件中使用 path="foo" 将它们一一引入。

```

## 内置对象

* ECMAScript 标准提供的内置对象有：
  * Boolean、Error、Date、RegExp 等。

* DOM 和 BOM 提供的内置对象有：
  * Document、HTMLElement、Event、NodeList 等。

* 用 TypeScript 写 Node.js

  * Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件：
    > npm install @types/node --save-dev

## 类型别名与字符串字面量类型

* 类型别名用来给一个类型起个新名字，使用`type`创建。

```ts
type name = number | string;


```

* 字符串字面量类型同样使用`type`创建。

```ts
type EventName = 'click' | 'change' | 'scroll' | 'select' ;

// event 必须为 EventName 定义的几种类型
function handleEvent(event:EventName){

}
```
## 元组

* 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
* 元组起源于函数编程语言（如 F#），这些语言中会频繁使用元组。
* 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型

```ts
let tom: [string, number] = ['Tom', 25];
tom.push('male');
tom.push(true);
// Argument of type 'true' is not assignable to parameter of type 'string | number'.
```