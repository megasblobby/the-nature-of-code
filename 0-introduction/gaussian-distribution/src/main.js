const WIDTH = 800, HEIGHT = 600;
const Y = HEIGHT / 2;
const MEAN = WIDTH / 2, STANDARD_DEVIATION = 100;
const RADIUS = 30;
const FILL_COLOR = 50, ALPHA = 10;

let x;

function setup() {
	createCanvas(WIDTH, HEIGHT);
}

function draw() {
	noStroke();
	fill(FILL_COLOR, FILL_COLOR, FILL_COLOR, ALPHA);

	x = floor(randomGaussian(MEAN, STANDARD_DEVIATION));
	console.log(x);
	ellipse(x, Y, RADIUS);
}
