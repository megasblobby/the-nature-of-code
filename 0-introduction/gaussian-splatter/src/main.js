const WIDTH = 800, HEIGHT = 600;
const X_MEAN = WIDTH / 2, X_STANDARD_DEVIATION = 100;
const Y_MEAN = HEIGHT / 2;
const Y_STANDARD_DEVIATION = X_STANDARD_DEVIATION * WIDTH / HEIGHT;
const MIN_RADIUS = 1, MAX_RADIUS = 60;

let x;
let y;

function setup() {
	createCanvas(WIDTH, HEIGHT);
}

function draw() {
	noStroke();
	let red = random(255);
	let green = random(255);
	let blue = random(255);
	let alpha = random(255);
	fill(red, green, blue, alpha);

	x = floor(randomGaussian(X_MEAN, X_STANDARD_DEVIATION));
	y = floor(randomGaussian(Y_MEAN, Y_STANDARD_DEVIATION));

	ellipse(x, y, random(MIN_RADIUS, MAX_RADIUS), random(MIN_RADIUS, MAX_RADIUS));
}
