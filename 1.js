function getStudent(name, gender) {
  return `${name}, ${gender}`;
}

getStudent();

getStudent.call(undefined, name, gender);

console.log(getStudent.length);

console.log(getStudent.name);

console.log(getStudent.prototype);

// call()
function add(c, d) {
  console.log(this.a + this.b + c + d);
}

add(3, 4); // NaN why? this.a/this.b都是undefined

let num = { a: 1, b: 2 };

add.call(num, 3, 4); // 10    // num.add(3,4)

const person = {
  name: "xiaojichao",
  say: function () {
    return `你好，我是${this.name}`;
  },
};

function moreSay(age, hobby) {
  console.log(`${this.say()}, 我${age}岁，喜欢${hobby}`);
}

moreSay.call(person, 49, "写代码");

var lastName = "global_name"; // 定义一个全局变量

const func = function (firstName) {
  return firstName + " " + this.lastName; // this 的值根据如何调用函数决定
};

var person = {
  // 该对象作为第一个参数传给call()
  lastName: "person_name",
};

let a = func("xiaojichao"); // 常规方式调用函数
console.log(a); // xiaojichao global_name

let b = func.call(person, "xiaojichao"); // 设置this为person
console.log(b); // xiaojichao person_name
let c = func.call();
console.log(c); // undefined global_name
let d = func.call(null, "xiaojichao"); // this为null
console.log(d); // xiaojichao global_name
let e = func.call(undefined, "xiaojichao"); // this为undefined
console.log(e); // xiaojichao global_name

//严格模式下
("use strict");
func.call(); // 不能读undefined的lastName属性
func.call(null, "xiaojichao"); // 不能读null的lastName属性
func.call(undefined, "xiaojichao"); // 不能读undefined的lastName属性

// apply()

let array = ["a", "b"];
let elements = [0, 1, 2];

let a = [...array, ...elements];
console.log(a); // [ 'a', 'b', 0, 1, 2 ]

array.push.apply(array, elements);
console.log(array); // [ 'a', 'b', 0, 1, 2 ]

let obj = {
  a: 1,
  b: 2,
  set: function (a, b) {
    this.a = a;
    this.b = b;
  },
};
obj.set(3, 7); // 常规语法
obj.set.call(obj, 3, 7); // 等于上面的语法
obj.set.apply(obj, [3, 7]); // 同上，不过参数是数组
console.log(obj); // {a: 3, b:5, set: [Function: set]}
let myObj = {};
//myObj.set(5, 4); // 失败：因为myObj没有 set方法
obj.set.call(myObj, 5, 4);
obj.set.apply(myObj, [5, 4]);
console.log(myObj); // {a: 5, b: 4}

// 借用方法模式
function f() {
  let args = [].slice.call(arguments, 1, 3);

  return args;
}

let a = f(1, 21, 13, 4, 5, 6);
console.log(a); // [21, 13]

// bind()
var small = {
  a: 1,
  go: function (b, c, d) {
    console.log(this.a + b + c + d);
  },
};
var large = {
  a: 100,
};
small.go(2, 3, 4); // 10   go.call(small, 2, 3, 4)
small.go.call(large, 2, 3, 4); // 109
let bindTest1 = small.go.bind(large, 2, 3, 4);
bindTest1(); // 109
let bindTest2 = small.go.bind(large, 2, 3);
bindTest2(4); // 109
let bindTest3 = small.go.bind(large, 2);
bindTest3(3, 4); // 109

const person = {
  age: 49,
  getNameAndAge: function (name) {
    return name + " " + this.age;
  },
};
// 直接在person对象上调用方法
person.getNameAndAge("xiaojichao"); // xiaojichao 49
// 将方法的引用赋值给变量 nameAndAge
const nameAndAge = person.getNameAndAge;
// 通过引用nameAndAge，调用赋值给它的函数
nameAndAge("xiaojichao"); // xiaojichao undefined （函数在全局作用域被调用）
const boundNameAndAge = nameAndAge.bind(person, "xiaojichao");
boundNameAndAge(); // xiaojichao 49 (bind()创建一个新函数，将this值绑定到person对象）
// 不带任何参数绑定
const boundNameAndAge = nameAndAge.bind();
boundNameAndAge("xiaojichao"); // xiaojichao undefined
// 将 'this' 设置为 'undefined'
const boundNameAndAge = nameAndAge.bind(undefined, "xiaojichao");
boundNameAndAge(); // xiaojichao undefined
// 将 'this' 设置为 'null'
const boundNameAndAge = nameAndAge.bind(null, "xiaojichao");
boundNameAndAge(); // xiaojichao undefined

