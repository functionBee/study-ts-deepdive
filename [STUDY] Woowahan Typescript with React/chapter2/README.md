## 2장 타입

- [2장 타입](#2장-타입)
- [2.1 타입이란](#21-타입이란)
  - [2.1.1 자료형으로서의 타입](#211-자료형으로서의-타입)
  - [2.1.2 집합으로서의 타입](#212-집합으로서의-타입)
  - [2.1.3 정적타입과 동적 타입](#213-정적타입과-동적-타입)
  - [2.1.4 강타입과 약타입](#214-강타입과-약타입)
  - [2.1.5 컴파일 방식](#215-컴파일-방식)
- [2.2 타입스크립트의 타입 시스템](#22-타입스크립트의-타입-시스템)
  - [2.2.1 타입 애너테이션(Type Annotation) 방식](#221-타입-애너테이션type-annotation-방식)
  - [2.2.2 구조적 타이핑(Structural Typing)](#222-구조적-타이핑structural-typing)
  - [2.2.3 구조적 서브 타이핑(Structural Subtyping)](#223-구조적-서브-타이핑structural-subtyping)
  - [**구조타이핑과 구조적 서브타이핑의 차이점**](#구조타이핑과-구조적-서브타이핑의-차이점)
  - [2.2.4 자바스크립트를 닮은 타입 스크립트](#224-자바스크립트를-닮은-타입-스크립트)
  - [2.2.5 구조적 타이핑의 결과](#225-구조적-타이핑의-결과)
  - [2.2.6 타입스크립트의 점진적 타입 확인](#226-타입스크립트의-점진적-타입-확인)
  - [2.2.7 자바스크립트 슈퍼셋으로서의 타입스크립트](#227-자바스크립트-슈퍼셋으로서의-타입스크립트)
  - [2.2.8 값 vs 타입](#228-값-vs-타입)
  - [2.2.9 타입을 확인하는 방법](#229-타입을-확인하는-방법)
- [2.3 원시 타입](#23-원시-타입)
- [2.4 객체 타입](#24-객체-타입)
- [Keywords](#keywords)

<br>

## 2.1 타입이란

### 2.1.1 자료형으로서의 타입

- 변수란 데이터를 저장하는 메모리 공간을 의미한다.
  - 컴퓨터의 메모리 공간은 한정되어 있기 때문에 데이터를 저장하기 위해서는 메모리 공간을 할당해야 한다. 이때 할당된 메모리 공간을 변수라고 한다.
  - 변수는 데이터를 저장하는 공간이기 때문에 데이터를 저장하는 용도로 사용된다.
- 변수에 저장되는 데이터의 타입은 데이터의 종류에 따라 달라진다. - 예) 숫자, 문자열, 객체, 배열 등
- 타입은 데이터의 종류를 의미한다.
  - 데이터의 종류에 따라 데이터를 저장하는 메모리 공간의 형태가 달라진다. - 예) 숫자는 2진수로 저장, 문자열은 유니코드로 저장

```typescript
let a: number = 1;
let b: string = "hello";
let c: boolean = true;
let d: null = null;
let e: undefined = undefined;
let f: symbol = Symbol("id");
```

- 위의 코드에서 `a`, `b`, `c`, `d`, `e`, `f`는 각각 `number`, `string`, `boolean`, `null`, `undefined`, `symbol` 타입을 가지고 있다.

### 2.1.2 집합으로서의 타입

- 타입은 수학의 집합과 유사하다.
  - 수학의 집합은 동일한 특성을 가지는 객체의 모임을 의미한다.
  - 타입은 동일한 특성을 가지는 객체의 모임을 의미한다.

```typescript
let a: number | string = 1;
let b: number | string = "hello";
```

- 위의 코드에서 `a`, `b`는 `number` 또는 `string` 타입을 가지고 있다.

- 타입은 집합 연산을 통해 새로운 타입을 만들 수 있다.

```typescript
type A = number | string;
type B = string | boolean;
type C = A & B;

let a: C = "hello";
let b: C = true;
let c: C = 1; // 에러가 발생한다.
```

- 위의 코드에서 `A`, `B`, `C`는 각각 `number | string`, `string | boolean`, `number & string` 타입을 가지고 있다.
- `C` 타입은 `A`와 `B`의 교집합이므로, `string` 타입을 가진다.
- 따라서 `a`와 `b`는 `C` 타입을 가지고 있지만, `c`는 `C` 타입을 가지고 있지 않기 때문에 에러가 발생한다.

- **타입 시스템(Type System)**:
  - 타입 시스템은 코드에서 사용되는 유효한 값의 범위를 정의하고, 코드의 의도와 일치하는지 검사한다.
  - 타입 시스템은 코드의 의도와 일치하지 않는 코드를 미리 방지하여 오류를 줄일 수 있다.

```typescript
function sum(a: number, b: number): number {
  return a + b;
}

sum(1, 2); // 3
sum("1", "2"); // 에러가 발생한다.
```

### 2.1.3 정적타입과 동적 타입

**타입을 결정하는 시점에 따른 분류**
| | 정적 타입(Static Type) | 동적 타입(Dynamic Type) |
| :- | :-------- | :-------- |
| 장점 | - 타입에 대한 오류를 미리 방지할 수 있다. | - 타입에 대한 오류를 런타임에 발견할 수 있다. |
| 단점 | - 타입 정보를 제공해야 하며, 타입 정보를 제공하지 않는 코드에 대한 타입 검사를 수행할 수 없다. | - 타입에 대한 오류를 런타임에 발견하기 때문에, 런타임 오류가 발생할 수 있다. |
| 예시 | - TypeScript, Java, C++ | - JavaScript, Python, Ruby |

- 런타입에서 타입에 대한 오류를 발견하게 되면, 오류를 수정하기 위해 코드를 수정하고, 다시 테스트를 수행해야 한다.

```typescript
function multiply(a: number, b: number): number {
  return a * b;
}

multiply(1, 2); // 2
multiply("1", "2"); // NaN
```

### 2.1.4 강타입과 약타입

**암묵적 타입 변환(Implicit Type Conversion) 여부에 따른 분류**

|      | 강타입(Strongly Typed)                                                       | 약타입(Weakly Typed)                                      |
| :--- | :--------------------------------------------------------------------------- | :-------------------------------------------------------- |
| 정의 | - 암묵적 타입 변환을 허용하지 않는 타입 시스템                               | - 암묵적 타입 변환을 허용하는 타입 시스템                 |
| 장점 | - 암묵적 타입 변환으로 인한 오류를 방지할 수 있다.                           | - 암묵적 타입 변환을 통해 코드를 간결하게 작성할 수 있다. |
| 단점 | - 암묵적 타입 변환을 허용하지 않기 때문에, 코드를 더 복잡하게 작성해야 한다. | - 암묵적 타입 변환으로 인해 오류가 발생할 수 있다.        |
| 예시 | - TypeScript, Java, C++                                                      | - JavaScript, Python, Ruby                                |

- 강타입은 암묵적 타입 변환을 허용하지 않기 때문에, 코드를 더 복잡하게 작성해야 한다.
- 약타입은 암묵적 타입 변환을 허용하기 때문에, 코드를 간결하게 작성할 수 있지만, 암묵적 타입 변환으로 인해 오류가 발생할 수 있다.

```typescript
let a: number = 1;
let b: string = "hello";

a = "hello"; // 에러가 발생한다.
b = 1; // 에러가 발생한다.
```

```javascript
let a = 1;
let b = "hello";

a = "hello"; // 에러가 발생하지 않는다.
b = 1; // 에러가 발생하지 않는다.

a = a + "hello"; // "1hello"
```

- weakly typed 언어는 암묵적 타입 변환을 허용하기 때문에, 코드를 간결하게 작성할 수 있지만, 암묵적 타입 변환으로 인해 오류가 발생할 수 있다. 때문에 에러를 방지하는 코들 작성하여 프로그램의 안정성을 높이는 것이 중요하다.
- 명시적으로 타입을 한 후 논리적으로 타입이 합당한지 검사하는 것이 중요하다. 이를 통해 코드의 안정성을 높일 수 있다.
- 타입 시스템은 타입에 사용하는 규칙을 정의하고, 타입에 대한 검사를 수행한다.
- 타입 시스템은 크게 정적 타입 시스템과 동적 타입 시스템으로 나뉜다.
  - 정적 타입 시스텤은 타입에 대한 검사를 컴파일 타임에 수행한다.
  - 동적 타입 시스템은 타입에 대한 검사를 런타임에 수행한다.

### 2.1.5 컴파일 방식

- 자바나 C#과는 달리, TypScript의 결과물은 고수준의 자바스크립트 코드이다.

<br>

## 2.2 타입스크립트의 타입 시스템

### 2.2.1 타입 애너테이션(Type Annotation) 방식

- 타입 애너테이션(Type Annotation)은 변수 또는 함수의 매개변수, 반환값에 타입 정보를 제공하는 것을 의미한다.

```typescript
// 변수 할당문: 타입;
let a: number = 1;

// 함수 선언문: 매개변수: 타입, 반환값: 타입
function sum(a: number, b: number): number {
  return a + b;
}
```

### 2.2.2 구조적 타이핑(Structural Typing)

- 구조적 타이핑(Structural Typing)은 객체의 구조에 따라 타입을 결정하는 것을 의미한다.

```typescript
type A = { a: number };
type B = { a: number; b: number };

let a: A = { a: 1 };
let b: B = { a: 1, b: 2 };

a = b; // 에러가 발생하지 않는다.
b = a; // 에러가 발생한다.
```

- 타입스크립트에서 객체의 타입은 객체의 구조에 따라 결정된다.

```typescript
class A {
  a: number = 1;
}

class B {
  a: number = 1;
  b: number = 2;
}

let a: A = new A();
let b: B = new B();

a = b; // 에러가 발생한다.
b = a; // 에러가 발생한다.
```

- 객체의 구조에 따라 타입을 결정하기 때문에, `A` 타입은 `B` 타입을 포함하고 있기 때문에 `A` 타입에 `B` 타입을 할당할 수 있다.
- 하지만, `B` 타입은 `A` 타입을 포함하고 있지 않기 때문에 `B` 타입에 `A` 타입을 할당할 수 없다.

### 2.2.3 구조적 서브 타이핑(Structural Subtyping)

- 구조적 서브 타이핑(Structural Subtyping)은 객체가 가지고 있는 프로퍼티를 바탕으로 타입을 결정하는 것을 의미한다.

```typescript
interface Whale {
  weight: number;
  length: number;
}

interface KillerWhale extends Whale {
  isDangerous: boolean;
}

let whale: Whale = { weight: 100, length: 10 };
let killerWhale: KillerWhale = { weight: 100, length: 10, isDangerous: true };

whale = killerWhale; // 에러가 발생하지 않는다.
killerWhale = whale; // 에러가 발생한다.
```

```typescript
class Whale {
  weight: number = 100;
  length: number = 10;
}

class KillerWhale extends Whale {
  isDangerous: boolean = true;
}

let whale: Whale = new Whale();
let killerWhale: KillerWhale = new KillerWhale();
```

- 객체가 가지고 있는 프로퍼티를 바탕으로 타입을 결정하기 때문에, `Whale` 타입은 `KillerWhale` 타입을 포함하고 있기 때문에 `Whale` 타입에 `KillerWhale` 타입을 할당할 수 있다.
- 하지만, `KillerWhale` 타입은 `Whale` 타입을 포함하고 있지 않기 때문에 `KillerWhale` 타입에 `Whale` 타입을 할당할 수 없다.

### **구조타이핑과 구조적 서브타이핑의 차이점**

**구조 타이핑(Structural Typing)**

구조 타이핑은 객체의 타입이 그 객체가 실제로 가지고 있는 구조, 즉 속성과 메서드의 존재와 그 타입에 의해 결정되는 타이핑 방식을 말합니다. 이는 두 객체가 서로 다른 명명된 타입을 가지고 있더라도, 그 구조가 같다면 호환 가능하다는 것을 의미합니다. 구조 타이핑은 주로 동적 타이핑 언어나 일부 정적 타이핑 언어에서 볼 수 있으며, TypeScript와 같은 언어에서 흔히 볼 수 있는 특징입니다.

예를 들어, TypeScript에서는 다음과 같은 코드가 가능합니다.

```typescript
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// 이 객체는 Point 인터페이스의 구조와 호환됩니다.
const point = { x: 12, y: 26 };
logPoint(point); // 에러 없이 작동합니다.
```

`point` 객체는 명시적으로 `Point` 인터페이스를 구현하고 있지 않지만, `Point`의 구조와 호환되기 때문에 `logPoint` 함수에 전달할 수 있습니다.

**구조적 서브타이핑(Structural Subtyping)**

구조적 서브타이핑은 한 타입이 다른 타입의 모든 속성과 메서드를 포함하는 관계를 말하며, 이를 통해 상위 타입(부모 타입)과 호환될 수 있다는 개념입니다. 즉, 하위 타입(subtype)은 상위 타입(supertype)의 모든 요구 사항을 만족하면서도 추가적인 속성이나 메서드를 가질 수 있습니다. 이는 Liskov 치환 원칙(LSP)과 관련이 깊으며, 이 원칙에 따르면 서브타입은 언제나 슈퍼타입으로 대체될 수 있어야 합니다.

구조적 서브타이핑 예시:

```typescript
interface Shape {
  draw(): void;
}

interface ColoredShape extends Shape {
  color: string;
}

function drawShape(shape: Shape) {
  shape.draw();
}

const coloredShape: ColoredShape = {
  draw: () => console.log("Drawing a colored shape"),
  color: "blue",
};

drawShape(coloredShape); // ColoredShape는 Shape의 서브타입입니다.
```

여기서 `ColoredShape` 인터페이스는 `Shape` 인터페이스의 모든 메서드를 포함하므로 `Shape`의 서브타입으로 간주됩니다. 따라서 `drawShape` 함수에 `ColoredShape` 객체를 전달할 수 있습니다.

**차이점**

구조 타이핑은 객체 간의 호환성을 구조 기반으로 판단하는 반면, 구조적 서브타이핑은 상속 관계에서 하위 타입이 상위 타입의 요구 사항을 만족하는지를 판단하는 개념입니다. 구조적 서브타이핑은 구조 타이핑 개념을 포함하며, 상속 계층 내에서 더 엄격한 규칙을 적용합니다.

### 2.2.4 자바스크립트를 닮은 타입 스크립트

- 타입 스크립트의 타입 시스템은 구조적 서브 타이핑(Structural Subtyping)을 통해 객체의 구조에 따라 타입을 결정한다. 이는 명목적 타이핑(Nominal Typing)과는 다르다. 명목적 타이핑은 객체의 이름에 따라 타입을 결정한다. 또 명목적 타이핑은 같은 구조를 가지고 있어도 이름이 다르면 다른 타입으로 간주한다.

```java
class A {
  int a = 1;
}

class B extends A {
  int b = 2;
}

public class Main {
  public static void main(String[] args) {
    A a = new A();
    B b = new B();

    a = b; // 에러가 발생한다.
    b = a; // 에러가 발생한다.
  }
}
```

- 자바에서는 명목적 타이핑을 사용하기 때문에, `A` 타입은 `B` 타입을 포함하고 있지 않기 때문에 `A` 타입에 `B` 타입을 할당할 수 없다.
- 또한, `B` 타입은 `A` 타입을 포함하고 있지 않기 때문에 `B` 타입에 `A` 타입을 할당할 수 없다.
- 자바스크립트와 타입스크립트는 구조적 서브 타이핑(Structural Subtyping)을 사용하기 때문에, 객체의 구조에 따라 타입을 결정한다.
- 타입 스크립트가 구조적 타이핑(Structural Typing)을 채택한 이유는 타입스크립트가 자바스크립트를 모델링한 언어이기 때문이다.
- 자바스크립트는 본질적으로 덕 타이핑(Duck Typing)을 기반으로 하고 있기 때문에, 타입스크립트는 구조적 타이핑(Structural Typing)을 채택하였다.

**덕 타이핑(Duck Typing)과 구조적 타이핑(Structural Typing)**
| | 덕 타이핑(Duck Typing) | 구조적 타이핑(Structural Typing) |
| :--- | :---------------------- | :------------------------------ |
| 정의 | - 객체의 구조에 따라 타입을 결정하는 것을 의미한다. | - 객체의 구조에 따라 타입을 결정하는 것을 의미한다. |
| 예시 | - JavaScript, Python, Ruby | - TypeScript, Flow, ReasonML |
| 타입을 검사하는 시점 | - 런타임 | - 컴파일 타임 |

- 덕 타이핑(Duck Typing)과 구조적 타이핑(Structural Typing)은 객체의 구조에 따라 타입을 결정하는 것을 의미한다.

### 2.2.5 구조적 타이핑의 결과

- 타입스크립트 구조적 타이핑의 특징 때문에 예상치 못한 결과가 발생할 수 있다.

```typescript
interface Cube {
  width: number;
  height: number;
  depth: number;
}

function addLines(cube: Cube) {
  let total = 0;

  for (const axis of Object.keys(cube)) {
    total += cube[axis];
  }
}
```

- 위의 코드에서 `addLines` 함수는 `Cube` 타입을 매개변수로 받는다.
- `addLines` 함수는 `Cube` 타입을 가진 객체의 프로퍼티를 순회하면서, 프로퍼티의 값을 더한다.
- 하지만, `addLines` 함수는 `Cube` 타입을 가진 객체의 프로퍼티를 순회하면서, 프로퍼티의 값을 더하는 것이 아니라, 프로퍼티의 이름을 더하게 된다.
- 이는 구조적 타이핑(Structural Typing) 때문에 발생하는 문제이다.

```typescript
let cube: Cube = { width: 1, height: 2, depth: 3 };
addLines(cube); // 6
```

- 위의 코드에서 `addLines` 함수는 `Cube` 타입을 가진 객체의 프로퍼티를 순회하면서, 프로퍼티의 값을 더하는 것이 아니라, 프로퍼티의 이름을 더하게 된다.
- 따라서 `addLines` 함수는 `Cube` 타입을 가진 객체의 프로퍼티를 순회하면서, 프로퍼티의 값을 더하는 것이 아니라, 프로퍼티의 이름을 더하게 된다.
- 이는 구조적 타이핑(Structural Typing) 때문에 발생하는 문제이다.

- 구조적 타이핑(Structural Typing)은 객체의 구조에 따라 타입을 결정하기 때문에, 예상치 못한 결과가 발생할 수 있다. 이러한 한계를 그복하고자 타입스크립트는 명목적 타이핑(Nominal Typing)을 지원한다.

```typescript
interface Cube {
  width: number;
  height: number;
  depth: number;
}

// 유니온 타입을 사용하여 명목적 타이핑을 지원한다.
function addLines(
  cube: Cube | { width: number; height: number; depth: number }
) {
  let total = 0;

  for (const axis of Object.keys(cube)) {
    total += cube[axis];
  }
}
```

- 유니온(Discriminated Union)은 명목적 타이핑(Nominal Typing)을 지원한다.

```typescript
let cube: Cube = { width: 1, height: 2, depth: 3 };

addLines(cube); // 에러가 발생한다.
```

- 명목적 타이핑(Nominal Typing)을 지원하기 때문에, `Cube` 타입을 가진 객체를 전달하면 에러가 발생한다.

```typescript
let cube: { width: number; height: number; depth: number } = {
  width: 1,
  height: 2,
  depth: 3,
};

addLines(cube); // 6
```

- 하지만, `Cube` 타입을 가진 객체를 전달하지 않으면 에러가 발생하지 않는다.

### 2.2.6 타입스크립트의 점진적 타입 확인

- 타입스크립트는 점진적 타입 확인(Gradual Typing)을 지원한다.
  - 점진적 타입 확인(Gradual Typing): 타입 정보를 제공하지 않아도 타입 검사를 수행할 수 있다.
  - 타입 정보를 제공하지 않아도 타입 검사를 수행할 수 있기 때문에, 타입 정보를 제공하지 않는 코드에 대한 타입 검사를 수행할 수 있다.

```typescript
function sum(a, b) {
  return a + b;
}

function sum(a: any, b: any): any {
  return a + b;
}
```

- `sum` 함수는 타입 정보를 제공하지 않아도 타입 검사를 수행할 수 있다.

```typescript
function sum(a: number, b: number): number {
  return a + b;
}

sum(1, 2); // 3
```

- `sum` 함수는 타입 정보를 제공하였기 때문에, 타입 검사를 수행할 수 있다.

### 2.2.7 자바스크립트 슈퍼셋으로서의 타입스크립트

- 타입스크립트는 자바스크립트의 상위 집합(Superset(OverSet))이다.
  - 상위 집합(Superset): 상위 집합은 하위 집합의 모든 기능을 포함하고 있다.
  - 타입스크립트는 자바스크립트와 호환성을 가지며, 컴파일러를 통해 자바스크립트로 변환하여 사용할 수 있다.
- 하지만, 모든 타입스크립트 코드가 자바스크립트로 변환될 수 있는 것은 아니다.

```typescript
function greet(name: string) {
  return `Hello, ${name}!`;
}

let developer = "Developer";
console.log(developer.toUpperCase()); // DEVELOPER
console.log(greet(developer)); // Hello, Developer!
```

- 위의 코드를 컴파이러를 통해 자바스크립트로 변환하면, `greet` 함수의 타입 정보가 사라지기 때문에, `greet` 함수를 사용할 수 없다.
- 만약 런타임에 타입 정보를 사용하고 싶다면, `JSDoc`을 사용하여 타입 정보를 제공할 수 있다.

```javascript
/**
 * @param {string} name
 * @returns {string}
 */

function greet(name) {
  return `Hello, ${name}!`;
}
```

### 2.2.8 값 vs 타입

- 타입스크립트는 변수, 매개변수, 객체 속성등에 `타입 애너테이션(Type Annotation)`을 사용하여 타입을 명시한다.

```typescript
let a: number = 1;
// 변수 a는 number 타입을 가진다.

function sum(a: number, b: number): number {
  return a + b;
}
// 매개변수 a, b는 number 타입을 가진다.
// 반환값은 number 타입을 가진다.
```

- 또는 `type` 이나 `interface`를 사용하여 타입을 정의할 수 있다.

```typescript
type A = number;
// A는 number 타입을 가진다.

interface B {
  a: number;
  b: number;
}
// B는 a, b 프로퍼티를 가진 객체 타입을 가진다.
```

- 타입스크립트 문법인 `type`으로 선언한 내용은 컴파일 타임에 제거되기 때문에 값과 타입은 충돌하지 않는다.

```typescript
type Developer = {
  isWorking: boolean;
};

let developer = {
  isWorking: true,
};

developer.isWorking = false;
```

- 위의 코드에서 `developer` 객체는 `Developer` 타입을 가지고 있지만, `Developer` 타입을 가진 객체를 할당하지 않아도 에러가 발생하지 않는다.

```typescript
// 타입선언(Type Annotation)
let a: number = 1;

// 단언(Assertion)
let b = 1 as number;
```

- 타입은 타입선언(Type Annotation)이나 단언(Assertion)을 통해 작성하고, 값은 할당연산자(=)를 통해 작성한다.

- 값과 타입은 타입스크립트에서 별도의 네임스페이스를 가지고 있기 때문에, 값과 타입은 충돌하지 않는다.

```typescript
let a: number = 1;
let b: number = 2;

a = b; // 에러가 발생하지 않는다.
b = a; // 에러가 발생하지 않는다.
```

- 그러나 타입스크립트는 값과 타입의 구분을 맥락에 따라 다르게 취급한다.

```typescript
function email(name: string, domain: string): string {
  return `${name}@${domain}.com`;
}
```

- 위의 코드에서 `email` 함수는 `name`과 `domain` 매개변수를 받아서, `${name}@${domain}.com` 문자열을 반환한다.

```javascript
// 자바스크립트의 구조분해 할당
function email({ name, domain }) {
  return `${name}@${domain}.com`;
}
```

- 그러나 같은 코드를 타입스크립트에서 구조분해 할당을 사용하면 에러가 발생한다.

```typescript
function email({ name, domain }) {
  return `${name}@${domain}.com`;
}

email({ name: "developer", domain: "example" }); // 에러가 발생한다.
```

- 타입스크립트는 값과 타입을 구분하여 처리하기 때문에, 타입 애너테이션(Type Annotation)을 사용하여 타입을 명시해야 한다.

```typescript
function email({ name, domain }: { name: string; domain: string }): string {
  return `${name}@${domain}.com`;
}

email({ name: "developer", domain: "example" });
```

- 타입스크립트에는 값과 타입 공간에 동시에 존재하는 심볼이 존재한다. 대표적인 예로 클래스와 enum이 있다.

```typescript
class Developer {
  constructor(skills: string[], experience: number) {
    this.skills = skills;
    this.experience = experience;
  }
}

const me: Developer = new Developer([skills.JavaScript, skills.TypeScript], 3);
```

- 클래스와 마찬가지로 enum도 런타임에 객체로 변환되는 값이다.

```typescript
enum Skills {
  JavaScript,
  TypeScript,
  React,
  Vue,
  Angular,
}

const me: Developer = new Developer([Skills.JavaScript, Skills.TypeScript], 3);
```

**타입스크립트에서 자바스크립의 키워드가 해석되는 방식**
| 키워드 | 값 | 타입 |
| :--- | :--- | :--- |
| class | O | X |
| enum | O | O |
| interface | X | O |
| module | O | X |
| namespace | O | X |
| type | X | O |
| var | O | X |
| let | O | X |
| const | O | X |
| function | O | X |
| import | O | X |

- class 키워드는 값이지만, 타입으로 해석되지 않는다.

### 2.2.9 타입을 확인하는 방법

- 타입스크립트에서 `typeof`, `intanceof`, `타입 단언` 사용하여 타입을 확인할 수 있다.

```typescript
// typeof` 연산자를 사용하여 `a` 변수의 타입을 확인할 수 있다.
let a: number = 1;

console.log(typeof a); // number
```

```typescript
// `instanceof` 연산자를 사용하여 객체의 타입을 확인할 수 있다.
class A {
  a: number = 1;
}

class B extends A {
  b: number = 2;
}

let a: A = new A();
let b: B = new B();

console.log(a instanceof A); // true
console.log(b instanceof A); // true
console.log(a instanceof B); // false
console.log(b instanceof B); // true
```

```typescript
// 타입 단언을 사용하여 타입을 확인할 수 있다.
let a: any = 1;

let b: number = a as number;
let c: number = <number>a;
```

- `typeof` 연산자는 값에서 쓰이는 경우, 값의 타입을 반환하지만, 타입에서 쓰이는 경우, 타입의 타입을 반환한다.

```typescript
// typeof 연산자가 값에서 쓰이는 경우
let a: number = 1;

console.log(typeof a); // number
```

```typescript
// typeof 연산자가 타입에서 쓰이는 경우
type A = number;

console.log(typeof A); // number
```

- 타입을 검사하는 다른 방법으로 타입 가드(Type Guard)를 사용할 수 있다.
  - 타입 가드(Type Guard): 타입을 검사하여 타입을 좁히는 것을 의미한다.

```typescript
function isNumber(a: any): a is number {
  return typeof a === "number";
}

function isString(a: any): a is string {
  return typeof a === "string";
}

function isDeveloper(a: any): a is Developer {
  return a instanceof Developer;
}
```

- 타입 가드(Type Guard)를 사용하여 타입을 좁힐 수 있다.

```typescript
let a: any = 1;

if (isNumber(a)) {
  console.log(a.toFixed(2));
}
```

<br>

## 2.3 원시 타입

- 타입스크립트는 원시 타입을 제공한다.

| #   | 원시 타입(Primitive Type) | 설명                                    |
| --- | ------------------------- | --------------------------------------- |
| 1   | number                    | 숫자를 나타내는 타입이다.               |
| 2   | string                    | 문자열을 나타내는 타입이다.             |
| 3   | boolean                   | 논리값을 나타내는 타입이다.             |
| 4   | null                      | 값이 없음을 나타내는 타입이다.          |
| 5   | undefined                 | 값이 할당되지 않음을 나타내는 타입이다. |
| 6   | symbol                    | 유일한 값을 나타내는 타입이다.          |
| 7   | bigint                    | 큰 정수를 나타내는 타입이다.            |

- 원시 타입은 값이 할당될 때, 메모리에 고정된 크기로 저장된다.

```typescript
let a: number = 1;
let b: string = "hello";
let c: boolean = true;
let d: null = null;
let e: undefined = undefined;
let f: symbol = Symbol("f");
let g: bigint = 1n;
```

<br>

## 2.4 객체 타입

- 타입스크립트는 객체 타입을 제공한다.

| #   | 객체 타입(Object Type) | 설명                                    |
| --- | ---------------------- | --------------------------------------- |
| 1   | object                 | 객체를 나타내는 타입이다.               |
| 2   | array                  | 배열을 나타내는 타입이다.               |
| 3   | tuple                  | 고정된 길이의 배열을 나타내는 타입이다. |
| 4   | enum                   | 열거형을 나타내는 타입이다.             |
| 5   | function               | 함수를 나타내는 타입이다.               |
| 6   | class                  | 클래스를 나타내는 타입이다.             |
| 7   | interface              | 객체의 구조를 나타내는 타입이다.        |
| 8   | type                   | 객체의 구조를 나타내는 타입이다.        |
| 9   | unknown                | 모든 타입을 나타내는 타입이다.          |
| 10  | any                    | 모든 타입을 나타내는 타입이다.          |

- 객체 타입은 객체의 구조를 나타내는 타입이다.

```typescript
let a: object = { a: 1 };
let b: object = [1, 2, 3];
let c: object = function () {};
let d: object = class {};
let e: object = new (class {})();
```

<br>

## Keywords

|  #  | Keyword                                    | Description                                                                       | Example |
| :-: | :----------------------------------------- | :-------------------------------------------------------------------------------- | ------- |
|  1  | 컴파일 타임(Compile Time)                  | 기계어로 번역되는 시점을 말한다.                                                  | -       |
|  2  | 런타임(Runtime)                            | 프로그램이 실행되는 시점을 말한다.                                                | -       |
|  3  | 암무적 타입 변환(Implicit Type Conversion) | 자동으로 타입을 변환하는 것을 말한다.                                             | -       |
|  4  | 구조적 타이핑(Structural Typing)           | 객체의 구조에 따라 타입을 결정하는 것을 의미한다.                                 | -       |
|  5  | 구조적 서브 타이핑(Structural Subtyping)   | 객체의 구조에 따라 타입을 결정하는 것을 의미한다.                                 | -       |
|  6  | 타입 애너테이션(Type Annotation)           | 변수 또는 함수의 매개변수, 반환값에 타입 정보를 제공하는 것을 의미한다.           | -       |
|  7  | 타입 시스템(Type System)                   | 코드에서 사용되는 유효한 값의 범위를 정의하고, 코드의 의도와 일치하는지 검사한다. | -       |
|  8  | 명목적 타이핑(Nominal Typing)              | 객체의 이름에 따라 타입을 결정하는 것을 의미한다.                                 | -       |
|  9  | 덕 타이핑(Duck Typing)                     | 객체의 구조에 따라 타입을 결정하는 것을 의미한다.                                 | -       |
| 10  | 구조분해 할당(Destructuring Assignment)    | 객체나 배열을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 표현식이다.          | -       |
| 11  | 트리 쉐이킹(Tree Shaking)                  | 사용되지 않는 코드를 제거하는 것을 의미한다.                                      | -       |
| 12  | 타입 가드(Type Guard)                      | 타입을 검사하여 타입을 좁히는 것을 의미한다.                                      | -       |
| 13  | 호출 시그니처(Call Signature)              | 함수의 타입을 정의하는 것을 의미한다.                                             | -       |

<br>

[🔺 Top](#top)
