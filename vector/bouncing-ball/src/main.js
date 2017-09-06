"use strict";

const WIDTH = 800, HEIGHT = 600;
const RADIUS = 40;

let walker;

function setup() {
	createCanvas(WIDTH, HEIGHT);

	let position =createVector(WIDTH / 2, HEIGHT / 2);
	let size = createVector(RADIUS, RADIUS);
	walker = new Walker(position, size);
}

function draw() {
	fill(0);
	clear();

	walker.update();
	walker.draw();
}
