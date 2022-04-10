function getRandomHex() {
    // lấy random mã hex từ 0 - 255;
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    // lấy mã mầu RGB ngẫu nhiên
    let R = getRandomHex(); //
    let G = getRandomHex();
    let B = getRandomHex();
    return `RGB(${R}, ${G}, ${B} )`;
}

function createCircle() {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    // lấy màu ngẫu nhiên
    let color = getRandomColor();

    // Lấy vị trí ngẫu nhiên
    let x = Math.floor(Math.random()*canvas.width);
    let y = Math.floor(Math.random()*canvas.height);
    let circle = new Circle(x, y, 80);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();

}

function createMultipleCircle() {
    let numberOfCircle = 20;
    for (let i = 0; i < numberOfCircle; i++) {
        createCircle();
    }
}
createMultipleCircle();

