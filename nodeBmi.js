var readline = require("readline-sync");

//input weight
var weight = readline.questionInt("Please input ur weight(KG)?");
var height = readline.questionInt("Please input ur Height(cm)?");
var bmi = weight / ((height / 100) ** 2);
    // document.getElementById("bmi").innerHTML = bmi;
if(bmi<18.5){
    console.log("體重過輕");
}else if( bmi<24){
    console.log("健康體位");
}
if(bmi<27){

}else if(bmi<30){

}else if(bmi<35){

}else{
    console.log("重度肥胖");
}
console.log("Hello, Your BMI is:" + bmi);