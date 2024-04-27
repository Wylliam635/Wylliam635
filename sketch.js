function setup() {
  createCanvas(980,950)
  background("black")
}

function draw() {
  stroke("blue");
  fill("red");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 30,25)
  }
}

