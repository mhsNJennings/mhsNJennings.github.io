/* Moving things and staying on the canvas
Courtney Edwards
2018-09-01*/

//position variables
var posX= 300;
var posY = 300;
// speed variables
var speedX = 0;
var speedY = 0;

function setup() {
  var myCanvas = createCanvas(1250, 880);
  frameRate(300);
}

function draw() {
  background(0);
  ellipse(posX, posY, 100,10);
  posX = posX + speedX;
  posY = posY + speedY;

  // New code for staying on the canvas
  if (posX > width) {    // the object has moved off the canvas to the right
      speedX = -speedX;
  }
  if (posX < 0) {    // the object has moved off the canvas to the left
      speedX = -speedX;
  }
  if (posY > height) {    // the object has moved off the canvas to the bottom
      speedY = -speedY;
  }
  if (posY < 0) {    // the object has moved off the canvas to the top
      speedY = -speedY;
  }
}

function mouseClicked() {
  posX = mouseX;
  posY = mouseY;
  speedX = round(mouseX/200);
  speedY = round(mouseY/200);
}
