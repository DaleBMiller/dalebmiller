//函数的属性
function getStudent1(name, gender) {
    return "";
}
console.log(getStudent1.length) //2
function getStudent(name, ...gender) {
    return "";
}
console.log(getStudent.length) //1

console.log(getStudent.name)

const getStudent2 = function () {
    return "";
}
console.log(getStudent2.name)

console.log(getStudent2.prototype)


//call
function add(c, d) {
    console.log(this.a + this.b + c + d)
}
add(3, 4) //NaN why? this.a/this.b 都是undefined
//等同于add(undefined,3,4); this 是全局对象
let num = {
    a: 1,
    b: 2
}
add.call(num, 3, 4) //10


const person = {
    name: 'Dale B Miller',
    say: function () {
        return `我是 ${this.name}`
    }
}

function moreSay(age, hobby) {
    console.log(`${this.say()}, 我${age}岁，我喜欢${hobby}`)
}
moreSay.call(person, 21, '听音乐')


//!
var lastName = "globle_name"; //定义一个全局变量


//apply()
const numbers = [5, 6, 7, 8, 9]
let max = Math.max.apply(null, numbers)
console.log(max)

//bind()
const person = {
    age: 21,
    getNameAndAge: function (name) {
        return name + " " + this.age
    }
}
person.getNameAndAge("Dale B Miller")
const nameAndAge = person.getNameAndAge
nameAndAge('Dale B Miller')
const boundNameAndAge = nameAndAge.bind(person, "Dale B Miller")
boundNameAndAge()
const boundNameAndAge = nameAndAge.bind()
boundNameAndAge()
const boundNameAndAge = nameAndAge.bind(undefined, "Dale B Miller")
boundNameAndAge()
const boundNameAndAge = nameAndAge.bind(null, "Dale B Miller")
boundNameAndAge()


//toString()
const getStudent = function () {
    return "Dale B Miller"
}
console.log(getStudent.toString())

console.log(Math.max.toString()) //原生代码不可看


//Memoization
const fina = function (n) {
    // if (n < 2) {
    //     return n;
    // } else {
    //     return fina(n - 1) + fina(n - 2)
    // }
    return n < 2 ? n : fina(n - 1) + fina(n - 2)
}
console.time()
console.log(fina(40))
console.timeEnd();

const finaCache = function (n) {
    finaCache.cache = finaCache.cache || {};
    // if(finaCache.cache != undefined){
    //     finaCache.cache = finaCache.cache;
    // }else{
    //     finaCache = {}
    // }
    if (!finaCache.cache[n]) {
        finaCache.cache[n] = n < 2 ? n : finaCache(n - 1) + finaCache(n - 2)
    }
    return finaCache.cache[n]
}
console.time();
console.log(finaCache(40));
console.timeEnd()



//IIFE立即调用函数(用完即删除)
(function () {
    var temp = 2;
    console.log(temp)
})();
console.log(temp)
//等同于es6
{
    const temp = 1;
}
console.log(temp)


/**'use strict';*/ //严格模式

//模块模式
var mymoudule = (function () {
    var myPrivateVar, myPrivateMethod;
    myPrivateVar = 0; //私有变量
    myPrivateMethod = function (bar) {
        //私有方法
        console.log(bar)
    }
    return {
        myPublicVar: "foo", // 公开变量
        myPublicFunction = function (bar) {
            //公开方法
            myPrivateVar++;
            myPrivateMethod(bar);
        }
    }
})()


//暴露模块
var myRevealingModule = (function () {
    var privateCounter = 0;

    function privateFunction() {
        privateCounter++;
    }

    function publicFunction() {
        publicIncrement();
    }

    function publicIncrement() {
        privateFunction();
    }

    function publicGetCount() {
        return privateCounter;
    }
    //暴露公有属性和方法，指向私有属性和方法
    return {
        start: publicFunction,
        increment: publicIncrement,
        count: publicGetCount,
    }
})()
myRevealingModule.start();
myRevealingModule.increment();
myRevealingModule.count();


//闭包  closure
function outerFun(){
    let outVar = "I'm outside!";
    function innerFunction(){
        console.log(outVar)
    }
    return innerFunction
}
const myInnerFunc = outerFun();
myInnerFunc()