// toString()
function getName() {
  return "xiao";
}

console.log(getName.toString());

console.log(Math.max.toString());

function square(x) {
  square.cache = square.cache || {};
  if (!square.cache[x]) {
    square.cache[x] = x * x;
  }
  return square.cache[x];
}
square(3);
square(11);
console.log(square.cache); // {"3": 9, "11": 121}

// memoization
console.time();
const fina = function (n) {
  //return n < 2 ? n : arguments.callee(n - 1) + arguments.callee(n - 2);
  return n < 2 ? n : fina(n - 1) + fina(n - 2);
};
console.log(fina(40));
console.timeEnd();

// memoization版本
console.time();
const fina = function (n) {
  fina.cache = fina.cache || {};
  if (!fina.cache[n]) {
    fina.cache[n] = n < 2 ? n : fina(n - 1) + fina(n - 2);
  }
  return fina.cache;
};
console.log(fina(40));
console.timeEnd();
console.time();
console.log(fina(40));
console.timeEnd();

var fibonacci = function (n) {
  return n < 2 ? n : arguments.callee(n - 1) + arguments.callee(n - 2);
};

function memoize(fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    fn.cache = fn.cache || {};
    return fn.cache[args]
      ? fn.cache[args]
      : (fn.cache[args] = fn.apply(this, args));
  };
}

const memFib = memoize(fibonacci);
console.time();
console.log(memFib(40));
console.timeEnd();
console.time();
console.log(memFib(40));
console.timeEnd();

/// IIFE
(function () {
  const temp = "World";
  console.log(`Hello ${temp}`);
})();
console.log(temp);

(function () {
  const name = "Peter Parker";
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(),
    today = days[date.getDay()];
  console.log(`${name}，欢迎回来。今天是${today}`);
})();

{
  const name = "Peter Parker";
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(),
    today = days[date.getDay()];
  console.log(`${name}，欢迎回来。今天是${today}`);
}

// 模块模式
var myModule = (function () {
  var myPrivateVar, myPrivateMethod;

  myPrivateVar = 0; // 私有变量

  myPrivateMethod = function (foo) {
    // 私有方法
    console.log(foo);
  };

  return {
    myPublicVar: "foo", // 公开变量
    myPublicFunction: function (bar) {
      // 公开方法
      myPrivateVar++;
      myPrivateMethod(bar);
    },
  };
})();

myModule.myPublicFunction();

// 暴露的模块模式
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
  } // 暴露公有属性和方法，指向私有属性和方法
  return {
    start: publicFunction,
    increment: publicIncrement,
    count: publicGetCount,
  };
})();

// 闭包
function outerFunc() {
  let outerVar = "I am outside!";
  function innerFunc() {
    console.log(outerVar);
  }
  return innerFunc;
}

const myInnerFunc = outerFunc();
myInnerFunc(); // => 输出 "I am outside!"

const myGlobal = 0;
function func() {
  const myVar = 1;
  console.log(myGlobal); // 输出 "0"
  function innerOfFunc() {
    const myInnerVar = 2;
    console.log(myVar, myGlobal); // 输出 "1 0"
    function innerOfInnerOfFunc() {
      console.log(myInnerVar, myVar, myGlobal); // 输出 "2 1 0"
    }
    innerOfInnerOfFunc();
  }
  innerOfFunc();
}
func();

let countClicked = 0;
myButton.addEventListener("click", function handleClick() {
  countClicked++;
  myText.innerText = `You clicked ${countClicked} times`;
});

function multiplier(x, y) {
  return x * y;
}

const tax = multiplier(0.22, 400); // 88

function multiplier(x, y) {
  if (y === undefined) {
    return function (z) {
      return x * z;
    };
  } else {
    return x * y;
  }
}

calcTax = multiplier(0.22);
calcTax(400); // 88
