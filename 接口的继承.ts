interface Car{
    name:string;
    age:number;
    isFemale:boolean;
    printName?:(name:string)=>void;
}
interface flower{
    color:string
}

class xiandai implements Car,flower {
    constructor(public sound:string) {
        this.sound=sound;
    }
    color:string='red';
    name:string='xiandai';
    age:number=11;
    isFemale:boolean=true;
}

class tesla extends xiandai{
    constructor(name:string,public capacity:string) {
        super(name);
        this.capacity=capacity
    }

}

let xiaocai=new tesla('hongkong','90%');
console.log(xiaocai)