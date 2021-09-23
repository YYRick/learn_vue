//小明
var name = '小明';
var age = 22;

function sum(num1, num2){
    return num1 + num2;
}

var flag = true;

if(flag){
    console.log(sum(10, 20));
}


//基于Node使用CommonJS导出
module.exports = {
    flag,
    name,
    age
}