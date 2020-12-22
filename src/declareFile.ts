


// 声明语句
// 声明全面变量 JQuery 的描述，一个方法 接收string参数 返回 any 
// declare var JQuery: (selector: string) => any;

// 找不到名称“JQuery”。ts(2304)
const eleFoo = JQuery('foo');

// 声明文件
// 通常我们会把声明语句放到一个单独的文件（jQuery.d.ts）中，这就是声明文件：
// 一般来说，ts 会解析项目中所有的 *.ts 文件，当然也包含以 .d.ts 结尾的文件。
// 所以当我们将 jQuery.d.ts 放到项目中时，其他所有 *.ts 文件就都可以获得 jQuery 的类型定义了。

// 第三方声明文件
// 我们可以直接下载下来使用，但是更推荐的是使用 @types 统一管理第三方库的声明文件。
// @types 的使用方式很简单，直接用 npm 安装对应的声明模块即可，以 jQuery 举例：
// npm install @types/jquery --save-dev

// Animal.t.ds 声明后不需要通过 import 引入即可使用
const cat = new Animal('mimi', 2);


// 三斜杠

// 拆分声明文件
// 当我们的全局变量的声明文件太大时，可以通过拆分为多个文件，然后在一个入口文件中将它们一一引入，来提高代码的可维护性。比如 jQuery 的声明文件就是这样的：

// node_modules/@types/jquery/index.d.ts

// /// <reference types="sizzle" />
// /// <reference path="JQueryStatic.d.ts" />
// /// <reference path="JQuery.d.ts" />
// /// <reference path="misc.d.ts" />
// /// <reference path="legacy.d.ts" />

// export = jQuery;
// 其中用到了 types 和 path 两种不同的指令。它们的区别是：types 用于声明对另一个库的依赖，而 path 用于声明对另一个文件的依赖。
// 上例中，sizzle 是与 jquery 平行的另一个库，所以需要使用 types="sizzle" 来声明对它的依赖。
// 而其他的三斜线指令就是将 jquery 的声明拆分到不同的文件中了，然后在这个入口文件中使用 path="foo" 将它们一一引入。
