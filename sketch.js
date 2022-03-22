/* Historia:
Ali es un aventurero y ha llegado a una caverna llena de tesoros. 
El guardián de la cueva le hace 3 preguntas quedebe responder correctamente para poder entrar.
Estas 3 preguntas corresponden al términos de programación vistos en clase y no tienen nada en común una pregunta con otra.
¿Podrías ayudar a Ali a pasar al guardián y entrar a la cueva? */

var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Puntuación: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TESORO DESBLOQUEADO",250, 200);
  }

  drawSprites()
}