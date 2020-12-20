// 类声明
class User {}

let myUser = new User();

// 类表达式
const User = class {};

let myUser1 = new User();

// 不提升！

// constructor()
class User {
  constructor(name) {
    this.name = name; // name就是隐式的字段
  }
}

let myUser = new User("xiao");
console.log(myUser.name); // 'xiao'

// 显式定义一个公共字段
class User {
  name = "unkown";

  constructor() {}
}

let myUser = new User();
myUser.name = "xiao";

// 定义一个私有实例字段
class User {
  #name;
  constructor(name) {
    this.#name = name;
  }
}

let myUser = new User("xiao");
console.log(myUser.#name);

// 静态公有字段
class User {
  static TYPE_ADMIN = "admin";
  static TYPE_REGULAR = "regular";
  name;
  type;
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const admin = new User("网站管理员", User.TYPE_ADMIN);
admin.type === User.TYPE_ADMIN; // => true
console.log(admin.TYPE_ADMIN); // undefined

// 静态私有字段
class User {
  static #MAX_INSTANCES = 1;
  static #instances = 0;
  name;
  constructor(name) {
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

// 创建公有实例方法
class User {
  name;
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  nameContains(str) {
    return this.getName().includes(str);
  }
}
const user = new User("Jon Snow");
user.nameContains("Jon"); // => true
user.nameContains("Stark"); // => false

// 创建私有实例方法
class User {
  #name;
  constructor(name) {
    this.#name = name;
  }
  #getName() {
    return this.#name;
  }
  nameContains(str) {
    return this.#getName().includes(str);
  }
}

const user = new User("Jon Snow");
user.nameContains("Jon"); // => true
user.nameContains("Stark"); // => false
user.#getName(); // 抛出 SyntaxError

// 创建公有静态方法
// 规则：
// 1.只能访问静态的字段
// 2.不能访问实例的字段和方法
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
  static #takenNames = [];
  static #isNameTaken(name) {
    return User.#takenNames.includes(name);
  }
  name = "Unknown";
  constructor(name) {
    this.name = name;
    User.#takenNames.push(name);
  }
}

const user = new User("Jon Snow");
User.#isNameTaken("Jon Snow"); // => TypeError

// getter/setters
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
  constructor(name, posts) {
    super(name);
    this.posts = posts;
  }
  getName() {
    const name = super.getName();
    if (name === "") {
      return "Unknown";
    }
    return name;
  }
}
const writer = new ContentWriter("", ["Why I like JS"]);
writer.getName(); // => 'Unknown'
