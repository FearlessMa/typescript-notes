
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