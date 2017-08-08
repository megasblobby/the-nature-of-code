"use strict";

const LEFT = 0, RIGHT = 1, UP = 2, DOWN = 3;
const STEP_MEAN = 1, STEP_STANDARD_DEVIATION = 2;
const STARTING_POINT_X = 0, STARTING_POINT_Y = 100000;
const LOWER_BOUND_RANGE = 0, HIGHER_BOUND_RANGE = 1;
const LOWER_BOUND_STEP_RANGE = -5, HIGHER_BOUND_STEP_RANGE = 5;
const INCREMENT = 0.01;

function Walker(position, size) {
	this.position = position;
	this.size = size;
	this.step = new Vector2();
	this.delta = new Vector2(STARTING_POINT_X, STARTING_POINT_Y);
};

Walker.prototype.walk = function () {
	let noiseStep = new Vector2(noise(this.delta.x), noise(this.delta.y));

	this.step.x = map(noiseStep.x, LOWER_BOUND_RANGE, HIGHER_BOUND_RANGE,
										LOWER_BOUND_STEP_RANGE, HIGHER_BOUND_STEP_RANGE);
	this.step.y = map(noiseStep.y, LOWER_BOUND_RANGE, HIGHER_BOUND_RANGE,
										LOWER_BOUND_STEP_RANGE, HIGHER_BOUND_STEP_RANGE);

	this.position.increment(this.step);

	if (this.position.x - this.size.x / 2 < 0) {
		this.position.x = 0 + this.size.x / 2;
		this.step.x += 100;
	}

	if (this.position.x + this.size.x / 2 > 600) {
		this.position.x = 600 - this.size.x / 2;
		this.step.x += 100;
	}
	if (this.position.y - this.size.y / 2 < 0) {
		this.position.y = 0 + this.size.y / 2;
		this.step.y += 100;
	}

	if (this.position.y + this.size.y / 2 > 800) {
		this.position.y = 800 - this.size.y / 2;
		this.step.y += 100;
	}

	this.delta.increment(new Vector2(INCREMENT, INCREMENT));
};

Walker.prototype.draw = function() {
	fill(100);
	ellipse(this.position.x, this.position.y, this.size.x, this.size.y);
};
