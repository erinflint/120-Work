function Seed(x, y) {
    this.x = x;
    this.y = y;

    this.show = function() {
      fill("yellow");
      ellipse(this.x, this.y, 8, 10);
  }
  this.move = function() {
    this.y = this.y - 5;
  }
}
