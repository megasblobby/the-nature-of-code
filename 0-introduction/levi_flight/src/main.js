const WIDTH = 800, HEIGHT = 600;

let walker;

function setup() {
	createCanvas(WIDTH, HEIGHT);

	let x = WIDTH / 2, y = HEIGHT / 2;
	let width = 2, height = 4;
	walker = new Walker(x, y, width, height);
}

function draw() {
	fill(0);

	walker.walk();
	walker.x = clamp(walker.x, 0, WIDTH);
	walker.y = clamp(walker.y, 0, HEIGHT);

	walker.draw();
}

function clamp(value, minValue, maxValue) {
	if (value < minValue)
		value = minValue;
	if (value > maxValue)
		value = maxValue;

	return value;
}
