

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


