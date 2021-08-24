// function fetchItems(): string[]{
//     var items = ['a', 'b', 'c'];
//     return items;
// }

// var result = fetchItems();
// console.log(typeof result); // string


// 비동기 적인 코드
function fetchItems(): Promise<string[]>{
    var items:string[] = ['a', 'b', 'c'];
    return new Promise(function(resolve){
        resolve(items);
    });
}

fetchItems();