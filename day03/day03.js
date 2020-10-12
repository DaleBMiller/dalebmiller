// 创建对象
// 通过object构建函数
let myObject = new Object()
myObject.name  = 'zhouxiaoshuang'
myObject.age = 20

console.log(myObject.name)

// 通过对象字面量创建韩式

const oStudent1 = {
    name : 'zhouxiaoshuang',
    age : 20,
};

console.log(oStudent1.name)

console.log(typeof oStudent1); //object

console.log(typeof null);


//数组array
const a2 = [];
const a1 = new Array(); // object 
console.log(typeof a2);
console.log(a1[0]);

a2[0] = 'a';
a2[1] = 1 ;
a2[5] = true ;
console.log(a2);
console.log(a2[3]);
console.log(a2 instanceof Array);

const a3 = [1,2,3,4,'a',undefined,null,a2];


const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
delete avengers[2];
console.log(avengers);


const number1 = [1,2,3,4]
let a  = number1[0];
let b  = number1[1];
let c  = number1[2];
let d  = number1[3];
console.log(`a=${a},b=${b},c=${c}`);
//结构数组
const [a,b,c,d] = [1,2,3,4];
console.log(`a=${a},b=${b},c=${c}`);


const [a,b] = ['zhouxiaoshuang',true,1,2,2,1]
console.log(`a=${a},b=${b}`);

const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
console.log(avengers.length);
avengers.length = 1;
console.log(avengers);
avengers.length = 0;
console.log(avengers);

const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];//pop删除最后一个
avengers.pop();
console.log(avengers);

const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];//在最后添加一个
avengers.push('黑寡妇');
console.log(avengers);

const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];//删除第一个
console.log(avengers.shift());
console.log(avengers);

const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];//在第一个添加
avengers.unshift('红女巫');
console.log(avengers);

//合并数组
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
const heros = ['蝙蝠侠','超人','闪电侠'];
const ah = avengers.concat(heros);
console.log(ah);

//扩展运算符
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
const heros = ['蝙蝠侠','超人','闪电侠'];
const ah = [...avengers,...heros];
console.log(ah);


//join(将数组中的元素以字符串输出)
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
const av1 = avengers.join();
const av2 = avengers.join(" & ");
console.log(av1);
console.log(av2);

//slice切片(创建一个子数组)
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
const av3 = avengers.slice(1,3)
console.log(avengers);
console.log(av3);

//切掉元素，并在原位置添加新的元素
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
const av4 = avengers.splice(1,2,'星爵','卡魔拉')
console.log(av4);
console.log(avengers);


const number1 = [1,5,9,56,32,44,2];
const a = number1.sort();
console.log(number1);
console.log(a);

//reverse反转数组顺序
const str = ['a','b','c','d'];
const b = str.reverse();
console.log(str);
console.log(b);


//indexOf(),includees()(检测数组中是否包含特定值，有，则分别返回0/ture)
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
const a = avengers.indexOf('美国队长');
console.log(a);
const b = avengers.includes('美国队长');
console.log(b);

//多维数组
const ma = [[1,2],[3,4]];
console.log(ma);
console.log(ma[0][0]);
console.log(ma[0][1]);


//压缩数组
const summer = ['jun','july','Aug'];
const winter = ['Dec','Jan','feb'];
const nested = [summer,winter];
console.log(nested);

const flag = [...summer,...winter];
console.log(flag);




//集合set(值是唯一的,不会有重复值)(可迭代的--数组，集合)
const oSet = new Set();
oSet.add(1)
oSet.add(2)
oSet.add(3).add(4).add(5)
console.log(oSet);

const list1 = new Set([1,2,3,4,5,6]);
console.log(list1);

const list2 = new Set('hello');
console.log(list2);


//链式用法
const list3 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list3.size);
//size为只读属性
list3.size = 2;//无效
console.log(list3);

//has()检测一个值是否在集合中
const list4 = new Set().add('the').add('quick').add('brown').add('fox');
a = list4.has('brown');
console.log(a);

//delete()
const list5 = new Set().add('the').add('quick').add('brown').add('fox');
b = list5.delete('fox');
console.log(b);
console.log(list5);

//clear(),删除所有值
const list6 = new Set().add('the').add('quick').add('brown').add('fox');
list6.clear();
console.log(list6);


//数组/集合转换
const list6 = new Set().add('the').add('quick').add('brown').add('fox');
const a = [...list6];
console.log(a);
//数组去重
const oArray1 = [1,2,1,12,1,2,3,4,4,4,5]
const oSet = new Set(oArray1);
console.log(oSet);
const oArray2 = [...oSet];
console.log(oArray2);

//WeakSet与Set区别，WeakSet只能是引用类型(防止引用已删除的”死对象“，也就是防止内存溢出)
let Student  = {
    name : 'zhouxiaoshuang',
    age : 21
};

const strong = new Set();
strong.add(Student);
//Student  = null;
console.log(strong.has(Student));


let Student  = {
    name : 'zhouxiaoshuang',
    age : 21
};
const weak = new WeakSet();
weak.add(Student);
Student  = null;
console.log(weak.has(Student));


//Map映射
const oMap = new Map();
oMap.set(1,'I');
oMap.set(2,'II');
oMap.set(3,'III').set(4,'IV').set(5,'V');
console.log(oMap);
console.log(oMap.size);//只读
const a = oMap.get(5);
console.log(a);
oMap.set('name','zhouxiaoshuang');
const b = oMap.get('name');
console.log(oMap);
console.log(b);
console.log(oMap.has('name'));
const c = oMap.delete('name');
console.log(c);
oMap.clear();
console.log(oMap);


const oMap = new Map();
oMap.set(1,'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
const oArray = [...oMap];
console.log(oArray);

//finished