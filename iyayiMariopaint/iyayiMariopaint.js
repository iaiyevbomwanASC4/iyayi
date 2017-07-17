function setup() {
    createCanvas(5000,5000);
    fill(random(255))
}

function mouseMoved() {
  fill(random(255),random(255),random(255));
  ellipse(mouseX+5, mouseY+5, 27, 27);
  fill(random(255),random(255),random(255));
  rect(mouseX, mouseY, random(100), random(100));
  // prevent default
  fill(color1,color2,color3);
  return false;
}

function mouseDragged() {
  ellipse(mouseX+5, mouseY+5, random(75), random(75));
  fill(random(255),random(255),random(255));
  rect(mouseX, mouseY, 15, 15);

  // prevent default
  fill(color1,color2,color3);
  return false;
}