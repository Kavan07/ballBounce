var x=50
var speed=3
var y=550
var speed2=3
var w=50
var speed3=3
var z=550
var speed4=3
function setup() {
  createCanvas(600, 600);
}

function draw() {
 background(0);
  
  stroke(255);
  strokeWeight(5);
  fill("yellow");
  ellipse(300, z, 100, 100);
  
  if (z > 550) {
    speed4 = -3
  }
   
  if (z < 50) {
   speed4 = 3
  }

  stroke(255);
  strokeWeight(5);
  fill("green");
  ellipse(300, w, 100, 100);
  
  if (w > 550) {
    speed3 = -3
  }
  if (w < 50) {
    speed3 = 3
  }
  
  stroke(255);
  strokeWeight(5);
  fill("blue");
  ellipse(y, 300, 100, 100);
  
  if (y > 550) {
    speed2 = -3
  } if (y < 50) {
    speed2 = 3
  }
  
  stroke(255);
  strokeWeight(5);
  fill("red");
  ellipse(x, 300, 100, 100);
  
  if (x > 550) {
  speed = -3
  }
  
  if (x < 50) {
    speed = 3
  }

  x = x+speed;
  y = y + speed2;
  w = w + speed3;
  z = z + speed4;
}