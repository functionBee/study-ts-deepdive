# 3장 고급 타입

- [3장 고급 타입](#3장-고급-타입)
  - [3.1 타입스크립트만의 독자적 타입 시스템](#31-타입스크립트만의-독자적-타입-시스템)
    - [3.1.1 any 타입](#311-any-타입)
    - [3.1.2 unknown 타입](#312-unknown-타입)
    - [3.1.3 void 타입](#313-void-타입)
    - [3.1.4 never 타입](#314-never-타입)
    - [3.1.5 Array 타입](#315-array-타입)
    - [3.1.6 enum 타입](#316-enum-타입)
  - [3.2 타입 조합](#32-타입-조합)
    - [3.2.1 교차 타입(Intersection Type)](#321-교차-타입intersection-type)
    - [3.2.2 유니온 타입(Union Type)](#322-유니온-타입union-type)
    - [3.2.3 인덱스 시그니처(Index Signature)](#323-인덱스-시그니처index-signature)
    - [3.2.4 인덱스 엑세스(Index Access)](#324-인덱스-엑세스index-access)
    - [3.2.5 맵드(Mapped Type)](#325-맵드mapped-type)
    - [3.2.6 템플릿 리터럴 타입(Template Literal Type)](#326-템플릿-리터럴-타입template-literal-type)
    - [3.2.7 제네릭 타입(Generic Type)](#327-제네릭-타입generic-type)
  - [3.3 제네릭 사용법](#33-제네릭-사용법)
    - [3.3.1 함수의 제네릭](#331-함수의-제네릭)
    - [3.3.2 호출 시그니처(Calling Signature)의 제네릭](#332-호출-시그니처calling-signature의-제네릭)
    - [3.3.3 클래스의 제네릭](#333-클래스의-제네릭)
    - [3.3.4 제한된 제네릭](#334-제한된-제네릭)
    - [3.3.5 확장된 제네릭](#335-확장된-제네릭)
    - [3.3.6 제네릭 예](#336-제네릭-예)
  - [Keywrods](#keywrods)

<br>

## 3.1 타입스크립트만의 독자적 타입 시스템

**타입스크립트의 타입 계층 구조**
![타입스크립트의 타입 계층 구조](https://velog.velcdn.com/images/pung8146/post/609a48d1-877b-49a5-b4b0-b0de806cb0ce/image.png)

### 3.1.1 any 타입

- TypeScript의 `any` 타입은 타입 체크 메커니즘을 우회하는 방법을 제공합니다.
- 변수에 `any` 타입을 할당하면 해당 변수는 어떠한 타입의 값이든 받을 수 있으며, 컴파일러는 해당 변수에 대한 타입 체크를 수행하지 않습니다.
  이는 코드의 안정성을 저하시킬 수 있기 때문에, 가능한 한 `any` 타입의 사용을 피하고 더 구체적인 타입을 사용하도록 권장됩니다.

**[주요 특징]**
- **유연성**: `any` 타입을 사용하면, 어떤 타입의 값이든 변수에 할당할 수 있습니다. 이는 타입 정보가 부족한 외부 라이브러리나 API와 상호 작용할 때 유용합니다.
- **타입 체크 우회**: `any를` 사용함으로써 개발자는 TypeScript의 타입 체크에서 자유롭게 됩니다. 이는 빠른 프로토타이핑이나 기존 JavaScript 코드를 TypeScript로 마이그레이션하는 과정에서 유용할 수 있습니다.
- **동적 콘텐츠 처리**: 사용자 입력이나 서드 파티 API로부터의 응답과 같은 동적 콘텐츠를 다룰 때 any 타입을 사용하면 내용을 유연하게 처리할 수 있습니다.

**[사용 시 고려사항]**
- **타입 안정성 감소**: `any` 타입을 과도하게 사용하면, TypeScript를 사용하는 주된 이유인 타입 안정성이 크게 감소합니다. 이는 런타임에 예상치 못한 오류를 발생시킬 수 있습니다.
- **디버깅 어려움**: 타입 정보가 충분하지 않으면, 디버깅이 더 어려워질 수 있습니다. 오류가 발생했을 때, 오류의 원인을 파악하기 위해 타입 정보가 중요한 역할을 할 수 있기 때문입니다.
- **점진적 타입화**: 기존 JavaScript 프로젝트를 TypeScript로 마이그레이션하는 경우, `any` 타입을 사용하여 점진적으로 타입을 추가할 수 있습니다. 이 방법은 프로젝트를 전체적으로 빠르게 마이그레이션하는 데 도움이 될 수 있지만, 최종 목표는 가능한 한 `any` 사용을 줄이고, 더 구체적인 타입으로 대체하는 것입니다.

```typescript
let flexibleVariable: any;

flexibleVariable = 5; // 숫자
flexibleVariable = "hello"; // 문자열
flexibleVariable = true; // 불리언

// `any` 타입으로, 모든 종류의 메소드나 프로퍼티에 접근 가능
flexibleVariable.methodDoesNotExist(); // 컴파일 시간에 에러 발생하지 않음
```

- `any` 타입을 어쩔 수 없이 사용해야 하는 경우에는 `noImplicitAny` 옵션을 사용하여 `any` 타입을 사용할 때 경고를 표시하도록 설정할 수 있습니다.

```json
{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
```


### 3.1.2 unknown 타입

- TypeScript에서 `unknown` 타입은 `any` 타입의 타입 안전한 대안으로 도입되었습니다.
- `any` 타입과 마찬가지로, `unknown` 타입에는 어떠한 값도 할당할 수 있지만, `unknown` 타입의 변수를 사용하기 전에 해당 타입을 확인하거나 좁혀야 한다는 차이점이 있습니다.


**[주요 특징]**
- **타입 안전성**: `unknown` 타입은 코드 내에서 타입을 명확히 검증하지 않고는 사용할 수 없게 함으로써, 타입 안전성을 강화합니다. 이는 런타임 오류를 줄이는 데 도움을 줍니다.
- **유연성**: `unknown` 타입에는 모든 타입의 값이 할당될 수 있어, API 호출과 같은 동적 데이터를 처리할 때 유용합니다. 그러나, 사용하기 전에 해당 변수의 타입을 검증하거나 변환해야 합니다.
- **타입 가드와의 호환성**: `unknown` 타입의 변수를 사용하기 전에, `타입 가드(type guards)`를 사용하여 변수의 실제 타입을 좁히는 과정이 필요합니다. 이를 통해 코드의 안전성과 가독성을 모두 향상시킬 수 있습니다.

**[`unknown` 타입 사용 시 고려사항]**
- **타입 검증 필요**: unknown 타입의 변수를 사용하기 전에, `typeof`, `instanceof` 또는 사용자 정의 타입 가드를 통해 타입 검증이 반드시 수행되어야 합니다.
- **타입스크립트의 엄격한 타입 체킹**: `unknown` 타입은 TypeScript의 엄격한 타입 체킹을 합니다. `any` 타입을 남발하는 것보다 `unknown` 타입을 적절히 사용하는 것이 권장됩니다.
- **리팩토링 시 유용**: 기존에 `any` 타입으로 처리되던 부분을 `unknown` 타입으로 변경하면, 리팩토링 과정에서 타입 관련 오류를 더 쉽게 식별할 수 있습니다.

```typescript
let value: unknown;

value = "hello"; // 문자열 할당
value = 123; // 숫자 할당
value = { name: "John" }; // 객체 할당

// 타입 검증 없이 사용할 수 없음
if (typeof value === "string") {
  console.log(value.toUpperCase()); // 타입 검증 후 사용 가능
}

// 객체인 경우 추가 검증
if (typeof value === "object" && value !== null) {
  console.log(value.name); // 객체의 속성 접근 전에 검증 필요
}
```

**[`unknown` 타입과 `any` 타입의 비교]**
- TypeScript의 `any` 타입과 `unknown` 타입은 모두 다양한 값을 수용할 수 있는 유연성을 제공하지만, 이 두 타입을 사용할 때의 안전성과 타입 체킹의 엄격함에서 차이가 있습니다.
- `any` 타입은 타입 체킹을 완전히 우회하고 싶을 때 유용하지만, 타입 안전성을 보장하고 싶다면 `unknown` 타입의 사용을 고려해야 합니다.

| 특징        | `any` 타입                                            | `unknown` 타입                                       |
|-----------|------------------------------------------------------|-----------------------------------------------------|
| **타입 안전성** | 타입 안전성 감소                                     | 타입 안전성 향상                                    |
| **유연성**    | 모든 타입을 수용, 타입 체크 우회                        | 모든 타입을 수용, 사용 전 타입 검증 필요               |
| **용도**     | 타입 정보가 부족하거나 마이그레이션 시 사용                | 동적 데이터 처리 시 사용, 타입을 안전하게 검증하고 싶을 때 사용 |
| **타입 체크**  | 타입 체크 없음, 컴파일러 타입 체크 우회                  | 타입 체크 필요, 타입 가드나 타입 단언 사용            |
| **런타임 오류 위험** | 높음 (타입 체크를 우회하기 때문)                           | 낮음 (타입 검증을 통해 안전한 사용 보장)                 |
| **개발자의 의도** | 타입 시스템의 제약을 받지 않겠다는 의도 반영                | 타입 안전성을 유지하면서 유연하게 코드 작성하고자 하는 의도 반영 |


### 3.1.3 void 타입

- `void` 타입은 `undefined`를 반환하는 함수의 반환 타입으로 사용된다.

```typescript
function print(): void {
  console.log("hello");
}
```

### 3.1.4 never 타입

- `never` 타입은 절대 발생하지 않는 값의 타입이다.

```typescript
function throwError(message: string): never {
  throw new Error(message);
}
```

- `never` 타입은 다음과 같은 경우에 사용된다.
  - 함수가 항상 예외를 던지는 경우
  - 함수가 항상 무한 루프에 빠지는 경우
  - 함수가 항상 반환되지 않는 경우

```typescript
function infiniteLoop(): never {
  while (true) {}
}
```

### 3.1.5 Array 타입

- `Array` 타입은 배열을 나타내는 타입이다.

```typescript
let a: number[] = [1, 2, 3];

let b: Array<number> = [1, 2, 3];
```

### 3.1.6 enum 타입

- `enum` 타입은 열거형을 나타내는 타입이다.

```typescript
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;
```

<br>

## 3.2 타입 조합

### 3.2.1 교차 타입(Intersection Type)

- 교차 타입은 두 개 이상의 타입을 조합한 타입이다.

```typescript
type A = { a: number };

type B = { b: string };

type C = A & B;

let c: C = { a: 1, b: "hello" };
```

### 3.2.2 유니온 타입(Union Type)

- 유니온 타입은 두 개 이상의 타입 중 하나의 타입을 나타내는 타입이다.

```typescript
let a: string | number = "hello";
a = 10;

type A = { a: string };

type B = { b: number };

type C = A | B;

let c: C = { a: "hello" };
c = { b: 10 };
```

### 3.2.3 인덱스 시그니처(Index Signature)

- 인덱스 시그니처는 객체의 인덱스에 대한 타입을 정의하는 타입이다.

```typescript
type A = {
  [index: string]: number;
};

let a: A = {
  a: 1,
  b: 2,
  c: 3,
};
```

### 3.2.4 인덱스 엑세스(Index Access)

- 인덱스 엑세스는 인덱스 시그니처를 통해 정의된 타입을 사용하는 타입이다.

```typescript
type A = {
  [index: string]: number;
};

let a: A = {
  a: 1,
  b: 2,
  c: 3,
};

let b: number = a["a"];
let c: number = a["b"];
let d: number = a["c"];
```

### 3.2.5 맵드(Mapped Type)

- 맵드 타입은 기존 타입을 변환하여 새로운 타입을 생성하는 타입이다.

```typescript
type A = {
  a: string;
  b: string;
  c: string;
};

type B = {
  [K in keyof A]: number;
};

let b: B = {
  a: 1,
  b: 2,
  c: 3,
};
```

### 3.2.6 템플릿 리터럴 타입(Template Literal Type)

- 템플릿 리터럴 타입은 문자열 리터럴 타입을 조합하여 새로운 타입을 생성하는 타입이다.

```typescript
type A = "a" | "b" | "c";

type B = `${A}-type`;

let b: B = "a-type";
b = "b-type";
b = "c-type";
```

### 3.2.7 제네릭 타입(Generic Type)

- 제네릭 타입은 타입을 매개변수화하여 타입을 생성하는 타입이다.

```typescript
type A<T> = {
  value: T;
};

let a: A<number> = { value: 10 };
let b: A<string> = { value: "hello" };
```

<br>

## 3.3 제네릭 사용법

### 3.3.1 함수의 제네릭

- 함수의 제네릭은 함수의 매개변수나 반환 타입을 매개변수화하여 타입을 생성하는 타입이다.

```typescript
function identity<T>(value: T): T {
  return value;
}

let a = identity<number>(10);
let b = identity;
```

### 3.3.2 호출 시그니처(Calling Signature)의 제네릭

- 호출 시그니처의 제네릭은 함수의 호출 시그니처를 매개변수화하여 타입을 생성하는 타입이다.

```typescript
type Identity = <T>(value: T) => T;

let identity: Identity = (value) => value;

let a = identity<number>(10);
let b = identity;
```

### 3.3.3 클래스의 제네릭

- 클래스의 제네릭은 클래스의 멤버나 생성자를 매개변수화하여 타입을 생성하는 타입이다.

```typescript
class Identity<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

let a = new Identity<number>(10);

let b = new
```

### 3.3.4 제한된 제네릭

- 제한된 제네릭은 제네릭에 제한을 두어 타입을 생성하는 타입이다.

```typescript
type A<T extends string> = {
  value: T;
};

let a: A<string> = { value: "hello" };
let b: A<number> = { value: 10 }; // Error
```

### 3.3.5 확장된 제네릭

- 확장된 제네릭은 제네릭을 확장하여 타입을 생성하는 타입이다.

```typescript
type A<T> = {
  value: T;
};

type B<T> = A<T> & {
  value2: T;
};

let a: B<number> = { value: 10, value2: 20 };
```

### 3.3.6 제네릭 예

- 제네릭을 사용하여 함수를 구현하는 대표적인 예: API 응답 값의 타입을 정의할 때

```typescript
type Response<T> = {
  data: T;
  status: number;
};

function fetchUser(): Response<User> {
  return {
    data: {
      id: 1,
      name: "woowa",
    },
    status: 200,
  };
}
```

- 제네을 굳이 사용하지 않아도 되는 타입 예: GTypes

```typescript
type GTypes = "a" | "b" | "c";

type A = `${GTypes}-type`;

let a: A = "a-type";
a = "b-type";
a = "c-type";
```

- `any` 타입을 사용하여 제네릭을 사용할 때: `any` 타입을 사용하여 제네릭을 사용할 때는 타입 안전성을 보장할 수 없다.

```typescript
function identity<T>(value: T): T {
  return value;
}

let a = identity<any>(10);

let b = identity;

let c = identity;

let d = identity;
```

- 부득이한 상황을 제외하고 복잡한 제네릭은 의미 단위로 분활해서 사용하는 것이 좋다.

```typescript
type A<T> = {
  value: T;
};

type B<T> = A<T> & {
  value2: T;
};

let a: B<number> = { value: 10, value2: 20 };
```

<br>

## Keywrods

| #   | Keyword | Description |
| --- | ------- | ----------- |

```

```
