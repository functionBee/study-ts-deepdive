"use strict";
// tsConfig: {"noImplicitAny":false}
function add(a, b) {
    return a + b;
}
const three = add(1, 2); // Type is number
const twelve = add('1', '2'); // Type is string
