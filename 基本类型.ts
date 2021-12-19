"use strict";
console.log('1111');

// boolean
let num:boolean=false;
// num='2';

// string
let str:string='11';
// str=3;

// 不指定类型
let a;
a=23;
a='111';

// 指定了any则等同于js 不建议使用
let b:any='12';
b=11; 

// 数组
let arr:Array<string>=['11','22'];
let number:number[]=[1,2,3];
// arr[1]=11; // 数组内部元素已经指定了类型,不允许修改
// window.alert(number);


// 元祖
let colors:[number,number|string]=[11,22 ];

//枚举
// 数字枚举
enum Color{
    Black=2,
    Red,
    Green
}
window.alert(Color.Red);
// 字符串枚举
enum Direction{
    'left'='LEFT',
    'right'='RIGHT',
    'middle'='MIDDLE'
}
window.alert(Direction.left);


// 函数类型
function returnValue():string{
    return 'hello';
}
function returnNumber():number {
    return 22;
}

function noFunc():void {
    console.log('22');
}
function returnName(name1:string, name2:string) {
    return  name1+name2;
}

// 函数之间能够直接赋值
let newFunc; //相当于直接定义为 let newFunc:any
newFunc=noFunc;

let curFunc:(name1:string,name:string)=> string;
curFunc=returnName; // 只能赋值给同类型
console.log(curFunc('zou','ping'))
curFunc=noFunc; // 参数和返回值不相同不能返回






