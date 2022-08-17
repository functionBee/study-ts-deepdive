# 타입스크립트(TypeScript) 👀✨

자바스크립트의 상위 집합(A superset of JavaScript)<br>
마이크로소프트가 쓰고 관리하는 오픈 소스 언어<br>
TypeScript는 트렌스 파일러(tsc) JavaScript로 변환되며 JavaScript가 실행하는 모든 환경에서 실행 가능<br>

<br>

## ✅ [이펙티브 타입스크립트(Effective TypeScript)](https://github.com/holabee/LearnTypeScript/tree/main/0.%20Study_EffectiveTypeScript)

: 이펙티브 타입스크립트 도서를 포함허여 타입 스크립트 관련 내용 상세 정리

<br>

## ✅ 타입 스크립트 개발 환경 구성

```bash

#node 버전 확인
$  node -v

# NPM을 통한 타입스크립트 전역 설치
$ npm i typescript -g
# yarn add typescript -g

# devDependencies 목록에 추가시
$ npm install typescript --save-dev
# yarn add typescript -D

# (참고)
# 1. NPM(Node Package Manager)
# 명령어로 자바스크립트 라이브러리를 설치하고 관리할 수 있는 패키지 매니저

# 2. NPM 전역 설치
# 시스템 레벨에서 사용할 자바스크립트 라이브러리를 설치할 때 사용
# 라이브러리가 설치되고 나면 이제 명령어 실행 창에 해당 라이브러리 이름을 입력했을 때 명령어를 인식

# .ts 파일을 .js 파일로 변환시 해당 디렉토리로 접근하여 아래 명령어를 통해 컴파일
tsc index.ts

# 버전 확인
$ tsc --version

```

> compiler option을 이용하여<br>
> 디른 디렉토리(dist)에서 트래스 파일링된 파일들을 관리 가능

```json

# tsconfig.json

{
  "compilerOptions": {
    "outDir": "dist"
  }
}

```

```bash
.
├── dist
│   └── fileName.js
├── package.json
├── package-lock.json
├── src
│   └── fileName.ts
└── tsconfig.json

```

<br>

## ✅ TS와 JS 차이점(Difference between TypeScript and JavaScript)

|                            |            **TypeScript**             |           **JavaScript**            |
| -------------------------- | :-----------------------------------: | :---------------------------------: |
| Highlighted the errors     | Static Types (set during development) | Dynamic Types (resolved at runtime) |
|                            |         Compiled(Transpiled)          |             Interpreted             |
| Support optional parameter |                   O                   |                  X                  |

<br>

## ✅ 타입 표기(Type Annotation)

TypeScript는 Type Annotation을 사용하여 변수, 함수 또는 함수 반환 값의 데이터 Type을 지정합니다.<br>
특정 Type의 식별자에 Type Annotation을 사용하면 해당 Type으로만 사용할 수 있습니다.<br>

<img width="500" src="https://www.tektutorialshub.com/wp-content/uploads/2019/08/Declaring-the-Variable-in-Typescript.png" alt="Example of Type Annotations">

```
타입스크립트 코드에서 어떤 변수 또는 값의 타입을 표기 시 식별자 또는 값 뒤에 콜론(:)을 붙여 value: type 의 형태
```

<br>

```javascript

let num:number = 100;
// 위의 예제에서 
// 변수 num이 Number Type임을 명시하였지만
// num이 Number Type임을 선언하지 않앟아도
// 타입스크립트는 Number Type으로 인지한다.

```

```javascript

let num = 10;
let user: string = "bee";

console.log(num === user)
// errors :
// This condition will always return 'false' since the types 'number' and 'string' have no overlap.

```

