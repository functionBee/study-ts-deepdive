"use strict";
function calculateArea(shape) {
    if ('height' in shape) {
        shape; // Type is Rectangle
        return shape.width * shape.height;
    }
    else {
        shape; // Type is Square
        return shape.width * shape.width;
    }
}
