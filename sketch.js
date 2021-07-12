var head;
var fruit;

var gameState;

function setup() {
  
  createCanvas(400, 400);
  
  head = new SnakeHead(190, 190);
  
  gameState = GameStates.PLAY;
  
  fruit = new Fruit();
  fruit.spawn();
}

function draw() {
  
  background(0);
  
  if (gameState == GameStates.PLAY) {
    head.update();
    fruit.display();
  }

  if (gameState == GameStates.STOP) {

    location.reload();

  }

}

function keyPressed() {
  
  head.handleKeys();
  
}