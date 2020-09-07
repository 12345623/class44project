var car1,car2,wheel1,wheel2;
var gameState,playerCount;
var game,cars;
var database;
var player,form;
var allPlayers;
function preload(){
    
}


function setup(){
    createCanvas(displayWidth,displayHeight);
    database=firebase.database();
    gameState=0;
    playerCount=0;

    game= new Game();
    game.getState();
    game.start()
    
}


function draw(){
    background(0)
    
    
    if(playerCount===2){
        game.update(1)
    }


    if(gameState===1){
        game.play();
    }
}