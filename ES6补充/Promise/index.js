let fs = require('fs');
const { resolve } = require('path');
//使用node模拟回调地狱：三层回调
/* fs.readFile('./name.txt', 'utf-8', (err, data) => {
   console.log(data);
   if(data){
       fs.readFile(data, 'utf-8', (err, data) => {
           console.log(data);
           fs.readFile(data, 'utf-8', (err, data) => {
               console.log(data);
           })
       })
   }
}) */

/* try{
    fs.readFile('./nam.txt', 'utf-8', (err, data) => {
        if(err){
            console.log(err);
        }
    });
}catch(e){
    console.log(e);
} */

/*
  回调地狱产生的问题
    + 回调地狱难以维护，不便于拓展
    + try...catch 难以捕获异步异常
    + 同步并发(执行)异步代码产生的问题：不知道那个异步代码谁先谁后执行完
*/
new Promise((resolve , reject) => {
    fs.readFile('./name.txt', 'utf-8', (err, data)=>{
        resolve(data);
    })
})
.then(data => {
    console.log(data);
    return new Promise((resolve, reject) => {
        fs.readFile(data, 'utf-8', (err, data)=>{
            resolve(data);
        })
    })
}, err => console.log(err))
.then(data => {
    console.log(data);
    return new Promise((resolve, reject) => {
        fs.readFile(data, 'utf-8', (err, data)=>{
            resolve(data);
        })
    })
}, err => console.log(err))
.then(data => {
    console.log(data);
    return new Promise((resolve, reject) => {
        fs.readFile(data, 'utf-8', (err, data)=>{
            resolve(data);
        })
    })
}, err => console.log(err))