"use strict";
function calculateArea(shape) {
    if (shape.kind === 'rectangle') {
        shape; // Type is Rectangle
        return shape.width * shape.height;
    }
    else {
        shape; // Type is Square
        return shape.width * shape.width;
    }
}
