//包装器对象
//1.当作构造函数
let bool = new Boolean(true);
console.log(typeof bool);
console.log(bool === true);
console.log(bool.valueOf());
console.log(bool.toString());

//2.当作函数来用
let a = Boolean('true');
console.log(a);

//0,undefined,null,"",NaN ---> false
const oStudent = {};

if (oStudent.name) {
    console.log("hello");
}

//Number对象
let a = new Number(123);
console.log(a.length);

let b = Number.parseInt(12313123.001);
console.log(b)

let c = Number.parseFloat(123);
console.log(c)
console.log(Number.isInteger(c))

let d = Number.isInteger(123.8)
console.log(d)

console.log((345).toLocaleString('zh-hans-CN-u-nu-hanidec'))


//String 对象
let e = String.fromCharCode(97);
e = String.fromCodePoint('0x97');
console.log(e);
let d = 'DaleBMiller'
console.log(d.slice(1, 3))
console.log(d)