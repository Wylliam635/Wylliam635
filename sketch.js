function setup() {
  createCanvas(880,600)
  background("black")
}

function draw() {
  stroke("blue");
  fill("red");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 30,25)
  }
}

