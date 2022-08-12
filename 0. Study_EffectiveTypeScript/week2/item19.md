# 📝 Item 19: 추론 가능한 타입을 사용해 장황한 코드 방지하기(Avoid Cluttering Your Code with Inferable Types)

타입스크립트의 많은 타입 구문은 사실 불필요하다.<br>

코드의 모든 변수에 타입을 선언하는 것은 비 생산적이며 형편없는 스타일로 여겨진다.<br>

-   변수의 타입추론

```javascript
// 19-1
// bad
let x: number = 12;

// 19-2
// better
// 타입 추론이 된다면 명시적 타입 구문은 필요하지 않다.
let x = 12;
```

<br>

-   객체 리터럴의 타입추론

```javascript
// 19-3
// 객체도 타입 추론이 가능하다
const person: {
    name: string,
    born: {
        where: string,
        when: string,
    },
    died: {
        where: string,
        when: string,
    },
} = {
    name: 'Sojourner Truth',
    born: {
        where: 'Swartekill, NY',
        when: 'c.1797',
    },
    died: {
        where: 'Battle Creek, MI',
        when: 'Nov. 26, 1883',
    },
};
```

<br>

```javascript
// 19-4
// 타입을 생략하고 다음 처럼 작성해도 충분하다
// (참고: 객체 리터럴에 대한 타입 추론)
const person = {
    name: 'Sojourner Truth',
    born: {
        where: 'Swartekill, NY',
        when: 'c.1797',
    },
    died: {
        where: 'Battle Creek, MI',
        when: 'Nov. 26, 1883',
    },
};
```

<br>

-   배열의 타입추론

```javascript
// 19-5
// 타입스크립트는 입력을 받아 연산하는 함수가 어떤 타입을 반환하는지 정확히 알고 있다.
function square(nums: number[]) {
    return nums.map((x) => x * x);
}
const squares = square([1, 2, 3, 4]); // Type is number[]
```

<br>

타입이 추론되면 리팩 토링시 용이

```javascript
// 19-7
interface Product {
    id: number; // 문자도 들어 있음을 나중에 알게되었을때
    name: string;
    price: number;
}

function logProduct(product: Product) {
    const id: number = product.id; // Error: string은 number형식에 할당할 수 없다.
    const name: string = product.name;
    const price: number = product.price;
    console.log(id, name, price);
}

// 만약 logProduct함수 내의 명시적 타입구문이 없었다면, 코드는 아무런 수정 없이도 타입 체커를 통과했을 것이다.
// logProduct함수는 비구조화 할당문을 사용해 구현하는 것이 낫다
// 비구조화 할당문은 모든 지역 변수의 타입이 추론되도록 한다.
function logProduct(product: Product) {
    // (추가설명) 정보가 부족해서 타입스크립트가 스스로 타입을 판단하기 어려운 상황에는 명시적 타입 구문이 필요
    const { id, name, price }: { id: string, name: string, price: number } = product;
    console.log(id, name, price);
}
```

<br>

타입스크립트는 최종 사용처까지 고려하지 않는다.<br>

타입스크립트에서 변수의 타입은 일반적으로 처음 등장할 때 결정된다.<br>
이상적인 타입스크립트 코드는 함수/메서드 시그니처에 타입 구문을 포함하지만, 함수 내에서 생성된 지역 변수에는 타입 구문을 넣지 않는다.<br>

-   함수 매개 변수에 타입 구문을 생략하는 경우

```javascript
//19-11
function parseNumber(str: string, base = 10) {
    // ...
}
```

```javascript

```
