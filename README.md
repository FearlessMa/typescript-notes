

1. 初始化ts配置，生成tsconfig.json文件。

```shell
tsc --init 
```

2. 使用node运行ts文件，安装ts-node。


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

* 为声明的变量默认为`any`类型

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

* 联合类型（Union Types）表示取值可以为多种类型中的一种。

```ts
//  联合类型
type des = number | string;
let description: des = "desc";
description = 123;

let a: number | boolean = 1;
a = false;
```

## 对象类型——接口

* 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。


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
