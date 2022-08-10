# Chapter 01: 타입스크립트 알아보기(Getting to Know TypeScript)

## 📝 Item 1: TS와 JS의 관계 이해하기(Understand the Relationship Between TypeScript and JavaScript)

자바스크립트의 상위 집합(A superset of JavaScript)
-  

TypeScript는 ES5의 Superset이므로 기존의 자바스크립트(ES5) 문법을 그대로 사용할 수 있다. <br>
또한, ES6의 새로운 기능들을 사용하기 위해 Babel과 같은 별도 트랜스파일러(Transpiler)를 사용하지 않아도 <br>
ES6의 새로운 기능을 기존의 자바스크립트 엔진(현재의 브라우저 또는 Node.js)에서 실행할 수 있다.

<center>
 <img src="https://poiemaweb.com/img/typescript-superset.png" alt="typescirpt superset" width="300" height="auto">
</center>

### Getting Started

TypeScript 파일(.ts)은 브라우저에서 동작하지 않으므로 트랜스파일러(transpiler) 이용해 자바스크립트 파일로 변환해야 한다. 

### Difference Between Transpiler and Compiler

|               | Description | Example |
| :-----------: | :----------- |:----------- |
| 컴파일러(Compiler)          |   한 프로그래밍 언어로 작성된 컴퓨터 코드를 다른 프로그래밍 언어로 번역하는 컴퓨터 프로그램     |   |
| 트렌스파일러(Transpiler)       |  프로그래밍 언어의 소스 코드를 비슷한 수준의 추상화를 가진 동일하거나 다른 프로그래밍 언어로 변환하는 도구  | typescript transpiler, Babel transpiler |


## 📝 Item 2: TS 설정 이해하기(Know Which TypeScript Options You’re Using)

## 📝 Item 3: 코드 생성과 타입이 관계 없음을 이해하기(Understand That Code Generation Is Independent of Types)

## 📝 Item 4: 구조적 타이핑에 익숙해지기(Get Comfortable with Structural Typing)

## 📝 Item 5: any 타입 지양하기(Limit Use of the any Type)


---

## Rerence

- [타입스크립트의 소개와 개발 환경 구축](https://poiemaweb.com/typescript-introduction)
- [Difference Between a Transpiler and a Compiler](https://hashnode.com/post/difference-between-a-transpiler-and-a-compiler-cky6w1y1y022383s18a81g7by)
- [Compiling vs Transpiling](https://dev.to/kealanparr/compiling-vs-transpiling-3h9i)
- [Difference Between Transpiler and Compiler](https://www.geeksforgeeks.org/difference-between-transpiler-and-compiler/)