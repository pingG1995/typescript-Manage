class Test {
    private _name:string='zouping';
    // 静态方法定义
    static PI=3.141592;
    private _sound='hihihi';
    static calcCircle(value:number):number{
        return  value*value*this.PI;
    }
    get get_name():string {
        return this._name;
    }
    set set_name(_name:string) {
        this._name=_name;
        console.log(this._name);
    }

    get get_Sound():string{
        return this._sound;
    }
    set set_Sound(sound:string){
        this._sound=sound;
    }


}
let zouping=new Test();

console.log(zouping.get_Sound)
zouping.set_Sound='wow wow';
console.log(zouping.get_Sound)
// console.log('name',zouping._name);

console.log(zouping.get_name);
zouping.set_name='zoudaping';

console.log(Test.PI);
console.log(Test.calcCircle(2));
// console.log(zouping.PI) // 只能被类使用



