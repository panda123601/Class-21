var fixedRect, movingRect;
var gameOject1,gameOject2,gameOject3,gameOject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameOject1 = createSprite(100, 100, 50, 80);
  gameOject1.shapeColor = "green";

  gameOject2 = createSprite(200, 100, 50, 80);
  gameOject2.shapeColor = "green";

  gameOject3 = createSprite(300, 100, 50, 80);
  gameOject3.shapeColor = "green";

  gameOject4 = createSprite(400, 100, 50, 80);
  gameOject4.shapeColor = "green";
movingRect.velocityY=-5;
fixedRect.velocityY=5;

}

function draw() {
  background(0,0,0);  
 

 if(isTouching(movingRect,gameOject1)) {
  movingRect.shapeColor = "blue";
  gameOject1.shapeColor = "blue";
 }
 else{
  movingRect.shapeColor = "green";
  gameOject1.shapeColor = "green";
 }
 bounceOff(movingRect,fixedRect);
  drawSprites();
}
function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x -object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
}



}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  
    return true;
}
else {
    return false;
}
}