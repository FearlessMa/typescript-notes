//  类型断言（Type Assertion）可以用来手动指定一个值的类型。
function isFish(animal) {
  // 类型“ICat | IFish”上不存在属性“swim”。
  // 类型“ICat”上不存在属性“swim”。
  // if (typeof animal.swim == 'function') {
  //   return true;
  // }
  // 使用断言
  if (typeof animal.swim == 'function') {
    return true;
  }
  return false;
}
