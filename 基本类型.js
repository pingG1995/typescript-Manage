"use strict";
console.log('1111');
// boolean
let num = false;
// num='2';
// string
let str = '11';
// str=3;
// 不指定类型
let a;
a = 23;
a = '111';
// 指定了any则等同于js 不建议使用
let b = '12';
b = 11;
// 数组
let arr = ['11', '22'];
let number = [1, 2, 3];
// arr[1]=11; // 数组内部元素已经指定了类型,不允许修改
// window.alert(number);
// 元祖
let colors = [11, 22];
//枚举
// 数字枚举
var Color;
(function (Color) {
    Color[Color["Black"] = 2] = "Black";
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Green"] = 4] = "Green";
})(Color || (Color = {}));
window.alert(Color.Red);
// 字符串枚举
var Direction;
(function (Direction) {
    Direction["left"] = "LEFT";
    Direction["right"] = "RIGHT";
    Direction["middle"] = "MIDDLE";
})(Direction || (Direction = {}));
window.alert(Direction.left);
// 函数类型
function returnValue() {
    return 'hello';
}
function returnNumber() {
    return 22;
}
function noFunc() {
    console.log('22');
}
function returnName(name1, name2) {
    return name1 + name2;
}
// 函数之间能够直接赋值
let newFunc; //相当于直接定义为 let newFunc:any
newFunc = noFunc;
let curFunc;
curFunc = returnName; // 只能赋值给同类型
console.log(curFunc('zou', 'ping'));
curFunc = noFunc; // 参数和返回值不相同不能返回
