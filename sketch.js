function setup() {
  createCanvas(58,200)
  background("black")
}

function draw() {
  stroke("blue");
  fill("red");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 30,25)
  }
}

