var astronaut;
var bg;
var sleep, bath, brush, gym, eat, drink, move;

function preload(){
  bg = loadImage("./assets/iss.png")
 sleep = loadImage("./assets/sleep.png");
 bath = loadAnimation("./assets/bath1.png", "./assets/bath2.png")
  brush = loadImage("./assets/brush.png");
 gym = loadAnimation("./assets/gym1.png", "./assets/gym2.png", "./assets/gym11.png", "./assets/gym12.png");
eat = loadAnimation("./assets/eat1.png", "./assets/eat2.png");
 drink = loadAnimation("./assets/drink1.png", "./assets/drink2.png");
 move = loadAnimation("./assets/move.png", "./assets/move1.png");

}

function setup() {
  createCanvas(800,400);
  //background.addAnimation("background", bg);

 astronaut = createSprite(300,230);
 astronaut.addAnimation("sleeping", sleep);
 astronaut.scale = 0.1;

 edgeSprite = createEdgeSprites();
  
}

function draw() {

  background(255,255,255);
  text("up, down, left, and right arrow keys make the astronaut perform different tasks and the M key moves the astronaut around!", 50,50)


  drawSprites();

  if(keyDown("UP_ARROW")){
   astronaut.addImage("brushing", brush);
   astronaut.changeImage("brushing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;

  }

 if(keyDown("DOWN_ARROW")){
   astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
   astronaut.velocityX = 0;
   astronaut.velocityY = 0;

  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
   astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
   astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
   astronaut.velocityY = 0;

 }

 if(keyDown("M_ARROW")){
   astronaut.addAnimation("moving", move);
  astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 5;
    astronaut.velocityY = 3;

 }
}