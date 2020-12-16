
// array

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