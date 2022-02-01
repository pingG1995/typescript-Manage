"use strict";
function identify(arg) {
    return arg;
}
// 不指定输入类型
console.log(identify('string'));
// 指定了输入类型
console.log(identify('strinf'));
let myIndent = identify;
console.log(myIndent('strnf'));
