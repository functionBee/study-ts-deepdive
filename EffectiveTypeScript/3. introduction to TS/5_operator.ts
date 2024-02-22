// function logMessage(value : any){
//     console.log(value);
// }

// logMessage('hello');
// logMessage(10);
// logMessage(false);


var seho: string | number | boolean;
// var example: string & number & boolean;

function logMessage(value : string | number ){
    if( typeof value === 'number'){
        value.toLocaleString();
    }
    if( typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value muste be string or number');
}

logMessage('hello');
logMessage(10);


interface Developer {
    name: string;
    skill : string;
}

interface Person {
    name: string;
    age: number;    
}

function askSomeone(someone: Developer | Person ){
    someone.name;
}

askSomeone({ name : 'developer', skill: 'web dev'});
askSomeone({ name : 'bee', age: 333 });


function askSomeone(someone: Developer & Person ){
    someone.age;
    someone.skill;
    someone.name;
}

askSomeone({ name : 'developer', skill: 'web dev', age: 333});
