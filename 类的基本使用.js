"use strict";
class Person {
    constructor(newName, newAge, gender) {
        this.gender = gender;
        this.name = newName;
        this.age = newAge;
        this.gender = gender;
    }
    callPerson() {
        console.log(`${this.name},${this.age},${this.gender}`);
    }
    setGender(newGender) {
        this.gender = newGender;
        console.log(this.gender);
    }
}
let p1 = new Person('zouping', 26, '女');
p1.setGender('不男不女');
// console.log(p1.gender) // 私有成员仅能在类中进行访问,可以在成员函数中进行访问
console.log(p1.age);
p1.callPerson();
