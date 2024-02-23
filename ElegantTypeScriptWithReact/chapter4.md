# 4장 타입 확장하기·좁히기

- [4장 타입 확장하기·좁히기](#4장-타입-확장하기좁히기)
  - [4.1 타입 확장하기](#41-타입-확장하기)
    - [4.1.1 타입 확장의 장점](#411-타입-확장의-장점)
      - [4.1.1-1 메뉴 요소 타입](#411-1-메뉴-요소-타입)
      - [4.1.1-2 Type과 교차 타입(\&)을 사용하여 타입 확장하기](#411-2-type과-교차-타입을-사용하여-타입-확장하기)
      - [4.1.1-3 수정할 수 있는 장바구니 요소 타입과 이벤트 장바구니 요소 타입](#411-3-수정할-수-있는-장바구니-요소-타입과-이벤트-장바구니-요소-타입)
    - [4.1.2 유니온 타입(`|`)](#412-유니온-타입)
      - [4.1.2-1 유니온 타입의 사용 예시](#412-1-유니온-타입의-사용-예시)
      - [4.1.2-2 유니온 타입의 주의사항 예시](#412-2-유니온-타입의-주의사항-예시)
    - [4.1.3 교차 타입](#413-교차-타입)
      - [4.1.3-1 교차 타입의 사용 예시](#413-1-교차-타입의-사용-예시)
      - [4.1.3-2 교차 타입의 사용 예시](#413-2-교차-타입의-사용-예시)
      - [4.1.3-3 교차 타입의 사용 예시](#413-3-교차-타입의-사용-예시)
    - [4.1.4 배달의 민족 메뉴 시스템에 타입 확장하기](#414-배달의-민족-메뉴-시스템에-타입-확장하기)
  - [4.2 타입 좁히기 - 타입 가드](#42-타입-좁히기---타입-가드)
    - [4.2.1 타입 가드에 따라 분기 처리하기](#421-타입-가드에-따라-분기-처리하기)
    - [4.2.2 원시 타입을 추론할때: typeof 연산자 활용하기](#422-원시-타입을-추론할때-typeof-연산자-활용하기)
    - [4.2.3 인스턴스화된 객체 타입을 판별할 때: instanceof 연산자 활용하기](#423-인스턴스화된-객체-타입을-판별할-때-instanceof-연산자-활용하기)
    - [4.2.4 객체의 속성이 있는지 없는지에 따른 구분: in 연산자 활용하기](#424-객체의-속성이-있는지-없는지에-따른-구분-in-연산자-활용하기)
    - [4.2.5 is 연산자로 사용자 정의 타입 가드 만들어 활용하기](#425-is-연산자로-사용자-정의-타입-가드-만들어-활용하기)
  - [4.3 타입 좁히기 - 식별할 수 있는 유니온](#43-타입-좁히기---식별할-수-있는-유니온)
    - [4.3.1 에러 정의하기](#431-에러-정의하기)
    - [4.3.2 식별할 수 있는 유니온](#432-식별할-수-있는-유니온)
    - [4.3.3 식별할 수 있는 유니온의 판별자 선정](#433-식별할-수-있는-유니온의-판별자-선정)
  - [4.4 Exhaustiveness Checking으로 정확한 타입 분기 유지하기](#44-exhaustiveness-checking으로-정확한-타입-분기-유지하기)
    - [4.4.1 상품권](#441-상품권)
  - [Keywords](#keywords)

<br>

## 4.1 타입 확장하기

**[타입 확장(Type Extends)]**

타입 확장은 한 타입이 다른 타입의 모든 속성을 포함하고, 추가적으로 더 많은 속성을 가질 수 있도록 하는 타입 관계를 말합니다.

```typescript
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square: Square = { color: "blue", sideLength: 10 };
```
> 이 예제에서 `Square` 인터페이스는 `Shape` 인터페이스를 확장하여 `color` 속성뿐만 아니라 `sideLength` 속성도 가집니다.


### 4.1.1 타입 확장의 장점

타입 확장(Type Extends)은 클래스, 인터페이스, 그리고 조건부 타입 등 다양한 방식으로 사용되며, 코드의 재사용성, 유지보수성, 그리고 타입 안전성을 대폭 향상시킵니다.

**[코드 재사용성 향상]**

```typescript
// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    department: string;
}
```
> 이 예제에서 `Employee` 인터페이스는 `Person`의 모든 속성을 상속받고, 추가적인 `department` 속성을 가집니다.


타입스크립트에서 타입 확장을 사용하는 것은 코드의 재사용성을 크게 향상시키는 효과적인 방법입니다.
책에서는 다양한 상황에서 유연하게 타입을 활용하여 개발할 수 있음을 보여줍니다.

#### 4.1.1-1 메뉴 요소 타입

```typescript
/**
 * 메뉴 아이템 타입(BaseMenuItem)
 * 메뉴 이름, 이미지, 할인율, 재고 정보를 담고 있다
 */
interface BaseMenuItem {
  itemName: string | null;
  itemImageUrl: string | null;
  itemDiscountAmount: number;
  stock: number | null;
}

/**
 * 장바구니 요소 타입(BaseCartItem)
 * 메뉴 아이템 타입을 확장하여, 상품의 수량(quantity) 정보를 추가합니다.
 * 이는 사용자가 선택한 메뉴의 수량을 관리하는 데 필요한 정보를 포함하고 있습니다.
 */
interface BaseCartItem extends BaseMenuItem {
  quantity: number; 
}
```

#### 4.1.1-2 Type과 교차 타입(&)을 사용하여 타입 확장하기

또는 `type`과 `교차 타입(&)`을 사용하여 같은 구조를 표현할 수 있습니다.

```typescript
type BaseMenuItem = {
  itemName: string | null;
  itemImageUrl: string | null;
  itemDiscountAmount: number;
  stock: number | null;
}

type BaseCartItem = {
  quantity: number;
} & BaseMenuItem
```

#### 4.1.1-3 수정할 수 있는 장바구니 요소 타입과 이벤트 장바구니 요소 타입

타입 확장(Type Extends)은 중복 제거, 명시적인 코드 작성 외에도 확장성이란 장점을 가지고 있습니다.

```typescript
/**
 * 수정할 수 있는 장바구니 요소 타입
 * 품절 여부, 수정할 수 있는 옵션 배열 정보가 추가되었다
 */
interface EditableCartItem extends BaseCartItem {
  isSoldOut: boolean;
  optionGroups: SelectableOptionGroup[]
}
```
> 사용자가 장바구니 내의 아이템을 수정할 때 필요한 정보를 포함하는 `EditableCartItem`은 `BaseCartItem`을 확장합니다
> 품절 여부(isSoldOut)와 수정 가능한 옵션 그룹(optionGroups)을 추가하여, 사용자가 장바구니 내의 상품을 더 상세하게 조정할 수 있게 합니다.

```typescript 
/**
 * 이벤트 장바구니 요소 타입
 * 주문 가능 여부에 대한 정보가 추가되었다
 */
interface EventCartItem extends BaseCartItem {
  orderable: boolean;
}
```
> 특정 이벤트와 관련된 장바구니 아이템(EventCartItem)은 `BaseCartItem`을 확장하여, 주문 가능 여부(orderable)를 추가합니다.
> 이는 특정 조건(예: 이벤트 기간, 재고 상황)에 따라 주문 가능한 상품인지를 나타냅니다.


### 4.1.2 유니온 타입(`|`)

**[유니온 타입(Union Type)]**

- 유니온 타입(Union Type)은 여러 타입 중 하나가 될 수 있는 값을 나타내기 위해 사용됩니다.
- 유니온 타입을 사용하면 변수나 함수 매개변수가 둘 이상의 다른 타입을 가질 수 있게 됩니다.

**[유니온 타입의 사용]**

유니온 타입은 타입을 `|`기호로 연결하여 정의합니다. 이 기호는 "또는"의 의미를 가지며, 연결된 타입 중 하나에 해당하는 값을 변수가 가질 수 있음을 의미합니다.

#### 4.1.2-1 유니온 타입의 사용 예시

```typescript
type MyUnion = A | B
```
> 이 예제에서, `MyUnion` 타입은 `A` 또는 `B` 타입 중 하나가 될 수 있습니다.

```typescript
interface A {
    aProperty: string;
}

interface B {
    bProperty: number;
}

type MyUnion = A | B;

function processValue(value: MyUnion) {
    if ('aProperty' in value) {
        console.log(value.aProperty); // A 타입으로 처리
    } else {
        console.log(value.bProperty); // B 타입으로 처리
    }
}
```
> 위의 코드 예제에서, `processValue` 함수는 `MyUnion` 타입을 매개변수(value)로 받습니다. 이 함수 내에서 타입 가드(Type Guard)를 사용하여 `value`의 타입을 판별하고, 각 타입에 맞게 처리합니다.

```typescript
let value: MyUnion = { aProperty: "hello" };
processValue(value); // "hello" 출력

value = { bProperty: 42 };
processValue(value); // 42 출력
```
> `value` 변수는 `A` 또는 `B` 타입 중 하나가 될 수 있으므로, `processValue` 함수에 매개변수로 전달할 수 있습니다.

**[유니온 타입의 주의사항]**

유니온 타입을 구성하는 각 타입이 공통으로 가지고 있는 속성이나 메소드에만 접근할 수 있습니다. 

#### 4.1.2-2 유니온 타입의 주의사항 예시
```typescript
interface CookingStep {
  orderId: string;
  price: number;
}

interface DeliveryStep {
  orderId: string;
  time: number;
  distance: string;
}

function getDeliveryDistance(step: CookingStep | DeliveryStep) {
  return step.distance;
  // Property ‘distance’ does not exist on type ‘CookingStep | DeliveryStep’
  // Property ‘distance’ does not exist on type ‘CookingStep’
}
```
> 위의 코드 예제에서, `getDeliveryDistance` 함수는 `CookingStep` 또는 `DeliveryStep` 타입의 객체를 매개변수로 받습니다.
> `step` 매개변수는 `CookingStep` 또는 `DeliveryStep` 타입 중 하나가 될 수 있으므로, `distance` 속성에 접근할 수 없습니다.
> 그러나 컴파일러는 `CoolingStep`타입에는 `distance` 속성이 없다는 에러를 발생시킵니다.

만약 특정 타입에만 존재하는 속성에 접근하려면, 타입 가드를 사용하여 타입을 좁혀야 합니다.

```typescript
function getDeliveryDistance(step: CookingStep | DeliveryStep): string | undefined {
  if ('distance' in step) {
    return step.distance;
  }
  // `distance` 속성은 `DeliveryStep`에만 존재하므로, 여기에 도달했다면 `undefined`를 반환합니다.
  return undefined;
}
```
> 위의 코드 예제에서, `getDeliveryDistance` 함수는 `step` 매개변수의 타입을 판별하여, `distance` 속성이 존재하는 경우에만 접근할 수 있도록 합니다. 이 방법을 통해 컴파일 시점에 타입 안전성을 보장할 수 있습니다.

**[값의 집합으로서의 타입]**

타입스크립트에서 각 타입은 특정한 값의 범위를 정의합니다. 예를 들어, `number` 타입은 모든 숫자 값을 포함하고, `string` 타입은 모든 문자열 값을 포함합니다. 이러한 방식으로 각 타입은 가능한 값들의 집합으로 이해할 수 있습니다.

**[유니온 타입의 합집합]**

유니온 타입은 두 개 이상의 타입을 | 연산자로 결합하여 새로운 타입을 생성합니다. 이는 각 타입이 나타내는 값의 집합을 합치는 것과 같습니다.
따라서 유니온 타입을 통해 생성된 타입은 각각의 원본 타입이 가질 수 있는 모든 값들을 포함할 수 있게 됩니다.

```typescript
type NumberOrString = number | string;

let value: NumberOrString;

value = 10; // number 타입의 값
value = "hello"; // string 타입의 값
```
> 위의 코드 예제에서, `NumberOrString` 타입은 `number` 또는 `string` 타입의 값 중 하나가 될 수 있습니다.

### 4.1.3 교차 타입

**[교차 타입(Intersection Type)]**

교차 타입(Intersection Type)은 여러 타입을 하나로 결합하여, 모든 타입의 속성을 포함하는 새로운 타입을 생성합니다.

**[교차 타입의 사용]**

교차 타입은 `&` 연산자를 사용하여 표현되며, 이 연산자는 "그리고"의 의미를 가지며, 기존의 타입들을 결합하여 새로운 타입을 정의할 때 사용됩니다.

```typescript
interface Name {
    name: string;
}

interface Age {
    age: number;
}

type Person = Name & Age;

const john: Person = { name: "John", age: 30 };
```
> 위의 코드 예제에서, `Person` 타입은 `Name`과 `Age` 인터페이스를 교차하여 생성되었습니다. 따라서 `Person` 타입은 `name`과 `age` 속성을 모두 가지고 있어야 합니다.


#### 4.1.3-1 교차 타입의 사용 예시

```typescript
interface CookingStep {
  orderId: string;
  time: number;
  price: number;
}

interface DeliveryStep {
  orderId: string;
  time: number;
  distance: string;
}

type BaedalProgress = CookingStep & DeliveryStep;
```
> 위의 코드 예제에서, `BaedalProgress` 타입은 `CookingStep`과 `DeliveryStep` 인터페이스으로 `orderId`, `time`, `price`, `distance` 속성을 모두 가지고 있어야 합니다. 이를 통해 배달 프로세스의 여러 단계에 걸쳐 필요한 정보를 한 번에 관리할 수 있습니다.

```typescript
function logBaedalInfo(progress: BaedalProgress) {
  console.log(`주문 금액: ${progress.price}`); // CookingStep에서 상속받은 속성
  console.log(`배달 거리: ${progress.distance}`); // DeliveryStep에서 상속받은 속성
}
```

> 위의 코드 예제에서, `BaedalProgress`는 교차 타입을 사용하여 정의된 타입으로, `CookingStep`과 `DeliveryStep` 인터페이스의 속성을 모두 포함합니다. 이로 인해 `BaedalProgress` 타입의 객체는 `CookingStep`의 `price` 속성과 `DeliveryStep`의 `distance` 속성에 접근할 수 있습니다.

**[교차 타입의 교집합]**

교차 타입은 두 개 이상의 타입을 & 연산자로 결합하여 새로운 타입을 생성합니다. 이는 각 타입이 나타내는 속성들의 교집합을 생성하는 것과 같습니다.

#### 4.1.3-2 교차 타입의 사용 예시

```typescript
interface A {
    a: number;
    common: string;
}

interface B {
    b: string;
    common: number;
}
```
> 이 예제에서, A와 B 인터페이스는 각각 a, b, 그리고 common 속성을 가지고 있습니다.

여기서 `A & B` 교차 타입을 생성하면, 다음과 같은 새로운 타입 `MyIntersection`이 정의됩니다.

```typescript
type MyIntersection = A & B;
```
> 이 예제에서, `MyIntersection`은 A와 B 둘 다의 속성을 포함하게 됩니다. 즉, a, b, 그리고 common 속성을 모두 가지게 되는데, 여기서 주의할 점은 common 속성이 두 인터페이스에서 서로 다른 타입으로 정의되어 있기 때문에, 실제로는 교차 타입에서 호환되는 공통 타입을 가지게 됩니다. 그러나 `MyIntersection` 타입의 객체는 `common` 속성에 접근할 수 없습니다.
> 이는 교차 타입에서는 각 타입이 가지고 있는 속성들의 교집합을 생성하기 때문에, 각 속성의 타입이 서로 다르면 교차 타입에서 해당 속성은 사용할 수 없습니다.

```typescript
let intersection: MyIntersection = { a: 1, b: "2", common: 3 };
// Type '{ a: number; b: string; common: number; }' is not assignable to type 'MyIntersection'.
// Types of property 'common' are incompatible.
// Type 'number' is not assignable to type 'string'.
```
> 위의 코드 예제에서, `MyIntersection` 타입의 객체는 `common` 속성에 서로 다른 타입의 값을 할당할 수 없습니다. 이는 교차 타입에서는 각 타입이 가지고 있는 속성들의 교집합을 생성하기 때문에, 각 속성의 타입이 서로 다르면 교차 타입에서 해당 속성은 사용할 수 없습니다.

#### 4.1.3-3 교차 타입의 사용 예시

```typescript
/* 배달 팁 */
interface DeliveryTip {
  tip: string; // 팁
}

/* 별점 */
interface StarRating {
  rate: number; // 평점
}
```
> `DeliveryTip`과 `StarRating`의 경우와 같이 서로 호환되지 않는 속성을 가진 타입을 교차할 때는 `never`가 아닌, 모든 속성을 포함하는 유효한 타입이 생성됩니다.
> 이는 교차 타입에서는 각 타입이 가지고 있는 속성들의 교집합을 생성하기 때문에, 각 속성의 타입이 서로 다르더라도 교차 타입에서는 모든 속성을 포함하는 유효한 타입이 생성됩니다.

**[공집합(never 타입)이 되는 경우]**
두 타입이 같은 속성명을 가지고 있지만, 각각의 타입이 호환될 수 없을 때 교차 타입은 공집합(never 타입)이 됩니다.

```typescript
/* 주문 필터 */
type Filter = DeliveryTip & StarRating; // 배달 팁과 별점을 결합한 교차 타입

const filter: Filter = {
  tip: "1000원 이하", // 문자열로 표현된 팁
  rate: 4, // 숫자로 표현된 평점
};
```
> 위의 코드 예제에서, `Filter` 타입은 공집합(Empty Type)이 아닌 교차 타입으로, `DeliveryTip`과 `StarRating` 인터페이스의 속성을 모두 포함합니다. 따라서 `Filter` 타입의 객체는 `tip` 속성과 `rate` 속성을 모두 가지고 있어야 합니다.

```typescript
function getFilter(filter: Filter) {
  console.log(`팁: ${filter.tip}`); // 팁
  console.log(`평점: ${filter.rate}`); // 평점
}
```
> 위의 코드 예제에서, `getFilter` 함수는 `Filter` 타입의 객체를 매개변수로 받습니다. 이 함수 내에서 `filter` 객체의 `tip` 속성과 `rate` 속성에 접근할 수 있습니다.
> 이를 통해, `Filter` 타입을 사용하여 배달 팁과 별점을 결합한 정보를 한 번에 관리할 수 있습니다. 



### 4.1.4 배달의 민족 메뉴 시스템에 타입 확장하기

<br>

## 4.2 타입 좁히기 - 타입 가드

### 4.2.1 타입 가드에 따라 분기 처리하기

### 4.2.2 원시 타입을 추론할때: typeof 연산자 활용하기

### 4.2.3 인스턴스화된 객체 타입을 판별할 때: instanceof 연산자 활용하기

### 4.2.4 객체의 속성이 있는지 없는지에 따른 구분: in 연산자 활용하기

### 4.2.5 is 연산자로 사용자 정의 타입 가드 만들어 활용하기

<br>

## 4.3 타입 좁히기 - 식별할 수 있는 유니온

### 4.3.1 에러 정의하기

### 4.3.2 식별할 수 있는 유니온

### 4.3.3 식별할 수 있는 유니온의 판별자 선정

<br>

## 4.4 Exhaustiveness Checking으로 정확한 타입 분기 유지하기

### 4.4.1 상품권

<br>

## Keywords
