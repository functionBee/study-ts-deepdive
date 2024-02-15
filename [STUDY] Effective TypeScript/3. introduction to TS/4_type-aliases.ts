// interface Person {
//     name : string;
//     age : number;
// }

type Person = {
    name : string;
    age: number;
}

var developer : Person = {
    name: 'bee',
    age: 300
}


type greeting = string;
var str: greeting = 'hello';


type Todo = {id: string; title: string; done: boolean};
function getTodo(todo: Todo){

}

// 타입 별칭(type alias)는 원시 값, 유니온 타입, 튜플 등도 타입으로 지정할 수 있다.
// https://poiemaweb.com/typescript-alias

// 문자열 리터럴로 타입 지정
type Str = 'bee';

// 유니온 타입으로 