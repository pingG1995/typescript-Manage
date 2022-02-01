interface Animal {
    name:string;
    age?:number;
    readonly salary:number;
    [propName:string]:any;
    greet:(name:string)=> void
}

// 传值接口实现对象
function print(dog:Animal):void {
    console.log(dog.name+' '+dog.age)
}

let dog1:Animal={
    name:'agou',
    age:1,
    salary:3000,
    ids:[1,2,3,],
    greet(name) {
        console.log(name)
    }
}
print(dog1);
dog1.greet('1111')