"use strict";

const WIDTH = 800, HEIGHT = 600;
const RADIUS = 40;

let walker;

function setup() {
	createCanvas(WIDTH, HEIGHT);

	let position = new Vector2(WIDTH / 2, HEIGHT / 2);
	let size = new Vector2(RADIUS, RADIUS);
	walker = new Walker(position, size);
}

function draw() {
	fill(0);
	clear();

	walker.walk();
	walker.draw();
}
