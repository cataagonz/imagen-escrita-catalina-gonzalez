function setup() {
  createCanvas(400, 400);
}
let centerX; // Posición X del centro de la pantalla
let centerY; // Posición Y del centro de la pantalla
let radius;  // Radio de la circunferencia
let angle = 0; // Ángulo inicial
let holeX; // Posición X del agujero
let holeY; // Posición Y del agujero
let movingRight = true; // Variable para controlar la dirección del agujero

function setup() {
  createCanvas(400, 400);
  centerX = width / 2;
  centerY = height / 2;
  radius = 100; // Puedes ajustar el radio según tus preferencias
  background(random(255), random(255), random(255)); // Fondo de color aleatorio
}

function draw() {
  // Calcula las coordenadas del agujero en la circunferencia
  holeX = centerX + cos(angle) * radius;
  holeY = centerY + sin(angle) * radius;

  // Dibuja el agujero
  fill(0);
  ellipse(holeX, holeY, 40, 40);

  // Cambia la dirección del agujero cuando se hace clic en el lienzo
  if (mouseIsPressed) {
    movingRight = !movingRight;
  }

  // Incrementa o decrementa el ángulo según la dirección del movimiento
  if (movingRight) {
    angle += 0.03; // Mueve hacia la derecha
  } else {
    angle -= 0.03; // Mueve hacia la izquierda
  }

  // Verifica si el agujero ha completado su movimiento
  if (angle >= TWO_PI || angle <= 0) {
    // Cambia el fondo a un color aleatorio
    background(random(255), random(255), random(255));

    // Reinicia el ángulo y la dirección del movimiento
    angle = 0;
    movingRight = true;
  }
}
