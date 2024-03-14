class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.width * this.height;
    }
}

let rect = new Rectangle(5, 10);
console.log(rect.area); // Output: 50

console.log(Rectangle.name); // Output: Rectangle

class Rectangle2 extends Rectangle {
    constructor(height, width) {
        super(height, width);
    }
}

console.log(Rectangle2.name); // Output: Rectangle2

