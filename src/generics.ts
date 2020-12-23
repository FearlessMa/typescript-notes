//  未使用泛型：any类型太宽泛

function createArray(length: number, value: any): any[] {
  const res: any[] = [];
  for (let i = 0; i < length; i++) {
    res[i] = value;
  }
  return res;
}

createArray(3, 'x');

// 使用泛型：通过使用泛型，将类型传入管理类型范围

function createArray1<T>(length: number, value: T): Array<T> {
  const res: Array<T> = [];
  for (let i = 0; i < length; i++) {
    res[i] = value;
  }
  return res;
}

createArray1<string>(3, 'x');
createArray1(3, 'x');

// 定义泛型的时候，可以一次定义多个类型参数：

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]

// 泛型约束 ： 泛型的上下限

interface Lengthwise {
  length: number;
}

// 设置上限Lengthwise，泛型类型T必须是Lengthwise的子类
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}


// 泛型接口

interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}

let createArray2: CreateArrayFunc;
createArray2 = function <T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray2(3, 'x'); // ['x', 'x', 'x']

// 
interface CreateArrayFunc1<T> {
  (length: number, value: T): Array<T>;
}

let createArray3: CreateArrayFunc1<any>;
createArray3 = function <T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray3(3, 'x'); // ['x', 'x', 'x']


// 泛型类

class GenericNumber<T> {
  zeroValue: T | undefined;
  add: ((x: T, y: T) => T) | undefined;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };