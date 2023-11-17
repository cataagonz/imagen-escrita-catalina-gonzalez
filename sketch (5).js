function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(1000);
}
let particles = [];

function setup() {
  createCanvas(400, 400);
  background(255); // Establecer el fondo en blanco
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let col = color(random(255), random(255), random(255));
    particles.push(new HeartParticle(x, y, col));
  }
}

function draw() {
  // No es necesario establecer el fondo en cada iteración de draw() si quieres un fondo estático
  // background(255);
  
  for (let particle of particles) {
    particle.update();
    particle.display();
    particle.checkEdges();
    for (let other of particles) {
      if (particle !== other) {
        if (particle.collide(other)) {
          particle.changeColor();
          other.changeColor();
        }
      }
    }
  }
}

class HeartParticle {
  constructor(x, y, col) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.r = 10;
    this.col = col;
  }

  update() {
    this.pos.add(this.vel);
  }

  display() {
    fill(this.col);
    noStroke();
    heart(this.pos.x, this.pos.y, this.r);
  }

  checkEdges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }

  collide(other) {
    let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
    return d < this.r + other.r;
  }

  changeColor() {
    this.col = color(random(255), random(255), random(255));
  }
}

function heart(x, y, s) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - s, y - s, x - 2 * s, y + s, x, y + 2 * s);
  bezierVertex(x + 2 * s, y + s, x + s, y - s, x, y);
  endShape(CLOSE);
}