> [(참고) Type Annotations in TypeScript](https://www.tektutorialshub.com/typescript/type-annotation-in-typescript/)


<br>

## ✅ 타입 단언(Type Assertions)

개발자가 해당 타입에 대해 TypeScript보다 더 잘 알고 있을 때 사용하는 타입 지정 방식으로,<br>
타입 단언은 다른 언어의 타입 변환(형 변환)과 유사하지만, 다른 특별한 검사를 하거나 데이터를 재구성하지는 않습니다.<br>
타입 단언은 런타임에 영향을 미치지 않으며, 온전히 트렌스파일러에서만 사용됩니다.<br>
타입 스크립트는 개발자가 필요한 어떤 특정 검사를 수행했다고 인지합니다.

```javascript
// 형태1) "angle-bracket" 문법
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

<br>

```javascript
//  형태2) as 문법 
//  TypeScript를 JSX와 함께 사용할 때는, as-스타일의 단언만 허용됩니다.
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

<br>

#### 🚩 What is the difference between Type Casting and Type Assertions?
올바른 용어는 타입 단언(Type Assertions)입니다.<br>
대게 캐스팅(Casting)이란 말은 실행 시간(runtime)에 어떤 동작이 일어날 것임을 내포하기 때문입니다.<br>
하지만 타입 단언(type assertions)은 순수하게 컴파일 시간 구성물이고 코드가 어떤 식으로 분석되길 원하는지 컴파일러에게 힌트를 제공하는 수단입니다.(However, type assertions are purely a compile time construct and a way for you to provide hints to the compiler on how you want your code to be analyzed.)<br>
> [(참고) basarat, Typescript DeepDive](https://basarat.gitbook.io/typescript/type-system/type-assertion)<br>
> [(참고) reddit, What is the difference between type casting and type assertion?](https://www.reddit.com/r/typescript/comments/l0fvd0/what_is_the_difference_between_type_casting_and/)


<br>

### 😶 JavaScript : 타입 캐스팅(Type Casting) 

개발자간 의도적으로 값의 타입을 변환하는 것을 명시적 타입 변환(Explicit coercion)이라고도 합니다.

```javascript

var decimal = '100';

// 명시적 타입 변환
// 문자를 숫자로 타입 캐스팅 할 경우
console.log(parseInt(decimal)) // (number type) 100
```

<br>

## ✅ 타입 선언(Type Declaration)

### ✔️ 변수 선언

```javascript
// 1. 변수의 타입 선언
let [Indentifier]: [type] = [value];
var [Indentifier]: [type] = [value];
const [Indentifier]: [type] = [value];
const obj: {
    lat: number,
    lon: number,
} = {
    lat: 37.5,
    lon: 127.5,
};
```

### ✔️ 함수 정의

```javascript
// 2. 함수의 타입 정의
// 함수의 파라미터에 타입을 정의하는 방식
// 2-1. 함수의 기본적인 타입 정의
function sum(a: number, b: number) {
    return a + b;
}

// 함수의 반환 값에 타입을 정의하는 방식
function Add(): number {
    return 10;
}

// 함수의 타입을 정의하는 방식
function Total(a: number, b: number): number {
    return a + b;
}

// 함수의 옵셔널 파라미너
function log(a: string, b?: string, c?: string) {
    // 특정 파라미터의 선택적 사용을 위해서 ? 선언
}
log('hello ts', 'abc');

// 함수의 파라미터 그리고 리턴값에는 타입 annotation이 필요합니다
var user: string = 'Bee';
function identity(user: string): string {
    return user;
}

// 2-2. 화살표 함수의 타입 정의
const sum: (a: number, b: number) => number = (a, b) => a + b;
```

<br>


> **📌 선언(declaration)과 정의(definition) :**<br>
> ECMAScript사양에서 변수는 '선언한다'라고 표현하고, 함수는 '정의한다'라고 표현하였습니다.<br>
> 이에 ECMAScript사양에서 사용하는 용어를 최대한 반영하여 변수는 선언, 함수는 정의한다고 표현하고자 합니다.<br>
> (참고) 모던 자바스크립트 Deep Dive: 자바스크립트의 기본 개념과 동작원리


<br>

#### 😶 타입 단언보다는 타입 선언을 사용하기(Prefer Type Declarations to Type Assertions)


> [(참고) 공식문서, type-assertions](https://devdocs.io/typescript/2/everyday-types#type-assertions)<br>
> [(참고)basarat, assertion consideredharmful](https://basarat.gitbook.io/typescript/type-system/type-assertion#assertion-considered-harmful)<br>
> [(참고)basarat, double assertion](https://basarat.gitbook.io/typescript/type-system/type-assertion#double-assertion)

<br>

#### 😶 타입 표기(Type Annotation)와 타입단언(Type Assertion)의 차이점

> [(참고) Type Annotation vs Assertion in Typescript — one important difference](https://medium.com/@bsalwiczek/type-annotation-vs-assertion-in-typescript-one-important-difference-4f4df715b5fe)

<br>

## ✅ 데이터 타입(Data Types)

|                     | Type      | JS  | Description                                                                                                                                                                                                                            |
| ------------------- | --------- | --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primitive Types     | number    | O   | 숫자(정수와 실수, Infinity, NaN)                                                                                                                                                                                                       |
|                     | string    | O   | 문자열                                                                                                                                                                                                                                 |
|                     | boolean   | O   | 진위여부(true, false)                                                                                                                                                                                                                  |
|                     | null      | O   | 값이 없음을 것을 명시                                                                                                                                                                                                                  |
|                     | undefined | O   | 값을 할당하지 않은 변수의 초기값                                                                                                                                                                                                       |
|                     | symbol    | O   | 유하고 수정 불가능한 데이터 타입, 주로 객체 프로퍼티들의 식별자로 사용(ES6에서 추가)                                                                                                                                                   |
|                     | bigint    | O   | 모든 크기의 정수를 보유                                                                                                                                                                                                                |
|                     | any       |     | 타입 추론(type inference)할 수 없거나 타입 체크가 필요없는 변수에 사용<br>어떤 타입의 값이라도 할당 가능<br>**any 타입 사용은 지양**                                                                                                   |
|                     | unknown   |     | 모든 타입의 값이 할당<br>unknown 타입으로 선언된 변수는 any 를 제외한 다른 타입으로 선언된 변수에 할당될 수 없음<br>unknown 타입으로 선언된 변수는 프로퍼티에 접근할 수 없으며, 메소드를 호출할 수 없으며, 인스턴스를 생성할 수도 없음 |
|                     | void      |     | 일반적으로 함수에서 반환값이 없을 경우 사용                                                                                                                                                                                            |
|                     | never     |     | 결코 발생하지 않는 값                                                                                                                                                                                                                  |
| Non-primitive Types | object    | O   | 객체형(참조형)                                                                                                                                                                                                                         |
|                     | array     |     | 배열                                                                                                                                                                                                                                   |
|                     | tuple     |     | 고정된 요소수 만큼의 타입을 미리 선언후 배열을 표현                                                                                                                                                                                    |
|                     | enum      |     | 열거형. 숫자값 집합에 이름을 지정한 것                                                                                                                                                                                                 |

타입스크립트는 소문자 형태의 기본형(예: string) 과 래퍼 객체(wrapper obejct) 타입(예: String)을 별도로 모델링합니다.

```javascript
// 10-2
// string을 String으로입력하는 실수를 하더라도 처음에는 잘 동작하는 것 처럼 보임 ㅜㅜ
function getStringLen(foo: String) {
    return foo.length;
}

getStringLen('hello'); // OK
getStringLen(new String('hello')); // OK
```

<br>

```javascript
// 10-3
// string을 매개변수로 받는 메서드에 String 객체를 전달할 경우
function isGreeting(phrase: String) {
    return ['hello', 'good day'].includes(phrase);
    // ~~~~~~
    // Argument of type 'String' is not assignable to parameter
    // of type 'string'.
    // 'string' is a primitive, but 'String' is a wrapper object;
    // prefer using 'string' when possible
}
```

string 은 string에 할당 할 수 있지만 String은 string에 할당 할수 없습니다.<br>
타입스크립트는 기본형 타입을 래퍼 객체에 할당하는 것을 허용합니다. <br>
그러나 레퍼 객체에 할당하는 구문은 오해하기 쉽고, 굳이 그렇게 할 필요가 없습니다.

> **Effective Typescript**<br>
> Item 10 : Avoid Object Wrapper Types (String, Number, Boolean, Symbol, BigInt)

<br>

### ✔️ number

TypeScript는 JavaScript와 동일하게 ECMASCript 사양에 따르며 숫자타입의 값은 배정밀도 64비트의 부동 소수점 형식을 따릅니다.
모든 수를 실수로 처리하며, 정수만 표기하기 위한 데이터 타입(integer type)이 별도로 존재하지 않습니다.

```javascript
let integer: number = 65; // 정수
let double: number = 65; // 실수
let negative: number = -65; // 음의 정수
let decimal: number = 100; // 10진수 리터럴
let binnary: number = 0b01000001; // 2진수 리터럴
let octal: number = 0o101; // 8진수 리터럴
let hex: number = 0x41; // 16진수 리터럴
let notANumber: number = NaN;
let underscoreNum: number = 1_000_000_000;

console.log(binnary); // 65
console.log(octal); // 484
console.log(hex); // 65
console.log(binnary === octal); // true
console.log(octal === hex); // true
```

> (참고) 모던 자바스크립트 Deep Dive: 자바스크립트의 기본 개념과 동작원리

### ✔️ string

문자열(string) 타입은 자바스크립트와 마찬가지로 작은 타옴표(`'`), 큰 따옴표(`"`), 백틱(`` `)으로 텍스트를 감싼다.
TypeScript에서도 문자열은 원시(primitive) 타입이며, 변경 불가능한 값(immutable value)이다.

```javascript
let userName: string = 'bee';
console.log(userName); // bee
console.log(typeof userName); // string

// Template String(ES6)
let language: string = 'spanish';
let sentence: string = `(${language}) hola, ${userName}.`;
console.log(sentence); // (spanish) hola, bee.
console.log(typeof sentence); // string
```

### ✔️ boolean

가장 기본적인 데이터 타입 중 하나인 `boolean`은 참(true)과 거짓(false) 두가지 값을 가집니다.

```javascript
let isSaved: boolean = false;
isSaved = true;

console.log(typeof isSaved); //boolean
console.log(isSaved); // true
```

### ✔️ null

```javascript
let dataNull: null = null; //dataNull is a variable of type null
console.log(typeof dataNull); //object
```

> [`null` 변수가 `object`는 자바스크립트 버그](https://2ality.com/2013/10/typeof-null.html)

### ✔️ undefined

```javascript
let dataUndefined: undefined; //dataUndefined is a variable of type undefined
console.log(typeof dataUndefined); //undefined
```

기본적으로 `null`과 `undefined`는 모든 타입들의 서브타입이라고 할 수 있습니다.<br>
즉 다른 타입으로 지정된 변수에도 `null`과 `undefined`를 할당할 수 있습니다.<br>
`--strictNullChecks` flag를 사용하게 되면 `null`과 `undefined`는 `void 타입`의 변수에만 할당할 수 있습니다.<br>
TypeScript에서는 해당 flag사용을 권장하고 있습니다.<br>

> (참고) [Basic Types, jBee](https://jbee.io/typescript/TS-1-Basic-Types/)

#### 😶 `null` 과 `undefined` 차이점
null 과 undefined 모두 값이 없음(no value)을 의미, always falsy를 나타낸다 점에서 동일하나 미묘한 차이가 있다.

```javascript
// 타입 스크립트에서 null과 undefined 모두 falsy value
let a = undefined;
let b = null;

if (!a) console.log('false'); //false
if (!b) console.log('false'); //false

console.log(true && null); //null
console.log(true || null); //true
console.log(true && undefined); //undefined
console.log(true || undefined); //true
```

typeof 연산자를 사용하여 object를 반환할 때 `null`이 아닌 `undefined`를 검사할 수 있습니다.

```javascript
let nVar: any;
console.log(nVar); //undefined
console.log(typeof nVar); //undefined
console.log(nVar == undefined); //true
console.log(nVar === undefined); //true

nVar = null;
console.log(nVar); //null
console.log(typeof nVar); //object     //Do not use typeof for null
console.log(nVar == null); //true
console.log(nVar === null); //true
```

|                       null                        |                undefined                 |
| :-----------------------------------------------: | :--------------------------------------: |
|          intentional absence of a value           |     unintentional absence of a value     |
|                 명시적(explicit)                  |             암묵적(implicit)             |
|          변수에 Null을 할당해야 합니다.           | 할당되지 않은 변수의 기본값은 undefined  |
| The typeof null is an object. (and not type null) |    Typeof undefined is undefined type    |
|         null을 숫자로 변환하면 0이 됩니다         | undefined를 숫자로 변환하면 NaN이 됩니다 |
| undefined as a JSON (JavaScript Object Notation)  |          a valid value in JSON.          |

유니온 유형에만 사용되며 독립적인 형태로는 사용되지 않습니다

```javascript
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
```

[(영상): 더글락스 크록포드, null을 사용하지 말아야할 이유](https://www.youtube.com/watch?v=PSGEjv3Tqo0&feature=youtu.be&t=9m21s)

### ✔️ symbol(Less Common Primitives as bigint)

```javascript
// 타입일 경우 (소문자) symbol 지정 가능
// 함수일 경우 (대문자) Symbol
console.log(Symbol('foo') === Symbol('foo')); // false

const symbol = Symbol();

const obj = {
    [symbol]: 'value',
};

// obj['symbol']; // 문자열을 통해 접근 X
obj[symbol];
```

```javascript
let sym1 = Symbol('key');
let sym2 = Symbol('key');
sym1 === sym2; // false, symbols are unique
```

### ✔️ object

```javascript
let obj: object = {};

let person: object = {
    name: 'bee',
    age: 100,
};

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
```

#### 😶 Optional Properties

```javascript
function printName(obj: { first: string, last?: string }) {
    // ...
}

// Both OK
printName({ first: 'Bob' });
printName({ first: 'Alice', last: 'Alisson' });
```

JavaScript에서 존재하지 않는 속성에 액세스하면 런타임 오류가 아니라 `undefined` 값을 얻을 수 있다.<br>
따라서 Optional Property를 읽을 때는 `undefined` 확인해야 한다

```javascript
function printName(obj: { first: string; last?: string }) {
    // Error - might crash if 'obj.last' wasn't provided!
    console.log(obj.last.toUpperCase());
    Object is possibly 'undefined'.

    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }

    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());
}
```

### ✔️ array

```javascript
// 배열 선언 방법 1
const arr1: string[] = ['red', 'orange', 'yellow'];
console.log(arr1.length); // 3
console.log(typeof arr1); // object
// 배열 선언 방법 2 : 제네릭 배열 타입(Array<elemType>:)
const arr2: Array<string> = ['red', 'orange', 'yellow'];
console.log(arr2.length); // 3
console.log(typeof arr2); // object
```

### ✔️ tuple

튜플은 배열의 길이가 고정되고 각 요소의 타입이 고정되어 있는 배열<br>
(단, 요소들의 타입이 모두 같을 필요는 없다)

```javascript
let address: [string, number] = ['seoul', 100];

// 정해진 인덱스에 위치한 요소에 접근하면 해당 타입이 표시
console.log(address[0].substring(1)); // seoul
// 정해진 인덱스 외에 다른 인덱스에 있는 요소에 접근하면, 오류가 발생
console.log(address[5].toString());
//Executed JavaScript Failed: Cannot read properties of undefined (reading 'toString')
```

### ✔️ any

    모든 타입을 할당 받을 수 있는 타입<br>
    string, number등의 모든 타입을 통칭

```javascript
let todoItems: any;
```

### ✔️ unknown

```javascript

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
```

-   Typescript 3.0 버전 부터 지원
-   `any`보다 Type-safe한 타입
-   `any`를 제외한 다른 타입으로 선언된 변수에 할당 될 수 없음
-   `unknown`타입으로 선언된 변수는 프로퍼티에 접근할 수 없으며, 메소드를 호출할 수 없으며, 인스턴스를 생성할 수 없다. (단, Type Guard 와 함께라면 가능하다.)

### ✔️ enum

특정 값들의 집합을 의미하는 자료형으로 명명된 숫자 상수(named numeric constant)의 집합으로 열거형(enumerated type)이라고 부른다.

> 타입스크립트에서는 문자형 이넘과 숫자형 이넘을 지원

1. 숫자형 이넘

```javascript
enum Shoes{
    Nike,
    Addidas,
}

var myShoes =  Shoes.Addidas;
console.log(myShoes); //1
```

2. 문자형 이넘

```javascript
enum Shoes {
    Nike = '나이키',
    Addidas = '아디다스',
}

var myShoes =  Shoes.Addidas;
console.log(myShoes); //아디다스
```

3. 이넘의 활용 사례

```javascript
// 예제1
function askQuestion(answer: string){
    if( answer === Answer.Yes){
        console.log('정답입니다.');
    }else{
        console.log('오답입니다.');

    }
}
// console.log(askQuestion('yes'));
// console.log(askQuestion('y'));

console.log(Answer.Yes); // Y
```

```javascript
// 예제2
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

```

값을 생략하면 typescript는 0부터 시작하는 값으로 초기화

```javascript
// 예제2-1
enum Weekdays {
  Monday,          //Initialized with zero
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

console.log(Weekdays.Monday)         //0
console.log(Weekdays["Monday"])      //0
console.log(Weekdays["1"])           //Tuesday

```

### ✔️ void

값을 반환하지 않는 함수의 return type을 지정할 때 사용합니다<br>
보통 함수에서 반환 값이 없을 때 반환 타입을 표현하기 위해 쓰이는 것을 볼 수 있습니다<br>
명시적으로 반환 값을 설정하지 않는 함수는 undefined를 반환하기에 TypeScript에서는 void를 명시합니다.

```javascript
function warnUser(): void {
    console.log('There is return');

    return;
}

// The inferred return type is void
function noop() {
    return: undefined;
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
```

void를 타입 변수를 선언하는 것은 유용하지 않은데,
왜냐하면 그 변수에는 null(--strictNullChecks을 사용하지 않을 때만 해당) 또는 undefined 만 할당할 수 있기 때문입니다

```javascript
let nothing: void = undefined;
nothing = null; // 성공  `--strictNullChecks` 을 사용하지 않을때만
```

### ✔️ never

발생하지 않는 경우에 대한 타입

```javascript
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
```

> [(참고) toast, never타입 완벽가이드](https://ui.toast.com/posts/ko_20220323)

<br>

## ✅ 다양한 연산자를 사용하여 새로운 타입 정의

### ✔️ 유티온 타입 (Union Types) : `|`

`or`를 의미하는 연산자(`|`)를 이용하여 하나 이상의 타입을 인자로 사용하는 것이 가능<br>
유니언 타입은 정확히 하나의 원시 값을 포함하고 있는 원시 타입의 서브타입<br>

```javascript
function printId(id: number | string) {
    console.log('Your ID is: ' + id);
}
// OK
printId('holabee'); // "Your ID is: holabee"
// OK
printI('1000'); /// Your ID is: 1000
// Error
// { myID: 2000 } 는 'string | number' 타입의 매개 변수에 할당할 수 없습니다.
printId({ myID: 2000 }); // Your ID is: [object Object]
```

**유니온 타입(Union Type)의 장점**

```javascript
// any를 사용하는 경우
function getAge(age: any) {
    age.toFixe(); // 에러 발생, age의 타입이 any로 추론되기 때문에 숫자 관련된 API를 작성할 때 코드가 자동 완성되지 않는다.
    return age;
}

// 유니온 타입을 사용하는 경우
function getAge(age: number | string) {
    if (typeof age === 'number') {
        age.toFixed(); // 정상 동작, age의 타입이 `number`로 추론되기 때문에 숫자 관련된 API를 쉽게 자동완성 할 수 있다.
        return age;
    }
    if (typeof age === 'string') {
        return age;
    }
    return new TypeError('age must be number or string');
}
```

이처럼 any를 사용하는 경우 마치 자바스크립트로 작성하는 것처럼 동작을 하고 유니온 타입을 사용하면 타입스크립트의 이점을 살리면서 코딩할 수 있습니다.

#### 😶 타입 가드(Type guards)

: 특정 타입을 타입의 범위를 좁혀나가는(필터링 하는) 과정

<br>

```javascript
// 타입 가드 예제1
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value muste be string or number');
}

// 타입 가드 예제2
function compareValues(a: string | number, b: string | number) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a === b ? 0 : a < b ? -1 : 1;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b);
    }
}
```

<br>

> [(참고) Unions](https://typescript-kr.github.io/pages/tutorials/ts-for-functional-programmers.html)

### ✔️ 인터섹션 타입(Intersection Type) : `&`

여러 타입을 모두 만족하는 하나의 타입<br>

```javascript
interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;

function draw(circle: Colorful & Circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
}

// okay
draw({ color: 'blue', radius: 42 }); // Color was blue Radius was 42
draw({ color: 'red', radius: 42 }); // Color was red Radius was 42
```

**유니온 타입과 인터섹션 타입의 차이점**
<br>
<img src="https://i.stack.imgur.com/fY4gL.png" >
<br>

```javascript
// 타입의 선택지가 있음
function askSomeone(someone: Developer | Person) {
    someone.name;
}

askSomeone({ name: 'developer', skill: 'web dev' });
askSomeone({ name: 'bee', age: 333 });

// 새로운 타입을 생성
function askSomeone(someone: Developer & Person) {
    someone.age;
    someone.skill;
    someone.name;
}

askSomeone({ name: 'developer', skill: 'web dev', age: 333 });
```

<br>

## ✅ 인터페이스 (Interface)

인터페이스는 상호 간에 정의한 약속 혹은 규칙으로 아래 범주 5개에 대해 약속을 정의하는 것이 가능

-   객체의 스펙(속성과 속성의 타입)
-   함수의 파라미터
-   함수의 스펙(파라미터, 반환 타입 등)
-   배열과 객체를 접근하는 방식
-   클래스

1. 변수에 인터페이스 활용

```
var seho: User = {
  age: 33,
  name: "seho",
};
```

2. 함수에 인터페이스 활용

```
function getUser(user: User){
  console.log(user);
}
```

3. 함수의 스펙(구조)에 인터페이스를 활용

```
interface Sumfunction{
  // 인자 타입              // 반환 타입
  (a : number, b: number) : number;
}

let sum : Sumfunction;
sum = function(a: number, b: number):number{
  return a + b ;
}
```

4. 인덱싱 방식을 정의하는 인터페이스

```
interface StringArra{
  [index: number]: string;
}

var arr = ['a', 'b', 'c'];
arr[0] // 'a'
```

5. 딕셔너리 패턴

```
interface StringRegexDictionary{
  [key : string]: RegExp;
}

var obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}
```

6. 인터페이스 확장

```
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
```

firstName 및 lastName 필드를 갖고 있는 객체를 나타내는 인터페이스를 사용합니다. <br>
TypeScript에서, 내부 구조가 호환되는 두 타입은 서로 호환 됩니다. <br>
그래서 명시적인 implements 절 없이, 인터페이스가 요구하는 형태를 사용하는 것만으로도 인터페이스를 구현할 수 있습니다.<br>

```javascript
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = { firstName: 'Jane', lastName: 'User' };

document.body.textContent = greeter(user);
```

**타입과 인터페이스의 차이점**
: 타입의 확장 가능 여부

> 인터페이스는 확장이 가능한데 반해 타입 별칭은 확장이 불가능하므로 가능한한 type 보다는 interface로 선언해서 사용하는 것을 추천

-   참고 : [좋은 소프트웨어는 확장이 용이해야 한다는 원칙의 위키 피디아 글](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)

<br>

## ✅ 타입별칭(Type Aliases)

특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 의미

> 새로운 타입 값을 하나 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것과 같다.

```javascript
// string 타입을 사용할 때
const name: string = 'bee';

// 타입 별칭을 사용할 때
type User = string;
const name: User = 'bee';

// interface 레벨의 복잡한 타입에도 별칭 부여 가능
type Developer = {
    name: string,
    skill: string,
};

// 타입별칭에 제네릭 사용
type User<W> = {
    name: W,
};

// 타입을 정의할 수 있는 모든 곳에 별칭 부여 가능
type greeting = string;
var str: greeting = 'hello';

type Todo = { id: string, title: string, done: boolean };
function getTodo(todo: Todo) {}
```

<br>

## ✅  매핑 타입 (Mapped types)

기존 타입을 가져와 선택적 프로퍼티로 만드는 것

<br>

## ✅ 클래스

```
class Person{
    private name : string;
    public age : number;
    readonly log: string;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}
```

## ✅ 제네릭(Generics)

재사용성이 높은 컴포넌트를 만들때 자주 활용되는 특징

-   한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는 데 사용

```
function logText<T>(text: T): T{
    console.log(text);
    return text;
}

logText<string>('hi');
```

1. 기존 타입 정의 방식과 제네릭의 차이점 - 함수 중복 선언의 단점

```
// 기존 함수의 경우 여러 타입을 받을 수 있음
// function logText(text){
//     console.log(text);
//     return text;
// }

// logText(10);
// logText('hi');
// logText(true);


// 타입
function logText(text: string){
    console.log(text);
    // text.split('').reverse().joing('');
    return text;
}


function logNumber(num: number){
    console.log(num);
    return num;
}

console.log(logText('a'));
console.log(logNumber(10));
```

> 단순히 타입을 다르게 받기 위해서 중복된 코드를 계속해서 생산하는 것은 코드의 가독성 및 전체 코드가 비대해지므로 유지보수하기가 어려움

2. 기본 타입 정의 방식과 제네릭의 차이점 - 유니온 타입을 이용한 선언 방식의 문제점

```
function logText(text: string | number){
    console.log(text);
    // text.
    // 문제1.
    // string 과 number의 교집합(공통)으로 작성가능한 api 에 대해서만 자동 완성(preview)을 제공
    return text;
}
const a = logText('a');
a.split('');
// 문제2.
// 정확하게 a 변수가 string 이라는 타입의 추론이 불가능하여 오류가 발생
```

3. 제네릭의 장점과 타입추론에서의 이점

```
function logText<T>(text: T):T { // 인자와 반환값이 동일하도록 제네릭을 이용
    console.log(text);
    return text;
}

const str = logText<string>('a');
str.split('');

// 장점1.
// 타입의 구성이 용이

const login = logText<boolean>(true);
// 장점2.
// login 변수가 boolean 타입임을 추론 가능
```

4. 제네릭 실전 예제 - 제네릭을 이용한 타입 정의

    > - 파일1. : LearnTypeScript\3. introduction to TS\dropdown-generic.html
    > - 파일2. : LearnTypeScript\3. introduction to TS\dropdown-generic.ts

5. 인터페이스에 제네릭을 선언하는 방법

```
interface Dropdown{
    value: string;
    selected : boolean;
}

const object: Dropdown = { value: 'sw', selected :  false };

// 인터페이스에 제네릭을 선언하는 방법
// : 제네릭을 사용하여 value의 타입의 변경 가능하게 변경
interface Dropdown<T>{
    value: T;
    selected : boolean;
}

const object: Dropdown<string> = { value: 'sw', selected :  false };
```

6. 제네릭의 타입 제한

```
// 정의된 타입이 아닌 경우
function logTextLength<T>(text: T[]): T[] {
    text.forEach(function(text){
        console.log(text);
    })
    return text;
}

logTextLength<string>(['hi', 'abc']);

// 정의된 타입 이용할 경우
interface LengthType{
    length: number;
}

function textLength<T extends LengthType>(text: T):T{
    text.length;
    return text;
}

textLength('a');
// textLength(10);
textLength({length : 10});


// keyof
// 제네릭의 타입의 범위를 협소 시킴
interface ShoppingItem{
    name : string,
    price : number,
    stock: number,
}

// extedns?  기존에 정의되어 있는 인터페이스 혹은 타입의 확장할 때 쓰는 키워드
function getShoppingOption<T extends keyof ShoppingItem>(itemOption: T):T {
    return itemOption;
}

// getShoppingOption(10);
// getShoppingOption<string>('a');
getShoppingOption('name')
```

## Promise를 이용한 API 함수 타입 정의

```
function fetchItems(): Promise<string[]>{
    var items:string[] = ['a', 'b', 'c'];
    return new Promise(function(resolve){
        resolve(items);
    });
}

fetchItems();
```

## ✅ 타입 추론(Type Inference)

: 타입스크립트가 어디서, 어떻게 타입을 추론하는지에 대한 동작을 의미

1. 타입 추론
   타입 표기가 없는 경우 타입 정보를 제공하기 위해 타입을 추론

```javascript
// 예제
let x = 3;
// x에 대한  타입을 따로 지정하지 않더라도 일단 x는 number로 간주하는것을 확인할 수 있습니다.
// 이처럼 만약 타입 선언을 생략하면 할당되는 과정에서 동적으로 타입이 결정됩니다.
// 변수를 선언하거나 초기화하고, 변수, 속성, 인자의 기본 값, 함수의 반환 값 등을 매개 변수의 기본값을 설정할 때 타입 추론이 일어납니다
```

> 동적 타입 언어는 타입 추론에 의해 변수의 타입이 결정된 후에도 같은 변수에 여러 타입의 값을 교차하여 할당할 수 있다.<br>
> 하지만 정적 타입 언어는 타입이 결정된 후에는 타입을 변경할 수 없다. <br>
> TypeScript는 정적 타입 언어이므로 타입 추론으로 타입이 결정된 이후, 다른 타입의 값을 할당하면 에러가 발생한다. <br> > [poimweb, 타이핑 - 3. 타입추론](https://poiemaweb.com/typescript-typing#3-%ED%83%80%EC%9E%85-%EC%B6%94%EB%A1%A0)

<br>

```javascript
// 인터페이스에서 타입을 받아서 내부적으로 사용할 수 있는 제네릭 문법 정의
interface Dropdown<T> {
    value: T;
    title: string;
}

var shoppingItem: Dropdown<string> = {
    value: 'abc',
    title: 'hello',
};
```

1. [가장 적절한 타입 (Best common type)](https://www.typescriptlang.org/docs/handbook/type-inference.html#best-common-type)

> 타입은 보통 몇 개의 표현식(코드)을 바탕으로 타입을 추론합니다.<br>
> 그리고 그 표현식을 이용하여 가장 근접한 타입을 추론하게 되는데 이 가장 근접한 타입을 Best Common Type이라고 합니다.<br>
> Best Common Type 알고리즘으로 다른 타입들과 가장 잘 호환되는 타입을 선정합니다.<br> > [joshua, 타입스크립트 핸드북](https://joshua1988.github.io/ts/guide/type-inference.html#%ED%83%80%EC%9E%85-%EC%B6%94%EB%A1%A0%EC%9D%98-%EA%B8%B0%EB%B3%B8)

```javascript
let x = [0, 1, null];
```

2. 복잡한 구조에서의 타입 추론 방식

```javascript
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;

    // extends Dropdown<K>를 통해
    // 암묵적으로
    // value,
    // title,
    // 들어옴
}

var detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'a',
    tag: 'b',
};
```

3. 문맥상의 타이핑(Contextual Typing)

```javascript
var arr = [1, 2, true, '3'];
// var arr:(string | number | boolean)
```

---

## Reference

-   [공식문서](https://www.typescriptlang.org/)
-   [이펙티브 타입스크립트](http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9788966263134)
-   [MDN : TypeScript](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
-   [TypeScript Types: The First 500 Years (tsconf 2021 talk)](https://www.youtube.com/watch?v=uN1zuV4DGRY&t=4s)
-   [joshua, 타입스크립트 핸드북](https://joshua1988.github.io/ts/intro.html)
-   [타입스크립트 가이드](https://yamoo9.gitbook.io/typescript/)
-   [타입스크립트 설정 파일 옵셥](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
-   [타입스크립트 Playground](https://www.typescriptlang.org/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCoASMFmgY7p7ehCTkVOle4jUMdRLYTqCc8LEZzCZmoNJODPHFZZXVtZYYkAAeRJTInDQS8po+rf40gnjbDKv8LqD2jpbYoACqAEoAMsK7sUmxkGSCc+VVQQuaTwVb1UBrDYULY7PagbgUZLJH6QbYmJAECjuMigZEMVDsJzCFLNXxtajBBCcQQ0MwAUVWDEQNUgADVHBQGNJ3KAALygABEAAkYNAMOB4GRogLFFTBPB3AExcwABT0xnM9zsyhc9wASmCKhwDQ8ZC8iElzhB7Bo3zcZmY7AYzEg-Fg0HUiS58D0Ii8AoZTJZggFSRxAvADlQAHJhAA5SASAVBFQAeW+ZF2gldWkgx1QjgUrmkeFATgtOlGWH0KAQiBhwiudokkuiIgMHBx3RYbC43CCJSAA)
-   [바벨](https://babeljs.io/)
-   [let & const](https://joshua1988.github.io/es6-online-book/const-let.html)
-   [Array filter Api;Array.prototype.filter()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
-   [자바스크립트 프로토타입과 상속](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
-   [자바스크립트 객체](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)
-   [MDN Array map() API](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
-   [문맥을 이용한 타입추론 방식](https://joshua1988.github.io/ts/guide/type-inference.html#%EB%AC%B8%EB%A7%A5%EC%83%81%EC%9D%98-%ED%83%80%EC%9D%B4%ED%95%91-contextual-typing)
-   [VSCode 타입스크립트 소개 문서](https://code.visualstudio.com/docs/languages/typescript#_code-suggestions)
-   [VSCode Language Server Extension 가이드](https://code.visualstudio.com/api/language-extensions/language-server-extension-guide)
-   [Language Server](https://langserver.org/)
-   [Language Server Protocol](https://docs.microsoft.com/ko-kr/visualstudio/extensibility/language-server-protocol?view=vs-2019)
-   [ETC:transpile 과 compile의 비교](https://ideveloper2.tistory.com/166)
-   [Transpiler vs Compiler](https://howtodoinjava.com/typescript/transpiler-vs-compiler/#:~:text=Transpilers%2C%20or%20source%2Dto%2D,converts%20Typescript%20code%20to%20JavaScript.)
-   [Documentation- Typescript 3.0](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html)
-   [The unknown Type in Typescript](https://mariusschulz.com/blog/the-unknown-type-in-typescript)
-   [unknown Type](https://jbee.io/typescript/TS-9-unknown/)
-   [유니언 열거형과 열거형 멤버타입](https://typescript-kr.github.io/pages/enums.html#%EC%9C%A0%EB%8B%88%EC%96%B8-%EC%97%B4%EA%B1%B0%ED%98%95%EA%B3%BC-%EC%97%B4%EA%B1%B0%ED%98%95-%EB%A9%A4%EB%B2%84-%ED%83%80%EC%9E%85-union-enums-and-enum-member-types)
-   [enum vs const enum](https://jbee.io/typescript/TS-8-enum-vs-const-enum/)
-   [자바스크립트 개발자를 위한 타입 스크립트](https://ahnheejong.gitbook.io/ts-for-jsdev/03-basic-grammar/enums)
-   [Difference between TypeScript and JavaScript](https://www.geeksforgeeks.org/difference-between-typescript-and-javascript/#:~:text=TypeScript%20is%20known%20as%20an,Interfaces%20but%20JavaScript%20does%20not.)
-   [Difference between TypeScript and JavaScript](https://www.javatpoint.com/javascript-vs-typescript)
-   [TypeScript - 정적 타이핑](https://poiemaweb.com/typescript-typing)
-   [Null Vs Undefined in TypeScript](https://www.tektutorialshub.com/typescript/null-undefined-in-typescript/)
-   [Typescript Enum All you need to know](https://www.tektutorialshub.com/typescript/typescript-enum/#where-to-use-enum)
-   [Typescript from beginner to Strong Typing Part-1](https://tkssharma.com/typescript-from-beginner-to-strong-typing-part-1/)

## 관련 강의 및 도서

-   [이펙티브 타입스크립트](http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9788966263134) 도서
-   [타입스크립트 입문 - 기초부터 실전까지](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8?inst=f1ae9299&utm_source=blog&utm_medium=githubio&utm_campaign=captianpangyo&utm_term=banner) 온라인 강의

## 개발 환경

-   [Chrome](https://www.google.com/intl/ko/chrome/)
-   [Visual Studio Code](https://code.visualstudio.com/)
-   [Node.js LTS 버전(v10.x 이상)](https://nodejs.org/ko/)
-   [Git](https://git-scm.com/downloads)

---

### :unicorn: 첫 번째 프로젝트 - 할 일 관리 애플리케이션

> 경로 : LearnTypeScript\4. Project\_\_To do Application

---
