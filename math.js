//Math对象
let x = 1,
    y = 2,
    z = 3;
console.log(Math.max(x, y, z))

const scores = [1, 2, 3, 4, 5, 6563, 345345, 2342, 234, 23]
console.log(`最大值为:${Math.max(...scores)}`)

let a = Math.random() * 6 //0--1之间的最小数
console.log(a)
console.log(Math.floor(a) + 1) //1--6之间

//Math.floor(Math.random()* 6)+1 //生成1--6之间的随即数