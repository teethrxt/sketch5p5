//all of these lovely images were drawn by me in ms paint, besides the pumpkin png which i ripped from google

let backgroundImg;
let pumpkinImg;
let batImg;
let hauntedHouseImg;

let pumpkinX = 100;
let batY = 100;
let houseSize = 300;
let houseSpeed = 1;

function preload() {
  backgroundImg = loadImage('background.png');
  pumpkinImg = loadImage('pumpkin.png');
  batImg = loadImage('bat.png');
  hauntedHouseImg = loadImage('hauntedhouse.png');
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
// sppoky ppurple sky
  image(backgroundImg, 0, 0, 600, 400);

// Haunted house shrinking and expanding to rreally sell the scarie
image(hauntedHouseImg, 200, 100, houseSize, houseSize);

houseSize += houseSpeed;

if (houseSize > 330 || houseSize < 270) {
  houseSpeed *= -1;
}
  
  // what do u do if ur pumpkin starts moving horizontally across the screen
  image(pumpkinImg, pumpkinX, 300, 70, 70);
  pumpkinX += 3;

  if (pumpkinX > width) {
    pumpkinX = -60;
  }

  // bat FALLING DOWN the screen ! how scary!
  image(batImg, 100, batY, 80, 50);
  batY += 7;

  if (batY > height) {
    batY = -50;
  }
}