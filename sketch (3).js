let song;
let playButton;

function preload() {
  song = loadSound('y2mate.com - NewJeans 뉴진스  Super Shy Official Audio.mp3');  // Reemplaza con la ruta de tu archivo de música
}

function setup() {
  createCanvas(400, 400);

  playButton = createButton("Play/Pause");
  playButton.size(width, 400, 400);  // Establece el tamaño del botón al ancho del lienzo y 400 de altura
  playButton.position(0, height - 400);  // Coloca el botón en la parte inferior del lienzo
  playButton.mousePressed(togglePlay);
}

function draw() {
  background(220);
}

function togglePlay() {
  if (!song.isPlaying()) {
    song.play();
  } else {
    song.pause();
  }
}




let img;
let hearts = [];

function preload() {
  img = loadImage('getup.jpg');  // Reemplaza con el nombre de tu imagen JPG y su extensión
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(img, 0, 0, width, height);  // Muestra la imagen en todo el lienzo
  
  for (let i = hearts.length - 1; i >= 0; i--) {
    hearts[i].expand();
    hearts[i].fade();
    hearts[i].display();
    if (hearts[i].isFaded()) {
      hearts.splice(i, 1); // Elimina el corazón si está desvanecido
    }
  }
}

function mousePressed() {
  let size = random(5, 80); // Tamaño aleatorio entre 5 y 80
  let heart = new Heart(mouseX, mouseY, size);
  hearts.push(heart);
}

class Heart {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.growth = random(1, 3); // Crecimiento aleatorio entre 1 y 3
    this.opacity = 255;
  }

  expand() {
    this.size += this.growth;
  }

  fade() {
    this.opacity -= 2;
  }

  isFaded() {
    return this.opacity <= 0;
  }

  display() {
    noStroke();
    fill(255, 0, 255, this.opacity); // Color fucsia para los corazones
    beginShape();
    vertex(this.x, this.y + this.size / 2);
    bezierVertex(this.x, this.y - this.size / 2, this.x + this.size / 2, this.y - this.size / 2, this.x, this.y + this.size / 2);
    bezierVertex(this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2, this.x, this.y + this.size / 2);
    endShape(CLOSE);
  }
}