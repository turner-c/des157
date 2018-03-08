'use strict'

var mic, fft;

function setup() {
    var vis1 = createCanvas(710, 400);
    vis1.parent('vis1');
    noFill();
    var vis2 = createCanvas(710, 400);
    vis2.parent('vis2')
    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);
}

function draw() {
    background(200);

    var spectrum = fft.analyze();

    beginShape();
    for (var i = 0; i < spectrum.length; i++) {
        vertex(i, map(spectrum[i], 0, 255, height, 0));
    }
    endShape();
}



function draw() {
    background(200);

    var spectrum = fft.analyze();

    beginShape();
    for (var i = 0; i < spectrum.length; i++) {
        vertex(i, map(spectrum[i], 0, 255, height, 0));
    }
    endShape();
}
