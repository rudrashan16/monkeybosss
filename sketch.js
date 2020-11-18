var PLAY = 1
var  END = 0
var gameState = PLAY;
var survivalTime =  0;

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
}



function setup() {
  createCanvas(600,200) 

  monkey = createSprite(30,160,40,10);
 monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  

  
  ground = createSprite(300,195,600,10)
  ground.velocityX = -4;
ground.x = ground.width /2;
  
  obstacle = createSprite(250,172,20,50);
    obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
   obstacle.velocityX = -4;

}

function draw() {
 background("blue");
  
  if(gameState =  PLAY){
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  stroke("blue");
    texSize = (20);
    fill("blue");
    text ("score:"+ score,500,50);
    
    stroke("red");
    textSize(20);
    fill("red");
    survivalTime = Math.ceil(frameCount/frameRate())
    text ("Survival Time:"+ survivalTime,100,50);
    
      if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
      }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  
  obstacles();
  bananas();
 if(obstacleGroup.isTouching(monkey)){
        //trex.velocityY = -12;
        gameState = END;
  }   
  
  
    
  } 
   else if (gameState = END){
     
     obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
     
     obstacleGroup.setVelocityXEach(0);
     bananaGroup.setVelocityXEach(0); 
      
   }
  
  monkey.collide(ground);
  
drawSprites();  
}

function obstacles(){
  if (frameCount % 80 === 0) {
    obstacle = createSprite(250,172,20,50);
 obstacle.x = Math.round(250,172);
    obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -4;
    obstacle.Lifetime = 5;
    obstacleGroup.add(obstacle);
  }
}

function  bananas(){
   if (frameCount % 80 === 0) {
    banana = createSprite(250,80,10,10);
     banana.y = Math.round(random(80,120));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -4;
   banana.Lifetime = 5;  
    bananaGroup.add(banana); 
  }
}


