function Newton() {
  this.x = width/2;

  this.show = function() {
    fill(255);
    rect(this.x, height-70, 50, 80);
    ellipse(this.x + 25, height-105, 60);
    line(this.x - 30, 750, this.x, 750 );
    line(this.x + 50, 750, this.x + 80, 750);
  }

  this.move = function(dir) {
    this.x += dir*5;
  }
}
