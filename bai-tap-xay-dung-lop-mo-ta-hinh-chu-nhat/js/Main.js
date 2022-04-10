let rectangle = new Rectangle(100, 100);


rectangle.setHeight(300);
rectangle.setWidth(360);
rectangle.drawRectangle(10, 10, "red");

function getCanvas() {
    let canvas = document.getElementById("myCanvas");
    return canvas.getContext("2d");
}


function printArea() {
    let ctx = getCanvas();
    ctx.font = "30px Arial";
    ctx.fillText(`Area: ${rectangle.getArea()}`, 10, 400);

}

function printPerimeter() {
    let ctx = getCanvas();
    ctx.font = "30px Arial";
    ctx.fillText(`Perimeter: ${rectangle.getPerimeter()}`, 10, 500);
}

printArea();
printPerimeter();
