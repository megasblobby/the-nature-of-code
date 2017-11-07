"use strict";

const WIDTH = 800, HEIGHT = 600;
const HALF = 0.5;

let center;

function setup() {
	createCanvas(WIDTH, HEIGHT);

	center = createVector(WIDTH / 2, HEIGHT / 2);
}

function draw() {
	fill(0);
	clear();

	let mousePosition = createVector(mouseX, mouseY);
	let displacement = p5.Vector.sub(mousePosition, center);
	displacement.mult(HALF);
	let endPosition = createVector(center.x + displacement.x,
		center.y + displacement.y);
	line(center.x, center.y, endPosition.x, endPosition.y);
}
