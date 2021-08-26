// 타입추론

var a = 10;
var b = 'string';


function getType(type = 10) {
    var say = 'hi';
    return type + say; // 10hi
}