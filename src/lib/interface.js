"use strict";
// interface
var data = {
    id: 1,
    name: "data",
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
