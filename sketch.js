function setup() {
  createCanvas(2000, 2000);
}

function draw() {
  background(1000);
}
let angle = 2000;
let length = 0;
let increment = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noFill();
  stroke(0);
}

function draw() {
  let x1 = cos(angle) * length + width / 2;
  let y1 = sin(angle) * length + height / 2;
  let x2 = cos(angle + PI / 4) * length + width / 2;
  let y2 = sin(angle + PI / 4) * length + height / 2;
  
  line(x1, y1, x2, y2);
  
  angle += radians(1030);
  length += increment;
  
  if (length > 2000) {
    noLoop();
  }
}

