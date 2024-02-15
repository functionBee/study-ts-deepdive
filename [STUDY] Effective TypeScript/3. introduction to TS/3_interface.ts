interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: "seho",
};


// 함수에 인터페이스 활용
function getUser(user: User){
  console.log(user);
}

const bee = {
  age: 12,
  name : 'b'
}

getUser(bee);


// 함수의 스펙(구조)에 인터페이스
interface Sumfunction{
  // 인자 타입              // 반환 타입 
  (a : number, b: number) : number;
}

let sum : Sumfunction;
sum = function(a: number, b: number):number{
  return a + b ;
}

// 인덱싱
interface StringArra{
  [index: number]: string;
}

var arr = ['a', 'b', 'c'];
arr[0] // 'a'


// 딕셔너리 패턴
interface StringRegexDictionary{
  [key : string]: RegExp;
}

var obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

// 인터페이스 확장
interface Person{
  name : string;
  age: number;
}

interface Developer extends Person{
  language: string;
}

var hola: Developer = {
  name : 'bee',
  age : 300,
  language: 'ts'
}