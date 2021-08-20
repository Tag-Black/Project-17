var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2, cycleBell, oppPink, oppPink1img, oppRed, oppRedimg1;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  
  mainRacerImg1=loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  oppPink1img = loadAnimation("opponent1.png","opponent2.png");
  oppRedimg1 = loadAnimation("opponent7.png", "opponent8.png");
}

function setup(){
  
createCanvas(750,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
    
    var select_oppPlayer = Math.round(random(1,2));
    
    if(World.frameCount%150 == 0) {
        if(select_oppPlayer == 1) {
          pinkCyclist();
        } else {
          redCyclist();
        }
    }
    
   //pinkCyclist();
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
    
 }
 
}

function pinkCyclist()
{
  oppPink = createSprite(500, Math.round(random(50, 250), 10, 10));
  oppPink.scale = 0.06;
  oppPink.addAnimation("Opponent", oppPink1img);
  oppPink.setLifetime = 170;
  
}

function redCyclist()
{
  oppRed = createSprite(300, Math.round(random(30, 260), 10, 10));
  oppRed.scale = 0.06;
  oppRed.addAnimation("Opponent2", oppRedimg1);
  oppRed.setLifetime = 150;
}