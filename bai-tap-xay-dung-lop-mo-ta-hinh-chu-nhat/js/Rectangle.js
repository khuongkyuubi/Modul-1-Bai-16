class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getWidth() {
        return this.width;
    }

    setWidth(width) {
        this.width = width;
    }

    getHeight() {
        return this.height;
    }

    setHeight(height) {
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width * this.height);
    }

    drawRectangle(x, y, color) {
        let canvas = document.getElementById("myCanvas");
        // let canvas = document.createElement("canvas");
        // canvas.width = 1368;
        // canvas.height = 768;
        // canvas.style = "border:1px solid #d3d3d3;"
        console.log(canvas);
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect(x, y, this.width, this.height);

    }

}