//Javascript引擎如何运行Javascript代码
//1.js
function greeting() {
    return 'hi'
}

//this
const person = {
    name: "peter",
    birthYear: 1994,
    calcAge: function () {
        console.log(2020 - this.birthYear);
    },
};
person.calcAge();
// 'this' 指 'person'，因为 'calcAge' 是通过用 'person' 对象引用调用的。

const calculateAge = person.calcAge;
calculateAge();
// 'this' 指定全局对象，因为没有对象引用


//提升
console.log(sayHello)
console.log(strMessage)
console.log(sayHi)
function sayHello() {
    return 'Hello, JavaScript!'
}
var strMessage = 'Hello, Freshman!'
var sayHi = function () {
    return 'Hi, JavaScript'
}

//变量提升
console.log(name); // 在赋值前输出undefined
 // 变量在这里定义
var name = 'Alexa';
console.log(name); // 会在赋值后返回 'Alexa'

//变量提升只适用于用 var 声明的变量。 const、let 声明的变量不提升！
//let/const 
function foo(){
    console.log(name);
    let name = 'Alexa';
    console.log(name);
}
foo()


//作用域
const name = "Lydia";
const age = 21;
const city = "San Francisco";

function getPersonInfo() {
  const name = "Sarah";
  const age = 22;
  return `${name} is ${age} and lives in ${city}`;
}
console.log(getPersonInfo());


const name = "Lydia";
const age = 21;
function getPersonInfo() {
  const name = "Sarah";
  const age = 22;
  const city = "San Francisco";
  return `${name} is ${age} and lives in ${city}`;
}
console.log(`${name} is ${age} and lives in ${city}`);
//ReferenceError: city is not define（因为在内存中找不到city，所以出现引用错误）


//全局上下文中通过var声明的变量，会变成全局对象属性
//全局上下文中通过函数声明声明定义的函数，会变成全局对象方法
let a = 1;
const b = 2;
var c = 3;//全局下不要用
function foo(){
    console.log('hi')
}//全局下不可以
const foo = function(){}//全局下可以


//this绑定
var num = 10
const foo = function(){
    // let name = 12
    console.log(this.num)
}
foo()

const foo = () => {
    console.log(2020-this.age)
}//箭头函数无this

const foo = function(){
    console.log(2020-this.age)
}
const oTeacher = {
    name:'dalebmiller',
    age:21,
    calAge: foo
}
oTeacher.calAge()


//finished