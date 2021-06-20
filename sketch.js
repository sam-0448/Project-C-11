var shipImg,shipImg2,ship,ship2,seaImage,sea;
function preload() {
  
 shipImg=loadAnimation("ship-1.png", "ship-2.png")
 shipImg2=loadAnimation("ship-3.png", "ship-4.png") 
 seaImage=loadImage("sea.png") 

}
function setup() {
  createCanvas(600,300);
  
  ship=createSprite(170,180,20,20)
  ship.addAnimation("ship",shipImg)
ship.scale=0.15

  ship2=createSprite(400,200,20,20)
  ship2.addAnimation("ship2",shipImg2)
   ship2.scale=0.2

sea=createSprite(10,200,600,10);
sea.x=sea.width/2
sea.velocityX=-2;
sea.visible=false;
}
function draw() {
  
  background(seaImage)
  if (keyDown("space")) {
  ship.velocityY = -10;
}

ship.velocityY = ship.velocityY + 0.8

if (sea.x < 0) {
  sea.x = sea.width / 2;
}

ship.collide(sea);
ship2.collide(sea);
drawSprites() 
  
}  