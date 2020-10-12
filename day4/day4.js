// 定义函数的4种方式
//函数声明
function SayHello() {
    console.log("Hello")
} //定义了一个函数字面量

//字面量
let a = " ",
    b = " ",
    c = " ";
let oArrary = [1, 2, 3];
const oStudent = {};
const oRage = '/abc/';

//定义函数表达式
const sayHello = function () {
    console.log("Hello");
} //匿名函数表达式
sayHello() //调用函数

const sayHello = function sayHi() {
    console.log("Hello");
} //命名函数表达式(很少用)

//function 构造函数
const sayHello = new Function("console.log('Hello')"); //不推荐使用

//es6新增箭头函数
const sayHello = () => {
    console.log("Hello")
}; //(尽量用)箭头函数没有arguments

const sayHello = function () {
    let a = 1,
        b = 2;
    let c = a + b;
}
console.log(sayHello()) //undefined


const sayHello = function () {
    let a = 1,
        b = 2;
    let c = a + b;
    return c;
}
console.log(sayHello()) //3


//函数参数
const add = function (a, b) {
    return a + b;
}
let a = add(3, 5)
console.log(a)

const add1 = function (a, b) {
    return a + b;
}
// let b = add1()
// console.log(b) // NaN (not a number) =》 undefined + undefined

// let b = 1 ;
// b = Infinity;//正无穷
// b = - Infinity;//负无穷

// let b = 1;
// b = b+ null;//1

// let b = add1(1)
// console.log(b)//NaN

let b3 = add1(1, 2, 3, 4)
console.log(b3) //3

const add2 = function (a, b) {
    let a1 = arguments.length;
    console.log(a1);
    console.log(arguments[5])
    return a + b;
}

let b4 = add2(1, 2, 5, 6, 5, 6, 4)
console.log(b4)

const add3 = function () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
} //let因为数组长度可变
let b = add3(1, 2, 3, 4, 5)
console.log(b)

//扩展运算符
const add4 = function (...number) {
    let sum = 0;
    for (const num of number) {
        sum = sum + num;
    }
    return sum;
} //const因为数组长度不可变
let b = add4(1, 2, 3, 4, 5)
console.log(b)


//默认参数
const sayHello = function (studentname = 'Dale') {
    console.log(`Hello, ${studentname}`)
}
sayHello()
sayHello("dalebmiller")

//箭头函数
const add = function (...number) {
    let sum = 0;
    for (const num of number) {
        sum = sum + num;
    }
    return sum;
}
console.log(add(1, 2, 3, 5, 4, 8))


const add = (...number) => {
    let sum = 0;
    for (const num of number) {
        sum = sum + num;
    }
    return sum;
}
console.log(add(1, 2, 3, 5, 4, 8))


//如果只有一条语句,可以不要{}
const add2 = function (a, b) {
    return a + b;
}

const add2 = (a, b) => a + b;

const add3 = () => {
    return 3;
}

const add4 = a => a + 1;
const add4 = function (a) {
    return a + 1;
}


//回调callback
function dance() {
    console.log("I'm dancing")
}

function sing(song, callback) {
    console.log(`I'm singing ${song}`);
    if (typeof (callback == 'function')) {
        callback();
    }
}
sing('Nationalsong', dance)


//改写为箭头函数
const dance = () => {
    console.log("I'm dancing")
}
const sing = (song, callback) => {
    console.log(`I'm singing ${song}`);
    if (typeof (callback == 'function')) {
        callback();
    }
}
sing('Nationalsong', dance)
//用箭头函数作为回调函数
const sing = (song, callback) => {
    console.log(`I'm singing ${song}`);
    if (typeof (callback == 'function')) {
        callback();
    }
}
sing('Nationalsong', () => (console.log("I'm dancing")))
//回调函数的应用
//1.数组的排序 Array sort()
const oArray = [1, 10, 11, 2, 8, 9]
console.log(oArray.sort())

const num = (a, b) => a - b;
console.log(oArray.sort(num))


//数组迭代
//foreach()
const color = ['red', 'blue', 'green']
for (let i = 0; i < color.length; i++) {
    console.log(`位置${i}的颜色为${color[i]}`)
}

const color = ['red', 'blue', 'green']
color.forEach(
    (color, index) => console.log(`位置${index}的颜色为${color}`)
)

const oArray = [1, 2, 3, 4]
oArray.forEach((color) => console.log(`${color}`))


//map()的用法
const oArray2 = [1, 2, 3, 4]
const oArray3 = oArray2.map((x) => x + 2)
console.log(oArray3)

//改写，每个元素的平方
const a1 = [1, 2, 3]
let a2 = []
for (let i = 0; i < a1.length; i++) {
    a2[i] = a1[i] * a1[i]
}
console.log(a2)
//map版本
const a1 = [1, 2, 3]
let a2 = a1.map((x) => x * x)
console.log(a2)

//reduce
const a1 = [1, 2, 3]
const a2 = a1.reduce(
    (sum, currentVal) => sum + currentVal
)
console.log(a2)

const a2 = [1, 2, 3].reduce((sum, currentVal) => sum + currentVal)
console.log(a2) //6

const a2 = [1, 2, 3].reduce((sum, currentVal) => sum + currentVal, 10)
console.log(a2) //16

const sentence = 'My name is Dale B Mille我的名字是';
const words = sentence.split(" ") //字符串转换为数组
console.log(words)
//长度
const total = words.reduce(
    (sum, currentVal) => sum + currentVal.length, 0
)
console.log(total)


//filter过滤
const a1 = [1, 2, 3, 4, 5, 6, 7, 8]
const a2 = a1.filter((a) => a % 2 === 0)
console.log(a2)

const sentence = 'My name is Dale B Mille我的名字是';
const words = sentence.split(" ") //字符串转换为数组
const a1 = words.filter((word) => word.length > 6)
console.log(a1)

//map与reduce组合
const a = [1, 2, 3].map((x) => x * x).reduce((acc, x) => acc + x)
console.log(a)

//finished