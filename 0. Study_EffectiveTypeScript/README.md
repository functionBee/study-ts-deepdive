<img src="https://github.com/danvk/effective-typescript/raw/master/cover.png" alt="book: effective typescript" width="240" height="auto">

# Effective TypeScript

이펙티브 타입스크립트: 동작 원리의 이해와 구체적인 조언 62가지<br>
[코드 샘플 레파지토리(repo)](https://github.com/danvk/effective-typescript)<br>
<u>이펙티브 타입스크립트 책을 읽고 예제코드도 실행해보면서 타입스크립트를 학습</u>

<br>

## Chapter 01: 타입스크립트 알아보기(Getting to Know TypeScript)

-   📝 Item 1: TS와 JS의 관계 이해하기(Understand the Relationship Between TypeScript and JavaScript)
-   📝 Item 2: TS 설정 이해하기(Know Which TypeScript Options You’re Using)
-   📝 Item 3: 코드 생성과 타입이 관계 없음을 이해하기(Understand That Code Generation Is Independent of Types)
-   📝 Item 4: 구조적 타이핑에 익숙해지기(Get Comfortable with Structural Typing)
-   📝 Item 5: any 타입 지양하기(Limit Use of the any Type)

## Chapter 02: 타입스크립트의 타입시스템(TypeScript’s Type System)

-   📝 Item 6: 편집기를 사용하여 타입 시스템 탐색하기
-   📝 Item 7: 타입이 값들의 집합이라고 생각하기
-   📝 Item 8: 타입 공간과 값 공간의 심벌 구분하기
-   📝 Item 9: 타입 단언보다는 타입 선언을 사용하기
-   📝 Item 10: 객체 래퍼 타입 피하기
-   📝 Item 11: 잉여 속성 체크의 한계 인지하기
-   📝 Item 12: 함수 표현식에 타입 적용하기
-   📝 Item 13: 타입과 인터페이스의 차이점 알기
-   📝 Item 14: 타입 연산과 제너릭 사용으로 반복 줄이기
-   📝 Item 15: 동적 데이터에 인덱스 시그니처 사용하기
-   📝 Item 16: number 인덱스 시그니처보다는 Array, 튜플, ArrayLike를 사용하기
-   📝 Item 17: 변경 관련된 오류 방지를 위해 readonly 사용하기
-   📝 Item 18: 매핑된 타입을 사용하여 값을 동기화하기

<br>

3장 타입 추론

-   📝 Item 19: 추론 가능한 타입을 사용해 장황한 코드 방지하기
-   📝 Item 20: 다른 타입에는 다른 변수 사용하기
-   📝 Item 21: 타입 넓히기
-   📝 Item 22: 타입 좁히기
-   📝 Item 23: 한꺼번에 객체 생성하기
-   📝 Item 24: 일관성 있는 별칭 사용하기
-   📝 Item 25: 비동기 코드에는 콜백 대신 async 함수 사용하기
-   📝 Item 26: 타입 추론에 문맥이 어떻게 사용되는지 이해하기
-   📝 Item 27: 함수형 기법과 라이브러리로 타입 흐름 유지하기

4장 타입 설계

-   📝 Item 28: 유효한 상태만 표현하는 타입을 지향하기
-   📝 Item 29: 사용할 때는 너그럽게, 생성할 때는 엄격하게
-   📝 Item 30: 문서에 타입 정보를 쓰지 않기
-   📝 Item 31: 타입 주변에 null 값 배치하기
-   📝 Item 32: 유니온의 인터페이스보다는 인터페이스의 유니온을 사용하기
-   📝 Item 33: string 타입보다 더 구체적인 타입 사용하기
-   📝 Item 34: 부정확한 타입보다는 미완성 타입을 사용하기
-   📝 Item 35: 데이터가 아닌, API와 명세를 보고 타입 만들기
-   📝 Item 36: 해당 분야의 용어로 타입 이름 짓기
-   📝 Item 37: 공식 명칭에는 상표를 붙이기

5장 any 다루기

-   📝 Item 38: any 타입은 가능한 한 좁은 범위에서만 사용하기
-   📝 Item 39: any를 구체적으로 변형해서 사용하기
-   📝 Item 40: 함수 안으로 타입 단언문 감추기
-   📝 Item 41: any의 진화를 이해하기
-   📝 Item 42: 모르는 타입의 값에는 any 대신 unknown을 사용하기
-   📝 Item 43: 몽키 패치보다는 안전한 타입을 사용하기
-   📝 Item 44: 타입 커버리지를 추적하여 타입 안전성 유지하기

6장 타입 선언과 @types

-   📝 Item 45: devDependencies에 typescript와 @types 추가하기
-   📝 Item 46: 타입 선언과 관련된 세 가지 버전 이해하기
-   📝 Item 47: 공개 API에 등장하는 모든 타입을 익스포트하기
-   📝 Item 48: API 주석에 TSDoc 사용하기
-   📝 Item 49: 콜백에서 this에 대한 타입 제공하기
-   📝 Item 50: 오버로딩 타입보다는 조건부 타입을 사용하기
-   📝 Item 51: 의존성 분리를 위해 미러 타입을 사용하기
-   📝 Item 52: 테스팅 타입의 함정에 주의하기

7장 코드를 작성하고 실행하기

-   📝 Item 53: 타입스크립트 기능보다는 ECMAScript 기능을 사용하기
-   📝 Item 54: 객체를 순회하는 노하우
-   📝 Item 55: DOM 계층 구조 이해하기
-   📝 Item 56: 정보를 감추는 목적으로 private 사용하지 않기
-   📝 Item 57: 소스맵을 사용하여 타입스크립트 디버깅하기

8장 타입스크립트로 마이그레이션하기

-   📝 Item 58: 모던 자바스크립트로 작성하기
-   📝 Item 59: 타입스크립트 도입 전에 @ts-check와 JSDoc으로 시험해 보기
-   📝 Item 60: allowJs로 타입스크립트와 자바스크립트 같이 사용하기
-   📝 Item 61: 의존성 관계에 따라 모듈 단위로 전환하기
-   📝 Item 62: 마이그레이션의 완성을 위해 noImplicitAny 설정하기

## Reference

-   [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
-   [TypeScript Types: The First 500 Years (tsconf 2021 talk)](https://www.youtube.com/watch?v=uN1zuV4DGRY&t=4s)
-   [자바스크립트 개발자를 위한 타입스립트, 안희종](https://ahnheejong.gitbook.io/ts-for-jsdev/)

<br>

## Study Schedule

| 주차  |          기간           | 상세                                                                |                                     상태                                     |
| :---: | :---------------------: | :------------------------------------------------------------------ | :--------------------------------------------------------------------------: |
| 1주차 | 2022.08.03 ~ 2022.08.09 | 1장 타입스크립트 알아보기<br>2장 타입스크립트의 타입 시스템         | [![In Progress](https://img.shields.io/badge/In_Progress-#E86554)](https://) |
| 2주차 | 2022.08.10 ~ 2022.08.16 | 3장 타입 추론<br>4장 타입 설계                                      |     [![Next UP](https://img.shields.io/badge/Next_UP-#6509A9)](https://)     |
| 3주차 | 2022.08.17 ~ 2022.08.23 | 5장 any 다루기<br>6장 타입 선언과 @types                            |     [![Next UP](https://img.shields.io/badge/Next_UP-#6509A9)](https://)     |
| 4주차 | 2022.08.24 ~ 2022.08.31 | 7장 코드를 작성하고 실행하기<br>8장 타입스크립트로 마이그레이션하기 |     [![Next UP](https://img.shields.io/badge/Next_UP-#6509A9)](https://)     |
