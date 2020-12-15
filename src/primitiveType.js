/* eslint-disable */
// boolean number string undefined null
var boolean = false;
var boo = Boolean(1);
var number = 1;
var string = 'string';
var undefinedData = undefined;
var nullData = null;
//  Boolean Number String 是构造函数，返回构造函数
var boo1 = new Boolean(1);
// any 任意值
var anyThing = null;
anyThing = 5;
anyThing = 'abc';
// anyThing.setName('Jerry');
// anyThing.setName('Jerry').sayHello();
// anyThing.myName.setFirstName('Cat');
//  推论类型
var num7 = 'seven';
var description = 'desc';
description = 123;
var a = 1;
a = false;
var data = {
  id: 1,
  name: 'data',
  age: 10,
  toString: function () {
    console.log(this.age, this.name);
  },
  getAge: function () {
    return this.age;
  }
};
data.toString();
var props = {
  name: 'p',
  age: 1,
  data: data,
  getAge: data.getAge.bind(data)
};
props.data.toString();
console.log('props.getAge(): ', props.getAge());
