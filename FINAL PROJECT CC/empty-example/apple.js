function Apple(x, y) {
    this.x = x;
    this.y = y;

    this.show = function() {
      fill("red");
      ellipse(this.x, this.y, 20, 20);

  }
}
