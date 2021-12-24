

var bird,bird_img;

var ground,ground_img;

var clouds,cloud_img;

var obstacle,ob_img,ob_img2,ob_img3;

var point_detector
var touch_detector,touch_detector2,touch_detector3,touch_detector4;

var blocker;

function preload(){

  bird_img=loadImage("flappy_bird.png");

  ground_img=loadImage("ground.png");

  cloud_img=loadImage("cloud.png");

  ob_img=loadImage("ob1.png");
  ob_img2=loadImage("ob2.png");
  ob_img3=loadImage("ob3.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  bird=createSprite(70,250);
  bird.addImage(bird_img);
  bird.scale=0.3;

  ground=createSprite(width-1000,height-(-200));
  ground.addImage(ground_img);
  ground.scale=6.5;
  ground.velocityX=-4;

  //obstacle=createSprite(width/2,height-650);
  //obstacle.addImage(ob_img);
  //obstacle.scale=1.5

  //point_detector=createSprite(width/2,height-500,10,150)

  //touch_detector=createSprite(width-1080,height-1000,10,850);
  //touch_detector2=createSprite(width-1080,height-300,10,270);
  //touch_detector3=createSprite(width-1040,height-570,100,10);
  //touch_detector3=createSprite(width-1040,height-430,100,10);

}



function draw() {
  background("white");
 
  

  //bird flying by pressing space
  if(keyDown("space")){
    bird.y=bird.y-10;
  }
  bird.velocityY=4;

  //resetting ground
  if (ground.x < 990){
    ground.x = width/2;
  }

  bird.collide(ground);

  //spawn clouds
  spawnClouds();

  //spawn obstacles
  spwnOb();

 
   
  

  drawSprites();
}

function spawnClouds() {
  if(frameCount%100===0){
    clouds=createSprite(width+40,100);
    
    clouds.addImage(cloud_img);
    clouds.scale=0.2;
    clouds.velocityX=-4;
    clouds.lifetime=530
  }
}

function spwnOb(){
  if(frameCount%60===0){
    obstacle=createSprite(width,height-650) 
    obstacle.velocityX=-4;
    obstacle .scale=1.5;
    
    switch(rand){
      case 1: obstacle.addImage(ob_img); 
              indicator()
              break;
      case 2: obstacle.addImage(ob_img2);
              break;
      case 3: obstacle.addImage(ob_img3);
              break;
      default:break;
     }
    
  }
}

function indicator(){
  if (rand===1){
    point_detector=createSprite(width,height-500,10,150)

    touch_detector=createSprite(width,height-1000,10,850);
    touch_detector2=createSprite(width,height-300,10,270);
    touch_detector3=createSprite(width,height-570,100,10);
    touch_detector3=createSprite(width,height-430,100,10);
   
  }
}