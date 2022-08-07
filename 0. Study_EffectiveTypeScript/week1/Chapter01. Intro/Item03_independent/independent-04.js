"use strict";
class Square {
    constructor(width) {
        this.width = width;
    }
}
class Rectangle extends Square {
    constructor(width, height) {
        super(width);
        this.width = width;
        this.height = height;
    }
}
function calculateArea(shape) {
    if (shape instanceof Rectangle) {
        shape; // Type is Rectangle
        return shape.width * shape.height;
    }
    else {
        shape; // Type is Square
        return shape.width * shape.width; // OK
    }
}
