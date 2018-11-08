let circle = [];
let x;
let y;
let size;
let color;
let num_of_circles = 30;

function setup() {
    createCanvas(windowWidth, windowHeight);

    circle = new Circle (random(windowWidth), random(windowHeight), 30);

    for (let i = 0; i < num_of_circles; i++ ) {
        circle[i] = new Circle(random(windowWidth), random(windowHeight), 30);
      }
    }

function draw () {
  background(0);
  for( i = 0; i < num_of_circles; i++ ){
    circle[i].frame();
  }
  }

class Circle {
  constructor( x, y, size, 0 ) {
    this.shade = 255;
    this.size = size;
    this.rad = this.size / 4;
    this.posX = random(width);
    this.posY = random(height);
    this.deltaX = random(-4, 4);
    this.deltaY = random(-4, 4);

  }
  frame(){
    this.display();
    this.move();
    this.edgeCheck();
  }
  display() {
    push();
    noStroke();
    fill(this.shade);
    translate( this.posX, this.posY );
    ellipse( 0, 0, this.size );
    pop();
  }
  move() {
    this.posX += this.deltaX;
    this.posY += this.deltaY;
  }
  edgeCheck() {
    if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
      this.deltaX *= -1;
    }
    if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
      this.deltaY *= -1;
    }
  }
}
