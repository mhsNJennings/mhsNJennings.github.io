let blockX1 = 250
let blockX2 = 285+23
let blockX3 = 320+46
let blockX4 = 355+69
let blockX5 = 390+92
let blockX6 = 425+115
let blockX7 = 460+138
let blockX8 = 495+161
let blockX9 = 530+184
let blockX10 = 565+207
let blockX11 = 600+230
let blockX12 = 635+253
let blockX13 = 670+276
let blockX14 = 705+299
let blockX15 = 740+322
let blockX16 = 775+345
let blockX17 = 810+368
let blockX18 = 250
let blockX19 = 285+23
let blockX20 = 320+46
let blockX21 = 355+69
let blockX22 = 390+92
let blockX23 = 425+115
let blockX24 = 460+138
let blockX25 = 495+161
let blockX26 = 530+184
let blockX27 = 565+207
let blockX28 = 600+230
let blockX29 = 635+253
let blockX30 = 670+276
let blockX31 = 705+299
let blockX32 = 740+322
let blockX33 = 775+345
let blockY = 450
let blockY2 = 275
let circleX = 600
let circleY = 100
let rectX = 575
let rectY = 750
let width = 1275
let height = 875
let xSpeed = 10
let ySpeed = 10
let size = 25
let blocksizeX = 55
let blocksizeY = 25
//level 7 hits
let hits2 = false
let hit2s2 = false
let hit3s2 = false
let hit4s2 = false
let hit5s2 = false
let hit6s2 = false
let hit7s2 = false
let hit8s2 = false
let hit9s2 = false
let hit10s2 = false
let hit11s2 = false
let hit12s2 = false
let hit13s2 = false
let hit14s2 = false
let hit15s2 = false
let hit16s2 = false
let hit17s2 = false
let hit18s2 = false
let hit19s2 = false
let hit20s2 = false
let hit21s2 = false
let hit22s2 = false
let hit23s2 = false
let hit24s2 = false
let hit25s2 = false
let hit26s2 = false
let hit27s2 = false
let hit28s2 = false
let hit29s2 = false
let hit30s2 = false
let hit31s2 = false
let hit32s2 = false
let hit33s2 = false
let hit34s2 = false
//level 15 hits
let hit = false
let hit2 = false
let hit3 = false
let hit4 = false
let hit5 = false
let hit6 = false
let hit7 = false
let hit8 = false
let hit9 = false
let hit10 = false
let hit11 = false
let hit12 = false
let hit13 = false
let hit14 = false
let hit15 = false
let hit16 = false
let hit17 = false
let hit18 = false
let hit19 = false
let hit20 = false
let hit21 = false
let hit22 = false
let hit23 = false
let hit24 = false
let hit25 = false
let hit26 = false
let hit27 = false
let hit28 = false
let hit29 = false
let hit30 = false
let hit31 = false
let hit32 = false
let hit33 = false
let hit34 = false


let level = 1
let imgs
let hitx = 0;
let hity = 0;

function preload(){
  img = loadImage('Background.png');
}

function setup() {
  // put setup code here
  createCanvas(width,height);
}

