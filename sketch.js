function setup(){
  
  createCanvas( windowWidth , windowHeight );
  
  angleMode(DEGREES);
  
}

function draw(){
  
  background( 51 );

  
  var hr = hour();
  var min = minute();
  var sec = second();
  
  strokeWeight( 5 );
  stroke( 255 , 100 , 100 );
  noFill();
  let end1 = map( sec , 0 , 60 , 0 , 360);
  arc( windowWidth*0.5 , windowHeight*0.5 , 300 , 300 , 0 , end1 );
  
  strokeWeight( 5 );
  stroke( 100 , 255 , 100 );
  noFill();
  let end2 = map( min , 0 , 60 , 0 , 360);
  arc( windowWidth*0.5 , windowHeight*0.5 , 280 , 280 , 0 , end2 );
  
  strokeWeight( 5 );
  stroke( 200 , 100 , 255 );
  noFill();
  let end3 = map( hr , 0 , 60 , 0 , 360);
  arc( windowWidth*0.5 , windowHeight*0.5 , 260 , 260 , 0 , end3 );
  
  fill( 255 , 255 ,255 );
  noStroke();
  textSize(25);
  text(hr + ':' + min+':' + sec , windowWidth*0.457 , windowHeight*0.5 );
 
}
