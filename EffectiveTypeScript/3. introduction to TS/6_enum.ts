
// 숫자형 이넘
// enum Shoes {
//     Nike,
//     Addidas,
// }
// var myShoes =  Shoes.Addidas;
// console.log(myShoes); //1

// 문자형 이넘
enum Shoes {
    Nike = '나이키',
    Addidas = '아디다스',
}

var myShoes =  Shoes.Addidas;
console.log(myShoes); //아디다스


enum Answer{
    Yes = 'Y',
    No = 'N',
}


function askQuestion(answer: string){
    if( answer === Answer.Yes){
        console.log('정답입니다.');
    }else{
        console.log('오답입니다.');
        
    }
}
// console.log(askQuestion('yes'));
// console.log(askQuestion('y'));

console.log(Answer.Yes); // Y


