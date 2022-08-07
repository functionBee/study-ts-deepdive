"use strict";
// 변수에 인터페이스 활용
var seho = {
    age: 33,
    name: "seho",
};
// 함수에 인터페이스 활용
function getUser(user) {
    console.log(user);
}
const bee = {
    age: 12,
    name: 'b'
};
getUser(bee);
let sum;
sum = function (a, b) {
    return a + b;
};
var arr = ['a', 'b', 'c'];
arr[0]; // 'a'
var obj = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
};
var hola = {
    name: 'bee',
    age: 300,
    language: 'ts'
};
