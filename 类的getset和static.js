"use strict";
class Test {
    constructor() {
        this._name = 'zouping';
        this._sound = 'hihihi';
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
    get get_Sound() {
        return this._sound;
    }
    set set_Sound(sound) {
        this._sound = sound;
    }
}
// 静态方法定义
Test.PI = 3.141592;
let zouping = new Test();
console.log(zouping.get_Sound);
zouping.set_Sound = 'wow wow';
console.log(zouping.get_Sound);
// console.log('name',zouping._name);
console.log(zouping.get_name);
zouping.set_name = 'zoudaping';
console.log(Test.PI);
console.log(Test.calcCircle(2));
// console.log(zouping.PI) // 只能被类使用
