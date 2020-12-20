let a = 'xiao';
let b = "xiao";
let c = `${a} + ${b}`;

console.log(c);

let bHappy = true;

const oStudent = {};

const oArray = [];



// var/let/const
var strName = 'xiao';
window.strName = 'xiaojichao';
var strName;
strName = 1;
strName = true;
//var
//1.声明后再声明，修改值类型
//2.要提升。

// let
// 1.不能重复声明；
// 2.不提升
// 3.值可以修改


let strName1 = 'xiaojichao';
// let strName1 = 'xiao';
strName1 = 'xiao';

// const
//1.不能重复声明;
//2.不能提升；
//3.值不能修改
// 4.变量声明的同时，必须初始化
const str;

const strName2 = 'xiaojichao';
strName2 = 'xiao';

const oStudent = {
    name: 'xiao',
    age: 49,
};

oStudent.name = 'xiaojichao';

// 数据类型：
/*
    1.原始类型：
        1) String
        2) Number
        3) Boolean
        4) Undefined
        5) null
        6) Symbol
        7) bigInt
    2.对象类型

    typeof 判断数据类型
    instanceof 判断对象的类型
*/

// 什么时候会出现undefined
// 1. 变量声明了，但是还没有给它赋值
// var/let

let b;   // var
console.log(b);  // undefined


// 调用函数，但是参数没有赋值，那么该参数就是undifined
function abc(a) {
    return a;
}

console.log(abc());  // undefined

//  一个函数没有return，那么默认返回的值就是undefined
function  abc1(a) {
    console.log(a);
}

let a = abc1(1);
console.log(a);

// 对象的属性如果没有赋值，那么该属性的值就是undefined
// 访问对象不存在的属性
const oStudent = {
    name: 'xiaojichao',
};

console.log(oStudent.age);   // undefined

// 对象运算符
// in / instanceof / delete
const oStudent = {
    name: 'xiaojichao',
    age: 49,
};

console.log('name' in oStudent);
console.log('toString()' in oStudent);
delete oStudent.age;
console.log(oStudent.age);   // undefined


function getUserName() {};
console.log(getUserName instanceof Function);

/*
for ...in

for...of
*/


/*
    解构
*/
const oArray = [1,2,3];
let a = oArray[0];
let b = oArray[1];
let c = oArray[2];

const [a,b,c] = [1,2,3];
console.log(a);  // 1

const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
console.log(avengers.length);  //4
console.log(avengers[avengers.length-1]);  // '绿巨人'
avengers.length = 8;
console.log(avengers);
avengers.length = 0;
console.log(avengers);

// 数组

const myArray = [1,2,3];
delete myArray[2];
console.log(myArray);
console.log(myArray.length);
console.log(myArray[2]);

// pop()/push()/shift()/unshift()

/// 数组合并的两种方法：1）concat()
const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
const heroes = ['蝙蝠侠','神奇女侠','闪电侠', '水行侠'];
const ah = avengers.concat(heroes);
console.log(ah);
console.log(avengers);
console.log(heroes);
// 2）扩展运算符
const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
const heroes = ['蝙蝠侠','神奇女侠','闪电侠', '水行侠'];
const ah = [...avengers,...heroes];
console.log(ah);

const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
const a = avengers.join();
console.log(a);
const b = avengers.join(' & ');
console.log(b);


const a = ['a','b','c','d'];
const b = a.reverse();
console.log(a);
console.log(b);

// 数组去重
const oArray = [null,null,undefined,1,1,1,2,2,8];
const mySet = new Set(oArray);
const oArray1 = [...mySet];
const oArray2 = Array.from(mySet);
console.log(oArray1);
console.log(oArray2);