function draw() {


if (level===1){
  background(img);
  fill(65,111,255);
  textSize(50);
  text('Break the Blocks',windowWidth/2,windowHeight/2);
if (keyIsDown(ENTER)){
  level += 1;
  }
}

if (level===2){
  background(0);
  fill(65,111,255);
  textSize(35);
  text('Your goal is to break all the blocks with the ball and platform',150,height/2);
  fill(255);
  textSize(15);
  text('press Space to continue',525,600);

  if (keyIsDown(32)){
    level += 1;
  }
}

if (level===3){
  background(0);
  fill(65,111,255);
  textSize(35);
  text('Use the Mouse to control the platform',400,height/2);
  fill(255);
  textSize(15);
  text('press Enter to continue',525,600);
  if (keyIsDown(ENTER)){
    level = 15;
  }
}

if (level===15){
background(img);


// when ball collides platform
hit = collideRectRect(mouseX,rectY,200,20,circleX,circleY,size,size);


//when ball and blocks collides
hit2 = collideRectRect(blockX1,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit3 = collideRectRect(blockX2,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit4 = collideRectRect(blockX3,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit5 = collideRectRect(blockX4,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit6 = collideRectRect(blockX5,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit7 = collideRectRect(blockX6,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit8 = collideRectRect(blockX7,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit9 = collideRectRect(blockX8,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit10 = collideRectRect(blockX9,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit11 = collideRectRect(blockX10,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit12 = collideRectRect(blockX11,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit13 = collideRectRect(blockX12,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit14 = collideRectRect(blockX13,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit15 = collideRectRect(blockX14,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit16 = collideRectRect(blockX15,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit17 = collideRectRect(blockX16,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);

hit18 = collideRectRect(blockX17,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit19 = collideRectRect(blockX18,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit20 = collideRectRect(blockX19,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit21 = collideRectRect(blockX20,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit22 = collideRectRect(blockX21,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit23 = collideRectRect(blockX22,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit24 = collideRectRect(blockX23,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit25 = collideRectRect(blockX24,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit26 = collideRectRect(blockX25,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit27 = collideRectRect(blockX26,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit28 = collideRectRect(blockX27,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit29 = collideRectRect(blockX28,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit30 = collideRectRect(blockX29,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit31 = collideRectRect(blockX30,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit32 = collideRectRect(blockX31,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit33 = collideRectRect(blockX32,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
hit34 = collideRectRect(blockX33,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);

//Platform
fill(255);
rect(mouseX,rectY,200,20);

// Circle
  fill(65,111,255);
  ellipse(circleX,circleY,size,size);

// Blocks
rect(blockX1,blockY,blocksizeX,blocksizeY);
rect(blockX2,blockY,blocksizeX,blocksizeY);
rect(blockX3,blockY,blocksizeX,blocksizeY);
rect(blockX4,blockY,blocksizeX,blocksizeY);
rect(blockX5,blockY,blocksizeX,blocksizeY);
rect(blockX6,blockY,blocksizeX,blocksizeY);
rect(blockX7,blockY,blocksizeX,blocksizeY);
rect(blockX8,blockY,blocksizeX,blocksizeY);
rect(blockX9,blockY,blocksizeX,blocksizeY);
rect(blockX10,blockY,blocksizeX,blocksizeY);
rect(blockX11,blockY,blocksizeX,blocksizeY);
rect(blockX12,blockY,blocksizeX,blocksizeY);
rect(blockX13,blockY,blocksizeX,blocksizeY);
rect(blockX14,blockY,blocksizeX,blocksizeY);
rect(blockX15,blockY,blocksizeX,blocksizeY);
rect(blockX16,blockY,blocksizeX,blocksizeY);
rect(blockX17,blockY,blocksizeX,blocksizeY);

rect(blockX18,blockY2,blocksizeX,blocksizeY);
rect(blockX19,blockY2,blocksizeX,blocksizeY);
rect(blockX20,blockY2,blocksizeX,blocksizeY);
rect(blockX21,blockY2,blocksizeX,blocksizeY);
rect(blockX22,blockY2,blocksizeX,blocksizeY);
rect(blockX23,blockY2,blocksizeX,blocksizeY);
rect(blockX24,blockY2,blocksizeX,blocksizeY);
rect(blockX25,blockY2,blocksizeX,blocksizeY);
rect(blockX26,blockY2,blocksizeX,blocksizeY);
rect(blockX27,blockY2,blocksizeX,blocksizeY);
rect(blockX28,blockY2,blocksizeX,blocksizeY);
rect(blockX29,blockY2,blocksizeX,blocksizeY);
rect(blockX30,blockY,blocksizeX,blocksizeY);
rect(blockX31,blockY2,blocksizeX,blocksizeY);
rect(blockX32,blockY2,blocksizeX,blocksizeY);
rect(blockX33,blockY2,blocksizeX,blocksizeY);



if (hit2===true){
  ySpeed = ySpeed*(-1);
  blockX1 = 4000;
  hitx+=1;

}
if (hit3===true){
  ySpeed = ySpeed*(-1);
blockX2 = 4000;
hitx+=1;
}
if (hit4===true){
  ySpeed = ySpeed*(-1);
blockX3 = 4000;
hitx+=1;
}
if (hit5===true){
  ySpeed = ySpeed*(-1);
blockX4 = 4000;
hitx+=1;
}
if (hit6===true){
  ySpeed = ySpeed*(-1);
blockX5 = 4000;
hitx+=1;
}
if (hit7===true){
  ySpeed = ySpeed*(-1);
blockX6 = 4000;
hitx+=1;
}
if (hit8===true){
  ySpeed = ySpeed*(-1);
blockX7 = 4000;
hitx+=1;
}
if (hit9===true){
  ySpeed = ySpeed*(-1);
blockX8 = 4000;
hitx+=1;
}
if (hit10===true){
  ySpeed = ySpeed*(-1);
blockX9 = 4000;
hitx+=1;
}
if (hit11===true){
  ySpeed = ySpeed*(-1);
blockX10 = 4000;
hitx+=1;
}
if (hit12===true){
  ySpeed = ySpeed*(-1);
blockX11 = 4000;
hitx+=1;
}
if (hit13===true){
  ySpeed = ySpeed*(-1);
blockX12 = 4000;
hitx+=1;
}
if (hit14===true){
  ySpeed = ySpeed*(-1);
blockX13 = 4000;
hitx+=1;
}
if (hit15===true){
  ySpeed = ySpeed*(-1);
blockX14 = 4000;
hitx+=1;
}
if (hit16===true){
  ySpeed = ySpeed*(-1);
blockX15 = 4000;
hitx+=1;
}
if (hit17===true){
  ySpeed = ySpeed*(-1);
blockX16 = 4000;
hitx+=1;
}
if (hit18===true){
  ySpeed = ySpeed*(-1);
blockX17 = 4000;
hitx+=1;
}
if (hit19===true){
  ySpeed = ySpeed*(-1);
blockX18 = 4000;
hitx+=1;
}
if (hit20===true){
  ySpeed = ySpeed*(-1);
blockX19 = 4000;
hitx+=1;
}
if (hit21===true){
  ySpeed = ySpeed*(-1);
blockX20 = 4000;
hitx+=1;
}
if (hit22===true){
  ySpeed = ySpeed*(-1);
blockX21 = 4000;
hitx+=1;
}
if (hit23===true){
  ySpeed = ySpeed*(-1);
blockX22 = 4000;
hitx+=1;
}
if (hit24===true){
  ySpeed = ySpeed*(-1);
blockX23 = 4000;
hitx+=1;
}
if (hit25===true){
  ySpeed = ySpeed*(-1);
blockX24 = 4000;
hitx+=1;
}
if (hit26===true){
  ySpeed = ySpeed*(-1);
blockX25 = 4000;
hitx+=1;
}
if (hit27===true){
  ySpeed = ySpeed*(-1);
blockX26 = 4000;
hitx+=1;
}
if (hit28===true){
  ySpeed = ySpeed*(-1);
blockX27 = 4000;
hitx+=1;
}
if (hit29===true){
  ySpeed = ySpeed*(-1);
blockX28 = 4000;
hitx+=1;
}
if (hit30===true){
  ySpeed = ySpeed*(-1);
blockX29 = 4000;
hitx+=1;
}
if (hit31===true){
  ySpeed = ySpeed*(-1);
blockX30 = 4000;
hitx+=1;
}
if (hit32===true){
  ySpeed = ySpeed*(-1);
blockX31 = 4000;
hitx+=1;
}
if (hit33===true){
  ySpeed = ySpeed*(-1);
blockX32 = 4000;
hitx+=1;
}
if (hit34===true){
  ySpeed = ySpeed*(-1);
blockX33 = 4000;
hitx+=1;
}

if (hitx===33){
  level = 7;
}


//ball bounces off platrom
if (hit===true){
  ySpeed = ySpeed*(-1);
}

// Move the Circle
 circleX+=xSpeed;
 circleY+=ySpeed;

// if reaches top
  if (circleY<=0){
   ySpeed = ySpeed*(-1);
 }

//if reaches right, change direction
 if (circleX+size>=width || circleX<=0) {
   xSpeed = xSpeed*(-1);
 }

 //if reaches bottom
 if (circleY+size>=height){
   level = 8;
}

}

if (level===7){
  background(0);


  // when ball collides platform
  hit = collideRectRect(mouseX,rectY,200,20,circleX,circleY,size,size);

  //when ball and blocks collides
  hit2s2 = collideRectRect(blockX1,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit3s2 = collideRectRect(blockX2,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit4s2= collideRectRect(blockX3,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit5s2 = collideRectRect(blockX4,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit6s2 = collideRectRect(blockX5,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit7s2 = collideRectRect(blockX6,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit8s2 = collideRectRect(blockX7,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit9s2 = collideRectRect(blockX8,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit10s2 = collideRectRect(blockX9,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit11s2 = collideRectRect(blockX10,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit12s2 = collideRectRect(blockX11,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit13s2 = collideRectRect(blockX12,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit14s2 = collideRectRect(blockX13,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit15s2 = collideRectRect(blockX14,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit16s2 = collideRectRect(blockX15,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit17s2 = collideRectRect(blockX16,blockY,blocksizeX,blocksizeY,circleX,circleY,size,size);

  hit18s2 = collideRectRect(blockX17,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit19s2 = collideRectRect(blockX18,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit20s2 = collideRectRect(blockX19,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit21s2 = collideRectRect(blockX20,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit22s2 = collideRectRect(blockX21,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit23s2 = collideRectRect(blockX22,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit24s2 = collideRectRect(blockX23,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit25s2 = collideRectRect(blockX24,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit26s2 = collideRectRect(blockX25,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit27s2 = collideRectRect(blockX26,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit28s2 = collideRectRect(blockX27,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit29s2 = collideRectRect(blockX28,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit30s2 = collideRectRect(blockX29,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit31s2 = collideRectRect(blockX30,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit32s2 = collideRectRect(blockX31,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit33s2 = collideRectRect(blockX32,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);
  hit34s2 = collideRectRect(blockX33,blockY2,blocksizeX,blocksizeY,circleX,circleY,size,size);

  //Platform
  fill(255);
  rect(mouseX,rectY,200,20);

  // Circle
    fill(32,197,54);
    ellipse(circleX,circleY,size,size);

  // Blocks
  rect(blockX1,blockY,blocksizeX,blocksizeY);
  rect(blockX2,blockY,blocksizeX,blocksizeY);
  rect(blockX3,blockY,blocksizeX,blocksizeY);
  rect(blockX4,blockY,blocksizeX,blocksizeY);
  rect(blockX5,blockY,blocksizeX,blocksizeY);
  rect(blockX6,blockY,blocksizeX,blocksizeY);
  rect(blockX7,blockY,blocksizeX,blocksizeY);
  rect(blockX8,blockY,blocksizeX,blocksizeY);
  rect(blockX9,blockY,blocksizeX,blocksizeY);
  rect(blockX10,blockY,blocksizeX,blocksizeY);
  rect(blockX11,blockY,blocksizeX,blocksizeY);
  rect(blockX12,blockY,blocksizeX,blocksizeY);
  rect(blockX13,blockY,blocksizeX,blocksizeY);
  rect(blockX14,blockY,blocksizeX,blocksizeY);
  rect(blockX15,blockY,blocksizeX,blocksizeY);
  rect(blockX16,blockY,blocksizeX,blocksizeY);
  rect(blockX17,blockY,blocksizeX,blocksizeY);

  rect(blockX18,blockY2,blocksizeX,blocksizeY);
  rect(blockX19,blockY2,blocksizeX,blocksizeY);
  rect(blockX20,blockY2,blocksizeX,blocksizeY);
  rect(blockX21,blockY2,blocksizeX,blocksizeY);
  rect(blockX22,blockY2,blocksizeX,blocksizeY);
  rect(blockX23,blockY2,blocksizeX,blocksizeY);
  rect(blockX24,blockY2,blocksizeX,blocksizeY);
  rect(blockX25,blockY2,blocksizeX,blocksizeY);
  rect(blockX26,blockY2,blocksizeX,blocksizeY);
  rect(blockX27,blockY2,blocksizeX,blocksizeY);
  rect(blockX28,blockY2,blocksizeX,blocksizeY);
  rect(blockX29,blockY2,blocksizeX,blocksizeY);
  rect(blockX30,blockY,blocksizeX,blocksizeY);
  rect(blockX31,blockY2,blocksizeX,blocksizeY);
  rect(blockX32,blockY2,blocksizeX,blocksizeY);
  rect(blockX33,blockY2,blocksizeX,blocksizeY);




  if (hit2s2===true){
    ySpeed = ySpeed*(-1);
  blockX1 = 4000;
  hity+=1;
  }
  if (hit3s2===true){
    ySpeed = ySpeed*(-1);
  blockX2 = 4000;
  hity+=1;
  }
  if (hit4s2===true){
    ySpeed = ySpeed*(-1);
  blockX3 = 4000;
  hity+=1;
  }
  if (hit5s2===true){
    ySpeed = ySpeed*(-1);
  blockX4 = 4000;
    hity+=1;
  }
  if (hit6s2===true){
    ySpeed = ySpeed*(-1);
  blockX5 = 4000;
  hity+=1;
  }
  if (hit7s2===true){
    ySpeed = ySpeed*(-1);
  blockX6 = 4000;
  hity+=1;
  }
  if (hit8s2===true){
    ySpeed = ySpeed*(-1);
  blockX7 = 4000;
  hity+=1;
  }
  if (hit9s2===true){
    ySpeed = ySpeed*(-1);
  blockX8 = 4000;
  hity+=1;
  }
  if (hit10s2===true){
    ySpeed = ySpeed*(-1);
  blockX9 = 4000;
  hity+=1;
  }
  if (hit11s2===true){
    ySpeed = ySpeed*(-1);
  blockX10 = 4000;
  hity+=1;
  }
  if (hit12s2===true){
    ySpeed = ySpeed*(-1);
  blockX11 = 4000;
  hity+=1;
  }
  if (hit13s2===true){
    ySpeed = ySpeed*(-1);
  blockX12 = 4000;
  hity+=1;
  }
  if (hit14s2===true){
    ySpeed = ySpeed*(-1);
  blockX13 = 4000;
  hity+=1;
  }
  if (hit15s2===true){
    ySpeed = ySpeed*(-1);
  blockX14 = 4000;
  hity+=1;
  }
  if (hit16s2===true){
    ySpeed = ySpeed*(-1);
  blockX15 = 4000;
  hity+=1;
  }
  if (hit17s2===true){
    ySpeed = ySpeed*(-1);
  blockX16 = 4000;
  hity+=1;
  }
  if (hit18s2===true){
    ySpeed = ySpeed*(-1);
  blockX17 = 4000;
  hity+=1;
  }
  if (hit19s2===true){
    ySpeed = ySpeed*(-1);
  blockX18 = 4000;
  hity+=1;
  }
  if (hit20s2===true){
    ySpeed = ySpeed*(-1);
  blockX19 = 4000;
  hity+=1;
  }
  if (hit21s2===true){
    ySpeed = ySpeed*(-1);
  blockX20 = 4000;
  hity+=1;
  }
  if (hit22s2===true){
    ySpeed = ySpeed*(-1);
  blockX21 = 4000;
  hity+=1;
  }
  if (hit23s2===true){
    ySpeed = ySpeed*(-1);
  blockX22 = 4000;
  hity+=1;
  }
  if (hit24s2===true){
    ySpeed = ySpeed*(-1);
  blockX23 = 4000;
  hity+=1;
  }
  if (hit25s2===true){
    ySpeed = ySpeed*(-1);
  blockX24 = 4000;
  hity+=1;
  }
  if (hit26s2===true){
    ySpeed = ySpeed*(-1);
  blockX25 = 4000;
  hity+=1;
  }
  if (hit27s2===true){
    ySpeed = ySpeed*(-1);
  blockX26 = 4000;
  hity+=1;
  }
  if (hit28s2===true){
    ySpeed = ySpeed*(-1);
  blockX27 = 4000;
  hity+=1;
  }
  if (hit29s2===true){
    ySpeed = ySpeed*(-1);
  blockX28 = 4000;
  hity+=1;
  }
  if (hit30s2===true){
    ySpeed = ySpeed*(-1);
  blockX29 = 4000;
  hity+=1;
  }
  if (hit31s2===true){
    ySpeed = ySpeed*(-1);
  blockX30 = 4000;
  hity+=1;
  }if (hit32===true){
    ySpeed = ySpeed*(-1);
  blockX31 = 4000;
  hity+=1;
}
if (hit33s2===true){
    ySpeed = ySpeed*(-1);
  blockX32 = 4000;
  hity+=1;
  }
  if (hit34s2===true){
    ySpeed = ySpeed*(-1);
  blockX33 = 4000;
  hity+=1;
  }

  if (hity===33){
    level = 9;
  }
  //ball bounces off platrom
  if (hit===true){
    ySpeed = ySpeed*(-1);
  }

  // Move the Circle
   circleX+=xSpeed;
   circleY+=ySpeed;

  // if reaches top
    if (circleY<=0){
     ySpeed = ySpeed*(-1);
   }

  //if reaches right, change direction
   if (circleX+size>=width || circleX<=0) {
     xSpeed = xSpeed*(-1);
   }

   //if reaches bottom
   if (circleY+size>=height){
     level = 8;
  }
}

if (level===9){
  background(68,192,10),
  fill(0);
  textSize(100);
  text('Congratulations You WIN',width/3,height/2);
}





 if (level===8){
   background(220,71,71);
   fill(0);
   textSize(50);
   text('GAME OVER',width/2.5,height/2);
   fill(0);
   textSize(30);
   text('Press R To Restart',width/2.5,height/1.5);
if (keyIsDown(82)){
  level = 1;
   }
 }



}
