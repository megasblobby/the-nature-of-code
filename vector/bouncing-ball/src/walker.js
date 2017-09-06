const LEFT = 0, RIGHT = 1, UP = 2, DOWN = 3;
const STEP = 1;

function Walker(position, sizes) {
  this.position = createVector(position.x, position.y);
	this.sizes = createVector(sizes.x, sizes.y);
	this.velocity = createVector(random(-4, 4), random(-4, 4));
};

Walker.prototype.update = function () {
	this.position = p5.Vector.add(this.position, this.velocity);

	if (this.position.x - this.sizes.x  < 0) {
		this.velocity.x *= -1;
		this.position.x = 0 + this.sizes.x;
	}
	if (this.position.x + this.sizes.x  > WIDTH) {
		this.velocity.x *= -1;
		this.position.x = WIDTH - this.sizes.x;
	}
	if (this.position.y - this.sizes.y  < 0) {
		this.velocity.y *= -1;
		this.position.y = 0 + this.sizes.y;
	}
	if (this.position.y + this.sizes.y  > HEIGHT) {
		this.velocity.y *= -1;
		this.position.y = HEIGHT - this.sizes.y;
	}
};

Walker.prototype.draw = function () {
	fill(100, 100, 100);
	ellipse(this.position.x, this.position.y, this.sizes.x, this.sizes.y);
};
