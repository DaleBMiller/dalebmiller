console.log("Hello , Javascript"); //在控制台输出Hello , Javascript

var strName = "zxs"; //变量命名（声明+初始化，es5之后不用var,因为可能会被加入全局变量）
console.log(Global.strName);

let strName = "zxs"; //es5之后开始用，不会加入到全局变量中

const  isHuman = true; // const确定的不会改变的常量,声明前必须先初始化

let a = 10;
console.log(typeof typeof a );

let a = 0.1;
let b = 0.2;
let c = a+b;
console.log(c.toPrecision(1)); //  toPrecision小数点后几位

let d;
console.log(typeof d);

let e = null;
console.log(e == undefined); // ==是否相等，===是否绝对相等

const strName = "zxs";

const strNmae2 = 'zxs';

const strName3 = 'he\'s a techer' // ‘\’转意符号

let a1 = 'he';
let a2 = 'is';
let a3 = 'a teacher';

const strName4 = 
`
<h1>
    <p>${a1}</p>
    <p>${a2}</p>
    <p>${a3}</p>
</h1>
`
console.log(strName4);

const b1 = Symbol();
console.log(b1) // symbol唯一不可变的


let age = 20;
a1=age>=30? '你是成年人':'你是青年';
console.log(a1);

const ostudent = {
    name:'zxs',
    ag:21
}
console.log('name' in ostudent);

const str = [2,3,4,5,6];
console.log(3 in str);

//finished