"use strict";

const WIDTH = 800, HEIGHT = 600, DEPTH = 600;
const BOX_EDGE = 300;
const RADIUS = 40;

let ball;

function setup() {
	createCanvas(WIDTH, HEIGHT, WEBGL);

	//let position = createVector(WIDTH / 2, HEIGHT / 2, DEPTH / 2);
	let position = createVector(0, 0, 0);
	ball = new Ball(position, RADIUS);
}

function draw() {
	background(200);
	camera(0, -50, 250);
	rotateY(1.047);

	directionalLight(255, 255, 255, (45/180) * PI, (45/180) * PI, (45/180) * PI);
	specularMaterial(250, 0, 0, 100);
	box(BOX_EDGE, BOX_EDGE, BOX_EDGE);

	ball.update();
	ball.draw();
}
