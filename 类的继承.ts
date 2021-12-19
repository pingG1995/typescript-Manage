class Dog {
    readonly mater:string='xiaotang';
    public name:string;
    public age:number;
    public sound:string='hihihi';
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
  protected setBark(sound:string):void {
        this.sound=sound;
        console.log(this.name,this.sound)
    }
}
class dog extends Dog {
    public color:string;
    constructor(name:string,age:number,color:string) {
        super(name,age);
        this.color=color;
    }
    public getBark() {
        this.setBark('yeah yeah');

    }
}
var xiaohei=new dog('xiaohei',1,'black');
// console.log(xiaohei.sound)
// xiaohei.setBark
xiaohei.getBark();
console.log(xiaohei.mater)