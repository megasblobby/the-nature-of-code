"use strict";

const WIDTH = 800, HEIGHT = 600;
const LOWER_BOUND_RANGE = 0, HIGHER_BOUND_RANGE = 1;
const LOWER_BOUND_BRIGHTNESS_RANGE = 0, HIGHER_BOUND_BRIGHTNESS_RANGE = 255;
const coordsIncrement = new Vector2(1, 1);
const noiseIncrement = new Vector2(0.001, 0.001);

let position = new Vector2(0, 0);
let noiseOffset = new Vector2(0, 0);

let pixels = new Array();

function setup() {
	createCanvas(WIDTH, HEIGHT);

	for(let y = 0; y < HEIGHT; y++) {
		pixels[y] = new Array(WIDTH);
		noiseOffset.x = 0;

		for(let x = 0; x < WIDTH; x++) {
			let brightness = getBrightness(noiseOffset);
			pixels[y][x] = color(brightness);

			noiseOffset.x += noiseIncrement.x;
		}
		noiseOffset.y += noiseIncrement.y;
	}

	for(let y = 0; y < HEIGHT; y++) {
		for(let x = 0; x < WIDTH; x++) {
			stroke(pixels[y][x]);
			point(x, y);
		}
	}
}

function getBrightness(noiseOffset) {
	let noiseValue = noise(noiseOffset.x, noiseOffset.y)
	let brightness =  map(noiseValue,
												LOWER_BOUND_RANGE,
												HIGHER_BOUND_RANGE,
												LOWER_BOUND_BRIGHTNESS_RANGE,
												HIGHER_BOUND_BRIGHTNESS_RANGE);

	return brightness;
}

function draw() {
	//fill(0);
	//clear();

	/*for(let y = 0; y < HEIGHT; y++) {
		for(let x = 0; x < WIDTH; x++) {
			stroke(pixels[y][x]);
			point(x, y);
		}
	}*/
}
