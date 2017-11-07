const LEFT = 0, RIGHT = 1, UP = 2, DOWN = 3;
const STEP = 1;

function WalkerMouse(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.walk = function () {
		let directionToMouse = createVector(mouseX - this.x, mouseY - this.y);
		directionToMouse.normalize();

		let direction = random();
		
		if (direction <= 0.4) {
			this.y += directionToMouse.y;
		}
		else if (direction > 0.4  && direction <= 0.8) {
			this.x += directionToMouse.x;
		}
		else if (direction > 0.8 && direction < 0.9) {
				this.x -= directionToMouse.x;
		}
		else {
			this.y -= directionToMouse.y;
		}
	};

	this.draw = function() {
		rect(this.x, this.y, this.width, this.height);
	}
};
