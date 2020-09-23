
var monkey , monkey_running;
var bananaImage, obstacleImage;
var bananaGroup, obstacleGroup;
var ground;
var score, survivalTime;

function preload()
{
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  score = 0;
  survivalTime = 0;
 
}



function setup() 
{
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);

  
}


function draw() 
{

  background("white");
  
  if (keyDown("space")&&monkey.y>= 300)
  {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  //if (bananaGroup.isTouching(monkey))
  //{
        //score = score + 100;
        //survivalTime = survivalTime + 100;
  //}
  
  if (ground.x < 0)
  {
    ground.x = ground.width/2;
  }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime= survivalTime + Math.round(getFrameRate()/50)
  text("Survival Time: "+ survivalTime,100,50);
    
  spawnBanana();
  spawnObstacles();
  
  drawSprites();
}

function spawnBanana()
{
   if (frameCount % 80===0)
   {
     var banana = createSprite(400,Math.round(random(120,200)),20,20);
     banana.addImage("banana",bananaImage);
     banana.velocityX = -4;
     banana.scale = 0.1;
     banana.lifetime = 200;
     
     //bananaGroup.add(banana);
     
   }
}

function spawnObstacles()
{
   if (frameCount % 300===0)
   {
     var obstacle = createSprite(400,315,20,20);
     obstacle.addImage("obstacle",obstacleImage);
     obstacle.velocityX = -4;
     obstacle.scale = 0.1;
     obstacle.lifetime = 200;
     
   }
}





