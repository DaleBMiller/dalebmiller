const oStudent = {
    studentName: "DaleBMiller",
    age: 21,
    org: ['lovo', 'GCN'],
    len: null,
    len1: undefined,
    cosnrse: {
        name: 'Java',
        day: 1
    },
    learn: function () {
        console.log('JavaScript')
    },
    learn2() {
        console.log('Python')
    }
}

let a = JSON.stringify(oStudent, null, 2);
console.log(a)


const b = '{"studentName":"DaleBMiller","age":21,"org":["lovo","GCN"],"len":null,"cosnrse":{"name":"Java","day":1}}'
const oStudent1 = JSON.parse(b);
for (let p in oStudent1) {
    console.log(p)
}