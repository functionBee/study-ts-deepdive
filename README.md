# 타입스크립트(TypeScript)

자바스크립트의 상위 집합(A superset of JavaScript)<br>
마이크로소프트가 쓰고 관리하는 오픈 소스 언어<br>
TypeScript는 JavaScript로 변환되며 JavaScript가 실행하는 모든 환경에서 실행 가능<br>

```
🤭 OOPS 
번역하기가 애매한 경우 그냥 영문으로 내용 기재..😳
```

<br>

## [이펙티브 타입스크립트(Effective TypeScript)](https://github.com/holabee/LearnTypeScript/tree/main/0.%20Study_EffectiveTypeScript)

: 이펙티브 타입스크립트 도서를 포함허여 타입 스크립트 관련 내용 상세 정리

<br>

## 타입 스크립트 실행 환경 설치

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

## 타입 표기(Type annotation)

타입스크립트 코드에서 어떤 변수 또는 값의 타입을 표기 시 식별자 또는 값 뒤에 콜론(:)을 붙여 value: type 의 형태로 표기

```javascript

let  [Indentifier] : [type-annotation]  = value ;
var  [Indentifier] : [type-annotation]  = value ;
const [Indentifier] : [type-annotation]  = value ; 

```

<br>

## TS와 JS 차이점(Difference between TypeScript and JavaScript)

|                            |            **TypeScript**             |           **JavaScript**            |
| -------------------------- | :-----------------------------------: | :---------------------------------: |
| Highlighted the errors     | Static Types (set during development) | Dynamic Types (resolved at runtime) |
|                            |       Compiled(Transpiled)            |             Interpreted             |
| Support optional parameter |                   O                   |                  X                  |

<br>

## 데이터 타입(Data Types)

|                | Type      | JS | Description                                                                                                                                                                                                                      |
|----------------|-----------|----|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Primitive Type | number    | O  | 숫자(정수와 실수, Infinity, NaN)                                                                                                                                                                                                     |
|                | string    | O  | 문자열                                                                                                                                                                                                                             |
|                | boolean   | O  | 진위여부(true, false)                                                                                                                                                                                                              |
|                | null      | O  | 값이 없음을 것을 명시                                                                                                                                                                                                                 |
|                | undefined | O  | 값을 할당하지 않은 변수의 초기값                                                                                                                                                                                                         |
|                | symbol    | O  | 유하고 수정 불가능한 데이터 타입, 주로 객체 프로퍼티들의 식별자로 사용(ES6에서 추가)                                                                                                                                                               |
| Object Type    | object    | O  | 객체형(참조형)                                                                                                                                                                                                                    |
|                | array     |    | 배열                                                                                                                                                                                                                             |
|                | tuple     |    | 고정된 요소수 만큼의 타입을 미리 선언후 배열을 표현                                                                                                                                                                              |
|                | enum      |    | 열거형. 숫자값 집합에 이름을 지정한 것                                                                                                                                                                                           |
|                | void      |    | 일반적으로 함수에서 반환값이 없을 경우 사용                                                                                                                                                                                      |
|                | unknown   |    | 모든 타입의 값이 할당<br>unknown 타입으로 선언된 변수는 any 를 제외한 다른 타입으로 선언된 변수에 할당될 수 없음<br>unknown 타입으로 선언된 변수는 프로퍼티에 접근할 수 없으며, 메소드를 호출할 수 없으며, 인스턴스를 생성할 수도 없음 |
|                | any       |    | 타입 추론(type inference)할 수 없거나 타입 체크가 필요없는 변수에 사용<br>var 키워드로 선언한 변수와 같이 어떤 타입의 값이라도 할당 가능 일반적으로 함수에서 반환값이 없을 경우 사용                                                |
|                | never     |    | 결코 발생하지 않는 값                                                                                                                                                                           |

<br>

1. Number

```javascript

let num: number = 10;
let decimal: number = 100; // 10진수 리터럴
let hex: number = 0xf00d; // 16진수 리터럴
let binnary: number = 0b1010; // 2진수 리터럴
let octal: number = 0o744; // 8진수 리터럴
let notANumber: number = NaN;
let underscoreNum: number = 1_000_000_000;

```

