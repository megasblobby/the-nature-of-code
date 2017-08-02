const LEFT = 0, RIGHT = 1, UP = 2, DOWN = 3;
const STEP = 1;

function Walker(x, y, width, height) {
	this.x = x; 
	this.y = y;
	this.width = width; 
	this.height = height;
	
	this.walk = function () {
		let direction = floor(random(0, 4));
		
		switch (direction) {
			case LEFT: {
				this.x += STEP;
				break;
			}
			case RIGHT: {
				this.x -= STEP;
				break;
			}
			case UP: {
				this.y -= STEP;
				break;
			}
			case DOWN: {
				this.y += STEP;
				break;
			}
		}
	};
	
	this.draw = function() {
		rect(this.x, this.y, this.width, this.height);
	}
};
