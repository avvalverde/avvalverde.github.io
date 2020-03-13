var ySpeed=10;
var r,g,b;
var xdirection = 1;
var ydirection = 1;
var img;
var a;
var offset = 0;
var easing = 0.05;


function setup(){
  let canvas=createCanvas(800,250);
  a = loadImage("static.jpg");
  img = loadImage("eyeswallpaper.png");
  background(img);
  canvas.parent('mySketch');
}

function draw(){
  PImage img;
  img = loadImage("eyeswallpaper.png");
  background(img);
  background(255, 0, 0);
  noStroke();
  fill(255, 0);

if((mouseX>75) && (mouseX<275) && (mouseY>50) && (mouseY<100)){
  image(a, 0, 0);  // Display at full opacity
  var dx = (mouseX-img.width/2) - offset;
  offset += dx * easing; 
  tint(255, 127);  // Display at half opacity
  image(img, offset, 0);
} else {background (img);}

if((mouseX>475) && (mouseX<675) && (mouseY>50) && (mouseY<100)){
  image(a, 0, 0);  // Display at full opacity
  var dx = (mouseX-img.width/2) - offset;
  offset += dx * easing; 
  tint(255, 127);  // Display at half opacity
  image(img, offset, 0);
}


rect(75,50, 200, 50);

rect(475, 50, 200, 50);

}