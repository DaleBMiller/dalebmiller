//Mikescore,Mike队伍的得分 ， Johnscore = John队伍的得分 ， Maryscore = Mary队伍的得分
//AVGI = Mirk队伍的平均得分 ， AVGO = John队伍的平均得分 ， AVGA = Mary队伍的平均得分

//初始化各个队伍的得分
let Mikescore = [116,94,123]
let Johnscore = [116,94,123]
let Maryscore = [116,94,123]

//初始化各队总分
let ScoreI = 0;//Mike
let ScoreO = 0;//John
let ScoreA = 0;//Mary

//初始化平均分
let AVGI = 0;//Mike
let AVGO = 0;//John
let AVGA = 0;//Mary

//计算总分
//Mike队伍
for(let i = 0;i<Mikescore.length;i++){
    ScoreI = ScoreI + Mikescore[i]
}

//John队伍
for(let i = 0;i<Johnscore.length;i++){
    ScoreO = ScoreO + Johnscore[i]
}

//Mary队伍
for(let i = 0;i<Maryscore.length;i++){
    ScoreA = ScoreA + Maryscore[i]
}

//计算平均分
//Mike队伍平均分
AVGI = ScoreI/Mikescore.length
console.log("Mike队的平均分为："+AVGI)
//John
AVGO = ScoreO/Johnscore.length
console.log("John队的平均分为："+AVGO)
//Mary队伍平均分
AVGA = ScoreA/Maryscore.length
console.log("Mary队的平均分为："+AVGA)

//判断哪个队伍获胜
if(AVGI > AVGO && AVGI >AVGA){
    console.log("Mike队伍获胜，得分为："+AVGI)
}else if(AVGO > AVGI && AVGO > AVGA){
    console.log("John队伍获胜，得分为："+AVGO)
}else if(AVGA > AVGO & AVGA > AVGI){
    console.log("Mary队伍获胜，得分为："+AVGA)
}else if(AVGI == AVGO && AVGI > AVGA){
    console.log("Mike队与John队同时获胜，得分为："+AVGI)
}else if(AVGI == AVGA && AVGI > AVGO){
    console.log("Mike队与Mary队同时获胜，得分为："+AVGI)
}else if(AVGO == AVGA & AVGO >AVGI){
    console.log("John队与Mary队同时获胜，得分为："+AVGO)
}else{
    console.log("三队平局，得分为："+AVGI)
}

//finished