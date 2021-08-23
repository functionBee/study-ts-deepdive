

// function logText(text){
//     console.log(text);
//     return text;
// }

// logText(10);
// logText('hi');
// logText(true);



// Generic

function logText<T>(text: T): T{
    console.log(text);
    return text;
}

logText<string>('hi');