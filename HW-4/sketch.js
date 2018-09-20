function setup(){
  //create canvas size 600px wide and 400px high
  createCanvas( 450, 700 );
}
//eyes
function draw() {
  background( 'rgb(78, 230, 180)' );
//head shape
  fill('pink');
  ellipse( 150, 125, 100, 100 );

//body
  fill('yellow');
  triangle( 100, 175, 200, 175, 150, 250 );


//second abdomen
fill('yellow');
triangle( 100, 250, 200, 250, 170, 350 );

//third abdomen
fill('yellow');
triangle( 110, 360, 220, 350, 200, 450 );

//fourth abdomen
fill('yellow');
triangle( 150, 460, 240, 450, 280, 550 );
//first torso legs
line( 40, 220, 55, 200 );
line( 55, 200, 110, 200 );
line( 190, 200, 240, 200 );
line( 240, 200, 260, 240 );

//horns
line( 105, 50, 100, 100 );
line( 100, 100, 125, 110 );
line( 190, 50, 190, 100 );
line( 190, 100, 170, 110 );
line( 75, 75, 100, 85 );
line( 190, 75, 215, 65 );

//second torso legs
line( 40, 320, 50, 290 );
line( 50, 290, 120, 290 );
line( 190, 290, 240, 290 );
line( 240, 290, 260, 320 );
//third torso legs
line( 90, 460, 100, 420 );
line( 100, 420, 140, 400 );
line( 210, 390, 250, 390 );
line( 250, 390, 270, 420 );
//fourth torso legs
line( 200, 600, 180, 540 );
line( 180, 540, 200, 500 );
line( 255, 480, 280, 480 );
line( 280, 480, 310, 530 );
//tail
line( 280, 550, 320, 650 );
line( 280, 550, 300, 640 );
line( 280, 550, 280, 630 );
line( 280, 550, 330, 640 );
line( 280, 550, 340, 625 );
//mouth
fill('red');
arc( 120, 150, 80, 20, 180, 45 );
fill('black');
strokeWeight(5);
point( 100, 120 );
}
