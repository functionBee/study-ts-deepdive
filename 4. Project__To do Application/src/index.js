"use strict";
// any -> object 
// 변수에 구체적인 타입을 선언하는 것을 권장
let todoItems;
// api
function fetchTodoItems() {
    const todos = [
        { id: 1, title: '안녕', done: false },
        { id: 2, title: '타입', done: false },
        { id: 3, title: '스크립트', done: false },
    ];
    return todos;
}
// crud methods
function fetchTodos() {
    const todos = fetchTodoItems();
    return todos;
}
// return 값이 없는 함수
function addTodo(todo) {
    //: void 반환값이 없음을 의미
    todoItems.push(todo);
}
function deleteTodo(index) {
    todoItems.splice(index, 1);
}
function completeTodo(index, todo) {
    todo.done = true;
    todoItems.splice(index, 1, todo);
}
// business logic
function logFirstTodo() {
    return todoItems[0];
}
function showCompleted() {
    return todoItems.filter(item => item.done);
    // retrun todoItems.filter(function(item){
    //   if(item.done){
    //     return item;
    //   }
    // })
}
// Done: 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems() {
    // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가
    const item1 = {
        id: 4,
        title: 'item 4',
        done: false
    };
    addTodo(item1);
    addTodo({
        id: 5,
        title: 'item 5',
        done: true,
    });
}
// NOTE: 유틸 함수
function log() {
    console.log(todoItems);
}
todoItems = fetchTodoItems();
addTwoTodoItems();
log();
