# Chapter 02: 타입스크립트의 타입시스템(TypeScript’s Type System)

## 📝 Item 6: 편집기를 사용하여 타입 시스템 탐색하기(Use Your Editor to Interrogate and Explore the Type System)

## 📝 Item 7: 타입이 값들의 집합이라고 생각하기(Think of Types as Sets of Values)

Data Type : **Never**

```javascript

const x: never = 12;
// Type '12' is not assignable to type 'never'

```

<br>

```javascript

type A = 'A';
type B = 'B';
type Twelve = 12;
// const로 선언한 값은 변경 불가능해 그대로 타입으로 적용

```

(참고) 
- [타입스크립트 타입 never에 대해 자세히 알아보자](https://yceffort.kr/2022/03/understanding-typescript-never)
- [never type](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)


## 📝 Item 8: 타입 공간과 값 공간의 심벌 구분하기(Know How to Tell Whether a Symbol Is in the Type Space or Value Space)


## 📝 Item 9: 타입 단언보다는 타입 선언을 사용하기(Prefer Type Declarations to Type Assertions)

## 📝 Item 10: 객체 래퍼 타입 피하기(Avoid Object Wrapper Types (String, Number, Boolean, Symbol, BigInt))


## 📝 Item 11: 잉여 속성 체크의 한계 인지하기(Recognize the Limits of Excess Property Checking)

## 📝 Item 12: 함수 표현식에 타입 적용하기(Apply Types to Entire Function Expressions When Possible)

## 📝 Item 13: 타입과 인터페이스의 차이점 알기(Know the Differences Between type and interface)

## 📝 Item 14: 타입 연산과 제너릭 사용으로 반복 줄이기(Use Type Operations and Generics to Avoid Repeating Yourself)

## 📝 Item 15: 동적 데이터에 인덱스 시그니처 사용하기(Use Index Signatures for Dynamic Data)

## 📝 Item 16: number 인덱스 시그니처보다는 Array, 튜플, ArrayLike를 사용하기(Prefer Arrays, Tuples, and ArrayLike to number Index Signatures)

## 📝 Item 17: 변경 관련된 오류 방지를 위해 readonly 사용하기(Use readonly to Avoid Errors Associated with Mutation)

## 📝 Item 18: 매핑된 타입을 사용하여 값을 동기화하기(Use Mapped Types to Keep Values in Sync)