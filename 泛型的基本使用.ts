function identify<T>(arg:T):T {
    return arg;
}
// 不指定输入类型
console.log(identify('string'));


// 指定了输入类型
console.log(identify<string>('strinf'))

// console.log(identify<string>('11)) //无效

// 在接口中引入泛型
interface Hello{
    <T>(args:T):T;
}

 
let  myIndent:Hello=identify;
console.log(myIndent<string>('strnf'))