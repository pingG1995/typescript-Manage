class Person {
    public name:string;
    public age:number;
    constructor(newName:string,newAge:number,private gender:string) {
        this.name=newName;
        this.age=newAge;
        this.gender=gender;
    }
    public callPerson():void {
        console.log(`${this.name},${this.age},${this.gender}`)
    }
    public setGender(newGender:string) {
        this.gender=newGender;
        console.log(this.gender);
    }
}
let p1=new Person('zouping',26,'女');
p1.setGender('不男不女');
// console.log(p1.gender) // 私有成员仅能在类中进行访问,可以在成员函数中进行访问
console.log(p1.age)
p1.callPerson();