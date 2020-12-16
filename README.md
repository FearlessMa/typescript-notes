
## typescript 配置
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