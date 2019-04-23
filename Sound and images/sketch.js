var mySound; // Creates a variable to hold the sound
var img;
  function preload() {
    mySound = loadSound('');  // Loads the sound file into the variable
    img = loadImage('Moto Moto.png');
  }

  function setup() {
    createCanvas(1280, 960);
    image(img, 640, 480);
    // Notice that you have to put the variable name in front of the functions
    mySound.setVolume(0.1);
    mySound.play();
  }
