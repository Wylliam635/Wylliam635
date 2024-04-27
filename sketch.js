function setup() {
  createCanvas(158,500)
  background("black")
}

function draw() {
  stroke("blue");
  fill("red");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 30,25)
  }
}

