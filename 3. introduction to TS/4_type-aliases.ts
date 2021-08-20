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