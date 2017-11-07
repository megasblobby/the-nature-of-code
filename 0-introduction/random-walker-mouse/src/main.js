const WIDTH = 800, HEIGHT = 600;

let walker;

function setup() {
	createCanvas(WIDTH, HEIGHT);

	let x = WIDTH / 2, y = HEIGHT / 2;
	let width = 2, height = 4;
	walker = new WalkerMouse(x, y, width, height);
}

function draw() {
	fill(0);

	walker.walk();
	walker.draw();
}
