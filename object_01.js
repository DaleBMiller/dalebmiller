// 对象字面量语法创建对象
const dog = {
  name: "豆豆",
  breed: "泰迪",
  color: "棕色",
  bark() {
    return "汪汪！";
  },
};

console.log(dog.toString());

// 构造函数创建对象
function Dog(name, breed, color) {
  this.name = name;
  this.bread = breed;
  this.color = color;
}

Dog.prototype.bark = function () {
  return "wangwang!";
};

let dog1 = new Dog("豆豆", "泰迪", "棕色");
dog1.name;
dog1.bark();

// Object.create()创建对象
const dog = {
  name: "豆豆",
  breed: "泰迪",
  color: "棕色",
  bark() {
    return "汪汪！";
  },
};

let dog1 = Object.create(dog);

// ES6 Class 语法创建对象
class Dog {
  constructor(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
  }

  bark() {
    return "汪汪!";
  }
}

let dog1 = new Dog("豆豆", "泰迪", "棕色");

//

const empty = {};
console.log(empty.__proto__);

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return "汪汪";
  }
}

class ChiWaWa extends Dog {
  constructor(name) {
    super(name);
  }

  smallBark() {
    return "低声汪汪叫！";
  }
}

let myPet = new ChiWaWa("当当");
console.log(myPet.__proto__); // ChiWawa {}
console.log(myPet.__proto__.__proto__); // Dog {}
console.log(myPet.__proto__.__proto__.__proto__); //  {}

// ES6

//  类声明
class User {}

let user1 = new User();

// 类表达式
const User = class {};

let User2 = new User();
// 类声明和类表达式都是不提升的；

// 函数声明与函数表达式
function getUser() {}

// 函数声明要提升的，提升到作用域的顶部
// window.getUser()

const getUser = function () {};

// 加上constructor方法，初始化
class User {
  constructor(name1) {
    this.name = name1; // 隐式创建了一个实例字段：name
  }
}

let user1 = new User("xiao");
console.log(user1.name); //

class User {
  name1 = "unknown"; // 显式定义实例字段

  constructor(name) {
    this.name = name; // 隐式定义的实例字段
  }
}

let user1 = new User("xiao");
console.log(user1.name1);
console.log(user1.name);

// 定义私有实例字段
class User {
  #name;

  constructor(name) {
    this.#name = name;
  }
}

let user1 = new User("xiao");
console.log(user1.#name);

// 公共静态字段
class User {
  static TYPE_ADMIN = "admin";
  static TYPE_REGULAR = "regular";
  name;
  type;
  constructor(name, type, TYPE_ADMIN, TYPE_REGULAR) {
    this.name = name;
    this.type = type;
    TYPE_ADMIN = "admin";
  }
}

// ES5的实现
function User(name, type) {
  this.name = name;
  this.type = type;
}

User.prototype.TYPE_ADMIN = "admin";
User.prototype.TYPE_REGULAR = "regular";

console.log(User.TYPE_REGULAR); // 'regular'
const admin = new User("网站管理员", User.TYPE_ADMIN);
console.log(admin.TYPE_REGULAR); // undefined
admin.type === User.TYPE_ADMIN; // => true

// 静态的私有字段
class User {
  static #MAX_INSTANCES = 1;
  static #instances = 0;
  name;
  constructor(name) {
    // 实现了单例模式
    User.#instances++;
    if (User.#instances > User.#MAX_INSTANCES) {
      throw new Error("无法创建User实例");
    }
    this.name = name;
  }
}
new User("Jon Snow");
new User("Arya Stark"); // 抛出错误
new User("Sansa Stark"); // 抛出错误

// 公有的实例方法
class User {
  name; // 公有的实例字段
  constructor(name) {
    // 构造方法
    this.name = name;
  }
  getName() {
    // 公有的实例方法
    return this.name;
  }
  nameContains(str) {
    // 公有的实例方法
    return this.getName().includes(str);
  }
}
const user = new User("Jon Snow");
user.nameContains("Jon"); // => true
user.nameContains("Stark"); // => false

// 私有的实例方法
class User {
  #name; // 私有的实例字段

  constructor(name) {
    // 构造方法
    this.name = name;
  }

  #getName() {
    // 私有的实例方法
    return this.name;
  }

  nameContains(str) {
    // 公有的实例方法
    return this.#getName().includes(str);
  }
}

let user1 = new User("xiao jichao");
user1.#getName();

// 公有的静态方法
class User {
  static #takenNames = [];
  static isNameTaken(name) {
    return User.#takenNames.includes(name);
  }
  name = "Unknown";
  constructor(name) {
    this.name = name;
    User.#takenNames.push(name);
  }
}
const user = new User("Jon Snow");
User.isNameTaken("Jon Snow"); // => true
User.isNameTaken("Arya Stark"); // => false

// 私有的静态方法
class User {
  static #takenNames = []; // 静态的私有字段
  static #isNameTaken(name1) {
    // 静态的私有方法
    return User.#takenNames.includes(name1);
  }
  name = "Unknown"; // 公开的实例字段
  constructor(name) {
    this.name = name;
    User.#takenNames.push(name);
  }
}
const user = new User("Jon Snow");
User.#isNameTaken("Jon Snow"); // => TypeError

// getter/setter

class User {
  #nameValue;
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this.#nameValue;
  }
  set name(name) {
    if (name === "") {
      throw new Error(`User的 name 字段不能为空`);
    }
    this.#nameValue = name;
  }
}
const user = new User("Jon Snow");
user.name; // getter 被调用, => 'Jon Snow'
user.name = "Jon White"; // setter 被调用
user.name = ""; // setter 抛出一个错误

class User {
  #name1;
  name;
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class ContentWriter extends User {
  posts = [];

  constructor(name) {
      super(name);
      this.name = name;
  }
  getName() {
      //return this.#name1; // 出错，私有的属性和方法是不能继承的。
      super.getName();
      return this.name +'11111';
  }
}

const writer = new ContentWriter("John Smith");
writer.name; // => 'John Smith'
writer.getName(); // => 'John Smith'
writer.posts; // => []
