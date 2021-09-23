//es6导入
import { flag } from "./aaa.js";
import { height, num1 } from "./aaa.js";
if(flag){
}

console.log(`身高是: `+ height,`数字是：`+ num1);


//全部导入  afuc：别名，代指aaa.js
import * as afuc from './aaa.js'

console.log(afuc.flag);