<br>

2. String

```javascript

let userName: string = 'bee';

// Template String(ES6)
let language: string = 'spanish';
let sentence: string = `(${language}) hola, ${userName}.`;
console.log(sentence); // (spanish) hola, bee.

```

<br>

3. Boolean

```javascript

let isSaved: boolean = false;
isSaved = true;

console.log(typeof isSaved); //boolean

```

<br>

4. Null

```javascript

let dataNull:null=null  //dataNull is a variable of type null
console.log(typeof(dataNull))  //object 

```

> [`null` 변수가 `object`는 자바스크립트 버그](https://2ality.com/2013/10/typeof-null.html)

<br>

5. Undefined

```javascript

let dataUndefined:undefined   //dataUndefined is a variable of type undefined
console.log(typeof(dataUndefined))   //undefined

```

> 기본적으로 `null`과 `undefined`는 모든 타입들의 서브타입이라고 할 수 있습니다. 즉 다른 타입으로 지정된 변수에도 `null`과 `undefined`를 할당할 수 있습니다.<br>
> `--strictNullChecks` flag를 사용하게 되면 `null`과 `undefined`는 `void 타입`의 변수에만 할당할 수 있습니다. TypeScript에서는 해당 flag사용을 권장하고 있습니다.<br>
> (참고) [Basic Types, jBee](https://jbee.io/typescript/TS-1-Basic-Types/)

**null 과 undefined 차이점**<br>
null 과 undefined 모두 값이 없음(no value)을 의미, always falsy를 나타낸다 점에서 동일하나 미묘한 차이가 있다.

```javascript

// 타입 스크립트에서 null과 undefined 모두 falsy value  
let a=undefined
let b=null

if (!a) console.log('false')        //false
if (!b) console.log('false')        //false

console.log(true && null)   //null
console.log(true || null)   //true
console.log(true && undefined)   //undefined
console.log(true || undefined)   //true

```

typeof 연산자를 사용하여 object를 반환할 때 `null`이 아닌 `undefined`를 검사할 수 있습니다.

```javascript

let nVar:any;
console.log(nVar)                     //undefined
console.log(typeof nVar)              //undefined
console.log(nVar==undefined)          //true   
console.log(nVar===undefined)         //true
 
nVar=null;
console.log(nVar)                     //null
console.log(typeof nVar)              //object     //Do not use typeof for null
console.log(nVar==null)               //true
console.log(nVar===null)              //true
 
```

|                        null                       |                 undefined                |
|:-------------------------------------------------:|:----------------------------------------:|
| intentional absence of a value                    | unintentional absence of a value         |
| 명시적(explicit)                                  | 암묵적(implicit)                         |
| 변수에 Null을 할당해야 합니다.                    | 할당되지 않은 변수의 기본값은 undefined  |
| The typeof null is an object. (and not type null) | Typeof undefined is undefined type       |
| null을 숫자로 변환하면 0이 됩니다                 | undefined를 숫자로 변환하면 NaN이 됩니다 |
| undefined as a JSON (JavaScript Object Notation)  | a valid value in JSON.                   |

<br>

6. Symbol(Less Common Primitives)


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

let sym1 = Symbol("key");
let sym2 = Symbol("key");
sym1 === sym2; // false, symbols are unique

```

<br>

7. Object

```
// TS 객체
let obj: object = {};

let person: object = {
     name : 'bee',
     age : 100
};

// 구체적인 객체 표현
let person: {name : string, age: number } = {
    name : 'bee',
    age : 100,
}
```

<br>

8. Array

```
// TS 배열 선언
let arr: Array<number> = [1, 2, 3] // 배열 선언방식 1
let heroes: Array<string> = ['Captin America', 'Thor', 'Hulk']
let items: number [] = [3, 4, 5] // 배열 선언방식 2
```

<br>

9. Tuple

```javascript
// TS 튜플
// 모든 인덱스에 타입을 정하는 배열
let address: [string, number] = ['mapo', 100];

// 디스트럭처링 할당(destructuring assignmen; 구조 분해 할당)
const [first, second] = person;
```

> **디스트럭처링 할당(destructuring assignmen; 구조 분해 할당)**<br>
> : 구조화된 배열과 같은 이터러블 또는 객체를<br>
> destructuring(비구조화, 구조 파괴)하여 1개 이상의 변수에 개별적으로 할당 하는 것<br>
> : 배열과 같은 이터러블 또는 객체 리터럴에서 필요한 값만 추출하여 변수에 할당할 때 유용

```javascript
// 예쩨 36-2
// 예제 발췌: 이웅모 , (2021) 모던 자바스크립트 Deep Dive -자바스크립트 기본 동작과 원리, 위키북스
const array = [1, 2, 3];

// ES6 배열 디스트럭처링 할당
// 변수 numOne, numTwo, numTree을 선언하고
// 배열 array를 디스트럭처링하여 할당
// 이때 할당 기준은 배열의 인덱스다.
const [numOne, numTwo, numTree] = array;

console.log(numOne, numTwo, numTree); // 1, 2, 3
```

<br>

10. Any

-   모든 타입을 할당 받을 수 있는 타입

```javascript
string, number등의 모든 타입을 통칭

let todoItems: any;
```

<br>

11. unknown

-   Typescript 3.0 버전 부터 지원
-   `any`보다 Type-safe한 타입
    -   `any`를 제외한 다른 타입으로 선언된 변수에 할당 될 수 없음
-   `unknown`타입으로 선언된 변수는 프로퍼티에 접근할 수 없으며, 메소드를 호출할 수 없으며, 인스턴스를 생성할 수 없다.
    -   단, Type Guard 와 함께라면 가능하다.

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

<br>

12. Enum
    : 명명된 숫자 상수(named numeric constant)의 집합으로 열거형(enumerated type)이라고 부른다.

|                            |     |
| :------------------------: | :-- |
| 숫자 열거형(Numeric Enum)  |     |
| 문자열 열거형(String Enum) |     |

```javascript

```

<br>

13. Void


<br>

14. 

<br>

15. Never

<br>

## 타입스크립트의 함수 타입

1. 함수의 파라미터에 타입을 정의하는 방식

```
function Sum (a:number, b:number){
    return a + b
}
```

2. 함수의 반환 값에 타입을 정의하는 방식

```
function Add(): number{
    return 10;
}
```

3. 함수의 타입을 정의하는 방식

```
function Total (a:number, b:number):number{
    return a + b
}
```

4. 함수의 옵셔널 파라미너

```
function log(a: string, b?: string, c?: string){
    // 특정 파라미터의 선택적 사용을 위해서 ? 선언
}
log('hello ts', 'abc')
```

## 인터페이스 (Interface)

인터페이스는 상호 간에 정의한 약속 혹은 규칙으로 아래 범주 4개에 대해 약속을 정의하는 것이 가능

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

## 타입별칭(Type Aliases)

타입별칭 : 특정 타입이나 인터페이스를 참조할 수 잇는 타입변수

> 새로운 타입 값을 하나 생성한느 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것과 같다.

```
// string 타입을 사용할 때
const name: string = 'bee';


// 타입 별칭을 사용할 때
type User = string;
const name: User = 'bee';


// interface 레벨의 복잡한 타입에도 별칭 부여 가능
type Developer = {
  name : string,
  skill : string,
}

// 타입별칭에 제네릭 사용
type User<W> = {
  name : W
}

// 타입을 정의할 수 있는 모든 곳에 별칭 부여 가능
type greeting = string;
var str: greeting = 'hello';


type Todo = {id: string; title: string; done: boolean};
function getTodo(todo: Todo){

}
```

**타입과 인터페이스의 차이점**
: 타입의 확장 가능 여부

> 인터페이스는 확장이 가능한데 반해 타입 별칭은 확장이 불가능하므로 가능한한 type 보다는 interface로 선언해서 사용하는 것을 추천

-   참고 : [좋은 소프트웨어는 확장이 용이해야 한다는 원칙의 위키 피디아 글](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)

## 연산자를 이용한 타입 정의

1. 유티온 타입 (Union Type) : |

-   or를 의미하는 연산자(|)를 이용하여 하나 이상의 타입을 인자로 사용하는 것이 가능

```
function logMessage(value : string | number ){
    console.log(value);
}

logMessage('hello');
logMessage(10);
```

2. 타입 가드 : 특정 타입을 타입의 범위를 좁혀나가는(필터링 하는) 과정

```
function logMessage(value : string | number ){
    if( typeof value === 'number'){
        value.toLocaleString();
    }
    if( typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value muste be string or number');
}
```

3. 유니온 타입의 속성

```
interface Developer {
    name: string;
    skill : string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person ){
    // 여러개의 인터페이스의 공통된 속성에만 접근이 가능하다.
    someone.name;
}
```

4. 인터섹션 타입(Intersection type) : &

```
function askSomeone(someone: Developer & Person ){
    someone.age;
    someone.skill;
    someone.name;
}
```

5. 유니온 타입과 인터섹션 타입의 차이점

```
// 타입의 선택지가 있음
function askSomeone(someone: Developer | Person ){
    someone.name;
}

askSomeone({ name : 'developer', skill: 'web dev'});
askSomeone({ name : 'bee', age: 333 });

// 새로운 타입을 생성
function askSomeone(someone: Developer & Person ){
    someone.age;
    someone.skill;
    someone.name;
}

askSomeone({ name : 'developer', skill: 'web dev', age: 333});
```

## 이넘(Enums)

: 특정 값들의 집합을 의미하는 자료형

> 타입스크립트에서는 문자형 이넘과 숫자형 이넘을 지원

1. 숫자형 이넘

```
enum Shoes{
    Nike,
    Addidas,
}

var myShoes =  Shoes.Addidas;
console.log(myShoes); //1
```

2. 문자형 이넘

```
enum Shoes {
    Nike = '나이키',
    Addidas = '아디다스',
}

var myShoes =  Shoes.Addidas;
console.log(myShoes); //아디다스
```

3. 이넘의 활용 사례

```
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

## 클래스

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

## 제네릭(Generics)

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

## 타입 추론(Type reference)

: 타입스크립트가 어떻게 타입을 추론하는지에 대한 동작을 의미

1. 타입 추론의 기본

```
let x = 3;

// 인터페이스에서 타입을 받아서 내부적으로 사용할 수 있는 제네릭 문법 정의
interface Dropdown<T>{
    value: T;
    title: string;
}

var shoppingItem: Dropdown<string> = {
    value: 'abc',
    title: 'hello'
}
```

> x에 대한 타입을 따로 지정하지 않더라도 일단 x가 number 타입임을 간주할 수 있는데 이렇게 변수를 선언하거나 초기화 할 때 타입을 추론할 수 있다. 그 외에도 변수, 속성, 인자의 기본 값등을 설정할 때 타입 추론이 발생한다.

2. 복잡한 구조에서의 타입 추론 방식

```
interface Dropdown<T>{
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
    tag: 'b'
}
```

3. 문맥상의 타이핑(Contextual Typing)
    > 표현식을 이용하여 가장 근접한 타입을 추론하는 것을 [Best Common Type](https://www.typescriptlang.org/docs/handbook/type-inference.html)이라고 지칭한다.

```
var arr = [1, 2, true, '3'];
// var arr:(string | number | boolean)
```

---

## Reference

-   [공식문서](https://www.typescriptlang.org/)
-   [이펙티브 타입스크립트](http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9788966263134)
-   [MDN : TypeScript](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
-   [TypeScript Types: The First 500 Years (tsconf 2021 talk)](https://www.youtube.com/watch?v=uN1zuV4DGRY&t=4s)
-   [타입스크립트 핸드북](https://joshua1988.github.io/ts/intro.html)
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
