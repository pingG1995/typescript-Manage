"use strict";
let obj = {
    name: 'zouping',
    age: 26
};
obj = {
    name: 'zouping1',
    age: 22
};
let myName = {
    data: [1, 2, 3],
    myfunc: function (item) {
        return this.data;
    }
};
console.log(myName.myfunc);
// undefined 和  null 类型
let newNUll = null;
console.log(typeof newNUll);
// never
let obj2;
// obj2=11; // d定义成never不能再传值
//1 never可以为throw Error传递参数
function fun2(message) {
    throw new Error(message);
}
// fun2('打印出never')
// 2 死循环
// function  dead(message:string):never {
//     while(true) {
//     }
// }
// 3 把never赋值给其他类型
let t;
t = (() => {
    throw new Error('message');
})();
