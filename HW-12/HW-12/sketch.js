let x;
let y;
let size;
const num_of_circles = 30;
let balls = [];

function setup() {
    createCanvas(windowWidth, windowHeight);


    let init_x = 60;
    let init_y = 60;
    for (let i = 0; i < num_of_circles; i++ ) {
      balls.push(new Ball(init_x, init_y));
      init_x += 100;
      if (init_x > width){
        init_x = 60;
        init_y += 100;
      }
      }
    }

function draw () {
  background(random(255));
  for(let i = 0; i < balls.length; i++ ){
    balls[i].ballCheck(balls, i);
    balls[i].move();
    balls[i].edgeCheck();
    balls[i].display();
  }
  }

class Ball {
  constructor( x, y, size) {
    this.shade = ('yellow');
    this.size = random(20, 80);
    this.rad = this.size / 4;
    this.posX = x;
    this.posY = y;
    this.deltaX = random(-4, 4);
    this.deltaY = random(-4, 4);

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
  ballCheck( otherBalls, myId ){
    for (let n = 0; n < otherBalls.length; n++) {
      if( n != myId ){
        let d= dist( this.posX, this.posY, otherBalls[n].posX, otherBalls[n].posY)
        let combinedR = this.rad + otherBalls[n].rad;

        if( d <= combinedR ){
          this.deltaX *= -1;
          this.deltaY *= -1;

        }
      }
    }
  }
}
