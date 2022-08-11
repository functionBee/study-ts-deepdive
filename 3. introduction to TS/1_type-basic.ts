// 타입 선언
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

// Data Types
// number
let num: number = 10;
let decimal: number = 100; // 10진수 리터럴
let hex: number = 0xf00d; // 16진수 리터럴
let binnary: number = 0b1010; // 2진수 리터럴
let octal: number = 0o744; // 8진수 리터럴
let notANumber: number = NaN;
let underscoreNum: number = 1_000_000_000;

// string
let userName: string = 'bee';

// Template String(ES6)
let language: string = 'spanish';
let sentence: string = `(${language}) hola, ${userName}.`;
console.log(sentence); // (spanish) hola, bee.

// boolean
let isSaved: boolean = false;
isSaved = true;

console.log(typeof isSaved); //boolean

// null
let dataNull: null = null; //dataNull is a variable of type null
console.log(typeof dataNull); //object

// undefined
let dataUndefined: undefined; //dataUndefined is a variable of type undefined
console.log(typeof dataUndefined); //undefined

// symbol
/ 타입일 경우 (소문자) symbol 지정 가능
// 함수일 경우 (대문자) Symbol
console.log(Symbol('foo') === Symbol('foo')); // false

const symbol = Symbol();

const obj = {
    [symbol]: 'value',
};

// obj['symbol']; // 문자열을 통해 접근 X
obj[symbol];

let sym1 = Symbol('key');
let sym2 = Symbol('key');
sym1 === sym2; // false, symbols are unique


// object
let obj: object = {};

// 구체적인 객체 표현
let person: object = {
    name: 'bee',
    age: 100,
};

// array
let arr: Array<number> = [1, 2, 3]; // 배열 선언방식 1
let heroes: Array<string> = ['Captin America', 'Thor', 'Hulk'];
let items: number[] = [3, 4, 5]; // 배열 선언방식 2

// tuple
// 모든 인덱스에 타입을 정하는 배열
let address: [string, number] = ['mapo', 100];

// 디스트럭처링 할당(destructuring assignmen; 구조 분해 할당)
const [first, second] = person;

// 구체적인 객체 표현
let person: { name: string, age: number } = {
    name: 'bee',
    age: 100,
};

// The parameter's type annotation is an object type
function printCoord(pt: { x: number, y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// any
let todoItems: any;

// unknown
let variable: unknown

variable.foo.bar // Error: Object is of type 'unknown'.(2571)
variable[0] // Error
variable.trigger() // Error
variable() // Error
new variable() // Error

let variable: unknown
declare function isFunction(x: unknown): x is Function

if (isFunction(variable)) {
  variable() // OK
}

// enum

enum Weekdays {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7
}

console.log(Weekdays.Monday)         //1
console.log(Weekdays["Monday"])      //1
console.log(Weekdays["1"])           //Monday

let holiday=Weekdays.Sunday;
console.log(holiday);                //7

console.log(typeof Weekdays)         //object
console.log(typeof holiday)          //number


// void
// The inferred return type is void
function noop() {
    return;
}

// Return type void
type voidFunc = () => void;

const f1: voidFunc = () => {
    return true;
};

const f2: voidFunc = () => true;

const f3: voidFunc = function () {
    return true;
};

// never
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error('Something failed');
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {}
}