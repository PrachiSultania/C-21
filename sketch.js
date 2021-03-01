var fixedRect, movingRect;

function setup() {
  /*createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  Rect1 = createSprite(600, 100, 50, 80);
  Rect1.shapeColor = "blue";
  Rect1.debug = true;
  Rect2 = createSprite(600, 800,80,30);
  Rect2.shapeColor = "blue";
  Rect2.debug = true;

  Rect2.velocityY = -5;
  Rect1.velocityY = +5;*/

  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRectColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(100,200,80,30);
  rect1.shapeColor = "green";

  rect2 = createSprite(400,200,80,30);
  rect2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  //bounceOff(fixedRect, movingRect);
  //bounceOff(Rect1, Rect2);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(rect2, movingRect)){
    movingRect.shapeColor = "red";
    rect2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
  rect2.shapeColor = "green";
  }
  drawSprites();
}


 