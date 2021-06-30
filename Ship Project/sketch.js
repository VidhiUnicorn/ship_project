var sea, seasprite 
var ship, shipsprite


function preload(){
   sea = loadImage("sea.png");
   ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  seasprite = createSprite(200,200);
  seasprite.addImage(sea);
  seasprite.velocityX = -2;  
  seasprite.scale = 0.3

  shipsprite = createSprite(100,290)  
  shipsprite.addAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  shipsprite.scale = 0.2


}

function draw() {
  background("blue");
  drawSprites();
  if(seasprite.x <= 0){
    
    seasprite.x = 400;
  }
 
}
