 "use strict";

const WIDTH = 400, HEIGHT = 300;
const LOWER_BOUND_RANGE = 0, HIGHER_BOUND_RANGE = 1;
const LOWER_BOUND_BRIGHTNESS_RANGE = 0, HIGHER_BOUND_BRIGHTNESS_RANGE = 255;
const NOISE_DETAIL_X = 2, NOISE_DETAIL_Y = 0.2;
const noiseIncrement = new Vector2(0.1, 0.1);

let noiseOffset = new Vector2(0, 0);

let pixels = new Array();

function setup() {
	createCanvas(WIDTH, HEIGHT);


}

function getBrightness(noiseOffset) {
	noiseDetail(NOISE_DETAIL_X, NOISE_DETAIL_Y);
	let noiseValue = noise(noiseOffset.x, noiseOffset.y);
	let brightness =  map(noiseValue,
												LOWER_BOUND_RANGE,
												HIGHER_BOUND_RANGE,
												LOWER_BOUND_BRIGHTNESS_RANGE,
												HIGHER_BOUND_BRIGHTNESS_RANGE);

	return brightness;
}

function draw() {
  for(let y = 0; y < HEIGHT; y++) {
		pixels[y] = new Array(WIDTH);
		noiseOffset.x = 0;

		for(let x = 0; x < WIDTH; x++) {
			let brightness = getBrightness(noiseOffset);
			pixels[y][x] = color(brightness);
      stroke(pixels[y][x]);
			point(x, y);

			noiseOffset.x += noiseIncrement.x;
		}
		noiseOffset.y += noiseIncrement.y;
	}
}
