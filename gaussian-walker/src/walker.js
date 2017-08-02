const LEFT = 0, RIGHT = 1, UP = 2, DOWN = 3;
const STEP_MEAN = 1, STEP_STANDARD_DEVIATION = 2;

function Walker(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.walk = function () {
		let direction = floor(random(0, 4));
		let step = randomGaussian(STEP_MEAN, STEP_STANDARD_DEVIATION);

		switch (direction) {
			case LEFT: {
				this.x += step;
				break;
			}
			case RIGHT: {
				this.x -= step;
				break;
			}
			case UP: {
				this.y -= step;
				break;
			}
			case DOWN: {
				this.y += step;
				break;
			}
		}
	};

	this.draw = function() {
		rect(this.x, this.y, this.width, this.height);
	}
};
