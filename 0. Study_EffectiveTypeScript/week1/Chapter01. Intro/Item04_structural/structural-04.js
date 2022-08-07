"use strict";
function calculateLength(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}
const v = { x: 3, y: 4, name: 'Zee' };
calculateLength(v); // OK, result is 5
