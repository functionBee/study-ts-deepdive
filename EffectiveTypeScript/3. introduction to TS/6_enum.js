"use strict";
// 숫자형 이넘
// enum Shoes {
//     Nike,
//     Addidas,
// }
// var myShoes =  Shoes.Addidas;
// console.log(myShoes); //1
// 문자형 이넘
var Shoes;
(function (Shoes) {
    Shoes["Nike"] = "\uB098\uC774\uD0A4";
    Shoes["Addidas"] = "\uC544\uB514\uB2E4\uC2A4";
})(Shoes || (Shoes = {}));
var myShoes = Shoes.Addidas;
console.log(myShoes); //아디다스
var Answer;
(function (Answer) {
    Answer["Yes"] = "Y";
    Answer["No"] = "N";
})(Answer || (Answer = {}));
function askQuestion(answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다.');
    }
    else {
        console.log('오답입니다.');
    }
}
// console.log(askQuestion('yes'));
// console.log(askQuestion('y'));
console.log(Answer.Yes); // Y
