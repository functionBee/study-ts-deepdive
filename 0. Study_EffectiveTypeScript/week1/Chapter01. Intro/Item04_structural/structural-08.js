"use strict";
function calculateLength(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}
function calculateLengthL1(v) {
    let length = 0;
    for (const axis of Object.keys(v)) {
        const coord = v[axis];
        // ~~~~~~~ Element implicitly has an 'any' type because ...
        //         'string' can't be used to index type 'Vector3D'
        length += Math.abs(coord);
    }
    return length;
}
const vec3D = { x: 3, y: 4, z: 1, address: '123 Broadway' };
calculateLengthL1(vec3D); // OK, returns NaN
