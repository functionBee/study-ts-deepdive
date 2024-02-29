# 3장 고급 타입

우아한 타입스크립트 with 리액트 책에서 소개된 내용을 더 잘 이해하기 위해 추가적인 내용을 보충하였습니다.

<br>

- [3장 고급 타입](#3장-고급-타입)
  - [3.1 타입스크립트만의 독자적 타입 시스템](#31-타입스크립트만의-독자적-타입-시스템)
    - [3.1.1 `any` 타입](#311-any-타입)
    - [3.1.2 `unknown` 타입](#312-unknown-타입)
    - [3.1.3 `void` 타입](#313-void-타입)
    - [3.1.4 `never` 타입](#314-never-타입)
    - [3.1.5 `Array` 타입](#315-array-타입)
    - [3.1.6 `enum` 타입](#316-enum-타입)
      - [**\[정의\]**](#정의)
      - [**\[`enum` 타입의 기본적인 구조\]**](#enum-타입의-기본적인-구조)
      - [**\[열거형의 기본 사용법\]**](#열거형의-기본-사용법)
      - [**\[주요특징\]**](#주요특징)
      - [**\[열거형 사용 시 고려사항\]**](#열거형-사용-시-고려사항)
      - [**\[추가\]**](#추가)
  - [3.2 타입 조합](#32-타입-조합)
    - [3.2.1 교차 타입(`Intersection Type`)](#321-교차-타입intersection-type)
    - [3.2.2 유니온 타입(Union Type)](#322-유니온-타입union-type)
    - [3.2.3 인덱스 시그니처(Index Signature)](#323-인덱스-시그니처index-signature)
    - [3.2.4 인덱스 엑세스(Index Access)](#324-인덱스-엑세스index-access)
    - [3.2.5 맵드(Mapped Type)](#325-맵드mapped-type)
    - [3.2.6 템플릿 리터럴 타입(Template Literal Type)](#326-템플릿-리터럴-타입template-literal-type)
    - [3.2.7 제네릭 타입(Generic Type)](#327-제네릭-타입generic-type)
  - [3.3 제네릭(Generic) 사용법](#33-제네릭generic-사용법)
    - [3.3.1 함수의 제네릭](#331-함수의-제네릭)
    - [3.3.2 호출 시그니처(Calling Signature)의 제네릭](#332-호출-시그니처calling-signature의-제네릭)
    - [3.3.3 클래스의 제네릭](#333-클래스의-제네릭)
    - [3.3.4 제한된 제네릭](#334-제한된-제네릭)
    - [3.3.5 확장된 제네릭](#335-확장된-제네릭)
    - [3.3.6 제네릭 예](#336-제네릭-예)
  - [Keywords](#keywords)
  - [CheckList](#checklist)
  - [References](#references)

<br>

## 3.1 타입스크립트만의 독자적 타입 시스템

**[타입스크립트의 타입 계층 구조]**
![타입스크립트의 타입 계층 구조](https://velog.velcdn.com/images/pung8146/post/609a48d1-877b-49a5-b4b0-b0de806cb0ce/image.png)

### 3.1.1 `any` 타입

- TypeScript의 `any` 타입은 타입 체크 메커니즘을 우회하는 방법을 제공합니다.
- 변수에 `any` 타입을 할당하면 해당 변수는 어떠한 타입의 값이든 받을 수 있으며, 컴파일러는 해당 변수에 대한 타입 체크를 수행하지 않습니다.
  이는 코드의 안정성을 저하시킬 수 있기 때문에, 가능한 한 `any` 타입의 사용을 피하고 더 구체적인 타입을 사용하도록 권장됩니다.

**[주요특징]**
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


### 3.1.2 `unknown` 타입

- TypeScript에서 `unknown` 타입은 `any` 타입의 타입 안전한 대안으로 도입되었습니다.
- `any` 타입과 마찬가지로, `unknown` 타입에는 어떠한 값도 할당할 수 있지만, `unknown` 타입의 변수를 사용하기 전에 해당 타입을 확인하거나 좁혀야 한다는 차이점이 있습니다.


**[주요특징]**
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


### 3.1.3 `void` 타입

-  `void` 타입은 함수가 값을 반환하지 않을 때 사용되는 타입입니다.
-  주로 함수에서 반환 값이 없음을 명시적으로 표현할 때 사용됩니다.

**[주요특징]**
- **함수 반환 값의 부재**: `void` 타입은 함수가 어떠한 값을 반환하지 않는다는 것을 나타냅니다. 이는 함수가 부수 효과(side effects)만을 목적으로 할 때 주로 사용됩니다.
- **변수 타입으로의 사용 제한**: `void` 타입을 변수에 사용하는 것은 권장되지 않습니다. 변수에 `void` 타입을 사용하면, 그 변수는 `undefined` 또는 `null`만을 할당받을 수 있게 됩니다(엄격 모드에서는 `undefined`만 할당 가능).
- **타입스크립트의 엄격한 타입 체킹과의 관계**: `void` 타입을 사용함으로써, 함수가 값을 반환하지 않는다는 것을 명확히 할 수 있어, TypeScript의 엄격한 타입 체킹 체계 내에서 코드의 의도를 더 명확하게 표현할 수 있습니다.


```typescript
function logMessage(message: string): void {
    console.log(message);
}

logMessage("Hello, TypeScript!"); // 출력: "Hello, TypeScript!"
```

이 예에서 `logMessage` 함수는 문자열 매개변수를 받고, 반환 값이 없습니다(`void`). 따라서 이 함수의 타입은 `void`로 명시됩니다.

**[`void` 타입과 `undefined`의 차이]**

`void`와 `undefined`는 종종 혼동될 수 있습니다. 하지만 `void`는 주로 함수가 아무것도 반환하지 않을 때 사용되는 반면, `undefined`는 변수가 초기화되지 않은 상태를 나타내기 위해 사용됩니다.

| 기준         | `void` 타입                                         | `undefined` 타입                                     |
|------------|-----------------------------------------------------|------------------------------------------------------|
| **의미**      | 함수가 값을 반환하지 않음                             | 변수가 초기화되지 않은 상태                           |
| **사용 사례**   | 함수의 반환 타입으로 사용                            | 변수의 초기값으로 사용, 명시적으로 `undefined` 할당 시 사용 |
| **할당 가능한 값** | `undefined`, `null` (strict null checks가 비활성화된 경우) | `undefined`                                          |
| **용도**     | 함수가 반환값 없이 종료됨을 명시적으로 나타냄             | 변수가 아직 값이 할당되지 않았음을 나타냄               |

**[`tsconfig.json`에서 `strictNullChecks` 옵션]**

- TypeScript의 `tsconfig.json` 파일에서 `strictNullChecks` 옵션은 타입 안전성을 강화하기 위해 사용됩니다. 이 옵션을 활성화하면, TypeScript는 `null`과 `undefined`를 모든 타입에서 엄격하게 구분하고 체크합니다.
- 특히 `void` 타입과 함께 사용할 때, 이 옵션은 함수가 값을 반환하지 않는다는 것을 명확하게 하고, `null`과 `undefined`의 사용에 대해 더 엄격한 규칙을 적용하여 코드의 신뢰성을 높일 수 있습니다.


**[`strictNullChecks` 옵션이란?]**
- **목적**: 코드 내에서 `null`과 `undefined` 사용을 더 엄격하게 관리하여, 런타임 오류를 줄이고 타입 안전성을 향상시키는 것입니다.
- **기능**: 이 옵션을 활성화하면, `null`과 `undefined`는 오직 `any` 또는 각각의 타입(`null`, `undefined`)에만 할당할 수 있습니다. 다른 모든 타입에 `null`이나 `undefined`를 할당하려고 하면 컴파일러 오류가 발생합니다.

**[`void` 타입과 `strictNullChecks`]**

- **`strictNullChecks` 비활성화**: `strictNullChecks`가 비활성화되어 있으면, `void` 타입의 변수에 `undefined` 또는 `null`을 할당할 수 있습니다. 이는 `void` 타입이 함수에서 어떤 값도 반환하지 않음을 나타내기 위해 주로 사용되기 때문입니다.
- **`strictNullChecks` 활성화**: `strictNullChecks`가 활성화되어 있으면, `void` 타입의 변수에는 `undefined`만 할당할 수 있습니다. `null`을 할당하려고 시도하면 오류가 발생합니다. 이는 TypeScript가 `null`과 `undefined`를 엄격하게 구분하기 때문입니다.

**[`strictNullChecks` 활성화의 장점]**

- **타입 안전성 향상**: `null`과 `undefined`를 명확히 구분하여 사용함으로써, 예기치 않은 `null` 참조 오류를 줄일 수 있습니다.
- **버그 예방**: 함수에서 반환값이 없을 때 명시적으로 `void`를 사용하고, `strictNullChecks`를 활성화함으로써, 개발자는 반환값을 실수로 사용하는 것을 방지할 수 있습니다.
- **코드 명확성**: `strictNullChecks` 옵션은 코드의 명확성을 높여, 다른 개발자가 코드를 이해하기 쉽게 만듭니다.

**[`tsconfig.json` 파일에서 `strictNullChecks`를 활성화하는 방법]**

```json
{
  "compilerOptions": {
    "strictNullChecks": true,
    ...
  }
}
```

### 3.1.4 `never` 타입

-  `never` 타입은 그 자체로 매우 특별한 타입으로, 함수가 정상적으로 종료되지 않거나 절대 발생하지 않는 값의 타입을 나타내기 위해 사용됩니다.
-  이는 주로 에러를 발생시키는 함수나 무한 루프 같이 종료되지 않는 함수의 반환 타입으로 사용됩니다.

**[주요특징]**

- **종료되지 않는 함수**: `never` 타입은 함수가 값을 반환하지 않고 종료되지 않음을 나타냅니다. 예를 들어, 함수 내부에서 예외를 던지거나 무한 루프에 빠질 때 사용됩니다.
- **할당 불가능**: `never` 타입은 어떤 타입에도 할당될 수 없습니다. 그러나, `never` 타입은 모든 타입에 할당될 수 있으며, 이는 타입 시스템 내에서 하위 타입으로 작동한다는 것을 의미합니다.
- **타입 가드의 사용**: `never` 타입은 타입 가드를 통해 코드의 불가능한 상태를 나타내는 데 사용될 수 있습니다. 이는 코드의 타입 안전성을 강화하는 데 도움을 줍니다.

**[`never` 타입의 사용 사례]**
1. **예외를 발생시키는 함수**:
   함수가 항상 예외를 발생시키고 정상적으로 종료되지 않는 경우, 해당 함수의 반환 타입으로 `never`를 사용할 수 있습니다.
2. **무한 루프**:
   프로그램의 흐름이 무한 루프에 빠지는 함수는 결코 값을 반환하지 않으므로 `never` 타입을 반환 타입으로 명시할 수 있습니다.
3. **타입 가드**:
   `exhaustive checks`(완전 검사)에서, `switch`문이나 타입 가드 내에서 모든 가능한 케이스를 처리한 후에 남는 부분이 없도록 함으로써, 어떤 변수가 `never` 타입을 가질 수 있음을 보장합니다. 이를 통해 코드의 완전성을 검증할 수 있습니다.

```typescript
// 예외를 발생시키는 함수의 반환 타입으로 `never` 사용
function throwError(message: string): never {
  throw new Error(message);
}

// 무한 루프 함수의 반환 타입으로 `never` 사용
function infiniteLoop(): never {
  while (true) {}
}

// 타입 가드와 exhaustive checks에서 `never` 사용
type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      // 컴파일러가 `shape`가 `never` 타입이라고 판단
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```

### 3.1.5 `Array` 타입

- TypeScript에서 배열은 동일한 타입의 값들을 순서대로 저장하는 자료 구조입니다.
- TypeScript는 배열을 정의하고 사용하기 위해 여러 가지 방법을 제공하며, 이를 통해 타입 안전성을 보장하고 개발 과정에서 발생할 수 있는 오류를 최소화합니다.

**[주요특징]**
- **타입화된 요소**: TypeScript 배열은 모든 요소가 동일한 타입을 가집니다. 이는 배열을 통해 타입의 일관성을 유지할 수 있게 해줍니다.
- **길이 유연성**: 배열은 길이가 고정되지 않고, 요소를 추가하거나 제거함으로써 동적으로 크기가 변할 수 있습니다.
- **제네릭 배열 타입**: TypeScript는 제네릭을 사용하여 배열 타입을 정의할 수 있게 해줍니다. 이를 통해 재사용 가능하고 유지 관리하기 쉬운 코드를 작성할 수 있습니다.

**[배열 타입 정의 방법]**

1. **타입 + 대괄호 [] 사용**:
   가장 일반적인 방법으로, 타입 뒤에 대괄호를 붙여 해당 타입의 요소들로 구성된 배열을 나타냅니다.

   ```typescript
   let numbers: number[] = [1, 2, 3];
   let strings: string[] = ["a", "b", "c"];
   ```

2. **제네릭 배열 타입 사용**:
   `Array<타입>` 형식을 사용하여 배열을 정의할 수 있습니다. 이 방식은 특히 함수의 매개변수나 반환 타입으로 배열을 다룰 때 유용합니다.

   ```typescript
   let numbers: Array<number> = [1, 2, 3];
   let strings: Array<string> = ["a", "b", "c"];
   ```

**[배열 타입 사용 시 고려사항]**

- **타입 일관성**: 배열 내 모든 요소는 선언된 타입과 일치해야 합니다. 타입이 일치하지 않는 요소를 추가하려고 하면 TypeScript 컴파일러가 오류를 발생시킵니다.
- **불변성**: TypeScript는 배열의 불변성을 직접적으로 강제하지 않습니다. 불변성을 유지하고자 할 때는 프로그래밍 패턴이나 라이브러리를 통해 관리해야 합니다.
- **고차 함수**: TypeScript 배열은 `map`, `filter`, `reduce`와 같은 고차 함수를 지원합니다. 이 함수들을 사용할 때 각 요소의 타입이 유지되며, 필요에 따라 새로운 타입의 배열을 반환할 수 있습니다.

**[튜플과 유니언 타입을 이용한 배열 타입 비교]**

튜플은 요소의 순서와 타입을 명확하게 지정하는 데 유용하며, 유니언 타입은 하나의 타입이 여러 가능성을 가질 수 있도록 해줍니다.

| 특징       | 튜플 타입                                                | 유니언 타입                                              |
|----------|--------------------------------------------------------|--------------------------------------------------------|
| **정의**    | 고정된 길이의 배열로, 각 요소의 타입이 명시적으로 정의됨.        | 하나의 변수가 여러 타입 중 하나를 가질 수 있음을 나타냄.               |
| **용도**    | 다양한 타입의 요소를 순서대로 포함해야 할 때 사용.              | 배열이나 변수가 두 개 이상의 타입을 가질 수 있도록 할 때 사용.           |
| **예제**    | `[number, string]`은 첫 번째 요소가 숫자, 두 번째 요소가 문자열인 튜플. | `(number | string)[]`은 숫자 또는 문자열 요소를 포함할 수 있는 배열. |
| **복합적 사용** | 특정 위치의 요소가 여러 가능한 타입 중 하나를 가질 수 있도록 할 때 사용.   | 튜플 내에서도 유니언 타입을 사용하여 요소의 타입을 다양화할 수 있음.       |

```typescript
// 튜플과 유니언 타입의 복합적 사용 예
// 튜플 내에서 유니언 타입 사용
let complexArray: [number, string | boolean] = [1, "text"]; // 첫 번째 요소는 number, 두 번째 요소는 string 또는 boolean 타입
```

**[TypeScript에서 배열 타입과 관련된 옵셔널(Optional) 특성]**

- TypeScript에서 옵셔널(Optional) 특성은 배열 타입과 결합하여 사용될 때, 배열의 요소들이 선택적으로 존재할 수 있음을 나타낼 수 있습니다. 이는 배열의 구조를 명확히 하면서도 유연성을 제공합니다.
- 이는 배열 내 특정 요소가 undefined일 수 있음을 허용하거나, 배열 자체가 선택적으로 존재할 수 있음을 나타내는 데 사용됩니다.

1. **옵셔널 요소**: 배열 내의 요소가 선택적으로 존재할 수 있도록 할 때 사용됩니다. 이는 주로 튜플 타입에서 보다 많이 사용되며, 배열 내 특정 위치의 요소가 존재하지 않을 수 있음을 명시적으로 표현할 수 있습니다.

  ```typescript
  let optionalElements: [string, number?, boolean?] = ["text"];
  // 이 배열은 문자열을 첫 번째 요소로 가지며, 두 번째(숫자)와 세 번째(불리언) 요소는 선택적입니다.
  ```

2. **선택적 배열**: 배열 자체가 선택적으로 존재할 수 있음을 나타내는 경우에 사용됩니다. 이는 배열을 포함하는 변수나 함수의 매개변수가 `undefined`일 수 있음을 허용합니다.

  ```typescript
  function logMessages(messages?: string[]) {
    if (messages) {
      for (const message of messages) {
        console.log(message);
      }
    } else {
      console.log("No messages to log.");
    }
  }
  // 이 함수는 `messages` 배열이 제공될 수도 있고, 제공되지 않을 수도 있습니다.
  ```

**[옵셔널 배열 요소와 선택적 배열의 차이점]**

- **옵셔널 배열 요소**: 배열의 길이는 고정되어 있거나 예상할 수 있으나, 일부 요소가 `undefined`일 수 있습니다. 이는 배열의 구조를 명확히 하면서도 유연성을 제공합니다.
- **선택적 배열**: 배열 전체가 존재하지 않을 수 있습니다. 이는 배열을 사용하는 변수나 함수 매개변수가 배열을 필수로 요구하지 않을 때 유용합니다.

**[옵셔널 배열 요소와 선택적 배열 사용 시 고려사항]**

- **타입 체킹**: 옵셔널 요소나 선택적 배열을 사용할 때는 항상 `undefined`를 처리하는 로직이 필요합니다. TypeScript의 엄격한 타입 체크(`strictNullChecks`) 옵션이 활성화되어 있다면, 이러한 값들을 적절히 처리하지 않으면 컴파일 오류가 발생할 수 있습니다.
- **코드 가독성**: 옵셔널 요소와 선택적 배열을 사용할 때는 코드의 명확성을 유지하는 것이 중요합니다. 사용자가 코드를 쉽게 이해하고, 잠재적인 오류를 미리 파악할 수 있도록 해야 합니다.

### 3.1.6 `enum` 타입

#### **[정의]**
- TypeScript의 열거형(`enum`) 타입은 명명된 상수의 집합을 정의할 때 사용됩니다.
- `enum`을 사용하면, 관련된 상수들을 그룹화하여 코드의 가독성과 유지보수성을 향상시킬 수 있습니다. 열거형은 숫자와 문자열 값을 지원합니다.

#### **[`enum` 타입의 기본적인 구조]**

```ts
enum TypeName {
    value1,
    value2,
    ...
}
```

여기서 `enum` 키워드 다음에는 열거형의 이름인 `TypeName`이 오고, 중괄호 `{}` 안에는 열거형이 가질 수 있는 값들인 `value1`, `value2`, ... 등이 쉼표로 구분되어 나열됩니다.

**[예제]**

```ts
// 예:계절을 나타내는 열거형을 정의할 경우
enum Season {
    Spring,
    Summer,
    Autumn,
    Winter
}

console.log(Season.Spring) // 0
console.log(Season.Summer) // 1
console.log(Season.Autumn) // 2
console.log(Season.Winter) // 3
```
> 이렇게 정의된 열거형 `Season`은 `Season.Spring`, `Season.Summer` 등과 같이 사용하여 계절을 명확하게 표현할 수 있도록 도와줍니다.

```js
// 컴파일러를 통해 자바스크립트로 변환하였을 때
"use strict";

var Season;

(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));

console.log(Season.Spring);
console.log(Season.Summer);
console.log(Season.Autumn);
console.log(Season.Winter);
```

#### **[열거형의 기본 사용법]**

- **숫자 열거형**: TypeScript에서 열거형을 선언할 때 특정 값을 지정하지 않으면, 기본적으로 숫자 열거형으로 처리되며, 첫 번째 항목은 `0`에서 시작하여 이후 항목은 1씩 증가합니다.

  ```ts
  enum Direction {
    Up,
    Down,
    Left,
    Right,
  }

  console.log(Direction.Up) // 0
  console.log(Direction.Down) // 1
  console.log(Direction.Left) // 2
  console.log(Direction.Right) // 3
  ```

  ```ts
  // 3.1.6-1
  enum ProgrammingLanguage {
    Typescript, // 0
    Javascript, // 1
    Java, // 2
    Python, // 3
    Kotlin, // 4
    Rust, // 5
    Go, // 6
  }

  // 각 멤버에게 접근하는 방식은 자바스크립트에서 객체의 속성에 접근하는 방식과 동일하다
  ProgrammingLanguage.Typescript; // 0
  ProgrammingLanguage.Rust; // 5
  ProgrammingLanguage["Go"]; // 6

  // 또한 역방향으로도 접근이 가능하다
  ProgrammingLanguage[2]; // “Java”
  ```

- **문자열 열거형**: 각 멤버를 문자열 리터럴로 초기화할 수 있으며, 문자열 리터럴은 열거형의 각 멤버에 대해 명시적인 값을 제공합니다.

  ```ts
  enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }

  console.log(Direction.Up) // "UP"
  console.log(Direction.Down) // "DOWN"
  console.log(Direction.Left) // "LEFT"
  console.log(Direction.Right) // "RIGHT"
  ```

  ```ts
  // 3.1.6-2
  enum ProgrammingLanguage {
    Typescript = "Typescript",
    Javascript = "Javascript",
    Java = 300,
    Python = 400,
    Kotlin,
    Rust,
    Go,
  }

  console.log(ProgrammingLanguage.Typescript) // "Typescript"
  console.log(ProgrammingLanguage.Java) // 300
  console.log(ProgrammingLanguage.Go)  // 403
  ```

#### **[주요특징]**

- **자체 문서화**: 열거형은 코드 내에서 상수의 의미를 명확하게 전달할 수 있도록 돕습니다. 열거형 멤버의 이름으로 코드를 자체 문서화할 수 있습니다.
- **컴파일 타임 체크**: 열거형을 사용하면, 유효한 값들의 집합을 미리 정의할 수 있으므로, 컴파일 타임에 타입 체킹을 통해 오류를 방지할 수 있습니다.
- **런타임 객체**: 열거형은 TypeScript에서 런타임에 실제 객체로 존재합니다. 이를 통해 열거형의 값들을 런타임에 조회하거나 반복 처리할 수 있습니다.

#### **[열거형 사용 시 고려사항]**

- **초기화**: 숫자 열거형에서 첫 번째 멤버는 기본적으로 `0`으로 초기화되지만, 시작 값을 변경하려면 첫 번째 멤버에 다른 숫자를 할당할 수 있습니다. 문자열 열거형의 경우 모든 멤버를 명시적으로 초기화해야 합니다.
- **역매핑**: 숫자 열거형은 역매핑 기능을 제공하여, 멤버의 값으로부터 그 이름을 찾을 수 있습니다. 문자열 열거형은 이 기능을 제공하지 않습니다.
- **`const` 열거형**: 성능 최적화를 위해, `const` 키워드를 사용하여 컴파일 시 열거형을 상수로 변환할 수 있습니다. `const enum`은 런타임에 객체를 생성하지 않고, 사용된 곳에 인라인으로 값을 삽입합니다.

**[책 예제]**

```ts
// 3.1.6-3
enum ItemStatusType {
  DELIVERY_HOLD = "DELIVERY_HOLD", // 배송 보류
  DELIVERY_READY = "DELIVERY_READY", // 배송 준비 중
  DELIVERING = "DELIVERING", // 배송 중 
  DELIVERED = "DELIVERED", // 배송 완료
}

const checkItemAvailable = (itemStatus: ItemStatusType) => {
  switch (itemStatus) {
    case ItemStatusType.DELIVERY_HOLD:
    case ItemStatusType.DELIVERY_READY:
    case ItemStatusType.DELIVERING:
      return false;
    case ItemStatusType.DELIVERED:
    default:
      return true;
  }
};

console.log(ItemStatusType);
console.log(checkItemAvailable(ItemStatusType.DELIVERED))
console.log(checkItemAvailable(ItemStatusType.DELIVERY_HOLD))
```

```ts
// 3.1.6-4
enum ProgrammingLanguage {
  Typescript = "Typescript",
  Javascript = "Javascript",
  Java = 300,
  Python = 400,
  Kotlin,
  Rust,
  Go,
}

ProgrammingLanguage[200]; // undefined를 출력하지만 별다른 에러를 발생시키지 않는다
const myLanguage = ProgrammingLanguage.Java; // 이렇게 enum 값을 안전하게 사용할 수 있습니다
```
> `enum` 타입을 사용할 때 주의할 점은, `enum` 값에 대한 접근 시 숫자 값이 아닌 문자열 값으로 접근해야 한다는 것입니다. 만약 숫자 값으로 접근하게 되면 `undefined`가 반환되지만 에러는 발생하지 않습니다. 이러한 문제를 방지하기 위해 `const enum`을 사용하여 `enum`을 선언할 수도 있습니다. 이를 통해 `enum` 값에 대한 안전한 접근을 보장할 수 있습니다.

```ts
// 3.1.6-4
const enum ProgrammingLanguage {
  Typescript = "Typescript",
  Javascript = "Javascript",
  Java = 300,
  Python = 400,
  Kotlin = 500,
  Rust = 600,
  Go = 700,
}

ProgrammingLanguage[Java]; // 에러 발생: ProgrammingLanguage이 정의되지 않았습니다
```

```ts
// 3.1.6-4
// 다음과 같이 선언하면 위와 같은 문제를 방지할 수 있다
const enum ProgrammingLanguage {
  Typescript = "Typescript",
  Javascript = "Javascript",
  Java = 300,
  Python = 400,
  Kotlin = 500,
  Rust = 600,
  Go = 700,
}

const myLanguage = ProgrammingLanguage.Java; // 이렇게 enum 값을 안전하게 사용할 수 있습니다
console.log(myLanguage)
```

```ts
// 3.1.6-5
const enum NUMBER {
  ONE = 1,
  TWO = 2,
}
const myNumber: NUMBER = 100; // NUMBER enum에서 100을 관리하고 있지 않지만 이는 에러를 발생시키지 않습니다

const enum STRING_NUMBER {
  ONE = "ONE",
  TWO = "TWO",
}
const myStringNumber: STRING_NUMBER = "THREE"; // 에러 발생
```

```ts
const enum NUMBER {
  ONE = 1,
  TWO = 2,
}
const myNumber: NUMBER = NUMBER.ONE; // 올바른 enum 값으로 수정
console.log(myNumber) // 1

const enum STRING_NUMBER {
  ONE = "ONE",
  TWO = "TWO",
}
const myStringNumber: STRING_NUMBER = STRING_NUMBER.ONE; // 올바른 enum 값으로 수정
console.log(myStringNumber) // "ONE"
```

#### **[추가]**
> [발췌](https://learntypescript.dev/04/l1-enum#summary)
> 
> String enum values are strongly-typed to the named values declared in the enum.

TypeScript에서 문자열 `enum` 값은 `enum`에 선언된 이름 값에 강력(?)하게 입력됩니다. 이는 TypeScript의 강력한 타입 시스템의 일환으로, `enum` 내에서 선언된 값 외에는 다른 값을 입력할 수 없도록 보장합니다. 이를 통해 코드의 가독성과 유지보수성이 향상되며, 잘못된 값이 입력되는 오류를 방지할 수 있습니다.


<br>

## 3.2 타입 조합

### 3.2.1 교차 타입(`Intersection Type`)

- TypeScript의 교차 타입(Intersection Type)은 여러 타입을 하나로 결합하여, 모든 타입의 기능을 가진 단일 타입을 생성합니다. 
- 교차 타입을 사용하면, 기존 타입들을 조합하여 새로운 타입을 만들 수 있으며, 이는 타입의 재사용성을 높이고, 복잡한 타입 관계를 표현하는 데 유용합니다.

**[교차 타입의 기본 사용법]**

교차 타입은 `&` 연산자를 사용하여 정의됩니다. 이 연산자는 두 개 이상의 타입을 결합하여, 모든 타입의 속성을 포함하는 새로운 타입을 생성합니다.

```typescript
type FirstType = {
  firstProperty: string;
};

type SecondType = {
  secondProperty: number;
};

type CombinedType = FirstType & SecondType;
```

위 예제에서 `CombinedType`은 `FirstType`의 모든 속성과 `SecondType`의 모든 속성을 모두 가지는 타입입니다.

**[주요특징]**
- **속성의 결합**: 교차 타입을 통해 여러 타입의 속성을 하나의 타입에 결합할 수 있습니다. 결과 타입은 모든 속성을 포함합니다.
- **유연성**: 기존 타입을 변경하지 않고도 새로운 타입을 생성할 수 있어, 코드의 유연성과 재사용성이 향상됩니다.
- **타입 충돌**: 교차하는 타입 중 동일한 속성에 대해 서로 다른 타입을 가지는 경우, 타입 충돌이 발생할 수 있습니다. TypeScript는 이러한 충돌을 오류로 처리합니다.

**[교차 타입 사용 시 고려사항]**

- **복잡성 관리**: 여러 타입을 결합할 때, 결과 타입의 복잡성이 증가할 수 있습니다. 타입의 구조가 너무 복잡해지지 않도록 주의해야 합니다.
- **충돌 해결**: 교차 타입에서 속성 충돌이 발생하는 경우, 타입의 정의를 조정하거나, 타입 가드를 사용하여 충돌을 해결할 수 있습니다.

**[교차 타입의 활용 예]**

교차 타입은 기능을 확장하거나, 여러 소스에서 타입 정보를 결합할 때 유용하게 사용될 수 있습니다. 예를 들어, 두 개의 인터페이스를 결합하여 새로운 인터페이스를 생성하거나, 함수의 매개변수 타입으로 복잡한 요구사항을 표현할 때 사용할 수 있습니다.

```typescript
interface User {
  id: number;
  name: string;
}

interface Permissions {
  canRead: boolean;
  canWrite: boolean;
}

type UserPermissions = User & Permissions;

function setUserPermissions(user: UserPermissions) {
  // 함수 구현...
}
```

**[인터페이스(`interface`)와 타입 별칭(`type`)의 차이점]**

TypeScript에서 인터페이스(`interface`)와 타입 별칭(`type`)은 객체의 형태를 정의하는 데 사용되지만, 인터페이스는 확장성과 재사용성 측면에서 강점을 가지며, 타입 별칭은 유니온 타입이나 교차 타입 같은 복잡한 타입을 정의하기 위해 사용됩니다.

**인터페이스(`interface`)**

- **확장성**: 인터페이스는 확장이 가능합니다. `extends` 키워드를 사용하여 다른 인터페이스를 상속받아 새로운 인터페이스를 만들 수 있습니다.
- **재선언**: 동일한 이름의 인터페이스를 여러 번 선언하면, 이들은 자동으로 병합됩니다. 이 특성은 라이브러리 타입을 확장할 때 유용하게 사용될 수 있습니다.
- **클래스 구현**: 인터페이스는 클래스에서 `implements` 키워드를 사용하여 구현할 수 있습니다. 이는 클래스가 특정 구조를 갖추도록 강제할 수 있습니다.

```typescript
interface User {
  name: string;
}

interface User {
  age: number;
}

// 자동으로 병합되어 아래와 같은 형태를 가짐
// interface User {
//   name: string;
//   age: number;
// }
```

**타입 별칭(`type`)**

- **유니온 타입과 교차 타입**: 타입 별칭은 유니온 타입이나 교차 타입을 정의하는 데 사용될 수 있습니다. 이는 인터페이스에서는 할 수 없는 작업입니다.
- **기본 타입 별칭**: 기본 타입(예: `string`, `number`)에 별칭을 부여할 수 있어, 코드의 의미를 명확하게 할 수 있습니다.
- **확장 불가능**: 타입 별칭은 확장할 수 없습니다. 즉, 한 번 정의되면 그 형태를 직접 수정하지 않는 한 변경할 수 없습니다.

```typescript
type User = {
  name: string;
  age: number;
};

type Admin = User & {
  permissions: string[];
};
```

**[주요 차이점 요약]**

| 구분       | 인터페이스(`interface`)                           | 타입 별칭(`type`)                                    |
|----------|-------------------------------------------------|---------------------------------------------------|
| 확장성      | 확장 가능 (`extends`)                            | 확장 불가능                                         |
| 재선언      | 가능 (동일한 이름으로 선언 시 자동 병합)                | 불가능                                              |
| 유니온/교차 타입 | 지원하지 않음                                     | 지원 (`&`, `|` 사용)                                |
| 클래스 구현   | `implements`를 사용하여 클래스에서 구현 가능               | 직접 구현 불가능 (클래스에서 `type`을 직접 `implements` 할 수 없음) |

**[클래스 구현: `implements` 사용법과 제한사항]**

- TypeScript에서 `implements` 키워드는 클래스가 특정 인터페이스를 구현하도록 강제하는 데 사용됩니다.  
- `implements` 키워드를 사용하여 클래스에서 인터페이스를 구현할 때, 해당 클래스는 인터페이스가 정의한 모든 속성과 메서드를 구현해야 합니다.
- 반면에, `type`은 클래스에서 직접 구현할 수 없으며, 주로 타입의 별칭이나 유니언, 교차 타입과 같은 복잡한 타입을 정의하는 데 사용됩니다. 

**[`interface` 구현]**

- **구현 가능**: 클래스는 하나 이상의 `interface`를 구현할 수 있습니다. 이는 `implements` 키워드를 사용하여 이루어집니다. 인터페이스는 메서드의 시그니처와 속성을 정의할 수 있으며, 클래스는 이러한 인터페이스를 구현함으로써 해당 메서드와 속성을 가지고 있음을 보장해야 합니다.
- **예제**:
  ```typescript
  interface IUser {
    name: string;
    sayHello(): void;
  }

  class User implements IUser {
    constructor(public name: string) {}
  
    sayHello() {
      console.log(`Hello, ${this.name}`);
    }
  }
  ```
  위 예제에서, `User` 클래스는 `IUser` 인터페이스를 구현합니다. 이는 `User` 클래스가 `name` 속성과 `sayHello` 메서드를 가지고 있음을 의미합니다.

**[클래스에서 `type` 구현의 제한사항]**

- **직접 구현 불가능**: TypeScript에서는 `type`을 사용하여 복잡한 타입을 정의할 수 있지만, 클래스가 `type`을 `implements` 키워드를 사용하여 직접 구현하는 것은 허용되지 않습니다. `type`은 구조적 타이핑과 타입의 별칭을 제공하지만, `interface`처럼 클래스에서 직접 구현할 수 있는 "계약"을 제공하지는 않습니다.
- **예제**:
  ```typescript
  type User = {
    name: string;
    sayHello(): void;
  };
  
  // 다음은 오류를 발생시킵니다:
  // class UserClass implements User {}
  ```
  이 코드는 TypeScript에서 허용되지 않으며, 컴파일 시 오류를 발생시킵니다. `type`은 인터페이스와 달리 클래스에서 구현할 수 있는 계약이 아닙니다.


**[인터페이스와 클래스의 관계]**
> TypeScript에서는 클래스나 함수를 모듈에서 가져오는 것처럼 new 키워드나 new 키워드를 사용하는 인터페이스를 직접 가져올 수 없습니다.

```typescript
// 생성자 시그니처를 포함한 인터페이스 정의
interface Constructable {
  new (name: string): Person;
}

// 인터페이스를 구현할 클래스 정의
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// Constructable 인터페이스를 구현하는 클래스의 인스턴스를 생성하는 함수
function createInstance(ctor: Constructable, name: string): Person {
  return new ctor(name);
}

// 함수를 사용하여 Person 클래스의 인스턴스 생성
const person = createInstance(Person, "John Doe");
console.log(person.name); // 출력: John Doe
```

### 3.2.2 유니온 타입(Union Type)

TypeScript의 유니언 타입(Union Type)은 여러 타입 중 하나가 될 수 있는 값을 표현할 수 있게 해주는 고급 타입입니다. 유니언 타입은 다양한 타입을 하나의 타입으로 결합하여, 변수나 함수가 받을 수 있는 입력 타입의 범위를 확장합니다.

**[유니언 타입의 기본 사용법]**

유니언 타입은 두 개 이상의 타입을 `|` 기호를 사용하여 연결함으로써 정의됩니다. 이는 해당 변수나 반환 값이 정의된 타입 중 하나일 수 있음을 의미합니다.

```typescript
let myValue: string | number;
```

위의 예제에서, `myValue`는 `string` 타입 또는 `number` 타입의 값을 가질 수 있습니다.

**[주요특징]**

- **타입 유연성**: 유니언 타입을 사용하면 함수 매개변수, 반환 값, 그리고 변수 등이 다양한 타입을 허용할 수 있게 되어 프로그램의 유연성이 증가합니다.
- **타입 가드 사용**: 유니언 타입을 사용할 때는 종종 타입 가드(type guards)를 사용하여 특정 타입에 대한 코드 블록을 안전하게 실행할 수 있습니다.
- **공통 속성 접근**: 유니언 타입의 모든 타입에 공통된 속성에만 접근할 수 있습니다. 특정 타입에만 존재하는 속성에 접근하려면 타입 가드를 사용해야 합니다.

**[유니언 타입의 사용 사례]**

- **다양한 타입 처리**: API로부터 받는 데이터가 여러 타입 중 하나일 수 있는 경우, 유니언 타입을 사용하여 이를 효과적으로 처리할 수 있습니다.
- **함수 오버로딩**: 하나의 함수가 여러 타입의 매개변수를 받아 처리할 수 있도록 할 때 유니언 타입을 사용할 수 있습니다.
- **타입 가드와 결합**: 유니언 타입과 타입 가드를 결합하면, 런타임에 타입을 체크하고 안전하게 타입별 로직을 실행할 수 있습니다.

```typescript
// 유니언 타입과 타입 가드 결합 예
function processValue(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase(); // string 타입이 확실할 때만 호출
  } else {
    return value.toFixed(2); // number 타입이 확실할 때만 호출
  }
}
```


### 3.2.3 인덱스 시그니처(Index Signature)

TypeScript의 인덱스 시그니처(Index Signature)는 객체가 동적 속성을 가질 수 있음을 나타내는 방법으로, 객체의 속성 이름과 값의 타입을 유연하게 정의할 수 있습니다. 이를 통해 컴파일 시점에는 알 수 없는 속성 이름과 타입에 대해서도 타입 체크를 수행할 수 있게 됩니다.


**[인덱스 시그니처의 기본 구조]**

인덱스 시그니처는 대괄호 `[]`를 사용하여 정의되며, 속성 이름의 타입(`string` 또는 `number`)과 값의 타입을 지정합니다.

```typescript
interface StringIndexable {
    [index: string]: number;
}
```

위 예제에서 `StringIndexable` 인터페이스는 문자열 인덱스를 사용하며, 그 값의 타입은 `number`입니다. 이는 해당 인터페이스를 구현하는 모든 객체가, 어떤 문자열 속성 이름을 가지든 그 값의 타입이 `number`임을 의미합니다.

**[인덱스 시그니처의 사용 사례]**

- **동적 속성을 포함하는 객체**: API 응답이나 사용자 입력과 같이 런타임에 속성 이름이 결정되는 객체를 다룰 때 유용합니다.
- **맵 형태의 데이터 구조**: 키와 값의 쌍을 저장하는 객체를 타입 안전하게 정의할 수 있습니다.

```typescript
// 인덱스 시그니처를 사용한 객체 정의
let userAges: StringIndexable = {
    "John Doe": 30,
    "Jane Doe": 25
};
```

위 예제에서 `userAges` 객체는 `StringIndexable` 인터페이스를 따르며, 문자열 인덱스를 사용하여 각 사용자의 나이를 저장합니다.


**[인덱스 시그니처의 주요특징]**
- **유연성**: 미리 정의된 속성 이름에 제한받지 않고, 다양한 속성 이름과 값의 타입을 가진 객체를 쉽게 정의할 수 있습니다.
- **타입 안전성**: 동적으로 결정되는 속성에도 타입 체크를 적용하여, 런타임 오류의 가능성을 줄일 수 있습니다.
- **재사용성**: 인덱스 시그니처를 사용하여 정의된 인터페이스는 다양한 객체에 재사용할 수 있으며, 코드 중복을 줄일 수 있습니다.


**[인덱스 시그니처의 제약사항]**

- **단일 타입 제한**: 한 인터페이스 또는 타입 내에서는 하나의 인덱스 시그니처만을 정의할 수 있으며, 속성 이름의 타입이 `string`과 `number`일 때 각각 별도로 정의할 수 있습니다.
- **속성 타입 일치**: 인덱스 시그니처에서 정의된 값의 타입은, 인터페이스 내에서 명시적으로 선언된 다른 속성의 타입과 일치해야 합니다.

```typescript
// 인덱스 시그니처의 단일 타입 제한
interface StringIndexable {
    [index: string]: number;
    // 아래와 같이 또 다른 인덱스 시그니처를 정의하면 오류가 발생합니다:
    // [index: string]: string;
}

// 인덱스 시그니처의 속성 타입 일치
interface StringIndexable {
    [index: string]: number;
    // 아래와 같이 인덱스 시그니처의 값의 타입이 명시적으로 선언된 속성의 타입과 일치하지 않으면 오류가 발생합니다:
    age: string;
}
```


### 3.2.4 인덱스 엑세스(Index Access)

TypeScript의 인덱스 접근(Index Access) 타입은 객체나 배열의 특정 속성이나 인덱스에 접근할 때 그 값의 타입을 추론하는 기능입니다. 이를 통해 타입의 특정 부분만을 참조하거나, 복잡한 타입 내에서 특정 필드의 타입을 동적으로 추출할 수 있습니다.

**[인덱스 접근의 기본 사용법]**

인덱스 접근은 대괄호(`[]`)를 사용하여 타입 내부의 특정 속성이나 인덱스에 대한 타입을 참조합니다. 이 방식은 배열의 요소 타입, 객체의 속성 타입, 튜플의 특정 위치 타입 등을 추론하는 데 사용될 수 있습니다.

```typescript
type Person = {
    name: string;
    age: number;
};

// 'name' 속성의 타입을 추론합니다: string
type NameType = Person["name"];

// 배열의 요소 타입을 추론합니다: number
type ArrayElement = number[];
type ElementType = ArrayElement[number];
```

**[인덱스 접근의 활용 사례]**

- **특정 속성 타입 추출**: 객체 또는 배열 등의 복합 타입에서 특정 속성이나 요소의 타입을 추출할 때 사용됩니다.
- **동적 속성 타입 접근**: 인덱스 시그니처를 사용하는 객체에서 특정 속성의 타입을 참조할 때 유용합니다.
- **제네릭 타입 내부 접근**: 제네릭 타입의 인자 중 특정 타입만을 추출하거나 참조해야 할 때 사용됩니다.

```typescript
interface ApiResponse {
    data: {
        user: {
            id: number;
            name: string;
        };
    };
}

// 'data' 객체 내 'user' 객체의 타입을 추론합니다.
type UserType = ApiResponse["data"]["user"];
```

**[인덱스 접근의 주요특징]**

- **타입 추론**: 복잡한 타입 구조 내부의 특정 타입을 쉽게 추론할 수 있어, 타입의 재사용성과 가독성을 높입니다.
- **타입 안전성**: 타입스크립트의 타입 체크 기능을 활용하여, 인덱스 접근을 통해 추론된 타입이 정확하게 적용되어 타입 안전성을 보장합니다.
- **유연성**: 타입스크립트의 고급 타입 기능과 결합하여, 동적 타입 접근 및 타입 조작을 가능하게 하여 타입 시스템의 유연성을 증대시킵니다.

### 3.2.5 맵드(Mapped Type)

TypeScript의 매핑된 타입(Mapped Types)은 기존의 타입을 기반으로 새로운 타입을 생성하는 강력한 방법을 제공합니다. 이 기능을 사용하여, 기존 타입의 모든 속성을 반복하여, 각 속성을 변형시키거나 수정된 새로운 타입을 생성할 수 있습니다.

**[매핑된 타입의 기본 구조]**

```typescript
type MappedType<ExistingType> = {
  [Property in keyof ExistingType]: Transform<ExistingType[Property]>;
};
```

여기서 `ExistingType`은 변형할 기존의 타입이며, `Transform`은 각 속성에 적용할 변형 로직을 나타냅니다.

**[주요특징]**
- **유연성**: 기존 타입의 속성을 유지하면서, 각 속성의 타입을 변경하거나, 추가적인 제약을 적용할 수 있습니다.
- **재사용성**: 기존 타입을 재사용하여 다양한 변형된 타입을 쉽게 생성할 수 있어, 코드 중복을 줄이고 타입 정의의 재사용성을 높일 수 있습니다.
- **조건부 타입과의 결합**: 매핑된 타입은 조건부 타입과 결합하여 더 복잡한 타입 변형을 표현할 수 있습니다.

**[매핑된 타입의 사용 사례]**

1. **읽기 전용 타입 생성**:
   모든 속성을 읽기 전용으로 만들어, 불변성을 강제하는 타입을 생성할 수 있습니다.

   ```typescript
   type Readonly<Type> = {
     readonly [Property in keyof Type]: Type[Property];
   };
   ```

2. **옵셔널 속성 타입 생성**:
   모든 속성을 선택적으로 만드는 타입을 생성할 수 있습니다.

   ```typescript
   type Partial<Type> = {
     [Property in keyof Type]?: Type[Property];
   };
   ```

3. **특정 속성만 추출하는 타입 생성**:
   기존 타입에서 특정 속성만을 추출하여 새로운 타입을 생성할 수 있습니다.

   ```typescript
   type Pick<Type, Keys extends keyof Type> = {
     [Property in Keys]: Type[Property];
   };
   ```


### 3.2.6 템플릿 리터럴 타입(Template Literal Type)

- TypeScript의 템플릿 리터럴 타입(Template Literal Types)은 TypeScript 4.1 버전에서 소개된 기능으로, 문자열 리터럴 타입을 더욱 풍부하게 만들어 줍니다.
- 이를 통해 문자열 리터럴 타입에 표현식을 포함시켜, 복합적인 문자열 패턴을 타입으로 정의할 수 있습니다. 템플릿 리터럴 타입은 ES2015의 템플릿 리터럴 문법을 기반으로 합니다.

**[템플릿 리터럴 타입의 기본 사용법]**

템플릿 리터럴 타입은 백틱(``)을 사용하여 정의되며, `${}` 안에 표현식을 넣어 다양한 문자열 타입을 생성할 수 있습니다. 이 표현식은 주로 유니언 타입이나 리터럴 타입과 결합하여 사용됩니다.

```typescript
type World = "world";
type Greeting = `hello ${World}`;
```

위 예제에서 `Greeting` 타입은 `"hello world"` 문자열 리터럴 타입이 됩니다.

**[템플릿 리터럴 타입의 활용]**

템플릿 리터럴 타입은 API 경로, 이벤트 이름, 객체 속성 접근 등 다양한 상황에서 유용하게 활용될 수 있습니다.

- **조건부 문자열 생성**: 유니언 타입과 결합하여 조건에 따른 다양한 문자열 패턴을 생성할 수 있습니다.

  ```typescript
  type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
  type APIEndpoint = `/api/${HTTPMethod}`;
  ```

- **이벤트 리스너 타입**: 이벤트 이름과 관련된 타입을 정의할 때 유용합니다.

  ```typescript
  type MouseEvent = `mouse${'Enter' | 'Leave'}`;
  const addMouseEventListener = (event: MouseEvent, handler: Function) => {
    // 함수 구현
  };
  ```

- **객체 속성 타입**: 객체의 속성 이름 패턴을 정의하는 데 사용할 수 있습니다.

  ```typescript
  type ObjectKeys = `prop${number}`;
  const obj: Record<ObjectKeys, any> = {
    prop1: "value1",
    prop2: "value2",
    // prop3: 100, // 타입 에러: 타입 'number'를 타입 'string'에 할당할 수 없음
  };
  ```

**[템플릿 리터럴 타입의 장점]**

- **타입 안전성**: 더욱 구체적인 문자열 패턴을 타입으로 정의할 수 있어, 프로그램의 타입 안전성을 높일 수 있습니다.
- **자동완성과 타입 검사 지원**: 개발자가 예상하는 문자열 형태를 더 명확하게 지정할 수 있으며, 이를 통해 개발 환경에서의 자동완성과 타입 검사 기능이 개선됩니다.
- **코드의 가독성 향상**: 문자열 패턴이 명시적으로 타입에 표현되므로, 코드를 읽고 이해하기가 더 쉬워집니다.


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

## 3.3 제네릭(Generic) 사용법

- TypeScript의 제네릭은 코드 재사용성, 타입 안전성, 그리고 유연성을 향상시키는 강력한 타입 시스템 기능입니다.
- 함수, 인터페이스, 클래스 등에서 제네릭을 적절히 활용함으로써, 다양한 타입에 대해 동작하는 타입-안전한 코드를 작성할 수 있으며, 이는 개발 과정에서의 복잡성을 줄이고 코드의 가독성을 높여줍니다.

**[제네릭의 주요 특징]**
- **타입 안전성 보장**: 제네릭을 사용하면, 다양한 타입으로 작업하면서도 타입의 일관성을 유지할 수 있습니다. 이는 런타임에 타입 관련 에러를 줄여줍니다.
- **코드 재사용성 향상**: 하나의 함수나 클래스를 여러 타입에 대해 사용할 수 있기 때문에, 코드 중복을 줄이고 재사용성을 높일 수 있습니다.
- **유연성 증가**: 제네릭을 사용하면, 한 가지 타입에 국한되지 않고 여러 타입에서 사용할 수 있는 유연한 코드를 작성할 수 있습니다.


**[제네릭의 기본 사용법]**

제네릭은 꺾쇠괄호(`<>`)와 함께 타입 매개변수를 지정하여 사용합니다. 이 타입 매개변수는 함수나 클래스 내에서 일반적인 타입처럼 사용될 수 있습니다.

- **제네릭 함수**:

  ```typescript
  function identity<T>(arg: T): T {
      return arg;
  }
  ```

- **제네릭 인터페이스**:

  ```typescript
  interface GenericIdentityFn<T> {
      (arg: T): T;
  }
  ```

- **제네릭 클래스**:

  ```typescript
  class GenericNumber<T> {
      zeroValue: T;
      add: (x: T, y: T) => T;
  }
  ```

**[제네릭 타입 매개변수]**

제네릭에서 사용되는 타입 매개변수는 함수나 클래스가 호출될 때 결정됩니다. 타입 매개변수를 통해, 제네릭은 다양한 타입에 대해 유연하게 동작할 수 있습니다.

**[제네릭의 고급 사용법]**

- **제네릭 제약조건**: 제네릭 타입에 특정 속성이 포함되어 있음을 요구할 수 있습니다.

  ```typescript
  function loggingIdentity<T extends { length: number }>(arg: T): T {
      console.log(arg.length);
      return arg;
  }
  ```

- **타입 매개변수의 기본값 설정**: 제네릭 타입 매개변수에 기본값을 설정할 수 있습니다.

  ```typescript
  function createArray<T = string>(length: number, value: T): T[] {
      return new Array<T>(length).fill(value);
  }
  ```


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

## Keywords

| #   | Keyword | Description |
| --- | ------- | ----------- |


<br>

## CheckList

- TypeScript에서 `enum`은 무엇을 나타내는가?
- `enum`을 선언할 때 사용할 수 있는 값은 무엇인가?
- `enum`의 각 항목은 어떻게 값에 대응되는가?
- TypeScript에서 `enum`을 사용하는 이유는 무엇인가?
- `enum`을 사용하여 어떻게 코드를 더 읽기 쉽게 만들 수 있는가?


<br>

## References

- [타입스크립트 핸드북](https://typescript-kr.github.io/)

<br>


[⬆ Back to Top](#table-of-contents)