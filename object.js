const oStudent = {
  "student Name": "xiaojichao",
  age: 49,
  org: ["lovo", "smart"],
  len: null,
  len1: undefined,
  course: { name: "java", day: 1 },
  learn: function () {
    console.log("hello, student");
  },
  learn2() {
    console.log("hello2");
  },
};

delete oStudent.len;
console.log(oStudent.len); // undefined
oStudent.learn();
oStudent.learn2();
oStudent["learn"]();
console.log(oStudent["age"]);
console.log(oStudent["student Name"]);

const oStudent1 = new Object();
oStudent1.studentName = "xiaojichao";
oStudent1.age = 49;

// 计算属性
let a = "student",
  b = "Name";
const oStudent1 = {
  [a + b]: "xiaojichao",
  age: 49,
};

console.log(oStudent1);

// 简写
let studentName = "xiaojichao",
  age = 49;
const oStudent2 = {
  studentName: studentName,
  age: age,
};

const oStudent3 = { studentName, age }; // ES6
console.log(oStudent3.studentName);

const name = Symbol("name");
const superGirl = { [name]: "Supergirl" };
console.log(superGirl[name]); // -> "Supergirl"
console.log(superGirl.name); // undefined;

const realName = Symbol("real name");
superGirl[realName] = "kara Danvers"; // 添加新属性
console.log(superGirl[realName]); // -> 'kara Danvers'
console.log(superGirl); // -> { [Symbol(name)]: 'Supergirl', [Symbol(real name)]: 'kara Danvers' }
const daredevil = {
  [name]: "Daredevil",
  [realName]: "Matt Murdoch",
};
console.log(daredevil); // -> { [Symbol(name)]: 'Daredevil', [Symbol(real name)]: 'Matt Murdoch' }

// 判断属性或者方法是否存在
const teacher = {
  name: "xiao",
  age: 49,
};

// 1. 通过 in 运算符判断
console.log("name" in teacher); // true
console.log("sName" in teacher); // false

// 2. 逻辑表达式
if (teacher.name !== undefined) {
  console.log("teacher.name 存在！");
}

// 3.用hasOwnProperty()
if (teacher.hasOwnProperty("name")) {
  console.log("我有这个属性啦！");
}

// 对象属性遍历
const oStudent4 = {
  "student Name": "xiaojichao",
  age: 49,
  org: ["lovo", "smart"],
  len: null,
  len1: undefined,
  course: { name: "java", day: 1 },
  learn: function () {
    console.log("hello, student");
  },
  learn2() {
    console.log("hello2");
  },
};

console.log(oStudent4.course.name);

// for (let p in oStudent4) {
//     console.log(p);
// }

// console.log(Object.keys(oStudent4));

// for (let p of Object.keys(oStudent4)) {
//     console.log(p);
// }

// const values1 = Object.values(oStudent4);
// console.log(values1);

// for (let value of values1) {
//     console.log(value);
// }

const [a, b] = Object.entries(oStudent4);
console.log([a, b]);

for (let [a, b] of Object.entries(oStudent4)) {
  console.log(`key:${a}, value:${b}`);
}

// 按引用赋值
const aa = { name: "xiao" };
const bb = aa;
bb.name = "xiao1";
console.log(aa.name);

function greet(greeting, name, age) {

}

function greet({ greeting, name, age }) {
  return `${greeting}! 我是${name}，今年${age}岁。`;
}
let a = greet({ greeting: "师傅，你好", age: 10, name: "Bart" });
console.log(a); // -> 师傅，你好！我是Bart，今年10岁。
function greet({ greeting = "Hello", name, age = 18 }) {
  return `${greeting}！我是${name}，今年${age}岁。`;
}
let b = greet({});
console.log(b); //-> Hello！我是undefined，今年18岁。
let c = greet({ name: "Lisa", age: 8 });
console.log(c); // -> Hello！我是Lisa，今年8岁。

// this

const dice = {
    side: 6,
    roll() {
        return Math.floor(Math.random()* this.side) + 1;
    }
}

console.log(dice.roll());

let x = 1, y = 2, z = 3;
console.log(Math.max(x,y,z));

const myMath1 = {
    max: function(...num) {
        return num;
    }
};

myMath1.max();