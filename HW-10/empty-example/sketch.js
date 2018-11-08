function setup(){
  createCanvas( windowWidth, 600 );
  frameRate( 3 );

}
function draw(){
    background( 'rgb(180, 90, 120)');
    stroke( 0 );
      noCursor();
      fill( 255 );
      triangle( 500, 250, 500, 300, mouseX, mouseY );
      triangle(100, 100, mouseX, mouseY, 100, 200);
      triangle(mouseX, mouseY, 300, 100, 200, 100);
      triangle(500, 100, mouseX, mouseY, 500, 200);
let num1 = floor(random(0, 200));
let num2 = floor(random(0, 200));

let pos = addThings(num1, num2);
moons( pos, pos, pos/200, 1.0 );
moons(pos, pos, pos/100, 2.0);
moons(pos, pos, pos/300, 4.0);
moons(pos, pos, pos/50, 1.0);
moons(pos, pos, pos/20, 2.0);

}
function addThings(value1, value2){
  let result = value1+value2;

  return result;
}
function moons(pos_x, pos_y, scale_x, scale_y) {
  push();

translate( pos_x, pos_y );
scale( scale_x, scale_y );
  //draw moon
  let red = floor( random(256) );
  let green = floor( random(256) );
  let blue = floor( random(256) );
fill( red, green, blue );
  ellipse (300, 150, 80);

  pop();
}
