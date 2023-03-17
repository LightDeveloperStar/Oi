var oi;

function setup() {
  createCanvas(400,400)
oi = createSprite(200,200,50,50);
 
}

function draw() 
{
  background(30);
  if(keyDown("UP_ARROW")){
    oi.position.y = oi.position.y -2
  }
  if(keyDown("DOWN_ARROW")){
    oi.position.y = oi.position.y +2
  }
  if(keyDown("LEFT_ARROW")){
    oi.position.x = oi.position.x -2
  }
  if(keyDown("RIGHT_ARROW")){
    oi.position.x = oi.position.x +2
  }
  drawSprites();

}




