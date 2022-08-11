# 📝 Item 10: 객체 래퍼 타입 피하기(Effective Typescript : item10 Avoid Object Wrapper Types (String, Number, Boolean, Symbol, BigInt))

타입스크립트는 소문자 형태의 기본형(예: string) 과 래퍼 객체(wrapper obejct) 타입(예: String)을 별도로 모델링합니다.

<br>

```javasript

// 10-2
// string을 String으로입력하는 실수를 하더라도 처음에는 잘 동작하는 것 처럼 보임 ㅜㅜ
function getStringLen(foo: String) {
  return foo.length;
}

getStringLen("hello");  // OK
getStringLen(new String("hello"));  // OK

```

<br>

```javasript

// 10-3
// string을 매개변수로 받는 메서드에 String 객체를 전달할 경우
function isGreeting(phrase: String) {
return [
'hello',
'good day'
].includes(phrase);
// ~~~~~~
// Argument of type 'String' is not assignable to parameter
// of type 'string'.
// 'string' is a primitive, but 'String' is a wrapper object;
// prefer using 'string' when possible
}

```

string 은 string에 할당 할 수 있지만 String은 string에 할당 할수 없습니다.<br>
타입스크립트는 기본형 타입을 객체 래퍼에 할당하는 것을 허용합니다. <br>
그러나 객체 레퍼에 할당하는 구문은 오해하기 쉽고, 굳이 그렇게 할 필요가 없습니다.

<br>

---

## Reference

-   [The primitives:string,number, and boolean](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean)

```

```
