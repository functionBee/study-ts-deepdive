
// 여러 타입을 받을 수 있음
// function logText(text){
//     console.log(text);
//     return text;
// }

// logText(10);
// logText('hi');
// logText(true);



// Generic
// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }

// logText<string>('hi');


// function logText(text: string | number){
//     console.log(text);
//     // text.

//     // 문제1.
//     // string 과 number의 교집합
//     // 공통으로 작성가능한 api 에 대해서만 자동 완성(preview)을 제공
//     return text;
// }
// const a = logText('a');
// a.split('');
// // 문제2. 
// // 정확하게 a 변수가 string 이라는 타입의 추론이 불가능하여 오류가 발생



function logText<T>(text: T):T { // 인자와 반환값이 동일하도록 제네릭을 이용
    console.log(text);
    return text;
}

const str = logText<string>('a');
str.split('');

// 장점1. 
// 타입의 구성이 용이

const login = logText<boolean>(true);
// 장점2. 
// login 변수가 boolean 타입임을 추론 가능


// interface Dropdown{
//     value: string;
//     selected : boolean;
// }

// const object: Dropdown = { value: 'sw', selected :  false };

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T>{
    value: T;
    selected : boolean;
}

const object: Dropdown<string> = { value: 'sw', selected :  false };


