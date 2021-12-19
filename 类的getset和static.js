"use strict";
class Test {
    constructor() {
        this._name = 'zouping';
    }
    static calcCircle(value) {
        return value * value * this.PI;
    }
    get get_name() {
        return this._name;
    }
    set set_name(_name) {
        this._name = _name;
        console.log(this._name);
    }
}
// 静态方法定义
Test.PI = 3.141592;
let zouping = new Test();
console.log(zouping.get_name);
zouping.set_name = 'zoudaping';
console.log(Test.PI);
console.log(Test.calcCircle(2));
// console.log(zouping.PI) // 只能被类使用
