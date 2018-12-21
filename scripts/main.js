let length;

function setup() {
	createCanvas(windowWidth, windowHeight);
	length = width > height ? width : height;
}

function draw() {
	clear();

	noStroke();
	fill(255);
	textAlign(CENTER, CENTER);
	textSize(length / 15);
	text('work in progress', width / 2, height / 2);
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight, true);
	length = width > height ? width : height;
}
