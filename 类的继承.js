"use strict";
class Dog {
    constructor(name, age) {
        this.mater = 'xiaotang';
        this.sound = 'hihihi';
        this.name = name;
        this.age = age;
    }
    setBark(sound) {
        this.sound = sound;
        console.log(this.name, this.sound);
    }
}
class dog extends Dog {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }
    getBark() {
        this.setBark('yeah yeah');
    }
}
var xiaohei = new dog('xiaohei', 1, 'black');
// console.log(xiaohei.sound)
// xiaohei.setBark
xiaohei.getBark();
console.log(xiaohei.mater);
