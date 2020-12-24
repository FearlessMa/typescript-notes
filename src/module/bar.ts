
// import * as foo from './foo';
// import { foo1 } from './foo'
import { foo1 as foo } from './foo';
// bar.ts
let bar: string = 'bar';

// 找不到名称“foo1”。你是否指的是“foo”?ts(2552)
// assertType.ts(54, 7): 在此处声明了 "foo"
// bar = foo.foo1;
// bar = foo1;
bar = foo;
console.log('bar: ', bar);