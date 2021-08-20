// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
const str: string = 'hello';

// TS 숫자 선언
let num: number = 10;

// TS 배열 선언
let arr: Array<number> = [1, 2, 3] // 배열 선언방식 1
let heroes: Array<string> = ['Captin America', 'Thor', 'Hulk']
let items: number [] = [3, 4, 5] // 배열 선언방식 2

// TS 튜플
// 모든 인덱스에 타입을 정하는 배열
let address: [string, number] = ['mapo', 100];

// TS 객체
let obj: object = {};

// let person: object = {
//     name : 'bee',
//     age : 100
// };

// 구체적인 객체 표현 
let person: {name : string, age: number } = {
    name : 'bee',
    age : 100,
}

// TS 진값위 
let show:boolean = true;