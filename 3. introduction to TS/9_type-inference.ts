// 타입추론
// 타입추론 기본
// var a = 10;
// var b = 'string';


// function getType(type = 10) {
//     var say = 'hi';
//     return type + say; // 10hi
// }

// 타입추론 기본
// 인터페이스에서 타입을 받아서 내부적으로 사용할 수 있는 제네릭 문법 정의
// interface Dropdown<T>{
//     value: T;
//     title: string;
// }

// var shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello'
// }

// 복잡한 구조에서의 타입 추론 방식
interface Dropdown<T>{
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;

    // extends Dropdown<K>를 통해
    // 암묵적으로
    // value,
    // title,
    // 들어옴
}

var detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'a',
    tag: 'b'
}
