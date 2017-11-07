"use strict";

const WIDTH = 800, HEIGHT = 600;
const SCALE = 100;

let center;
let mover;

function setup() {
	createCanvas(WIDTH, HEIGHT);

	mover = new Mover();
}

function draw() {
	fill(0);
	clear();

	mover.update();
	mover.render();
}

function drawLine(center, displacement) {
	let endPosition = createVector(center.x + displacement.x,
		center.y + displacement.y);
	line(center.x, center.y, endPosition.x, endPosition.y);
}
