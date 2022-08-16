# Chapter 03: 타입 추론(Type Inference)

## 📝 Item 19: 추론 가능한 타입을 사용해 장황한 코드 방지하기(Avoid Cluttering Your Code with Inferable Types)

## 📝 Item 20: 다른 타입에는 다른 변수 사용하기(Use Different Variables for Different Types)

## 📝 Item 21: 타입 넓히기(Understand Type Widening)

## 📝 Item 22: 타입 좁히기(Understand Type Narrowing)

## 📝 Item 23: 한꺼번에 객체 생성하기(Create Objects All at Once)

## 📝 Item 24: 일관성 있는 별칭 사용하기(Be Consistent in Your Use of Aliases)

## 📝 Item 25: 비동기 코드에는 콜백 대신 async 함수 사용하기(Use async Functions Instead of Callbacks for Asynchronous Code)

## 📝 Item 26: 타입 추론에 문맥이 어떻게 사용되는지 이해하기(Understand How Context Is Used in Type Inference)

### 문맥의 손실로 인해 오류가 발생하는 경우와 해결 방법

-   튜플 사용 시 주의점

```javascript
type Language = 'JavaScript' | 'TypeScript' | 'Python';
function setLanguage(language: Language) {
    /* ... */
}
// Parameter is a (latitude, longitude) pair.
function panTo(where: [number, number]) {
    /* ... */
}

panTo([10, 20]); // OK

const loc = [10, 20];
panTo(loc);
//    ~~~ Argument of type 'number[]' is not assignable to
//        parameter of type '[number, number]'
```

<br>

-   any를 사용하지 않고 오류를 고칠 수 있는 방법

1. 타입스크립트가 의도를 정확히 파악할 수 있도록 타입 선언을 제공하는 방법

```javascript
type Language = 'JavaScript' | 'TypeScript' | 'Python';

function setLanguage(language: Language) {
    /_ ... _/;
}
// Parameter is a (latitude, longitude) pair.
function panTo(where: [number, number]) {
    /_ ... _/;
}
const loc: [number, number] = [10, 20];
panTo(loc); // OK
```

2. 상수 문맥을 제공<br>
   : `const`는 단지 값이 가리키는 참조가 변하지 않는 얕은(shallow)상수인 반면,<br>
   `as const`는 그 값이 내부까지(deeply) 상수라는 사실을 타입스크립트에게 알려줍니다.<br>

```javascript
type Language = 'JavaScript' | 'TypeScript' | 'Python';
function setLanguage(language: Language) { /_ ... _/ }

// Parameter is a (latitude, longitude) pair.
function panTo(where: readonly [number, number]) { /_ ... _/ }
const loc: [number, number] = [10, 20];
panTo(loc); // OK

```

<br>

```javascript
// 다른 방법
type Language = 'JavaScript' | 'TypeScript' | 'Python';
function setLanguage(language: Language) {
    /_ ... _/;
}

// Parameter is a (latitude, longitude) pair.
type Pan = [number, number];
function panTo(where: Pan) {
    /_ ... _/;
}
const loc: Pan = [10, 20];
panTo(loc); // OK
```

타입 시그니처를 수정할 수 없는 경우라면 타입 구문을 사용해야 합니다.<br>
`as const`는 문맥 손실과 관련된 문제를 깔끔하게 해결할 수 있지만, 한가지 단점을 가지고 있습니다.<br>
만약 타입 정의에 실수가 있다면 오류는 타입 정의가 아니라 호출되는 곳에서 발생한다는 것입니다.<br>
특히 여러 겹 중첩된 객체에서 오류가 발생한다면 근본적인 원인을 파악하기 어렵습니다.<br>

```javascript
type Language = 'JavaScript' | 'TypeScript' | 'Python';
function setLanguage(language: Language) { /_ ... _/ }
// Parameter is a (latitude, longitude) pair.
function panTo(where: [number, number]) { /_ ... _/ }
const loc = [10, 20] as const;
panTo(loc);
// ~~~ Type 'readonly [10, 20]' is 'readonly'
// and cannot be assigned to the mutable type '[number, number]'
```

<br>

-   객체 사용 시 주의점<br>
    문맥에서 값을 분리하는 문제는 문자열 리터럴이나 튜플을 포함하는 큰 객채에서도 상수를 뽑아 낼 때도 발생합니다.<br>

```javascript
type Language = 'JavaScript' | 'TypeScript' | 'Python';
interface GovernedLanguage {
    language: Language;
    organization: string;
}

function complain(language: GovernedLanguage) {
    /* ... */
}

complain({ language: 'TypeScript', organization: 'Microsoft' }); // OK

const ts = {
    language: 'TypeScript',
    organization: 'Microsoft',
};
complain(ts);
//       ~~ Argument of type '{ language: string; organization: string; }'
//            is not assignable to parameter of type 'GovernedLanguage'
//          Types of property 'language' are incompatible
//            Type 'string' is not assignable to type 'Language'
```

<br>

```javascript
type Language = 'JavaScript' | 'TypeScript' | 'Python';
interface GovernedLanguage {
    language: Language;
    organization: string;
}

function complain(language: GovernedLanguage) {
    /* ... */
}

complain({ language: 'TypeScript', organization: 'Microsoft' }); // OK

// 타입스크립트 객체에서 language타입은 string으로 추론됩니다.
// 이 문제는 타입선언을 추가해 해결하는 빙밥1,
const ts: GovernedLanguage {
    language: 'TypeScript',
    organization: 'Microsoft',
};
complain(ts);
```

```javascript
type Language = 'JavaScript' | 'TypeScript' | 'Python';
interface GovernedLanguage {
    language: Language;
    organization: string;
}

function complain(language: GovernedLanguage) {
    /* ... */
}

complain({ language: 'TypeScript', organization: 'Microsoft' }); // OK

// 상수 단언을 상용해 해결하는 빙밥2 가 있습니다.
const ts =  {
    language: 'TypeScript',
    organization: 'Microsoft',
} as const;
complain(ts);
```

-   콜백 사용 시 주의점

<br>

### 요약

-   타입 추론에서 문맥이 어떻게 쓰이는지 주의해서 살펴 보아야 합니다.
-   변수를 뽑아서 별도로 선언 했을때 오류가 발생한다면 타입 선언 을 추가해야 합니다.
-   변수가 정말로 상수라면 상수 단언(`as const`)을 사용해야 합니다. 그러나 상수 단언을 사용하며 정의한 곳 안리ㅏ 사용한 곳에서 오류가 발생하므로 주의해야 합니다.

<br>

## 📝 Item 27: 함수형 기법과 라이브러리로 타입 흐름 유지하기(Use Functional Constructs and Libraries to Help Types Flow)

```

```
