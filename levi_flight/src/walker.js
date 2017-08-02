const LEFT = 0, RIGHT = 1, UP = 2, DOWN = 3;
const MAX_STEP_SIZE = 25;

function Walker(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.walk = function () {
		let direction = floor(random(0, 4));
		let stepSize = this.montecarlo() * MAX_STEP_SIZE;

		let step = floor(random(-stepSize, stepSize));

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

	this.montecarlo = function() {
		let randomNumber, randomNumber2;
		let probability;
		do
		{
			randomNumber = random();
			randomNumber2 = random();
			probability = pow(randomNumber, 2);
		}
		while(randomNumber2 > probability);

		return randomNumber;
	}

	this.draw = function() {
		rect(this.x, this.y, this.width, this.height);
	}
};
