'use strict'

var mic;

function setup() {
    var canvas = createCanvas(600, 200);
    // get a new audio line in
    mic = new p5.AudioIn()
    // start the mic
    mic.start();
}

function draw() {
    background(0);
    // get volume of mic
    var micLevel = mic.getLevel();

    // draw the ellipse based on mic level
    ellipse(width / 2, height / 2, constrain(micLevel * height * 5, 0, height), constrain(micLevel * height * 5, 0, height));
    fill(255, 89, 0);

}
