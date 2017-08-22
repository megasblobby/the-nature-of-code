"use strict";

const STARTING_POINT_X = 0, STARTING_POINT_Y = 100000;
const LOWER_BOUND_RANGE = 0, HIGHER_BOUND_RANGE = 1;
const LOWER_BOUND_X_RANGE = 0, HIGHER_BOUND_X_RANGE = 800;
const LOWER_BOUND_Y_RANGE = 0, HIGHER_BOUND_Y_RANGE = 600;
const INCREMENT = 0.01;

function Walker(position, size) {
	this.position = position;
	this.size = size;
	this.delta = new Vector2(STARTING_POINT_X, STARTING_POINT_Y);
};

Walker.prototype.walk = function () {
	let noiseStep = new Vector2(noise(this.delta.x), noise(this.delta.y));

	this.position.x = map(noiseStep.x, LOWER_BOUND_RANGE, HIGHER_BOUND_RANGE,
												LOWER_BOUND_X_RANGE, HIGHER_BOUND_X_RANGE);
	this.position.y = map(noiseStep.y, LOWER_BOUND_RANGE, HIGHER_BOUND_RANGE,
																 LOWER_BOUND_Y_RANGE, HIGHER_BOUND_Y_RANGE);

	this.delta.increment(new Vector2(INCREMENT, INCREMENT));
};

Walker.prototype.draw = function() {
	fill(100);
	ellipse(this.position.x, this.position.y, this.size.x, this.size.y);
};
