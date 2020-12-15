/* eslint-disable */
// boolean number string undefined null

let boolean: boolean = false;

let boo: boolean = Boolean(1);

let number: number = 1;

let string: string = "string";

let undefinedData: undefined = undefined;

let nullData: null = null;

//  Boolean Number String 是构造函数，返回构造函数

let boo1: object = new Boolean(1);


// any 任意值

let anyThing: any = null;

anyThing = 5;

anyThing = "abc";

// anyThing.setName('Jerry');
// anyThing.setName('Jerry').sayHello();
// anyThing.myName.setFirstName('Cat');


//  推论类型

let num7 = "seven";
// 不能将类型“number”分配给类型“string”。ts(2322)
// num7 = 7;


//  联合类型
type des = number | string;
let description: des = "desc";
description = 123;

let a: number | boolean = 1;
a = false;

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