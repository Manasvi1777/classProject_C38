var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car_img1,car_img2,car_img3,car_img4,track_img,ground_img;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload()
{
  car_img1 = loadImage("images/car1.png");
  car_img2 = loadImage("images/car2.png");
  car_img3 = loadImage("images/car3.png");
  car_img4 = loadImage("images/car4.png");

  track_img = loadImage("images/track.jpg");
  ground_img = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();

  database.ref('/').update({
    gameState:0,
    playerCount:0
  })

  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
