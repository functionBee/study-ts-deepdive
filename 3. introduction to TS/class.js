// 생성자 함수 
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// var teho = new Person('teho', 100)

// 클래스(ES6)
class Person {
    // class 로직
    constructor (name, age){ // 초기화 메서드 constructor
        console.log('done!');

        this.name = name;
        this.age = age;
    }
}

var teho = new Person('teho', 33); // done!
