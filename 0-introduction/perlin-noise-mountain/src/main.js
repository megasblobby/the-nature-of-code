"use strict";

const WIDTH = 800, HEIGHT = 600;
const STARTING_POINT_Y = 0;
const LOWER_BOUND_RANGE = 0, HIGHER_BOUND_RANGE = 1;
const LOWER_BOUND_Y_RANGE = 0, HIGHER_BOUND_Y_RANGE = 600;
const INCREMENT = 0.01;

let peaksCoords = new Array();

function setup() {
	createCanvas(WIDTH, HEIGHT);

	generateMountain();
}

function draw() {
	fill(0);
	clear();

	fill(100);

	let lastPeak = peaksCoords[0];

	for (let i = 1; i < peaksCoords.length; i++) {
		line(lastPeak.x, lastPeak.y, peaksCoords[i].x,  peaksCoords[i].y);
		lastPeak = peaksCoords[i];
	}
}

function generateMountain () {
	let delta = STARTING_POINT_Y;

	let index = 0;
	peaksCoords.push(new Vector2());

	let noiseY = noise(delta);
	let y = map(noiseY, LOWER_BOUND_RANGE, HIGHER_BOUND_RANGE,
												LOWER_BOUND_Y_RANGE, HIGHER_BOUND_Y_RANGE);
	peaksCoords[0].y = y;

	while (peaksCoords[index].x < WIDTH) {
		index++;

		let increment = floor(random(0, 4));
		let x = peaksCoords[index -1].x + increment;

		let noiseY = noise(delta);
		let y = map(noiseY, LOWER_BOUND_RANGE, HIGHER_BOUND_RANGE,
													LOWER_BOUND_Y_RANGE, HIGHER_BOUND_Y_RANGE);

		peaksCoords.push(new Vector2(x, y));

		delta += INCREMENT;
	}
}
