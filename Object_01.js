//对象字面量语法创建对象
const dog = {
    name: 'dodo',
    breed: '泰迪',
    color: '棕色',
    bark() {
        return 'wow';
    }
}

//构造函数创建对象
function Dog(name, breed, color) {
    this.name = name
    this.breed = breed
    this.color = color
}

Dog.prototype.bark = function () {
    return 'wow';
}

let dog1 = new Dog('dodo', 'tidi', 'gray')
dog1.bark();


//Object.creat()创建对象
const dog = {
    name: 'dodo',
    breed: '泰迪',
    color: '棕色',
    bark() {
        return 'wow';
    }
}
let dog2 = Object.create(dog);

//ES6 Class语法创建对象
class Dog3 {
    constructor(name, breed, color) {
        this.name = name
        this.breed = breed
        this.color = color
    }
    bark() {
        return 'wow';
    }
}

let dog4 = new Dog3('dodo', 'tidi', 'gray');

//
const empty = {};
console.log(empty.__proto__)

//
function Dog5(name, breed, color) {
    this.name = name
    this.breed = breed
    this.color = color
    this.bark = function () {
        return 'wow'
    }
}
console.log(Dog5.prototype)
console.log(Dog5.prototype.constructor)


class Dog {
    constructor(name) {
        this.name = name;
    };
    Bark() {
        return 'wow';
    };
};
class Chiwawa extends Dog {
    constructor(name) {
        super(name);
    };
    smallBark() {
        return 'small wow';
    };
};

let myPet = new Chiwawa('dodo');
console.log(myPet.__proto__);

//类声明
class User {

}
let user1 = new User();

//类表达式
const User = class {

}
let user1 = new User()
//类声明和类表达式都不会提升

//函数声明
function User() {

}
//函数表达式
const User = function () {};
//函数声明要提升，提升到作用域的顶部
//windows.User()


//加上constructor()方法，初始化
class User {
    constructor(name1) {
        this.name = name1 //隐式创建了一个实例字段：name
    }
}
//等同于构造函数
function User(name) {
    this.name = name
}
let user1 = new User('dale')

class User1 {
    name1 = 'dale1'; //显式定义实例字段
    constructor(name) {
        this.name = name //隐式定义的实例字段：name
    }
}
let user1 = new User1('dale')
console.log(user1.name)
console.log(user1.name1)

//定义私有的实例字段(原理：IIFE)
class User{
    #name;
    constructor(name){
        this.#name = name
    }
}
let user1 = new User('dale')
console.log(user1.#name)//无法访问私有实例字段



//公共静态字段
class User{
    static TYPE_ADMIN = 'admin';
    static TYPE_REGULAR = 'regular';
    name;
    type;
    constructor(name,type){
        this.name = name;
        this.type = type;
    }
}
console.log(User.TYPE_ADMIN);
const admin = new User('网管',TYPE_ADMIN)
console.log(admin.TYPE_ADMIN)
admin.TYPE_ADMIN === User.TYPE_ADMIN;


//ES5实现
//!
//静态的私有字段
//!
//公有实例方法
//!
//共有静态方法
//！


//getter/setter
class User{
    #nameValue;
    constructor(name){
        this.name = name;
    };
    get name(){
        return this.#nameValue;
    }
    set name(name){
        if(name === ""){
            throw console.error("User 的字段不能为空！");
        }
        this.#nameValue = name;
    }
}
const user = new User('dale') //==>dale
user.name//getter直接被调用，输出dale
user.name = "daleBmiller"//setter被调用
user.name = ""//跑出错误
