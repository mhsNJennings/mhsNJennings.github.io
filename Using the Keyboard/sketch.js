let x = 100;
let y = 100;


function setup() {
  createCanvas(1100, 800);


}

function draw() {

  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
    background(random(0,255),random(0,255),random(0,255));

  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
    background(random(0,255),random(0,255),random(0,255));
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
    background(random(0,255),random(0,255),random(0,255));
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
    background(random(0,255),random(0,255),random(0,255));
  }
  if (keyIsDown(DOWN_ARROW,UP_ARROW,LEFT_ARROW,RIGHT_ARROW)){


  }

  fill(random(0,255),random(0,255),random(0,255));
  ellipse(x,y,50, 50);

}
