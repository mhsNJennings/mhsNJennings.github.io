/* Mouse following using automatic function calls.
Courtney Edwards 2018-09-01*/

function setup() {
  var firstCanvas = createCanvas(600, 600);  // create a square window for drawing

}

function draw() {
  // This function does nothing, but it must exist.
}

function mouseMoved() {
  // This function is called whenever the mouse is moved
  background(255);
  rect(mouseX, mouseY,50,50); // Draw a circle
  fill(random(255),random(255),random(255));

}

function mouseClicked() {
  // This function is called whenever the mouse is clicked
  // (but the mouse must not be moving at the same time)
  // and will change the fill colour randomly

}
