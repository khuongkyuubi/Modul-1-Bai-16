class Circle {
    radius; // private double radius;
    color; // private string color;
    // public Circle() {// constructor }
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    // public getRadius() : double ;
    getRadius() {
        return this.radius;
    }

    // public getArea() : double;
    getArea() {
        return +(Math.PI * this.radius ** 2).toFixed(2);
    }

}
let circle = new Circle(5);
console.log(circle.getArea());