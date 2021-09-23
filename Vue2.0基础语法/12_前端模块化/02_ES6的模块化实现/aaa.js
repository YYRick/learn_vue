var name = '小明',
    age = 18,
    flag = true;

function sum(num1, num2){
    return num1 + num2;
}

if(flag){
    console.log(sum(20, 30));
}

//es6导出
//导出方式1
export {
   flag,
   sum
}

//es6导出方式2
export var num1 = 1000;
export var height = 1.88;