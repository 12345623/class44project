class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      car1= createSprite(100,100,200,200);
      car2= createSprite(150,100,200,200);
      //wheel1= createSprite(10,10,200,200);
      //wheel2= createSprite(10,10,200,200);
      cars=[car1,car2];
    }
  
    play(){
      form.hide();
      textSize(30);
      text("Game Start", 120, 100)
      Player.getPlayerInfo();
      player.getPlayersAtEnd();
      var x= 100;
      var y= 100;
      var index=0;

      if(allPlayers !== undefined){
        var display_position = 130;
        for(var plr in allPlayers){
         index=index+1;
         x=x+200;
         y=displayHeight-allPlayers[plr].distance;
         cars[index-1].x=x;
         cars[index-1].y=y;
         if(index===player.index){
           camera.position.x=displayWidth/2
           camera.position.y=cars[index-1].y
         }
      }
    }
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
        player.update();
      }
      if(player.distance>2000){
        gameState=2;
        player.rank=player.rank+1;
        Player.updatePlayersAtEnd(player.rank);
      }
    
    drawSprites();
}
}