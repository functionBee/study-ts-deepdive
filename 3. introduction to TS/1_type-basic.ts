// Data Types: number type
let integer: number = 65; // 정수
let double: number = 65; // 실수
let negative: number = -65; // 음의 정수
let decimal: number = 100; // 10진수 리터럴
let binnary: number = 0b01000001; // 2진수 리터럴
let octal: number = 0o101; // 8진수 리터럴
let hex: number = 0x41; // 16진수 리터럴
let notANumber: number = NaN;
let underscoreNum: number = 1_000_000_000;

console.log(binnary) // 65
console.log(octal) // 484
console.log(hex) // 65
console.log(binnary === octal) // true
console.log(octal === hex) // true

// Data Types: string type
let userName: string = 'bee';
console.log(userName) // bee
console.log(typeof userName) // string

// Template String(ES6)
let language: string = 'spanish';
let sentence: string = `(${language}) hola, ${userName}.`;
console.log(sentence); // (spanish) hola, bee.
console.log(typeof sentence) // string



// 4. null
let dataNull: null = null; //dataNull is a variable of type null
console.log(typeof dataNull); //object

// 5. undefined
let dataUndefined: undefined; //dataUndefined is a variable of type undefined
console.log(typeof dataUndefined); //undefined

let name1: string;
//console.log(name1); // used before being assigned
name1 = 'Bee';
console.log(name); // Bee
//name = null; // not assignable

let name2: string | null | undefined;
console.log(name2); // undefined
name2 = 'Lee';
console.log(name2); // Lee
name2 = null;
console.log(name2); // null

// 6. symbol
// 타입일 경우 (소문자) symbol 지정 가능
// 함수일 경우 (대문자) Symbol
let sym1 = Symbol('key');
let sym2 = Symbol('key');
console.log(sym1 === sym2); // false, symbols are unique
console.log(Symbol('key') === Symbol('foo')); // false

const sym = Symbol();
const obj = {
    [sym]: 'value',
};
console.log(obj[symbol]); // 문자열을 통해 접근 X

// 7. object
let obj: object = {};

// 구체적인 객체 표현
let person: object = {
    name: 'bee',
    age: 100,
};

// 구체적인 객체 표현
let person: { name: string; age: number } = {
    name: 'bee',
    age: 100,
};

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// 8. array
let arr: Array<number> = [1, 2, 3]; // 배열 선언방식 1
let heroes: Array<string> = ['Captin America', 'Thor', 'Hulk'];
let items: number[] = [3, 4, 5]; // 배열 선언방식 2

// 9. tuple
// 모든 인덱스에 타입을 정하는 배열
let address: [string, number] = ['mapo', 100];

// 디스트럭처링 할당(destructuring assignmen; 구조 분해 할당)
const [first, second] = person;

// 10. any
let todoItems: any;

// 11. unknown
let variable: unknown;

variable.foo.bar; // Error: Object is of type 'unknown'.(2571)
variable[0]; // Error
variable.trigger(); // Error
variable(); // Error
new variable(); // Error

let variable: unknown;
declare function isFunction(x: unknown): x is Function;

if (isFunction(variable)) {
    variable(); // OK
}

// 12. enum
enum Weekdays {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7,
}

console.log(Weekdays.Monday); //1
console.log(Weekdays['Monday']); //1
console.log(Weekdays['1']); //Monday

let holiday = Weekdays.Sunday;
console.log(holiday); //7

console.log(typeof Weekdays); //object
console.log(typeof holiday); //number

// 13. void
// The inferred return type is void
function loop() {
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

// 14. never
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


// ** 연산자를 이용한 타입 **
// 1. 유니온 타입(union type)

// https://poiemaweb.com/typescript-alias
// 유니온 타입으로 타입 지정
type Union = string | null;

// 문자열 유니온 타입으로 타입 지정
type Name = 'Lee' | 'Kim';

// 숫자 리터럴 유니온 타입으로 타입 지정
type Num = 1 | 2 | 3 | 4 | 5;

// 객체 리터럴 유니온 타입으로 타입 지정
type Obj = {a: 1} | {b: 2};

// 함수 유니온 타입으로 타입 지정
type Func = (() => string) | (() => void);

type Custom = number | string | undefined;

// If undefined was not an allowed type,
// this would not be assignable.
//let c: Custom = undefined;

let c: Custom;
console.log(c); // undefined

c = 1;
console.log(c); // 1
c = 'x';
console.log(c); // x
//c = true; // not assignable
//c = null; // not assignable

// 인터페이스 유니온 타입으로 타입 지정
type Shape = Square | Rectangle | Circle;

// https://radlohead.gitbook.io/typescript-deep-dive/type-system#union-type
function formatCommandline(command: string[] | string){
    let line = '';
    if( typeof command === 'strig'){
        line = command.trim();
    }else{
        line = command.join('').trim()
    }
    
    // do stuff width line: string
}

// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#unions

// https://typescript-kr.github.io/pages/tutorials/ts-for-functional-programmers.html
function start(
    arg: string | string[] | (() => string) | { s: string }
): string {
    // JavaScript에서 아주 일반적입니다
    if (typeof arg === "string") {
        return commonCase(arg);
    } else if (Array.isArray(arg)) {
        return arg.map(commonCase).join(",");
    } else if (typeof arg === "function") {
        return commonCase(arg());
    } else {
        return commonCase(arg.s);
    }
    function commonCase(s: string): string {
        // 마지막으로, 다른 문자열로 변환합니다
        return s;
    }
}


// https://yamoo9.gitbook.io/typescript/types/function-union-void#union
function first(o) {
    return o[0];
}

function nth(o, n) {
    return o[n];
}

function last(o) {
    return o[o.length - 1];
}

const numbers:any[] = [
    'one',
    'double',
    3,
    () => console.log('라스트 넘버')
];

const messages:string = `사건의 핵심 '시그니처'를 파악하라`;

console.log(first(messages));
console.log(nth(numbers, 2));
console.log(last(numbers)());

// ** 타입 선언 **
// 1. 변수의 타입 선언
let [Indentifier]: [type] = [value];
var [Indentifier]: [type] = [value];
const [Indentifier]: [type] = [value];
const obj: {
    lat: number;
    lon: number;
} = {
    lat: 37.5,
    lon: 127.5,
};

// 2. 함수의 타입 선언
// 2-1. 함수의 기본적인 타입 선언
function sum(a: number, b: number) {
    return a + b;
}
// 함수의 파라미터 그리고 리턴값에는 타입 annotation이 필요합니다
var user: string = 'Bee';
function identity(user: string): string {
    return user;
}

// 2-1. 화살표 함수의 타입 선언
const sum: (a: number, b: number) => number = (a, b) => a + b;


