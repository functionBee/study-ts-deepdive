# 5장 타입 활용하기

<br>

- [5장 타입 활용하기](#5장-타입-활용하기)
  - [5.1 조건부 타입(Conditional Types)](#51-조건부-타입conditional-types)
      - [정의](#정의)
      - [응용](#응용)
    - [5-1-1. `extends`와 제네릭을 활용한 조건부 타입](#5-1-1-extends와-제네릭을-활용한-조건부-타입)
      - [조건부 타입의 구조(Syntax)](#조건부-타입의-구조syntax)
      - [제네릭과 함께 사용하기](#제네릭과-함께-사용하기)
    - [5-1-2. 조건부 타입을 사용하지 않았을 때의 문제점](#5-1-2-조건부-타입을-사용하지-않았을-때의-문제점)
      - [`react-query` 를 활용한 예](#react-query-를-활용한-예)
    - [5-1-3. `extends` 조건부 타입을 활용하여 개선하기](#5-1-3-extends-조건부-타입을-활용하여-개선하기)
  - [5.2 템플릿 리터럴 타입 활용하기](#52-템플릿-리터럴-타입-활용하기)
    - [5.2.1 `extends` 와 제네릭을 활용한 조건부 타입](#521-extends-와-제네릭을-활용한-조건부-타입)
    - [5.2.2 조건부 타입을 사용하지 않았을 때 문제점](#522-조건부-타입을-사용하지-않았을-때-문제점)
    - [5.2.3 `extends` 조건부 타입을 활용하여 개선하기](#523-extends-조건부-타입을-활용하여-개선하기)
    - [5.2.4 `infer` 를 활용해서 타입 추론하기](#524-infer-를-활용해서-타입-추론하기)
  - [5.3 커스텀 유틸리티 타입 활용하기](#53-커스텀-유틸리티-타입-활용하기)
  - [5.4 불변 객체 타입으로 활용하기](#54-불변-객체-타입으로-활용하기)
  - [5.5 Record 원시 타입 키 개선하기](#55-record-원시-타입-키-개선하기)

<br>

## 5.1 조건부 타입(Conditional Types)

#### 정의

- 조건부 타입(conditional types)은 조건 로직에 따라 달라지는 타입을 말합니다.
- 매핑된 타입(mapped types)과 마찬가지로 조건부 타입은 타입을 새로운 타입으로 변환합니다.
- 조건부 타입은 타입 내에서 타입을 제거하는 데 유용합니다

**[예제]**

```ts
type Age = number | null | undefined;
type NonNullableAge = number;
```

```ts
// DRY(Do not Repeat Yourself) 적용
type Age = number | null | undefined;
type NonNullableAge = NonNullable<Age>;
```

> 여기서 `Age`라는 타입을 정의하고 있습니다. `Age` 타입은 `number`, `null`, `undefined` 중 하나를 가질 수 있습니다. 그리고 `NonNullable`이라는 유틸리티 타입을 사용하여 `NonNullableAge`라는 새로운 타입을 정의하고 있습니다. `NonNullableAge` 타입은 `null`과 `undefined`를 제외한 `number` 타입을 가지게 됩니다. 이를 통해 `Age` 타입에서 `null` 또는 `unudefined` 값을 제거할 수 있습니다.

#### 응용

조건부 타입을 사용하면 특정 조건에 따라 타입을 세분화하고 조정할 수 있으며, 이를 통해 타입 시스템의 안정성을 높이고 런타임 오류를 줄일 수 있습니다.

**[예: API 응답 처리]**

API에서 다양한 형태의 응답을 반환할 수 있을 때, 조건부 타입을 사용하여 응답 타입을 적절히 처리할 수 있습니다.

```ts
// 성공 또는 실패 응답에 따라 다른 타입을 반환하는 API를 가정한 예제
interface SuccessResponse {
  status: 'success';
  data: any;
}

interface ErrorResponse {
  status: 'error';
  error: string;
}

type ApiResponse<T> = T extends 'success' ? SuccessResponse : ErrorResponse;

// 사용 예
type SuccessType = ApiResponse<'success'>; // SuccessResponse 타입
type ErrorType = ApiResponse<'error'>; // ErrorResponse 타입
```
> ` SuccessResponse`와 `ErrorResponse`라는 두 가지 인터페이스를 정의하고,
> `ApiResponse<T>`라는 제네릭 타입을 사용하여 `T`가 `'success'`일 때는 `SuccessResponse`를 반환하고,
> `'error'`일 때는 `ErrorResponse`를 반환하도록 정의하고 있습니다.

따라서, `SuccessType`은 `ApiResponse<'success'>`를 통해 `SuccessResponse` 타입을, `ErrorType`은 `ApiResponse<'error'>`를 통해 `ErrorResponse` 타입을 갖게 됩니다. 이를 통해 API의 응답에 따라 다른 타입을 정의하고 사용할 수 있습니다.



**[예: 함수 오버로딩 구현]**

함수가 다양한 타입의 인수를 받아들일 수 있고, 이에 따라 다른 타입의 결과를 반환할 때, 조건부 타입을 사용하여 이를 구현할 수 있습니다. 이는 함수 오버로딩을 통해 타입의 안전성을 보장하며, 코드의 가독성을 높일 수 있습니다.

```ts
function getValue<T extends string | number>(value: T): T extends string ? string[] : number[];

// 함수 사용 예
const stringArray = getValue('hello'); // string[] 타입
const numberArray = getValue(123); // number[] 타입
```

> 여기서 `getValue` 함수는 조건부 타입을 사용하여 입력 타입에 따라 다른 타입의 배열을 반환합니다. 문자열이 입력되면 문자열 배열을, 숫자가 입력되면 숫자 배열을 반환합니다.


### 5-1-1. `extends`와 제네릭을 활용한 조건부 타입

조건부 타입은 우리가 자바스크립트 코드에서 익숙한 삼항 연산자를 사용하여 타입에 조건적 로직을 적용할 수 있게 해줍니다

#### 조건부 타입의 구조(Syntax)

```ts
T1 extends T2 ? A : B
```
> 여기서 `extends` 키워드는 조건을 정의하는 데 사용됩니다. 만약 `T2`가 `T1` 안에 포함되어 있다면 타입 `A`가 사용되고, 그렇지 않다면 타입 `B`가 사용됩니다.

**[예제]**

```ts
type Person = {
  name: string;
  age: number;
};

type Example1 = Person extends {} ? string : number;
```
> 여기서 `Person` 타입은 빈 객체 `{}` 타입에 확장 가능하기 때문에, 조건이 참이 되어 `Example1`은 `string` 타입으로 결정됩니다.


#### 제네릭과 함께 사용하기

조건부 타입은 단독으로 사용될 때보다 제네릭 타입과 결합될 때 더욱 유용합니다.

```tsx
//5.1.1-1
interface Bank {
  financialCode: string;
  companyName: string;
  name: string; 
  fullName: string;
}

interface Card {
  financialCode: string;
  companyName: string;
  name: string;
  appCardType?: string;
}

// 'card' 문자열 리터럴 타입을 받으면 Card 인터페이스를, 그렇지 않으면 Bank 인터페이스를 반환하는 조건부 타입입니다.
type PayMethod<T> = T extends 'card' ? Card : Bank;

// 'card' 타입을 사용하여 PayMethod 조건부 타입을 인스턴스화하면 Card 인터페이스를 반환합니다.
type CardPayMethodType = PayMethod<'card'>;

// 'bank' 타입을 사용하여 PayMethod 조건부 타입을 인스턴스화하면 Bank 인터페이스를 반환합니다.
type BankPayMethodType = PayMethod<'bank'>;
```

> 여기서 `PayMethod` 타입은 제네릭 타입 `T`를 받아, `T`가 `'card'` 리터럴 타입과 일치하면 `Card` 인터페이스 타입을, 일치하지 않으면 `Bank` 인터페이스 타입을 반환합니다. 그 결과, `CardPayMethodType`은 `Card` 인터페이스와 같은 타입이 되고, `BankPayMethodType`은 Bank 인터페이스와 같은 타입이 됩니다.

**[다른 예: `never` 타입과 함께 조건부 타입을 사용하여 타입에서 특정 값들을 제거하기]**

```ts
type ExcludeString<T> = T extends string ? never : T;

type Result = ExcludeString<string | number | boolean>; // number | boolean
```
> 여기서 `ExcludeString` 타입은 제네릭 타입 `T`가 `string` 타입과 일치하면 `never`를 반환하고, 그렇지 않으면 `T`를 그대로 반환합니다. 따라서, `Result` 타입은 `string` 타입을 제외한 `number | boolean` 타입이 됩니다.

### 5-1-2. 조건부 타입을 사용하지 않았을 때의 문제점


#### `react-query` 를 활용한 예

이때, `react-query` 라이브러리를 사용하여 API를 호출하고, 각각의 결제 수단 정보를 가져오는 함수를 구현한다고 가정합니다.

```bash
# API 엔드 포인드
계좌 정보 엔드포인트: www.bamin.com/baminpay/.../bank
카드 정보 엔드포인트: www.bamin.com/baminpay/.../card
앱 카드 정보 엔드포인트: www.bamin.com/baminpay/.../appcard
```

```ts
// 5.1.2-1
interface PayMethodBaseFromRes {
  financialCode: string;
  name: string;
}

interface Bank extends PayMethodBaseFromRes {
  fullName: string;
}

interface Card extends PayMethodBaseFromRes {
  appCardType?: string;
}

type PayMethodInfo<T extends Bank | Card> = T & PayMethodInterface;
type PayMethodInterface = {
  companyName: string;
  //...
}
```

```ts
type PayMethodType = PayMethodInfo<Card> | PayMethodInfo<Bank>;

export const useGetRegisteredList = (
  type: 'card' | 'appcard' | 'bank'
): UseQueryResult<PayMethodType[]> => {
  const url = `baeminpay/codes/${type === 'appcard' ? 'card' : type}`;
  const fetcher = fetcherFactory<PayMethodType[]>({
    onSuccess: (res) => {
      const usablePocketList =
        res?.filter(
          (pocket: PocketInfo<Card> | PocketInfo<Bank>) =>
            pocket?.useType === 'USE'
        ) ?? [];
      return usablePocketList;
    },
  });

  const result = useCommonQuery<PayMethodType[]>(url, undefined, fetcher);
  
  return result;
};
```

### 5-1-3. `extends` 조건부 타입을 활용하여 개선하기


<br>

## 5.2 템플릿 리터럴 타입 활용하기

```ts
interface Bank {
  financialCode: string;
  companyName: string;
  name: string;
  fullName: string;
}
interface Card {
  financialCode: string;
  companyName: string;
  name: string;
  appCardType?: string;
}
type PayMethod<T> = T extends 'card' ? Card : Bank;
type CardPayMethodType = PayMethod<'card'>;
type BankPayMethodType = PayMethod<'bank'>;
```



### 5.2.1 `extends` 와 제네릭을 활용한 조건부 타입

### 5.2.2 조건부 타입을 사용하지 않았을 때 문제점

### 5.2.3 `extends` 조건부 타입을 활용하여 개선하기

### 5.2.4 `infer` 를 활용해서 타입 추론하기

<br>

## 5.3 커스텀 유틸리티 타입 활용하기

<br>

## 5.4 불변 객체 타입으로 활용하기

<br>

## 5.5 Record 원시 타입 키 개선하기