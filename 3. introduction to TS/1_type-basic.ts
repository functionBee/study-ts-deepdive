let [Indentifier]: [type] = [value];
var [Indentifier]: [type] = [value];
const [Indentifier]: [type] = [value];

const sum: (a: number, b: number) => number = (a, b) => a + b;
const obj: {
    lat: number;
    lon: number;
} = {
    lat: 37.5,
    lon: 127.5,
};

function sum(a: number, b: number) {
    return a + b;
}

// 함수의 파라미터 그리고 리턴값에는 타입 annotation과 값이 필요합니다
var user: string = 'Bee';
function identity(user: string): string {
    return user;
}

// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
const str: string = 'hello';

// TS 숫자 선언
let num: number = 10;
let decimal: number = 100; // 10진수 리터럴
let hex: number = 0xf00d; // 16진수 리터럴
let binnary: number = 0b1010; // 2진수 리터럴
let octal: number = 0o744; // 8진수 리터럴
let notANumber: number = NaN;
let underscoreNum: number = 1_000_000_000;

// TS 배열 선언
let arr: Array<number> = [1, 2, 3]; // 배열 선언방식 1
let heroes: Array<string> = ['Captin America', 'Thor', 'Hulk'];
let items: number[] = [3, 4, 5]; // 배열 선언방식 2

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
let person: { name: string; age: number } = {
    name: 'bee',
    age: 100,
};

// TS 진값위
let show: boolean = true;
