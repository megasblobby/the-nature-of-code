const WIDTH = 800, HEIGHT = 600;
const NUMBER_OF_BARS = 20;

let randomCounts = [NUMBER_OF_BARS];
let barWidth;

function setup() {
	createCanvas(WIDTH, HEIGHT);

	barWidth = WIDTH / NUMBER_OF_BARS;

	for (let i = 0; i < NUMBER_OF_BARS; i++) {
			randomCounts[i] = 0;
	}
}

function draw() {
	stroke(0)
	fill(155);

	let randomNumber = floor(random(randomCounts.length));
	randomCounts[randomNumber]++;
	let x = 0, y = 0;
	for (let i = 0; i < randomCounts.length; i++) {
			y = HEIGHT - randomCounts[i] - 1;
			rect(x, y, barWidth, randomCounts[i]);
			x += barWidth;
	}
}
