let snake;
let scl = 20;
let food;
let w;
let h;

function setup() {
  createCanvas(800, 800);
  w = floor(width / scl);
  h = floor(height / scl);
  frameRate(8);
  snake = new Snake();
  foodLocation();
}

//make food reappear in random locations
function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

//assign direction to keys to move snake
function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  }
}

function draw() {
  scale(scl);
  background('pink');
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();

//make screen blackout when you lose
  if (snake.endGame()) {
    print("GAME OVER");
    background(0);
    noLoop();
  }

//make food and make it blink
  noStroke();
  fill( random(255), 0, random(255));
  rect(food.x, food.y, 1, 1);
}
