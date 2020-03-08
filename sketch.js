var shoooter;
var triangleImage;
var obstacleGroup;
var gameRunning = true;;
function preload(){
  triangleImage = loadImage("triangle.jpg");
  
}
function setup() {
  shooter = createSprite(200, 200, 20, 20);
  obstacleGroup = createGroup();
  createCanvas(windowWidth,windowHeight);
  shooter.addImage("triangle.jpg", triangleImage);
}

function draw() {
  if (gameRunning){
    background(255, 255, 255);  
    drawSprites();
    checkBoxes();
    spawnEnemies();
  }
}

function checkBoxes(){
  if (keyDown("RIGHT_ARROW")){
    shooter.velocityX += 2;
  }
  if (keyDown("LEFT_ARROW")){
    shooter.velocityX  += -2;
  }
  if (shooter.velocityX > 0){
    shooter.velocityX -= 1;
  }
  if (shooter.velocityX < 0){
    shooter.velocityX += 1;
  }
  if (shooter.x < 0){
    shooter.x = windowWidth;
  }
  if (shooter.x > windowWidth){
    shooter.x = 0;
  }
  if (shooter.velocityX > 6){
    background(255, 255, 255, 100);
  }
  if (shooter.velocityY < -6){
    background(255, 255, 255, 100);
  }
  if (keyDown("UP_ARROW")){
    shooter.velocityY += -2;
  }
  if (keyDown("DOWN_ARROW")){
    shooter.velocityY  += 2;
  }
  if (shooter.velocityY > 0){
    shooter.velocityY -= 1;
  }
  if (shooter.velocityY < 0){
    shooter.velocityY += 1;
  }
  if (shooter.y < 0){
    shooter.y = windowHeight;
  }
  if (shooter.y > windowHeight){
    shooter.y = 0;
  }
  if (shooter.velocityY > 6){
    background(255, 255, 255, 100);
  }
  if (shooter.velocityY < -6){
    background(255, 255, 255, 100);
  }
  if (shooter.isTouching(obstacleGroup)){
    destroyEverything();
  }
}
function spawnEnemies(){
  if (World.frameCount % 10 == 0){
    var cacti = createSprite(random(0, windowWidth), 0, 10, 10);
    cacti.velocityY = 5;
    obstacleGroup.add(cacti);
  }
}
function destroyEverything(){
  gameRunning = false;
  textFont("impact");
  textStyle("bold");
  textSize(120);
  fill(0, 144, 255);
  text("You are out !!!", 0, 200);
}