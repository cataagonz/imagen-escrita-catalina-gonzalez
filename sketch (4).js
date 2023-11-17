let espirales = [];

function setup() {
  createCanvas(1000, 1000);
  background(255); // Establece el fondo blanco
}

function draw() {
  for (let espiral of espirales) {
    espiral.mostrar();
    espiral.girar();
  }
}

function mousePressed() {
  let x = mouseX;
  let y = mouseY;
  let nuevaEspiral = new Espiral(x, y);
  espirales.push(nuevaEspiral);
}

class Espiral {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radio = 1;
    this.angulo = 0;
  }

  mostrar() {
    noFill();
    stroke(0);
    push();
    translate(this.x, this.y);
    beginShape();
    for (let i = 0; i < 100; i++) {
      let radio = this.radio + i * 2;
      let x = cos(this.angulo) * radio;
      let y = sin(this.angulo) * radio;
      vertex(x, y);
      this.angulo += 0.1;
    }
    endShape();
    pop();
  }

  girar() {
    this.angulo += 0.01;
  }
}
