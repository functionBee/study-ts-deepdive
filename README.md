# 타입스크립트 입문 - 기초부터 실전까지

: 자바스크립트로 제작된 COVID-19 세계 현황판을 타입스크립트로 변환

## 정의

타입스크립트는 자바스크립트의 확장된 언어로 타입스크립트는 자바스크립트와 다른게 브라우저에서 실행하기 위해 파일을 한번 변환(컴파일;Compile)해주어야 한다.

## 컴파일(compile) : ts 파일을 js 파일로 변환하는 작업

```
 #node 버전 확인
 node -v

 # NPM을 통한 타입스크립트 전역 설치
 npm i typescript -g
 yarn add typescript -g

 # (참고)
 # 1. NPM(Node Package Manager)
 # 명령어로 자바스크립트 라이브러리를 설치하고 관리할 수 있는 패키지 매니저

 # 2. NPM 전역 설치
 # 시스템 레벨에서 사용할 자바스크립트 라이브러리를 설치할 때 사용
 # 라이브러리가 설치되고 나면 이제 명령어 실행 창에 해당 라이브러리 이름을 입력했을 때 명령어를 인식

 # .ts 파일을 .js 파일로 변환시 해당 디렉토리로 접근하여 아래 명령어 실행
 tsc index.ts

 # webpack, gulp 등

```

## 장점

1. JS를 이용하여 에러 사전방지
2. 코드 가이드 및 자동완성(개발 생산성 향상)

## Reference

-   [공식문서](https://www.typescriptlang.org/)
-   [타입스크립트 핸드북](https://joshua1988.github.io/ts/intro.html)
-   [타입스크립트 설정 파일 옵셥](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
-   [타입스크립트 Playground](https://www.typescriptlang.org/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCoASMFmgY7p7ehCTkVOle4jUMdRLYTqCc8LEZzCZmoNJODPHFZZXVtZYYkAAeRJTInDQS8po+rf40gnjbDKv8LqD2jpbYoACqAEoAMsK7sUmxkGSCc+VVQQuaTwVb1UBrDYULY7PagbgUZLJH6QbYmJAECjuMigZEMVDsJzCFLNXxtajBBCcQQ0MwAUVWDEQNUgADVHBQGNJ3KAALygABEAAkYNAMOB4GRogLFFTBPB3AExcwABT0xnM9zsyhc9wASmCKhwDQ8ZC8iElzhB7Bo3zcZmY7AYzEg-Fg0HUiS58D0Ii8AoZTJZggFSRxAvADlQAHJhAA5SASAVBFQAeW+ZF2gldWkgx1QjgUrmkeFATgtOlGWH0KAQiBhwiudokkuiIgMHBx3RYbC43CCJSAA)
-   [바벨](https://babeljs.io/)
-   [let & const](https://joshua1988.github.io/es6-online-book/const-let.html)
-   [Array filter Api;Array.prototype.filter()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
-   [자바스크립트 프로토타입과 상속](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
-   [자바스크립트 객체](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)

## 개발 환경

-   [Chrome](https://www.google.com/intl/ko/chrome/)
-   [Visual Studio Code](https://code.visualstudio.com/)
-   [Node.js LTS 버전(v10.x 이상)](https://nodejs.org/ko/)
-   [Git](https://git-scm.com/downloads)

## VSCode 플러그인 목록

-   문법 검사 : ESLint, [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
-   기타
    -   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager) 등

---

## 타입 스크립트 변수타입

타입 스크립트의 변수 타입에는 아래와 같이 12가지가 있다.

1. Boolean
```
// TS 진값위 
let show:boolean = true;
```
2. Number
```
// TS 숫자 선언
let num: number = 10;
```
3. String
```
// TS 문자열 선언
const str: string = 'hello';
```
4. Object
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
5. Array
```
// TS 배열 선언
let arr: Array<number> = [1, 2, 3] // 배열 선언방식 1
let heroes: Array<string> = ['Captin America', 'Thor', 'Hulk']
let items: number [] = [3, 4, 5] // 배열 선언방식 2
```
6. Tuple
```
// TS 튜플
// 모든 인덱스에 타입을 정하는 배열
let address: [string, number] = ['mapo', 100];
```
7. Enum
8. Any
```
string, number등의 모든 타입을 통칭

let todoItems: any;
```
9. Void
10. Null
11. Undefined
12. Never

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

- 객체의 스펙(속성과 속성의 타입)
- 함수의 파라미터
- 함수의 스펙(파라미터, 반환 타입 등)
- 배열과 객체를 접근하는 방식
- 클래스

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
- 참고 : [좋은 소프트웨어는 확장이 용이해야 한다는 원칙의 위키 피디아 글](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)

## 연산자를 이용한 타입 정의
1. 유티온 타입 (Union Type) : | 
or를 의미하는 연산자(|)를 이용하여 하나 이상의 타입을 인자로 사용하는 것이 가능
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
- 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는 데 사용

```
function logText<T>(text: T): T{
    console.log(text);
    return text;
}

logText<string>('hi');
```

---
## :unicorn: 첫 번째 프로젝트 - 할 일 관리 애플리케이션

## :unicorn: 두 번째 프로젝트 - 전화번호부 애플리케이션


---

> 관련 강의
> 인프런의 [타입스크립트 입문 - 기초부터 실전까지](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8?inst=f1ae9299&utm_source=blog&utm_medium=githubio&utm_campaign=captianpangyo&utm_term=banner) 온라인 강의.