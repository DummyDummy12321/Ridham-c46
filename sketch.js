var bgimg;
var lost,won;
var player1img, player2img;
var w1img , w2img,w3img,w4img, w5img, w6img;
var powerupimg;


function preload()
{
  bgimg = loadImage("images/medkit.png");
  lost = loadImage("images/lost.png");
  won = loadImage("images/won.png");
  player1img = loadImage("images/player1.png");
  player2img = loadImage("images/player2.png");
  powerupimg = loadImage("images/medkit.png");
  w1img = loadImage("images/weapon1.png");
  w2img = loadImage("images/weapon2.png");
  w3img = loadImage("images/weapon3.png");
  w4img = loadImage("images/weapon4.png");
  w5img = loadImage("images/weapon5.png");
  w6img = loadImage("images/weapon6.png");

  

}

function setup()
{
  createCanvas(1500,750);
  
  player1 = createSprite(100,300,60,40);
  player1.addImage(player1img);
  player1.scale = 0.05;

  
  player2 = createSprite(1200,300,60,40);
  player2.addImage(player2img);
  player2.scale = 0.05;

  

  

}
function draw()
{
  background(0);
  
  drawSprites();
}

