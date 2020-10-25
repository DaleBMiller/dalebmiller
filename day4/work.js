//作业1
const bills = [48, 124, 268] //三笔消费
const tips = [];
const payments = [];
const tipCaculator = () => {
    for (let i = 0; i < bills.length; i++) {
        const x = bills[i]
        if (x < 50) {
            const tip = x * 0.2
            const pay = x + tip
            tips.push(tip)
            payments.push(pay)
        }
        if (x >= 50 & x <= 200) {
            const tip = x * 0.15
            const pay = x + tip
            tips.push(tip)
            payments.push(pay)
        } else if (x > 200) {
            const tip = x * 0.1
            const pay = x + tip
            tips.push(tip)
            payments.push(pay)
        }
    }
    console.log("三笔消费的小费分别为：", tips) //小费
    console.log("三笔消费的小费分别为：", payments) // console.log("三笔消费的小费分别为：",payment)//总消费
}
tipCaculator()




//作业2 
//原函数
function mean(a, b, c) {
    return (a + b + c) / 3;
}

//要求1:要求任意个数的数字的平均值，求改进后代码
const mean1 = (...numbers) => {
    let l = numbers.length;
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    let Avg = sum / l;
    console.log(Avg);
}
mean1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//要求2:使用reduce()函数精简
const mean2 = (numbers) => {
    let l = numbers.length;
    let Avg = numbers.reduce((numbers, sum) => numbers + sum) / l;
    return Avg
}
console.log(mean2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//要求3:只对数组中的偶数品平均数
const asd = []; //新数组存储偶数
const mean2 = () => {
    let l = asd.length;
    let Avg = asd.reduce((asd, sum) => asd + sum) / l;
    console.log(Avg)
} //求平均值
const mean3 = (arr1, callback) => {
    const arr2 = arr1.map((sum) => {
        if (sum % 2 == 0) {
            return sum
        }
    }) //取偶数
    // const asd = [];
    arr2.forEach(
        item => {
            if (item) {
                asd.push(item)
            }
        }
    ) //偶数组成新的数组
    if (typeof (callback) === "function") {
        callback()
    } //回调mean2()
}
mean3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mean2)

//finished
