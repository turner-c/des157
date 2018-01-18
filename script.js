// p5 file

console.log("this is mysketch.js comment");

var xPos;

function setup() {
    var myCanvas = createCanvas(800, 250);
    //has to parent an id
    myCanvas.parent('mySketch');
    background(0);
    xPos = 0;
}

function draw() {
    drawEllipse();
    ellipse(mouseX,mouseY, 50,50)
}

function drawEllipse() {
    ellipse(xPos, height / 2, 50, 50);
    xPos++;
    if (xPos == 800) {
        xPos = 0;
    } else if (xPos < 266) {
        fill(255, 0, 0);
    } else if (xPos >= 532) {
        fill(0, 0, 255);
    } else if (xPos < 800) {
        fill(0, 255, 0);
    }
}
