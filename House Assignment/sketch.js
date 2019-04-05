/*
House Assignment
Created by Nathan Jennings
MArch 18, 2019
*/

function setup() {
// put setup code here
//Create the canvas
createCanvas(1200,800);

}

function draw() {
  // put drawing code here
  // set the width of the house
  // chande this variable to scale the house
let housewidth = 500;

//Main Part of the house
rect(width/3, height/2, housewidth, housewidth/2);

//Roof
triangle(width/3, height/2,width/3+housewidth/2,height/1.3-housewidth/1.2, width/3+housewidth,height/2);

//door
rect(width/2+housewidth/4,height/2+housewidth/4,housewidth/6,housewidth/4);

//window
rect(width/2.526+housewidth/8,height/2+housewidth/6,housewidth/11, housewidth/11);
rect(width/2.526+housewidth/8,height/2.2+housewidth/3,housewidth/11, housewidth/11);
rect(width/2.8+housewidth/8,height/2+housewidth/6,housewidth/11,housewidth/11);
rect(width/2.8+housewidth/8,height/2.2+housewidth/3,housewidth/11,housewidth/11);

//ground
rect(width/2+housewidth/28,height/2+housewidth/2,housewidth/2,housewidth/2);


















}
