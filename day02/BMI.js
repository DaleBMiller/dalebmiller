// mass = 体重 ， height = 身高 ， BMI = mass/(heigth*height)
// Markm = Mark 的体重 ，Markh = Mark 的身高
// Johnm = John 的体重 ，Johnh = John 的身高
// BMIM = Mark 的BMI值 ，BMIJ = John 的BMI值

//定义Mark与John的身体数据
Markm = 175 , Markh = 60;
Johnm = 169 , Johnh = 65;
//计算二人的BMI指数
BMIM = Markm / (Markh*Markh);
BMiJ = Johnm / (Johnh*Johnh);
//输出二人的BMI
console.log("Mark的BMI为："+BMIM);
console.log("John的BMI为："+BMiJ);
//比较二人的BMI
BMI = (BMIM > BMiJ?"Mark的BMI比John高":"Mark的BMI比John低");
console.log(BMI);

//finished