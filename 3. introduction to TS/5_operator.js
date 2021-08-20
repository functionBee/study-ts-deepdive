// function logMessage(value : any){
//     console.log(value);
// }
// logMessage('hello');
// logMessage(10);
// logMessage(false);
var seho;
// var example: string & number & boolean;
function logMessage(value) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value muste be string or number');
}
logMessage('hello');
logMessage(10);
function askSomeone(someone) {
    someone.name;
}
askSomeone({ name: 'developer', skill: 'web dev' });
askSomeone({ name: 'bee', age: 333 });
function askSomeone(someone) {
    someone.age;
    someone.skill;
    someone.name;
}
askSomeone({ name: 'developer', skill: 'web dev', age: 333 });
