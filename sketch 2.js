function setup(){
  createCanvas( 800, 600 )
  background( 'rgb(90, 180, 200)');
frameRate( 6 );
}

let angle = 0;
let myVar = 100

//make circle move with mouse
function draw(){
  noCursor();
  fill( 255 );
  ellipse( mouseX, mouseY, 40 );

//center it!
translate( width/2, height/2 );

  //make moving/blinking triangles
  fill( 'rgb(230, 100, 80)');
  triangle( 50, 700, 80, 700, 65, 750 );
    rotate( radians(angle) );
    angle = angle + 25;

//create background triangles
fill( 'rgb(255, 210, 94)' );
triangle( myVar, 700, 200, 500, 300, 700 );
triangle( 400, 600, 500, 400, 600, 600 );
triangle( 200, 250, 500, 250, 350, 450 );
triangle( 50, 350, 150, 350, myVar, 450 );
triangle( 550, 300, 750, 300, 650, 450 );
triangle( 250, 200, 450, 200, 350, 50 );
triangle( 20, 50, 140, 50, 80, 275 );
triangle( 500, myVar, 700, myVar, 600, 250 );
triangle( 650, 500, 750, 500, 700, 575 );
}
