"use strict";

const WIDTH = 800, HEIGHT = 600;
const HALF = 0.5;
const RECT_HEIGHT = 10;
let CORNER;

let center;

function setup() {
	createCanvas(WIDTH, HEIGHT);

	CORNER = createVector(0, 0);
	center = createVector(WIDTH / 2, HEIGHT / 2);
}

function draw() {
	fill(0);
	clear();

	let mousePosition = createVector(mouseX, mouseY);
	let displacement = p5.Vector.sub(mousePosition, center);

	drawLine(center, displacement);
	drawRect(displacement);
}

function drawLine(center, displacement) {
	let endPosition = createVector(center.x + displacement.x,
		center.y + displacement.y);
	line(center.x, center.y, endPosition.x, endPosition.y);
}

function drawRect(displacement) {
	let magnitude = displacement.mag();
	rect(CORNER.x, CORNER.y, magnitude, RECT_HEIGHT);
}
