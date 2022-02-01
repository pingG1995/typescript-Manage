// function operate<T>(args:T):T {
//     return args;
// }

// let mm:string=operate("hello");


// console.log(mm)

class myNameClass<T> {
    name:T[];
    constructor(name:T[]) {
        this.name=name;
        console.log(this.name.length)
        console.log('name,',this.name);
    }
}

let hello=new myNameClass(['1','2']);
