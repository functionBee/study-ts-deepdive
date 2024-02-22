# Chapter 03: 타입 추론(Type Inference)

## 📝 Item 19: 추론 가능한 타입을 사용해 장황한 코드 방지하기(Avoid Cluttering Your Code with Inferable Types)

<br>

### 요약

-   타입스크립트가 타입을 추론할 수 있다면 타입 구문을 작성하지 않는게 좋습니다.
-   이상적인 경우 함수/ 메서드의 시그니처에는 타입 구문이 있지만, 함수 내의 지역 변수에는 타입 구문이 없습니다.
-   추론 될 수 잇는 경우라도 객체 리터럴과 함수 반홚에는 타입 명시를 고려해야 합니다. 이는 내부 구현의 오류가 사용자 코드 위치에 나타나는 것을 방지해 줍니다.

<br>

## 📝 Item 20: 다른 타입에는 다른 변수 사용하기(Use Different Variables for Different Types)

<br>

### 요약

-   변수의 값을 바뀔 수 있지만 타입은 일반적으로 바뀌지 않습니다.
-   혼란을 막기 위해 타입이 다른 값을 다룰 때에는 변수를 재사용하지 않도록 합니다.

<br>

## 📝 Item 21: 타입 넓히기(Understand Type Widening)

<br>

### 요약

-   타입스크립트가 넓히기를 통해 상수의 타입을 추론하는 법을 이해해야 합니다.
-   동작에 영향을 줄수 있는 방법인 const, 타입 구문, 문맥, as const에 익숙해져야 합니다.

<br>

## 📝 Item 22: 타입 좁히기(Understand Type Narrowing)

<br>

### 요약

-   분기문 외에도 여러 종류의 제어 흐름을 살펴 보며 타입스크립트가 타입을 좁히는 과정을 이해해야 합니다.
-   태그된/구별된 유니온과 사용자 정의 타입 가드를 사용하여 타입 좁히기 과정을 원활하게 만들 수 있습니다.

<br>

## 📝 Item 23: 한꺼번에 객체 생성하기(Create Objects All at Once)

<br>

### 요약

-   속성을 제각각 추가하지 말고 한꺼번에 객체로 만들어야 합니다. 안전한 타입으로 속성을 추가하려면 객체 전개를 사용하면 됩니다.
-   객체에 조건부로 속성을 추가하는 방법을 익히도록 합니다.

<br>

## 📝 Item 24: 일관성 있는 별칭 사용하기(Be Consistent in Your Use of Aliases)

<br>

### 요약

-   타입 별칭은 타입스크립트가 타입을 좁힌느 것을 방해합니다. 따라서 변수에 별칭을 사용할때는 일관되게 사용해야 합니다.
-   비구조화 문법을 사용해 일관된 이름을 사용하는 것이 좋습니다.
-   함수 호출이 객체 속성의 타입 정제를 무효화 할 수 있다는 점을 주의해야합니다. 속성보다는 지역 변수를 사용하면 타입 정제를 믿을 수 있습니다.

<br>

## 📝 Item 25: 비동기 코드에는 콜백 대신 async 함수 사용하기(Use async Functions Instead of Callbacks for Asynchronous Code)

<br>

### 요약

-   콜백보다는 프로미스를 사용하는게 코드 작성과 타입 추론 면에서 유리합니다.
-   가능함녀 프로미스를 생성하기보단느 async와 await를 사용하는 것이 좋습니다. 간결하고 직관적인 코드를 작성할 수 있고 모든 종류의 오류를 제거할 수 있습니다.
-   어떤 함수가 프로미스를 반환한다면 async로 선언한느 것이 좋습니다.

<br>

## 📝 Item 26: 타입 추론에 문맥이 어떻게 사용되는지 이해하기(Understand How Context Is Used in Type Inference)

### 문맥의 손실로 인해 오류가 발생하는 경우와 해결 방법

-   **튜플 사용 시 주의점**

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

    -   타입스크립트가 의도를 정확히 파악할 수 있도록 타입 선언을 제공하는 방법

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

    -   상수 문맥을 제공<br>
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

-   **객체 사용 시 주의점**<br>
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

<br>

-   **콜백 사용 시 주의점**

```javascript
function callWithRandomNumbers(fn: (n1: number, n2: number) => void) {
    fn(Math.random(), Math.random());
}

callWithRandomNumbers((a, b) => {
    a; // Type is number
    b; // Type is number
    console.log(a + b);
});
```

<br>

```javascript
function callWithRandomNumbers(fn: (n1: number, n2: number) => void) {
    fn(Math.random(), Math.random());
}
const fn = (a, b) => {
    // ~    Parameter 'a' implicitly has an 'any' type
    //    ~ Parameter 'b' implicitly has an 'any' type
    console.log(a + b);
};
callWithRandomNumbers(fn);
```

<br>

```javascript
function callWithRandomNumbers(fn: (n1: number, n2: number) => void) {
    fn(Math.random(), Math.random());
}
// 매개 변수에 타입 구문을 추가해서 해결 할 수 있음
const fn = (a: number, b: number) => {
    console.log(a + b);
};
callWithRandomNumbers(fn);
```

또는 가능한 경우 전체 함수 표현식에 타입 선언을 적용하여 해결 할 수 있습니다.

<br>

### 요약

-   타입 추론에서 문맥이 어떻게 쓰이는지 주의해서 살펴 보아야 합니다.
-   변수를 뽑아서 별도로 선언 했을때 오류가 발생한다면 타입 선언 을 추가해야 합니다.
-   변수가 정말로 상수라면 상수 단언(`as const`)을 사용해야 합니다. 그러나 상수 단언을 사용하며 정의한 곳 안리ㅏ 사용한 곳에서 오류가 발생하므로 주의해야 합니다.

<br>

## 📝 Item 27: 함수형 기법과 라이브러리로 타입 흐름 유지하기(Use Functional Constructs and Libraries to Help Types Flow)

```javascript

```

<br>

```javascript

```

<br>

### 요약

-   타입 흐름을 개선하고, 가독성을 높이고, 명싲거인 타입 구문의 필요성을 줄이기 위해 직접 구현하기 보다는 내장된 함수형 기법과 로대시 같은 유틸리티 라이브러리를 사용하는 것이 좋습니다.
