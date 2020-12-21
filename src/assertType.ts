//  类型断言（Type Assertion）可以用来手动指定一个值的类型。

// 语法
// 值 as 类型 或 <类型>值

// 类型断言的常见用途有以下几种：
// 将一个联合类型断言为其中一个类型
// 之前提到过，当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型中共有的属性或方法：
// 而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法，比如下例

interface ICat {
  name: string,
  run(): void
}

interface IFish {
  name: string,
  swim(): void
}

function isFish(animal: ICat | IFish): boolean {
  // 类型“ICat | IFish”上不存在属性“swim”。
  // 类型“ICat”上不存在属性“swim”。
  // if (typeof animal.swim == 'function') {
  //   return true;
  // }

  // 使用断言 
  if (typeof (animal as IFish).swim == 'function') {
    return true;
  }

  return false;
}