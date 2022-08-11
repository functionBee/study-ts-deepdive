// item 10-2
// string을 String으로입력하는 실수를 하더라도 처음에는 잘 동작하는 것 처럼 보임 ㅜㅜ
function getStringLen(foo: String) {
    return foo.length;
}

getStringLen('hello'); // OK
getStringLen(new String('hello')); // OK

// item10-3
// string을 매개변수로 받는 메서드에 String 객체를 전달할 경우
function isGreeting(phrase: String) {
    return ['hello', 'good day'].includes(phrase);
    // ~~~~~~
    // Argument of type 'String' is not assignable to parameter
    // of type 'string'.
    // 'string' is a primitive, but 'String' is a wrapper object;
    // prefer using 'string' when possible
}
