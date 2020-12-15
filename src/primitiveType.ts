
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

anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');


//  推论类型

let num7 = "seven";
// 不能将类型“number”分配给类型“string”。ts(2322)
// num7 = 7;


//  联合类型

