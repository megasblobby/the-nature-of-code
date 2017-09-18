"use strict";

const WIDTH = 800, HEIGHT = 600;

let center;
let mousePosition;
let subtraction;

function setup() {
	createCanvas(WIDTH, HEIGHT);

	center = createVector(WIDTH / 2, HEIGHT / 2);
	mousePosition = createVector();
	subtraction = createVector();
}

function draw() {
	fill(0);
	clear();

	mousePosition = createVector(mouseX, mouseY);
	subtraction = p5.Vector.sub(center);
	line(center.x, center.y, mousePosition.x, mousePosition.y);
}
