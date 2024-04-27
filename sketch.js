function setup() {
  createCanvas(1000,700)
  background("black")
}

function draw() {
  stroke("blue");
  fill("red");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 30,25)
  }
}

