# 3장 고급 타입

- [3장 고급 타입](#3장-고급-타입)
  - [3.1 타입스크립트만의 독자적 타입 시스템](#31-타입스크립트만의-독자적-타입-시스템)
    - [3.1.1 `any` 타입](#311-any-타입)
    - [3.1.2 `unknown` 타입](#312-unknown-타입)
    - [3.1.3 `void` 타입](#313-void-타입)
    - [3.1.4 `never` 타입](#314-never-타입)
    - [3.1.5 `Array` 타입](#315-array-타입)
    - [3.1.6 `enum` 타입](#316-enum-타입)
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

- TypeScript의 열거형(`enum`) 타입은 명명된 상수의 집합을 정의할 때 사용됩니다.
- `enum`을 사용하면, 관련된 상수들을 그룹화하여 코드의 가독성과 유지보수성을 향상시킬 수 있습니다. 열거형은 숫자와 문자열 값을 지원합니다.

**[열거형의 기본 사용법]**

- **숫자 열거형**: TypeScript에서 열거형을 선언할 때 특정 값을 지정하지 않으면, 기본적으로 숫자 열거형으로 처리되며, 첫 번째 항목은 `0`에서 시작하여 이후 항목은 1씩 증가합니다.

  ```typescript
  enum Direction {
      Up,
      Down,
      Left,
      Right,
  }
  ```

- **문자열 열거형**: 각 멤버를 문자열 리터럴로 초기화할 수 있으며, 문자열 리터럴은 열거형의 각 멤버에 대해 명시적인 값을 제공합니다.

  ```typescript
  enum Direction {
      Up = "UP",
      Down = "DOWN",
      Left = "LEFT",
      Right = "RIGHT",
  }
  ```

**[주요특징]**

- **자체 문서화**: 열거형은 코드 내에서 상수의 의미를 명확하게 전달할 수 있도록 돕습니다. 열거형 멤버의 이름으로 코드를 자체 문서화할 수 있습니다.
- **컴파일 타임 체크**: 열거형을 사용하면, 유효한 값들의 집합을 미리 정의할 수 있으므로, 컴파일 타임에 타입 체킹을 통해 오류를 방지할 수 있습니다.
- **런타임 객체**: 열거형은 TypeScript에서 런타임에 실제 객체로 존재합니다. 이를 통해 열거형의 값들을 런타임에 조회하거나 반복 처리할 수 있습니다.

**[열거형 사용 시 고려사항]**

- **초기화**: 숫자 열거형에서 첫 번째 멤버는 기본적으로 `0`으로 초기화되지만, 시작 값을 변경하려면 첫 번째 멤버에 다른 숫자를 할당할 수 있습니다. 문자열 열거형의 경우 모든 멤버를 명시적으로 초기화해야 합니다.
- **역매핑**: 숫자 열거형은 역매핑 기능을 제공하여, 멤버의 값으로부터 그 이름을 찾을 수 있습니다. 문자열 열거형은 이 기능을 제공하지 않습니다.
- **const 열거형**: 성능 최적화를 위해, `const` 키워드를 사용하여 컴파일 시 열거형을 상수로 변환할 수 있습니다. `const enum`은 런타임에 객체를 생성하지 않고, 사용된 곳에 인라인으로 값을 삽입합니다.

```typescript
const enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

let direction = Direction.Up;
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
