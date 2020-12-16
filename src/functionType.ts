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
