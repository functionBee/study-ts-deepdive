// ������ �Լ� 
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// var teho = new Person('teho', 100)

// Ŭ����(ES6)
class Person {
    // class ����
    constructor (name, age){ // �ʱ�ȭ �޼��� constructor
        console.log('done!');

        this.name = name;
        this.age = age;
    }
}

var teho = new Person('teho', 33); // done!
