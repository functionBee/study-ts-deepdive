"use strict";
function calculateLength(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}
function normalize(v) {
    const length = calculateLength(v);
    return {
        x: v.x / length,
        y: v.y / length,
        z: v.z / length,
    };
}
